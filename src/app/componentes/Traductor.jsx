'use client';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import { createTheme } from '@uiw/codemirror-themes';
import generador2 from '@/module/generador2.js';
import generador3 from '@/module/generador3.js';
import generador4 from '@/module/generador4.js';
import generador5 from '@/module/generador5.js';
import CodeMirror from '@uiw/react-codemirror';
import FileSaver from 'file-saver';
import { calcular } from '@/module/generador';
import ButtonChange from './ButtonChange';
import React, { useState } from 'react'

const Traductor = ({ codeState=["", () => {}] }) => {
    const [inputText, setInputText] = codeState;
    const [inputTextCLang, setInputTextCLang] = useState("")
    const [inputTextMoonlight, setInputTextMoonlight] = useState("")
    const [expressions, setExpressions] = useState('');
    const [selectedText, setSelectedText] = useState('Lenguaje C');
    const [selectedText2, setSelectedText2] = useState('Moonlight Code');
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


    // Funcion para traducir de C (Primer CodeMirror) a MoonlightCode
    let handleTraductor = () => {
      let result = generador2(inputTextCLang)
      setInputText(result)
      saveToTextFile(result, 'TranslationCToMoonlightCode.txt')
    }
    
    // Funcion para traducir de C (Primer CodeMirror) a Jasmin
    const handleTraductorJasmin = () => {
      let result = generador3(inputTextCLang);
      setInputText(result)
      saveToTextFile(result, 'TranslationCToJasmin.txt')
    }

    const handleMoonlightToC = () => {
      console.log("handleMoonlightToC");
      let result = generador4(inputTextMoonlight);
      setInputText(result)
      saveToTextFile(result, 'TranslationMoonlightCodeToC.txt')
    }

    const handleMoonlightToJasmin = () => {
      console.log("handleMoonlightToJasmin Bandera");
      let result = generador5(inputTextMoonlight);
      setInputText(result);
      saveToTextFile(result, 'TranslationMoonlightCodeToJasmin.txt')
    }

    let clean = () => {
        setInputText("")
        setInputTextCLang("")
        setInputTextMoonlight("")
    }

    const saveToTextFile = (translation, fileName) => {
      const blob = new Blob([translation], { type: 'text/plain;charset=utf-8' })
      FileSaver.saveAs(blob, fileName);
    };

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
    <main className='place-content-center items-center h-screen bg-lightPurple'>

      <div className='flex flex-col bg-darkBlue h-20 text-center'>
        <p className='font-extrabold text-white p-2 text-3xl'>Moonlight Code</p>
        <p className='text-slate text-sm mb-2 font-extralight'>Agrega código en lenguaje Moonlight Code</p>
      </div>

      <section className='relative mx-7 text-center m-4'>
        <button type="button" aria-label={'Run'} onClick={analizador} id='analizar' className="text-white bg-darkYellow hover:bg-darkPurple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8" aria-hidden="true" fill="#ffffff">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </button>
      </section>

      <ButtonChange SelectionChange={setSelectedText} SelectionChange2={setSelectedText2} handleTraductorJasmin={handleTraductorJasmin} handleMoonlightToC={handleMoonlightToC} handleMoonlightToJasmin={handleMoonlightToJasmin} handleTraductor={handleTraductor}/>

      <div className = 'flex m-5 items-center justify-center'>
        <div className = 'mt-5 flex'>
          <input onChange = {handleFileChange} className = 'text-lightYellow border p-2 rounded-md' type="file" />
        </div>
      </div>

      <section id='editores' className='flex-initial w-full h-80 p-1 flex'>
      <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-slate rounded-md bg-white'>
            <div id='encabezadoEditor' className="bg-white text-darkPurple text-sm p-2.5 text-center inline-flex items-center">
                <button type="button" onClick={clean} aria-label='Clean' className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5" aria-hidden="true" fill="#1f2135">
                        <path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/>
                    </svg>
                </button>
                <span className="ml-2 font-bold text-darkBlue">{selectedText}</span>
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-2rem)]">
                <CodeMirror
                    value={selectedText === 'Lenguaje C' ? inputTextCLang : inputTextMoonlight}
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
                    onChange={(value) => {
                      if (selectedText === 'Lenguaje C') {
                          setInputTextCLang(value);
                      } else {
                          setInputTextMoonlight(value);
                      }
                  }}
                    id='compilador'
                />
            </div>
        </section>

        <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-darkBlue rounded-md bg-darkBlue'>
            <div className="bg-darkBlue text-white text-sm w-full p-2.5 text-center inline-flex items-center border-b border-lightPurple">
                
                <span className="ml-2 font-semibold text-lightYellow">{selectedText2}</span>
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
                    onChange={(value) => setInputText(value)}
                />
            </div>
        </section>
      </section>
      
    </main>
  )
}

export default Traductor