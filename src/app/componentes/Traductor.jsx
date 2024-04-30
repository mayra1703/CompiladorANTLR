'use client';
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { calcular } from '@/module/generador';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import generador2 from '@/module/generador2.js'
import Lector from './Lector';

const Traductor = ({ codeState=["", () => {}] }) => {
    const [inputText, setInputText] = codeState;
    const [inputTextCLang, setInputTextCLang] = useState("");
    const [expressions, setExpressions] = useState('');
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      readFile(file);
    }

    const readFile = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
          const fileContent = e.target.result;
          setInputTextCLang(fileContent);
      };
      reader.readAsText(file);
    };

    const inputChange = (e) => {
        const input = e.target.value;
    
        setResult(e.target.value);
        setInputText(input);
        setCode(e.target.value);
    };

    const analizador = () => {
        const error = document.getElementById('error');
        const contenedorImpresion = document.getElementById('contenedorImpresion');
        //contenedorImpresion.classList.remove('hidden'); // Eliminar hidden del contenedor
        error.innerHTML = '';
    
        const inputWithOutComments = inputText.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
        const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
        const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
        const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
        console.log(cleanInput);
    
        const calculatedResult = calcular(cleanInput);
        //setResult(calculatedResult.toString()); MOSTRAR EN TEXTAREA
        
      };


    let handleTraductor = () => {
        let result = generador2(inputTextCLang)
        setInputText(result)
    }

    let clean = () => {
        setInputText("")
        setInputTextCLang("")
    }

    const myTheme = createTheme({
        theme: 'dark',
        settings: {
          background: '#001233',
          backgroundImage: '',
          foreground: '#e9ecef',
          caret: '#5d00ff',
          selection: '#036dd626',
          selectionMatch: '#036dd626',
          lineHighlight: '#8a91991a',
          gutterBackground: '#001233',
          gutterForeground: '#fff',
        }
    })

  return (
    <main className='place-content-center h-screen bg-lightPurple'>

      <div className='flex flex-col bg-darkBlue h-20 text-center'>
        <p className='font-extrabold text-white p-2 text-3xl'>Moonlight Code</p>
        <p className='text-slate text-sm mb-2 font-extralight'>Agrega código en lenguaje Moonlight Code</p>
      </div>

      <section className='relative mx-7 text-center m-4'>
        <button type="button" aria-label={'Run'} onClick={analizador} id='analizar' className="text-white bg-darkYellow hover:bg-darkPurple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8" aria-hidden="true" fill="#ffffff">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </button>
      </section>

      <div className = 'flex m-5 items-center justify-center'>
        <div className = 'mt-5 flex'>
          <input onChange = {handleFileChange} className = 'text-lightYellow border p-2 rounded-md' type="file" />
        </div>
      </div>

      <section id='editores' className='flex-initial w-full h-80 p-1 flex'>
      <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-slate rounded-md bg-white'>
            <div id='encabezadoEditor' className="bg-white text-darkPurple text-sm p-2.5 text-center inline-flex items-center">
                <button type="button" aria-label='Clean' className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-5 mx-2" aria-hidden="true" fill="#1f2135">
                    <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                  </svg>
                </button>

                <button type="button" onClick={clean} aria-label='Clean' className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 mx-2" aria-hidden="true" fill="#1f2135">
                        <path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/>
                    </svg>
                </button>
                <span className="ml-2 font-bold text-darkBlue">Lenguaje C</span>
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-2rem)]">
                <CodeMirror
                    value={inputTextCLang}
                    theme={noctisLilac}
                    options={{
                        lineNumbers: true,
                        tabSize: 4,
                        mode: 'sweet-custom',
                    }}
                    style={{
                        borderRadius: '0.375rem',
                        width: '100%',
                        fontSize: '1rem',
                        fontWeight: '600',
                    }}
                    onChange={(e) => setInputTextCLang(e)}
                    id='compilador'
                />
            </div>
        </section>

        <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-darkBlue rounded-md bg-darkBlue'>
            <div className="bg-darkBlue text-white text-sm w-full p-2.5 text-center inline-flex items-center border-b border-lightPurple">
                <button type="button" onClick={handleTraductor} id='cambiarLenguaje' aria-label='Clean' className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3" aria-hidden="true" fill="#fadc71">
                    <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
                  </svg>
                </button>
                
                <span className="ml-2 font-semibold text-lightYellow">Traducción</span>
            </div>

            <div className="overflow-y-auto max-h-[calc(100%-2rem)]">
                <CodeMirror
                    value={inputText}
                    theme={myTheme}
                    options={{
                        lineNumbers: true,
                        tabSize: 4,
                        readOnly: true,
                    }}
                    style={{
                        borderRadius: '0.375rem',
                        width: '100%',
                        fontSize: '1rem',
                        fontWeight: '600',
                    }}
                    onChange={(text) => inputChange({target:{value: text}})}
                />
            </div>
        </section>
      </section>
      
    </main>
  )
}

export default Traductor