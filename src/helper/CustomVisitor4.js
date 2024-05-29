import CompilatorParser from "../grammar/CompilatorParser.js";
import MoonlightToCParser from "@/grammar3/MoonlightToCParser.js";
import MoonlightToCVisitor from "@/grammar3/MoonlightToCVisitor.js";
import HashMap from 'hashmap';
import CompilatorVisitor from "../grammar/CompilatorVisitor.js";

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor4 extends MoonlightToCVisitor {

	constructor() {
		super();
		this.translatedCode = "";
	}

    translateType(type){
		switch(type){
			case 'relaxint':
				return 'int';

			case 'skyfloat':
				return 'float';

			case 'nightchar':
				return 'char';

			default:
				return '';
		}
	}

    isElseif(){
		let state = this.translatedCode
		let len = this.translatedCode.length

		return 'else' == state[len-4] + state[len-3] + state[len-2] + state[len-1]
	}

	  // Visit a parse tree produced by CompilatorParser#file.
	  visitFile(ctx) {
        this.visitChildren(ctx)
        //console.log("Esta es una prueba de Jasmin");
		return this.translatedCode;

	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#start.
	  visitStart(ctx) {
		this.translatedCode += "void main() {\n";
		this.visit(ctx.block());
		this.translatedCode += "\n}";
		return;
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

        const TYPE = ctx.TYPE().getText();
		let ID = ctx.ID() ? ctx.ID().getText() : ctx.id.text;

        if (ctx.IGUAL()) {
            let VALUE = this.visit(ctx.expr());
            this.translatedCode += `\n${this.translateType(
				TYPE
			)} ${ID} = ${VALUE} ;\n`;
        }

        else {
            this.translatedCode += `\n${this.translateType(TYPE)} ${ID} ;\n`;
        }
		
        return;
	  }
  
  	  // Visit a parse tree produced by CompilatorParser#asignacion.
	  visitAsignacion(ctx) {
		console.log("visitAsignacion");
		let ID = ctx.ID() ? ctx.ID().getText() : "";
		let VALUE = this.visit(ctx.expr());
		this.translatedCode += `\n${ID} = ${VALUE} ;`;

		return;
	  }

	  // Visit a parse tree produced by CompilatorParser#showExpr.
	  visitShowExpr(ctx) {
		console.log("visitShowExpr");
        let content = this.visit(ctx.expr())
		this.translatedCode += `printf(${content});\n`;
		
		return ctx.getText();
	  }

	  // Visit a parse tree produced by CompilatorParser#condicional.
	  visitCondicional(ctx) {
		console.log("visitCondicional");
        this.visit(ctx.ifStatement())
		if(ctx.elseIfStatement()) this.visit(ctx.elseIfStatement())
		if(ctx.elseStatement()) this.visit(ctx.elseStatement())
	  }
	  
	  // Visit a parse tree produced by CompilatorParser#ifStatement.
	  visitIfStatement(ctx) {
		console.log('Visitando IfStatement');

        let condition = this.visit(ctx.expr());
		
		this.translatedCode += `${this.isElseif() ? " if" : "\nif"}(${condition}){\n`;
		this.visit(ctx.contenido())
		this.translatedCode += `}\n`;

		return
	  }

	  // Visit a parse tree produced by CompilatorParser#elseIfStatement.
	  visitElseIfStatement(ctx) {
		console.log('Visitando ElseIfStatement');

		this.translatedCode += `\nelse`;
		this.visit(ctx.ifStatement())
		return
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#elseStatement.
	  visitElseStatement(ctx) {
		console.log('Visitando ElseStatement');

    	this.translatedCode += `\nelse {\n`;
		this.visit(ctx.contenido())
		this.translatedCode += `}\n`;
		return
	  }

	  // Visit a parse tree produced by CompilatorParser#incremento.
	  visitIncremento(ctx) {
		console.log("visitIncremento");
		this.translatedCode += `${ctx.ID().getText()}${ctx.PLUS() ? '++' : '--'};\n`;
        return null;
	  }
  
  
	  // Visit a parse tree produced by CompilatorParser#whileStatement.
	  visitWhileStatement(ctx) {
		console.log("visitWhileStatement");

        let condition = this.visit(ctx.expr());
		
		this.translatedCode += `\nwhile(${condition}){`;
		this.visit(ctx.contenido())
		this.translatedCode += `\n}`;

		return
	  }

      // Visit a parse tree produced by MoonlightToCParser#expr.
	  visitExpr(ctx) {
        let exprText = ctx.getText();
		console.log(exprText);
			
		exprText = exprText.replace(/\bpeaceful\b/g, "true").replace(/\bchaotic\b/g, "false");
		return exprText;
      }
  
  }