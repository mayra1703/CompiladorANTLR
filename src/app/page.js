'use client'
import React, { useRef, useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { calcular } from '@/module/generador';
import traduccion from '@/module/generador2';
import { noctisLilac } from '@uiw/codemirror-themes-all';
import Traductor from './componentes/Traductor';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [expressions2, setExpressions2] = useState('');
  const [moonlight, setMoonlight] = useState("")
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const editorRef = useRef(null);

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
    const originalCode = expressions;
    setExpressions2(originalCode);
  };

  const analizadorC = () => {
    console.log('analizadorC');
    
    const error = document.getElementById('error');
    error.innerHTML = '';

    const inputWithOutComments = expressions.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
    const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
    const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
    console.log(cleanInput);

    const calculatedResult = cambiar(cleanInput);
    //setResult(calculatedResult.toString()); MOSTRAR EN TEXTAREA
    const originalCode = expressions;
    setExpressions2(originalCode);
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
    setExpressions2('');
    setResult('');
    error.innerHTML = '';
    contenedorError.classList.add('hidden'); // Agrega la clase hidden para ocultar el div si no hay error
  };

  return (
    <main className='place-content-center h-screen bg-lightPurple'>
      <Traductor codeState={[moonlight, setMoonlight]}/>
      
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
          <div className='rounded bg-white overflow-hidden hidden shadow-md shadow-darkPurple mx-4 my-32 lg:mx-64 lg:my-28 sm:mx-20 sm:my-28 fixed inset-28 h-60' id='contenedorImpresion' style={{ overflowY: 'auto' }}>
              <div id='encabezado' className='border border-darkPurple flex h-14 items-end justify-start bg-gradient-to-r from-darkBlue to-darkPurple'>
                <div className='flex justify-end'>
                  <button onClick={cerrar} className='ml-3 mb-3'>
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