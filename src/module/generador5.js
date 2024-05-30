//! Generador de Moonlight Code a Jasmin
import antlr4 from 'antlr4'

import CompilatorParser from '@/grammar/CompilatorParser';
import CompilatorLexer from '@/grammar/CompilatorLexer';
import MoonlightToJasminParser from '@/grammar4/MoonlightToJasminParser';
import MoonlightToJasminLexer from '@/grammar4/MoonlightToJasminLexer';

import CustomVisitor5 from '@/helper/CustomVisitor5.js';

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

let traduccion = (input) => {
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
    const visitor = new CustomVisitor5();
    return visitor.visitFile(tree);
};

export default traduccion;