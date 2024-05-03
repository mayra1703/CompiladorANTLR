import CParser from '@/grammar2/CParser.js';
import HashMap from 'hashmap';
import CVisitor from '@/grammar2/CVisitor.js';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

// En vez de visitas, retornar las palabras cambiadas a C

export default class CustomVisitor2 extends CVisitor {

	constructor() {
		super();
		this.translatedCode = "";
	}

	translateType(type){
		switch(type){
			case 'int':
				return 'relaxint';

			case 'float':
				return 'skyfloat';

			case 'char':
				return 'nightchar';

			default:
				return '';
		}
	}

	isElseif(){
		let state = this.translatedCode
		let len = this.translatedCode.length

		return 'else' == state[len-4] + state[len-3] + state[len-2] + state[len-1]
	}

	// Visit a parse tree produced by CParser#file.
	visitFile(ctx) {
		this.visitChildren(ctx)
		return this.translatedCode;
	  }
  
  
	  // Visit a parse tree produced by CParser#start.
	  visitStart(ctx) {
		this.translatedCode += "SerenityClass{\n";
		this.visit(ctx.block());
		this.translatedCode += "\n}";
		return;
	  }
  
  
	  // Visit a parse tree produced by CParser#block.
	  visitBlock(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CParser#contenido.
	  visitContenido(ctx) {
		console.log("visitContenido");
		
		return this.visitChildren(ctx);
	  }
  
	  // Visit a parse tree produced by CParser#declaracion.
	  visitDeclaracion(ctx) {
		console.log("visitDeclaracion");
		const TYPE = ctx.TYPE().getText();
		let ID = ctx.ID() ? ctx.ID().getText() : ctx.id.text;

		if (ctx.IGUAL()) {
			let VALUE = this.visit(ctx.expr());
			this.translatedCode += `\n# ${this.translateType(
				TYPE
			)} ${ID} = ${VALUE} .\n`;
		} else {
			this.translatedCode += `\n# ${this.translateType(TYPE)} ${ID} .\n`;
		}

		return;
	  }
  
  
	  // Visit a parse tree produced by CParser#asignacion.
	  visitAsignacion(ctx) {
		console.log("visitAsignacion");
		let ID = ctx.ID() ? ctx.ID().getText() : "";
		let VALUE = this.visit(ctx.expr());
		this.translatedCode += `\n-> ${ID} = (${VALUE}) .`;

		return;
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