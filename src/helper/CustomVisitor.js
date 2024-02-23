import CompilatorParser from "../grammar/CompilatorParser.js";
import HashMap from 'hashmap';
import CompilatorVisitor from "../grammar/CompilatorVisitor.js";

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends CompilatorVisitor {

	constructor() {
		super();
		this.memory = new HashMap();
	}

	// Visit a parse tree produced by CompilatorParser#file.
	visitFile(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	// Visit a parse tree produced by CompilatorParser#start.
	visitStart(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#contenido.
	  visitContenido(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#declaracion.
	  visitDeclaracion(ctx) {
		const id = ctx.ID().getText();
		//const type = ctx.type.getText();
		let value = 0;
		const numCtx = ctx.NUM();
		
		if(numCtx !== null){
			value = parseInt(numCtx.getText());
		}

		const regexInicioLetra = /^[a-zA-Z]/;
		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea

		if(regexInicioLetra.test(id)){
			if (/[\+\-\*\/]/.test(id)) {
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" no puede contener operadores matemáticos. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else if(this.memory.has(id)){
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" ya ha sido declarado. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else{
				this.memory.set(id, value);
				console.log(`${id} = ${value}`);
			}
		}

		else{
			error.innerHTML += `Error en la línea ${lineNumber}: El identificador debe comenzar con una letra. <br>`;
			contenedorError.classList.remove('hidden');
		}

		return null;
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#type.
	  visitType(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
  
  
  }