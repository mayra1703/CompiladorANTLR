import CompilatorParser from "../grammar/CompilatorParser.js";
import HashMap from 'hashmap';
import CompilatorVisitor from "../grammar/CompilatorVisitor.js";

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends CompilatorVisitor {

	constructor() {
		super();
		this.memory = new HashMap();
		this.declaredIds = {
			relaxint: [],
			nightchar: [],
			skyfloat: [],
		};
		this.max_loop_time = 500;
	}

	// HELPER METHODS
	variableExist(variableName) {
		let isVariableDefined = false;
		for (let key in this.declaredIds) {
			if (isVariableDefined) {
				break;
			} else {
				isVariableDefined = !!this.declaredIds[key].find(
					(variable) => variable.id === variableName
				);
			}
		}

		return isVariableDefined;
	}

	getVariableType(variableName) {
		let variableType = undefined;

		for (let key in this.declaredIds) {
			for (let variable of this.declaredIds[key]) {
				if (variable.id == variableName) {
					variableType = key;
					break;
				}
			}

			if (variableType) {
				break;
			}
		}

		return variableType;
	}

	getVariableValue(variableName, variableType) {
		for (let variable of this.declaredIds[variableType]) {
			if (variable.id == variableName) {
				return variable.value;
			}
		}

		return 0;
	}

	assertTypeWithValue(type, value) {
		let isValid = false;
		switch (type) {
			case "relaxint":
				isValid = /(^[0-9]+$)|(^-[0-9]+$)/.test(value);
				break;

			case "skyfloat":
				isValid = /[0-9]+\.[0-9]+/.test(value);
				break;

			case "nightchar":
				isValid = /^[a-zA-Z]$/.test(value);
				break;

			default:
				const error = document.getElementById('error');
				const contenedorError = document.getElementById('contenedorError');
				const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

				error.innerHTML += `Syntax error on line ${lineNumber}: El tipo de dato "${type}" no existe. <br>`;
				contenedorError.classList.remove('hidden');
				break;
		}

		return isValid;
	}

	// Método para la declaración de una variable sin asignación
	declare(ctx){
		const id = ctx.ID().getText();
		const type = ctx.TYPE().getText();
		const value = 0;

		if (!this.variableExist(id)) {
			this.memory.set(id, 0); // Almacenar la variable en la memoria con valor nulo
			console.log(`${type} ${id} = ${value} `);
			this.declaredIds[type].push({ id: id, value: 0 }); // Agregar el ID al objeto declaredIds con valor nulo
		}
		
		else {
			const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: Error id declare. <br>`;
			contenedorError.classList.remove('hidden');
		}

		return [type, id];
	}

	// Método para la declaración de una variable con asignación
	declareAndAssign(ctx) {
		const id = ctx.ID().getText();
		const type = ctx.TYPE().getText();
		const value = this.visit(ctx.expr());

		if (!this.variableExist(id)) {
			this.memory.set(id, value); // Almacenar la variable en la memoria con el valor asignado
			console.log(`${type} ${id} = ${value}`);
			this.declaredIds[type].push({ id: id, value: value }); // Agregar el ID al objeto declaredIds con el valor asignado
		} else {
			const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: Error id declareAndAssign. <br>`;
			contenedorError.classList.remove('hidden');
		}

		return [type, id];
	}

	  // Visit a parse tree produced by CompilatorParser#file.
	  visitFile(ctx) {
		console.log(this.declaredIds);
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
		console.log("visitContenido");

		if(ctx.whileStatement()){
			return this.visitChildren(ctx)
		}

		if(ctx.condicional()){
			return this.visitChildren(ctx);
		}
		
		return this.visitChildren(ctx);
	  }
  
	  // Visit a parse tree produced by CompilatorParser#declaracion.
	  visitDeclaracion(ctx) {
		console.log("visitDeclaracion");
		
		let id = ctx.ID().getText();

		let VARIABLE_PATTERN = /^[A-Za-z]([A-Za-z0-9-_]+)?/;
		if (VARIABLE_PATTERN.test(id)) {
			let result;
			if (ctx.IGUAL()) {
				result = this.declareAndAssign(ctx);
			} else {
				result = this.declare(ctx);
			}

			return result;
		} else {
			const TYPE = ctx.TYPE().getText();
			const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: ID "${id}" is not a valid identifier. <br>`;
			contenedorError.classList.remove('hidden');

			return [TYPE, id];
		}
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

	  // Visit a parse tree produced by CompilatorParser#showExpr.
	  visitShowExpr(ctx) {
		console.log("visitShowExpr");
		
		const value = this.visit(ctx.expr());

		const contenedorImpresion = document.getElementById('contenedorImpresion');
		const mensaje = document.getElementById('mensajeImpresion');
		contenedorImpresion.classList.remove('hidden');
		mensaje.innerHTML += `-> ${value} <br>`;
		

		/*
		// Obtenemos la cadena de formato de la expresión (si existe)
		let formatString = "";

		if (ctx.expr().length > 0) {
			formatString = ctx.expr(0).getText().slice(1, -1); // Eliminamos las comillas de la cadena
		}
	
		// Inicializamos la cadena de resultado con la cadena de formato
		let resultado = formatString;
	
		// Reemplazamos "%d" por el valor del ID o la expresión en las expresiones restantes
		for (let i = 1; i < ctx.expr().length; i++) {
			const value = this.visit(ctx.expr(i)); // Obtenemos el valor de la expresión
			resultado = resultado.replace(/%d/, value); // Reemplazamos "%d" por el valor de la expresión
		}
	
		const contenedorImpresion = document.getElementById('contenedorImpresion');
		const mensaje = document.getElementById('mensajeImpresion');
		contenedorImpresion.classList.remove('hidden');
		mensaje.innerHTML += `-> ${resultado} <br>`;
 		*/
		return null;
	  }

	  // Visit a parse tree produced by CompilatorParser#showString.
	  visitShowString(ctx) {
		console.log("visitShowString");
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
			this.visit(ctx.contenido())
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
    	this.visit(ctx.contenido());
		return null
	  }

	  // Visit a parse tree produced by CompilatorParser#incremento.
	  visitIncremento(ctx) {
		console.log("visitIncremento");
		const id = ctx.ID().getText();
		const type = this.getVariableType(id);

		console.log(ctx.PLUS().length > 0);
		if (type) {
			let variable = this.declaredIds[type].find(
				(variable) => variable.id === id
			);
			if (ctx.PLUS().length > 0) {
				variable.value = variable.value + 1;
			} else {
				variable.value = variable.value - 1;
			}
		} else {
			const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: Variable "${id}" is not defined. <br>`;
			contenedorError.classList.remove('hidden');

		}

		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#whileStatement.
	  visitWhileStatement(ctx) {
		console.log("visitWhileStatement");

		if(!ctx.expr()){
			return false;
		}

		let condicion = this.visit(ctx.expr());
		let time = performance.now()

		while(condicion){
			this.visit(ctx.contenido());
			condicion = this.visit(ctx.expr());

			if(performance.now() - time > this.max_loop_time){
				const error = document.getElementById('error');
				const contenedorError = document.getElementById('contenedorError');
				const lineNumber = ctx.start.line;
				error.innerHTML += `Error on line ${lineNumber}: Posible infinite loop detected, stopping loop... <br>`;
				contenedorError.classList.remove('hidden');
				break; 
			}
		}
		return condicion;
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

		console.log(ctx.expr())
		
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
  
	  visitValueAsChar(ctx) {
		console.log("visitValueAsChar");
		return ctx.getText();
	  }

	  // Visit a parse tree produced by CompilatorParser#num.
	  visitNum(ctx) {
		console.log("visitNum");
		return Number(ctx.getText())
	  }
  
	  // Visit a parse tree produced by CompilatorParser#arithmetic.
	  visitArithmetic(ctx) {
		console.log("visitArithmetic");
		const operation = this.visitChildren(ctx);
		let simbolo = ctx.operation.type;

		switch(simbolo){
			case CompilatorParser.MULT:
				return operation[0] * operation[2];

			case CompilatorParser.DIV:
				return operation[0] / operation[2];

			case CompilatorParser.PLUS:
				return operation[0] + operation[2];

			case CompilatorParser.MINUS:
				return operation[0] - operation[2];

			case CompilatorParser.MOD:
            	return operation[0] % operation[2];
		}
		
	  }

  
	  // Visit a parse tree produced by CompilatorParser#id.
	  visitId(ctx) {
		console.log("visitId");
		const id = ctx.ID().getText();

		if (this.variableExist(id)) {
			const type = this.getVariableType(id);
			return this.getVariableValue(id, type);
		}

		const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line;
		error.innerHTML += `Error on line ${lineNumber}: Variable "${id}" is not defined. <br>`;
		contenedorError.classList.remove('hidden');
		//if(this.memory.has(id)) return this.memory.get(id);
		return 0;
	  }
  
  }