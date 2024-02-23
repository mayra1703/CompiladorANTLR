'use client'
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { highlight, languages } from 'prismjs/components/prism-core';
import CodeMirror from '@uiw/react-codemirror';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { calcular } from '@/module/generador';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input = e.target.value;
    setResult(e.target.value);
    setExpressions(input);
  };
  
  
  const analizador = () => {
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

  const clearArea= ()=>{
    const error = document.getElementById('error');
    const contenedorError = document.getElementById('contenedorError');
    
    setExpressions('');
    setResult('');
    error.innerHTML = '';
    contenedorError.classList.add('hidden'); // Agrega la clase hidden para ocultar el div si no hay error
  };

  return (
    <main className='font-sans bg-sky-100 place-content-center'>

      <section className='text-blue-950 font-bold text-center m-4'>
        <h1 className='m-2 text-3xl font-bold text-brownPink'>Compilador ANTLR</h1>
        <p className='m-1 text-sm font-normal'>Ingresa una declaracion de variables</p>
      </section>

      <section className='relative h-44 mx-7'>
        <textarea className='resize-none rounded-md w-full h-full bg-slate text-md font-semibold p-4 bottom-0 right-0' placeholder='Structure' value={expressions}
        onChange={inputChange} id='compilador'></textarea>
        <CodeMirror
          value={expressions}
          options={{
            lineNumbers: true,
            mode: 'javascript',
            theme: 'default', // Puedes cambiar el tema según necesites
            tabSize: 4,
          }}
          onChange={inputChange}
          height='100px'
          id='compilador'></CodeMirror>
      </section>
    
      <section className='relative mx-7 text-right mt-6'>
        <button className='bg-darkRose rounded-md m-2 p-2 shadow-sm shadow-brownPink text-white font-bold' onClick={analizador}>Identificar</button>
        <button className='bg-darkRose rounded-md m-2 p-2 shadow-sm shadow-brownPink text-white font-bold' onClick={clearArea}>Limpiar</button>
      </section>

      <section className='h-44 mx-7 overflow-x-auto'>
        <SyntaxHighlighter language="plaintext" style={tomorrow} showLineNumbers contentEditable className='rounded-md bg-red'
          customStyle={{
            backgroundColor: "#7d4f50",
            opacity: "1",
          }}
          codeTagProps={{
            style: {
                color: "white",
            },
          }}>
            {result}
        </SyntaxHighlighter>
      </section>

      <section className='mx-4 mt-2'>
        <div className='flex justify-end'>
            <div className='w-96 rounded bg-lightRed text-red overflow-hidden shadow-md shadow-darkRose m-3 hidden' id='contenedorError'>
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
    </main>
  );
};

export default Page;