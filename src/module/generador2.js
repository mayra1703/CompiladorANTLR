import antlr4 from 'antlr4'

import CParser from '@/grammar2/CParser.js';
import CLexer from '@/grammar2/CLexer.js';

import CustomVisitor2 from '@/helper/CustomVisitor2.js';

// Clase para manejo de errores de sintaxis que ocurren durante el análisis léxico y sintáctico
class CustomErrorListener extends antlr4.error.ErrorListener {
    // Funcion para reconocer errores
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        /*
            # recognizer        : Objeto de reconocimiento que se está analizando en el momento
            # offendingSymbol   : El token que causó el error de sintaxis.
            # line              : Número de línea donde surgió el error.
            # column            : Columna donde ocurrió el error.
            # msg               : Mensaje de error que describe la naturaleza del problema.
            # e                 : La excepción asociada al error, si está disponible.
        */
        
        const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
        const typeWrong = offendingSymbol.text;
       
        if(msg.includes("no viable alternative at input")){
            error.innerHTML += `Incorrect data type "${typeWrong}" on line ${line} <br>`;
		    contenedorError.classList.remove('hidden');
        }

        else{
            error.innerHTML += `Syntax error on line ${line}: ${msg} <br>`;
            contenedorError.classList.remove('hidden');
            console.log(`Syntax error on line ${line}: ${msg}`);
            
            // Error que detiene el proceso
            // throw new Error(`Syntax error on line ${line}: ${msg}`);
        }

        // Limpiar el contenido del textarea después de un tiempo determinado (por ejemplo, 5 segundos)
        setTimeout(() => {
            error.innerHTML = '';
            // Remueve la clase después de limpiar el textarea
            contenedorError.classList.add('hidden');
        }, 6000); // 5000 milisegundos = 5 segundos
    }
}

export const cambiar = (entrada) => {
    const chars = new antlr4.InputStream(entrada);
    const lexer = new CLexer(chars)

    lexer.removeErrorListeners(); // Remover los listeners por defecto (No mostrarlos en consola)
    lexer.addErrorListener(new CustomErrorListener()); // Se crea un mensaje de error personalizado

    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new CParser(tokens)

    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    parser.buildParseTrees = true;
    const tree = parser.file();
    const visitor = new CustomVisitor2();
    //visitor.visitFile(tree);


    return visitor.visitFile(tree);
}


