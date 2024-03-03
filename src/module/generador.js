import antlr4 from 'antlr4'

import CompilatorParser from '../grammar/CompilatorParser.js';
import CompilatorLexer from '../grammar/CompilatorLexer.js';

import CustomVisitor from '../helper/CustomVisitor.js';
//import CalculadoraVisitor from '../grammar/CalculadoraVisitor.js'

class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');

        error.innerHTML += `Error de sintaxis en línea ${line}: ${msg} <br>`;
		contenedorError.classList.remove('hidden');
        console.log(`Error de sintaxis en línea ${line}: ${msg}`);
    }
}

export const calcular = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CompilatorLexer(chars)

    lexer.removeErrorListeners(); // Remover los listeners por defecto
    lexer.addErrorListener(new CustomErrorListener());

    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new CompilatorParser(tokens)

    parser.removeErrorListeners(); // Remover los listeners por defecto
    parser.addErrorListener(new CustomErrorListener());

    parser.buildParseTrees = true;
    const tree = parser.file();
    const visitor = new CustomVisitor();
    //visitor.visitFile(tree);

    return visitor.visitFile(tree);
}


