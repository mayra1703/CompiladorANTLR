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
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		const id = ctx.ID().getText();

		let valueToCheck = ctx.expr() ? ctx.expr().getText() : null;

		let value = 0;

		if (ctx.expr()) {
			value = this.visit(ctx.expr());
		}
		
		// Validar si el identificador comienza con una letra
        if (!/^[a-zA-Z]/.test(id)) {
            error.innerHTML += `Syntax error on line ${lineNumber}: El identificador "${id}" debe comenzar con una letra. <br>`;
			contenedorError.classList.remove('hidden');
			return null;
        }

		if(!id){
			error.innerHTML += `Syntax error on line ${lineNumber}: Incomplete variable declaration "${id}". <br>`;
			contenedorError.classList.remove('hidden');
			return null;
		}

		// Validar si el identificador contiene operadores
        if (/[\+\-\\/]/.test(id)) {
			error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${value}" no debe contener operadores. <br>`;
			contenedorError.classList.remove('hidden');
        }

		if(this.memory.has(id)){
			error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${id}" has already been declared. <br>`;
			contenedorError.classList.remove('hidden');
			
		}

		else{
			// Verificar si la expresión es null
			if (valueToCheck !== null && !this.memory.has(valueToCheck) && /^[a-zA-Z]+$/.test(valueToCheck)) {
				
				error.innerHTML += `Syntax error on line ${lineNumber}: The identifier "${valueToCheck}" has not been declared. <br>`;
				contenedorError.classList.remove('hidden');
				return null
			}

			else{
				this.memory.set(id, value);
				console.log(`${id} = ${value}`);
			}
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

	  // Visit a parse tree produced by CompilatorParser#showExpr.
	  visitShowExpr(ctx) {
		const exprText = ctx.expr().getText();
		const identifiers = exprText.match(/[a-zA-Z]+/g); // Extraer identificadores de la expresión
		let allIdentifiersValid = true; // Bandera para verificar que todos los ids existen

		// Verificar si todos los identificadores están en la memoria
		if (identifiers) {
			for (const id of identifiers) {
				if (!this.memory.has(id)) {
					allIdentifiersValid = false;
					const error = document.getElementById('error');
					const contenedorError = document.getElementById('contenedorError');
					const lineNumber = ctx.start.line;
					error.innerHTML += `Error on line ${lineNumber}: Variable "${id}" not found. <br>`;
					contenedorError.classList.remove('hidden');
					break; // Detener el bucle si se encuentra un identificador no válido
				}
			}
		}

		// Si todos los identificadores son válidos, mostrar el mensaje de impresión
		if (allIdentifiersValid) {
			let value = this.visit(ctx.expr());
			const contenedorImpresion = document.getElementById('contenedorImpresion');
			const mensaje = document.getElementById('mensajeImpresion');
			contenedorImpresion.classList.remove('hidden');
			mensaje.innerHTML += `-> ${exprText} = ${value} <br>`;
		}

		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#ifStatement.
	  visitIfStatement(ctx) {
		console.log('Visitando IfStatement');
		let conditionResult = this.visit(ctx.condition())

		if(conditionResult !== null){
			if(conditionResult){
				return this.visit(ctx.statement(0));
			}
	
			else if(ctx.ELSE()){
				return this.visit(ctx.statement(1));
			}
		}

		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#condition.
	  visitCondition(ctx) {
		console.log('Visitando visitCondition');
		console.log(this.visitChildren(ctx));
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		const firstVal = this.visit(ctx.expr(0));
		const secondVal = this.visit(ctx.expr(1));
		const firstValText = ctx.expr(0).getText();
		const secondValText = ctx.expr(1).getText();

		let operator = ctx.operator.text;
		let result;

		// Verificar si los valores de las expresiones son identificadores y si están declarados en la memoria
		if (!this.memory.has(firstValText)) {
			error.innerHTML += `Syntax error on line ${lineNumber}: Identifier '${firstValText}' not found. Skipping evaluation. <br>`;
			contenedorError.classList.remove('hidden');
			return null;
		}
		  
		else if (!this.memory.has(secondValText)) {
			error.innerHTML += `Syntax error on line ${lineNumber}: Identifier '${secondValText}' not found. Skipping evaluation. <br>`;
			contenedorError.classList.remove('hidden');
			return null;
		}

		else{
			switch(operator){
				case '>':
					result = firstVal > secondVal;
					break;
	
				case '<':
					result = firstVal < secondVal;
					break;
	
				case '>=':
					result = firstVal >= secondVal;
					break;
	
				case '<=':
					result = firstVal <= secondVal;
					break;
				
				case '==':
					result = firstVal === secondVal;
					break;
	
				case '!=':
					result = firstVal !== secondVal;
					break;
					
				default:
					result = false;
					break;
			}
		}
		
		return result;
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#statement.
	  visitStatement(ctx) {
		return this.visitChildren(ctx);
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