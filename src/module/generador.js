import antlr4 from 'antlr4'

import CompilatorParser from '../grammar/CompilatorParser.js';
import CompilatorLexer from '../grammar/CompilatorLexer.js';

import CustomVisitor from '../helper/CustomVisitor.js';

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

        if(msg.includes("no viable alternative at input")){
            const typeWrong = offendingSymbol.text;
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
    }
}

export const calcular = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CompilatorLexer(chars)

    lexer.removeErrorListeners(); // Remover los listeners por defecto (No mostrarlos en consola)
    lexer.addErrorListener(new CustomErrorListener()); // Se crea un mensaje de error personalizado

    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new CompilatorParser(tokens)

    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    parser.buildParseTrees = true;
    const tree = parser.file();
    const visitor = new CustomVisitor();
    //visitor.visitFile(tree);

    return visitor.visitFile(tree);
}


