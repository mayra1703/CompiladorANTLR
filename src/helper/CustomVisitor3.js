import CParser from '@/grammar2/CParser.js';
import HashMap from 'hashmap';
import CVisitor from '@/grammar2/CVisitor.js';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

// En vez de visitas, retornar las palabras cambiadas a C

export default class CustomVisitor3 extends CVisitor {

	constructor() {
		super();
        this.stackLimit = 1;
        this.localsLimit = 0;
        this.labelCounter = 0;
        this.variables = {};
		this.translatedCode = "";
	}

    variableExist(variable_name) {
        return !!this.variables[variable_name];
    }

    getVariableIndex(ID) {
        return this.variables[ID] ? this.variables[ID].index : -1;
    }

    getVariableValue(ID) {
        return this.variables[ID].value;
    }

    declare(ID, VALUE) {
        let isVariableDefined = this.variableExist(ID);
        if (!isVariableDefined) {
            if (VALUE != undefined) {
                this.variables[ID] = {index: this.localsLimit, value: VALUE};
                this.translatedCode += `\nistore_${this.localsLimit}\n`;
            }

            else {
                this.variables[ID] = {
                    index: this.localsLimit,
                    value: undefined,
                }
            }
        }

        else {
            const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: Declaracion de "${ID}" esta repetida. <br>`;
			contenedorError.classList.remove('hidden');
        }

        return ID;
    }

    generateLabel(label) {
        return label + this.labelCounter++;
    }

	// Visit a parse tree produced by CParser#file.
	visitFile(ctx) {
		this.visitChildren(ctx)
        console.log(this.variables);
		return this.translatedCode;
	  }
  
  
	  // Visit a parse tree produced by CParser#start.
	  visitStart(ctx) {
        this.visit(ctx.block());

        this.translatedCode += "\nreturn\n";
        this.translatedCode += ".end method";

        let header = `.class public PruebaJasmin
        .super java/lang/Object
        .method public static main([Ljava/lang/String;)V
        .limit stack ${this.stackLimit}
        ${this.localsLimit ? `.limit locals ${this.localsLimit}\n` : ""}`;

        this.translatedCode = header + this.translatedCode;
	  }
  
  
	  // Visit a parse tree produced by CParser#block.
	  visitBlock(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CParser#contenido.
	  visitContenido(ctx) {
		console.log("visitContenido");
		
        if(ctx.whileStatement()) {
            return this.visitChildren(ctx);
        }

        if (ctx.condicional()) {
            return this.visitChildren(ctx);
        }

		return this.visitChildren(ctx);
	  }
  
	  // Visit a parse tree produced by CParser#declaracion.
	  visitDeclaracion(ctx) {
		console.log("visitDeclaracion");
		const TYPE = ctx.TYPE().getText();
		let ID = ctx.ID().getText();
        const VARIABLE_PATTERN = /^[A-Za-z]([A-Za-z0-9-_]+)?/;
		const VALUE = ctx.expr() ? this.visit(ctx.expr()) : undefined;


		if (VARIABLE_PATTERN.test(ID)) {
            return this.declare(ID, VALUE);
        }

        else {
            const TYPE = ctx.TYPE.getText();
            const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: ID "${ID}" is not a valid identifier. <br>`;
			contenedorError.classList.remove('hidden');
        }

		return [TYPE, ID];
	  }
  
  
	  // Visit a parse tree produced by CParser#asignacion.
	  visitAsignacion(ctx) {
		console.log("visitAsignacion");
		let ID = ctx.ID().getText();
		let VALUE = this.visit(ctx.expr());
        const INDEX = this.getVariableIndex(ID);

        if (INDEX > -1) {
            this.variables[ID].value = VALUE;
            this.translatedCode += `\nistore_${INDEX}\n`;
        }
	  }

	  // Visit a parse tree produced by CParser#impresion.
	  visitImpresion(ctx) {
		console.log("visitImpresion");
		let content = this.visit(ctx.expr())
		this.translatedCode += `\n-> WHISPER (${content}) .`;

		return ctx.getText();
	  }
  
  
	  // Visit a parse tree produced by CParser#condicional.
	  visitCondicional(ctx) {
		this.visit(ctx.ifStatement())
		if(ctx.elseIfStatement()) this.visit(ctx.elseIfStatement())
		if(ctx.elseStatement()) this.visit(ctx.elseStatement())
	  }
  
  
	  // Visit a parse tree produced by CParser#ifStatement.
	  visitIfStatement(ctx) {
		console.log("visitIfStatement");
		let condition = this.visit(ctx.expr());
		
		this.translatedCode += `${this.isElseif() ? " CozyCondition" : "\nCozyCondition"}(${condition}){`;
		this.visit(ctx.contenido())
		this.translatedCode += `\n}`;

		return
	  }
  
  
	  // Visit a parse tree produced by CParser#elseIfStatement.
	  visitElseIfStatement(ctx) {
		console.log("visitElseIfStatement");
		this.translatedCode += `\nelse`;
		this.visit(ctx.ifStatement())
		return
	  }
  
  
	  // Visit a parse tree produced by CParser#elseStatement.
	  visitElseStatement(ctx) {
		console.log("visitElseStatement");
		this.translatedCode += `\nDreamElse{`;
		this.visit(ctx.contenido())
		this.translatedCode += `\n}`;
		return
	  }
  
	  
	  // Visit a parse tree produced by CParser#incremento.
	  visitIncremento(ctx) {
		console.log("visitIncremento");
		const id = ctx.ID().getText();

		this.translatedCode += `\n-> ${id}++`;

		return 
	  }

	  // Visit a parse tree produced by CParser#whileStatement.
	  visitWhileStatement(ctx) {
		console.log('visitWhileStatement');
		let condition = this.visit(ctx.expr());
		
		this.translatedCode += `\nDreamLoop(${condition}){`;
		this.visit(ctx.contenido())
		this.translatedCode += `\n}`;

		return
	  }

	  // Visit a parse tree produced by CParser#expr.
	  visitExpr(ctx) {
		let exprText = ctx.getText();

		exprText = exprText.replace(/\btrue\b/g, "peaceful").replace(/\bfalse\b/g, "chaotic");
		return exprText;
	  }
  
  }