import CompilatorParser from "../grammar/CompilatorParser.js";
import HashMap from 'hashmap';
import CompilatorVisitor from "../grammar/CompilatorVisitor.js";
import { experimental } from "../../next.config.js";

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends CompilatorVisitor {

	constructor() {
		super();
		this.memory = new HashMap();
		this.declaredIds = {};
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
		const mensaje = document.getElementById('mensajeImpresion');
    	const contenedorImpresion = document.getElementById('contenedorImpresion');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		const id = ctx.ID().getText();
		const exprText = ctx.expr() ? ctx.expr().getText() : '';

		if(!id){
			error.innerHTML += `Syntax error on line ${lineNumber}: Incomplete variable declaration "${id}". <br>`;
			contenedorError.classList.remove('hidden');
			return null;
		}

		let value = 0;

		if (ctx.expr()) {
			value = this.visit(ctx.expr());
			console.log(value);
		}
		
		const regexInicioLetra = /^[a-zA-Z]/;
		
		if(regexInicioLetra.test(id)){
			if (/[\+\-\*\/]/.test(id)) {
				error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${id}" can't do operations with undeclared ids. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else if(this.memory.has(id)){
				error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${id}" has already been declared. <br>`;
                contenedorError.classList.remove('hidden');
			}

			else if(id === exprText){
				error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${id}" has not been declared. <br>`;
				contenedorError.classList.remove('hidden');
			}

			else{
				
				this.memory.set(id, value);
				console.log(`${id} = ${value}`);
				mensaje.innerHTML += `${id} = ${value} <br>`
				contenedorImpresion.classList.remove('hidden');
				
			}
		}

		else{
			error.innerHTML += `Syntax error on line ${lineNumber}: The identifier must begin with a letter. <br>`;
			contenedorError.classList.remove('hidden');
		}

		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#invalidAssign.
	  visitInvalidAssign(ctx) {
		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		error.innerHTML += `Error on line ${lineNumber}: Invalid variable declaration. <br>`;
		contenedorError.classList.remove('hidden');
		
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