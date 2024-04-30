import React, {useState} from 'react'

function Lector() {
    //Declaracion de estados
  const [archivo, setArchivo] = useState();
  const [texto, setTexto] = useState([]);
  const [cantidad, setCantidad] = useState('Cantidad de caracteres encontrados: 0');
  const [mensaje, setMensaje] = useState();

  //Funcion para leer el archivo y analizar su contenido
  const leerArchivo = (e)=>{
    e.preventDefault();// Prevenir la recarga de la página por defecto

    //Si se ha seleccionado un archivo
    if(archivo){
      const lectorArchivo = new FileReader(); // Crea una nueva instancia de FileReader.
      lectorArchivo.readAsText(archivo);//Lee el contenido del archivo seleccionado como texto.

      //Funcion para obtener el contenido del archivo y mostrarlo en el DOM
      lectorArchivo.onload = function(){

        const data = lectorArchivo.result;//Obtener el contenido del archivo
        const nuevoContenido = data.replace(/\/\/[^\n\r]|\/\[\s\S]?\\/g, '');//Expresion regular para quitar comentarios simples y comentarios de bloque
        const contenidoFiltrado = nuevoContenido.match(/[01]+/g);//Expresion regular para filtrar secuencias de caracteres binarios '01' del contenido.
        const caracteresNoValidos = nuevoContenido.match(/[^01\s]/g);//Se buscan caracteres no válidos fuera de los comentarios.
              
        //Si se encuentran caracteres no validos
        if(caracteresNoValidos){
          //Se interrumpe el programama y muestra un mensaje de error con los caracteres no validos encontrados fuera de comentarios
          setTexto('');
          setCantidad('');
          setMensaje(`Error: El archivo contiene caracteres no válidos fuera de comentarios. ${caracteresNoValidos}`);
          return;
                  
        }
            
        else{
          // Si no se encuentran caracteres no válidos, se establece el texto filtrado, la cantidad de caracteres y un mensaje de éxito.
          setTexto(contenidoFiltrado.join('\n'))
          setCantidad(`Se encontraron ${contenidoFiltrado.length} caracteres`)
          setMensaje('Archivo leido correctamente')
        }
      }
    }
      
    else{
      setMensaje('Error'); // Si 'file' es falso, establece la variable de estado 'mensaje' en 'Error'.
    }
  }

  return (
    <div>
        <div className = 'flex m-5 items-center justify-center'>
            <div className = 'mt-5 flex'>
                <input onChange = {e => setArchivo(e.target.files[0])} className = 'text-lightYellow border p-2 rounded-md' type="file" />
            </div>
        </div>
    </div>
  )
}

export default Lector