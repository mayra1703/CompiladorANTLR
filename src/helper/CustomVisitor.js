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

  	  // Visit a parse tree produced by CompilatorParser#validAssign.
	  visitValidAssign(ctx) {
		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		const id = ctx.ID().getText();

		if(!id){
			error.innerHTML += `Error en la línea ${lineNumber}: Declracacion de variable incompleta "${id}". <br>`;
			contenedorError.classList.remove('hidden');
			return null;
		}

		let value = 0;

		if (ctx.expr()) {
			value = this.visit(ctx.expr());
		}
		
		const regexInicioLetra = /^[a-zA-Z]/;
		
		if(regexInicioLetra.test(id)){
			if (/[\+\-\*\/]/.test(id)) {
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" no puede hacer operaciones con ids no declarados. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else if(this.memory.has(id)){
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" ya ha sido declarado. <br>`;
                contenedorError.classList.remove('hidden');
			}

			else if(id === null){
				error.innerHTML += `Error en la línea ${lineNumber}: No se declaro ningun identificador. <br>`;
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

	  // Visit a parse tree produced by CompilatorParser#invalidAssign.
	  visitInvalidAssign(ctx) {
		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		error.innerHTML += `Error en la línea ${lineNumber}: Declaración de variable invalida. <br>`;
		contenedorError.classList.remove('hidden');

		return null;
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#declaracion.
	  visitDeclaracion(ctx) {
		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		const id = ctx.ID(0) ? ctx.ID(0).getText() : null; //ctx.ID(0) se refiere al primer identificador
		let value = 0;
		const exprCtx = ctx.expr();
		
		if(exprCtx !== null){
			value = parseInt(exprCtx.getText());
		}
		
		const regexInicioLetra = /^[a-zA-Z]/;
		
		if(regexInicioLetra.test(id)){
			if (/[\+\-\*\/]/.test(id)) {
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" no puede hacer operaciones con ids no declarados. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else if(this.memory.has(id)){
				error.innerHTML += `Error en la línea ${lineNumber}: El identificador "${id}" ya ha sido declarado. <br>`;
                contenedorError.classList.remove('hidden');
			}

			else if(id === null){
				error.innerHTML += `Error en la línea ${lineNumber}: No se declaro ningun identificador. <br>`;
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


	  // Visit a parse tree produced by CompilatorParser#parentesis.
	  visitParentesis(ctx) {
		return this.visit(ctx.expr());
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#multidiv.
	  visitMultidiv(ctx) {
		const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompilatorParser.TIMES) return left * right ;
		return Math.floor(left / right);
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#masmenos.
	  visitMasmenos(ctx) {
		const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompilatorParser.PLUS) return left + right;
		return left - right;
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#impmulti.
	  visitImpmulti(ctx) {
		let results = this.visitChildren(ctx);
		return results[0] * results[1];
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#num.
	  visitNum(ctx) {
		return parseInt(ctx.NUM().getText());
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#id.
	  visitId(ctx) {
		const id = ctx.ID().getText();
		if(this.memory.has(id)) return this.memory.get(id);
		return 0;
	  }
  
  
  
  }