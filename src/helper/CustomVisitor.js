import CompilatorParser from "../grammar/CompilatorParser.js";
import HashMap from 'hashmap';
import CompilatorVisitor from "../grammar/CompilatorVisitor.js";

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
  
      // Visit a parse tree produced by CompilatorParser#block.
	  visitBlock(ctx) {
		return this.visitChildren(ctx);
	  }

	  // Visit a parse tree produced by CompilatorParser#contenido.
	  visitContenido(ctx) {
		return this.visitChildren(ctx);
	  }
  
	  // Visit a parse tree produced by CompilatorParser#asignacion.
	  visitAsignacion(ctx) {
		console.log("visitAsignacion");
		const id = ctx.ID().getText();
		const expr = this.visit(ctx.expr());

		this.memory.set(id, expr);
		console.log(`Asignación: ${id} = ${expr}`);
        return;
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
			mensaje.innerHTML += `-> ${value} <br>`;
		}

		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#showString.
	  visitShowString(ctx) {
		const string = ctx.STARSTRING().getText();

		const contenedorImpresion = document.getElementById('contenedorImpresion');
		const mensaje = document.getElementById('mensajeImpresion');
		contenedorImpresion.classList.remove('hidden');
		mensaje.innerHTML += `-> ${string} <br>`;

		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#condicional.
	  visitCondicional(ctx) {
		console.log("visitCondicional");
		let isIfTrue = this.visit(ctx.ifStatement())

		if(!isIfTrue){
			const elseif = ctx.elseIfStatement();
			let isElseifTrue = false;

			for(let i=0 ; i<elseif.length ; i++){
				isElseifTrue = this.visit(elseif[i]);
				if(isElseifTrue){
					break;
				}
			}

			if(!isElseifTrue && ctx.elseStatement()){
				this.visit(ctx.elseStatement());
			}
		}
		return null;
	  }
	  
	  // Visit a parse tree produced by CompilatorParser#ifStatement.
	  visitIfStatement(ctx) {
		console.log('Visitando IfStatement');
		if(!ctx.expr()){
			return false
		}

		let conditionResult = this.visit(ctx.expr())
		if (conditionResult){
			this.visit(ctx.block())
		}

		return conditionResult
	  }

	  // Visit a parse tree produced by CompilatorParser#elseIfStatement.
	  visitElseIfStatement(ctx) {
		console.log('Visitando ElseIfStatement');
		return this.visit(ctx.ifStatement());
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#elseStatement.
	  visitElseStatement(ctx) {
		console.log('Visitando ElseStatement');
    	this.visit(ctx.block());
		return null
	  }


	  // Visit a parse tree produced by CompilatorParser#parentesis.
	  visitParentesis(ctx) {
		console.log("visitParentesis");
		let visit = this.visitChildren(ctx);
		return visit[1];
	  }
	  

	  // Visit a parse tree produced by CompilatorParser#condition.
	  visitCondition(ctx) {
		console.log('Visitando visitCondition');
		let [firstVal, secondVal] = this.visit(ctx.expr());
		let operator = ctx.cond_value.text;
		console.log(firstVal);
		console.log(operator);
		console.log(secondVal);
		let result;

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

			case '&&':
				result = firstVal && secondVal;
				break;

			case '||':
				result = firstVal || secondVal;
				break;

			case 'peaceful':
				return true

			case 'chaotic':
				return false
					
			default:
				return false
		}
		return result;
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
  

	  // Visit a parse tree produced by CompilatorParser#multidiv.
	  visitMultidiv(ctx) {
		const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompilatorParser.MULT) return left * right ;
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

  
	  // Visit a parse tree produced by CompilatorParser#id.
	  visitId(ctx) {
		const id = ctx.ID().getText();
		if(this.memory.has(id)) return this.memory.get(id);
		return 0;
	  }
  
  }