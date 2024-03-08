'use client'
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';import { calcular } from '@/module/generador';
import { noctisLilac } from '@uiw/codemirror-themes-all';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input = e.target.value;
    setResult(e.target.value);
    setExpressions(input);
    setCode(e.target.value);
  };
  
  const analizador = () => {
    const error = document.getElementById('error');
    const contenedorImpresion = document.getElementById('contenedorImpresion');
    //contenedorImpresion.classList.remove('hidden'); // Eliminar hidden del contenedor
    error.innerHTML = '';

    const inputWithOutComments = expressions.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
    const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
    const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
    console.log(cleanInput);

    const calculatedResult = calcular(cleanInput);
    //setResult(calculatedResult.toString()); MOSTRAR EN TEXTAREA

  };
  
  const error = ()=> {
    const error = document.getElementById('error');
    const contenedorError = document.getElementById('contenedorError');
    contenedorError.classList.add('hidden'); // Agrega la clase hidden para ocultar el div si no hay error
    error.innerHTML = '';
  }

  const cerrar = ()=> {
    const mensaje = document.getElementById('mensajeImpresion');
    const contenedorImpresion = document.getElementById('contenedorImpresion');
    contenedorImpresion.classList.add('hidden'); // Agrega la clase hidden para ocultar el div si no hay error
    mensaje.innerHTML = '';
  }

  const clearArea= ()=>{
    const error = document.getElementById('error');
    const contenedorError = document.getElementById('contenedorError');
    
    setExpressions('');
    setResult('');
    error.innerHTML = '';
    contenedorError.classList.add('hidden'); // Agrega la clase hidden para ocultar el div si no hay error
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
    <main className='place-content-center h-screen bg-lightPurple'>

      <div className='flex flex-col bg-darkBlue h-20 text-center'>
        <p className='font-extrabold text-white p-2 text-3xl'>Compilador ANTLR</p>
        <p className='text-slate text-sm mb-2 font-extralight'>Agrega código en lenguaje SweetCode</p>
      </div>

      <section className='relative mx-7 text-center m-4'>
        <button type="button" aria-label={'Run'} onClick={analizador} className="text-white bg-darkYellow hover:bg-darkPurple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8" aria-hidden="true" fill="#ffffff">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </button>
      </section>

      <section id='editores' className='flex-initial w-full h-80 p-1 flex'>
        <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-slate rounded-md bg-white'>
        
          <div className="bg-white text-darkPurple text-sm p-2.5 text-center inline-flex items-center">
            <button type="button" onClick={clearArea} aria-label='Clean' className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5" aria-hidden="true" fill="#1f2135">
                <path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/>
              </svg>
            </button>
          </div>

          <CodeMirror
            value={expressions}
            theme={noctisLilac}
            options={{
              lineNumbers: true, // Puedes cambiar el tema según necesites
              tabSize: 4,
            }}
            style={{
              resize: 'none',
              borderRadius: '0.375rem',
              width: '100%',
              height: '100%',
              fontSize: '1rem',
              fontWeight: '600',
            }}
            onChange={(text) => inputChange({target:{value: text}})}
            id='compilador'>
              
          </CodeMirror>
        </section>

        <section className='relative h-full w-1/2 mx-4 my-2 overflow-hidden border border-darkBlue rounded-md bg-darkBlue'>
          <div className="bg-darkBlue text-white text-sm w-full p-2.5 text-center inline-flex items-center border-b border-lightPurple">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3" aria-hidden="true" fill="#fadc71">
              <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
            </svg>
            <span className="ml-2 font-semibold text-lightYellow">Traducción</span>
          </div>

          <CodeMirror
          value={expressions}
          theme={myTheme}
          options={{
            lineNumbers: true, // Puedes cambiar el tema según necesites
            tabSize: 4,
            readOnly: true,
          }}
          style={{
            resize: 'none',
            borderRadius: '0.375rem',
            width: '100%',
            height: '100%',
            fontSize: '1rem',
            fontWeight: '600',
          }}
          ></CodeMirror>
        </section>
      </section>
      
      <section className='mx-2 mt-6'>
        <div className='flex justify-end'>
            <div className='w-96 rounded bg-darkPurple text-white overflow-hidden shadow-md shadow-darkPurple m-3 hidden' id='contenedorError'>
              <div className='flex'>
                <div className='flex items-center gap-4 py-4 px-1'>
                  <div className='shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#cb1b16'className='w-9 m-2'>
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                    </svg>
                  </div>

                  <div className='space-y-1 border-r'>
                    <p className='font-bold capitalize text-lg'>Error</p>
                    <p className='text-sm mr-4 text-justify' id='error' value=''> </p>
                  </div>

                  <div className='flex cursor-pointer items-center h-full'>
                    <button className='h-full' onClick={error}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#cb1b16'className='h-6 pr-4 hover:fill-darkRed'>
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='flex justify-center'>
            <div className='rounded bg-claro overflow-hidden shadow-md shadow-darkPurple mx-4 my-32 lg:mx-64 lg:my-28 sm:mx-20 sm:my-28 fixed inset-28 h-60' id='contenedorImpresion'>
              
              <div id='encabezado' className='border border-darkPurple flex h-14 items-end justify-start bg-gradient-to-r from-darkBlue to-darkPurple'>
                  <div className='flex justify-end'>
                    <button onClick={cerrar} className=' ml-3 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#cc444b'className='w-5 mr-2'>
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                    </svg>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#f7b538'className='w-5 mr-2 mb-3'>
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#73a580'className='w-5 mb-3'>
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                    </svg>
                  </div>
              </div>

              <div id='impresion'>
                <p className='text-md text-darkPurple m-5 text-justify font-semibold' id='mensajeImpresion'></p>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default Page;