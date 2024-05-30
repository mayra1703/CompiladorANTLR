
import MoonlightToJasminVisitor from '@/grammar4/MoonlightToJasminVisitor.js';
import CompilatorVisitor from '@/grammar/CompilatorVisitor';
import CompilatorParser from '@/grammar/CompilatorParser';
import MoonlightToJasminParser from '@/grammar4/MoonlightToJasminParser';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

// En vez de visitas, retornar las palabras cambiadas a C

export default class CustomVisitor5 extends CompilatorVisitor {

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
                };
            }
            this.localsLimit++;
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
        this.translatedCode += "\n.end method";

        let header = `.class public Prueba
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
        console.log(ctx.getText());
		
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

            return [TYPE, ID];
        }

	  }
  
  
	  // Visit a parse tree produced by MoonlightToJasminParser#normalAssign.
	  visitNormalAssign(ctx) {
        console.log("visitNormalAssign");

        let VALUE = this.visit(ctx.expr());
        const ID = ctx.ID().getText();
        const INDEX = this.getVariableIndex(ID);

        if (INDEX > -1) {
			this.variables[ID].value = VALUE;
			this.translatedCode += `\nistore_${INDEX}\n`;
		}
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#mathAssign.
      visitMathAssign(ctx) {
        console.log("visitMathAssign");

        let VALUE = this.visit(ctx.expr());
        const ID = ctx.ID().getText();
        const INDEX = this.getVariableIndex(ID);
        const OPERATOR = ctx.MATH_EQUALS().getText();
        console.log(`${ID} ${OPERATOR} ${INDEX}`);

        if (INDEX > -1) {
            this.translatedCode += `\niload_${INDEX}`;

            switch (OPERATOR) {
                case '+=':
                    this.translatedCode += '\niadd';
                    break;

                case '-=':
                    this.translatedCode += '\nisub';
                    break;

                case '*=':
                    this.translatedCode += '\nimul';
                    break;

                case '/=':
                    this.translatedCode += '\nidiv';
                    break;

                case '%=':
                    this.translatedCode += '\nirem';
                    break;
            }
            this.translatedCode += `\nistore_${INDEX}\n`;
        }
      }

	  // Visit a parse tree produced by MoonlightToJasminParser#showExpr.
	  visitShowExpr(ctx) {
        console.log("visitShowExpr");

        //const VALUE_HEADER = ctx.expr().getText();
        const VALUE = this.visit(ctx.expr());

        if (VALUE == "swap" || !isNaN(VALUE)) {
            this.translatedCode += `\ninvokestatic java/lang/Integer/toString(I)Ljava/lang/String;`;
            this.translatedCode += `\ngetstatic java/lang/System/out Ljava/io/PrintStream;`;
            this.translatedCode += `\nswap`;
        }

        else {
            this.stackLimit++;
            this.translatedCode += `\ngetstatic java/lang/System/out Ljava/io/PrintStream;`;
            this.translatedCode += `\nldc ${VALUE}`;
        }

        this.translatedCode += `\ninvokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n`;
      }
  
  
	  // Visit a parse tree produced by CParser#condicional.
	  visitCondicional(ctx) {
        console.log("visitCondicional");

        const endIfLabel = this.generateLabel("endIfLabel");
        let skipThreshold = 1;
        const conditions = [];

        const [ifCondition, ifContent] = this.visit(ctx.ifStatement());
        conditions.push({
            instruction: ifCondition,
            content: ifContent,
        });

        if (ctx.elseIfStatement()) {
            for (let elif of this.visit(ctx.elseIfStatement())) {
                conditions.push({
                    instruction: elif[0],
                    content: elif[1],
                    label: this.generateLabel("elifLabel"),
                });
            }
        }

        let elseData = null;

        if (ctx.elseStatement()) {
            skipThreshold++;
            let elseLabel = this.generateLabel("elseLabel");
            const elseContent = this.visit(ctx.elseStatement());

            conditions.push({
                label: elseLabel,
            });

            elseData = {
                label: elseLabel,
                content: elseContent,
            };
        }

        conditions.push({
            label: endIfLabel,
        })

        // Generar codigo traducido
        for (let i = 0; i < conditions.length - skipThreshold; i++) {
            const condition = conditions[i];

            if (condition.label) {
                this.translatedCode += `\n${condition.label}:`;
            }

            console.log(condition.instruction);
            const instruction = this.visit(condition.instruction);
            this.translatedCode += `\n${instruction} ${conditions[i + 1].label}`;
            this.visit(condition.content);
            this.translatedCode += `\ngoto ${endIfLabel}\n`;
        }

        if (elseData) {
            this.translatedCode += `\n${elseData.label}:`;
            this.visit(elseData.content);
        }

        this.translatedCode += `\n${endIfLabel}:`;
	  }
  
  
	  // Visit a parse tree produced by CParser#ifStatement.
	  visitIfStatement(ctx) {
		console.log("visitIfStatement");
		return [ctx.expr(), ctx.contenido()];
	  }
  
  
	  // Visit a parse tree produced by CParser#elseIfStatement.
	  visitElseIfStatement(ctx) {
		console.log("visitElseIfStatement");
		return this.visit(ctx.ifStatement());
	  }
  
  
	  // Visit a parse tree produced by CParser#elseStatement.
	  visitElseStatement(ctx) {
		console.log("visitElseStatement");
		return ctx.contenido();
	  }
  
	  
	  // Visit a parse tree produced by CParser#incremento.
	  visitIncremento(ctx) {
		console.log("visitIncremento");

		const ID = ctx.ID().getText();

        if (this.getVariableIndex(ID) > -1) {
            let variable = this.variables[ID];

            if (ctx.PLUS().length > 0) {
                this.translatedCode += `\niinc ${variable.index} 1`;
                variable.value = variable.value + 1;
            }

            else {
                this.translatedCode += `\niinc ${variable.index} -1`;
                variable.value = variable.value - 1;
            }
        }

        else {
            const error = document.getElementById('error');
			const contenedorError = document.getElementById('contenedorError');
			const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

			error.innerHTML += `Syntax error on line ${lineNumber}: Variable "${ID}" is not defined. <br>`;
			contenedorError.classList.remove('hidden');
        }

		return this.visitChildren(ctx)
	  }

	  // Visit a parse tree produced by CParser#whileStatement.
	  visitWhileStatement(ctx) {
		console.log('visitWhileStatement');
		const whileStartLabel = this.generateLabel("whileStartLabel");
        const whileEndLabel = this.generateLabel("whileEndLabel");

        this.translatedCode += `\n${whileStartLabel}:`;

        const instruction = this.visit(ctx.expr());

        this.translatedCode += `\n${instruction} ${whileEndLabel}`;

        this.visit(ctx.contenido());
        this.translatedCode += `\ngoto ${whileStartLabel}`;
        this.translatedCode += `\n${whileEndLabel}:`;
	  }

	  // Visit a parse tree produced by MoonlightToJasminParser#parentesis.
	  visitParentesis(ctx) {
        console.log("visitParentesis");
        
        let visit = this.visitChildren(ctx);
        return visit[1];
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#condition.
      visitCondition(ctx) {
        console.log("visitCondition");
        this.visit(ctx.expr());
        // let [first_val, second_val] = this.visit(ctx.expr());
        let symbol = ctx.cond_value.text;

        switch (symbol) {
            case ">":
				return "if_icmple";

			case "<":
				return "if_icmpge";

			case ">=":
				return "if_icmplt";

			case "<=":
				return "if_icmpgt";

			case "||":
				return first_val || second_val;

			case "&&":
				return first_val && second_val;

			case "==":
				return "if_icmpne";

			case "!=":
				return "if_icmpeq";

			case "true":
				return true;

			case "false":
				return false;

			default:
				return false;
        }
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#valueAsChar.
      visitValueAsChar(ctx) {
        console.log("visitValueAsChar");
        return ctx.getText();
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#multDiv.
      visitMultDiv(ctx) {
        console.log("visitMultDiv");

        const operation_data = this.visitChildren(ctx);
        let SYMBOL = ctx.operation.type;
        this.stackLimit += 2;

        if (SYMBOL == MoonlightToJasminParser.MULT) {
            this.translatedCode += `\nimul\n`;
            return "swap";
        }

        if (SYMBOL == MoonlightToJasminParser.DIV) {
            this.translatedCode += `\nidiv\n`;
            return "swap";
        }

        if (SYMBOL == MoonlightToJasminParser.MOD) {
            this.translatedCode += `\nirem\n`;
            return "swap";
        }
      }
  
      // Visit a parse tree produced by MoonlightToJasminParser#num.
      visitNum(ctx) {
        console.log("visitNum");

        let value;
        this.stackLimit++;

        if (ctx.getText().includes(".")) {

            value = parseFloat(ctx.getText());
            console.log("parseFloat");
            this.translatedCode += `\nldc ${value}`;

            return value;
        }

        else {

            value = Number(ctx.getText());
            console.log("Number");
            this.translatedCode += `\nldc ${value}`;

            return value;
        }
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#addSub.
      visitAddSub(ctx) {
        console.log("visitAddSub");
        const operation_data = this.visitChildren(ctx);
        
        let SYMBOL = ctx.operation.type;
        this.stackLimit += 2;

        if (SYMBOL == MoonlightToJasminParser.PLUS) {
            this.translatedCode += `\niadd\n`;
            return "swap";
        }

        else {
            this.translatedCode += `\nisub\n`;
            return "swap";
        }

      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#id.
      visitId(ctx) {
        console.log("visitId");

        const ID = ctx.ID().getText();

        if (this.variableExist(ID)) {
            this.translatedCode += `\niload_${this.variables[ID].index}`;
            return this.variables[ID].value;
        }

        const error = document.getElementById('error');
		const contenedorError = document.getElementById('contenedorError');
		const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

		error.innerHTML += `Syntax error on line ${lineNumber}: Variable "${ID}" is not defined. <br>`;
		contenedorError.classList.remove('hidden');

        return undefined;
      }
  
  
      // Visit a parse tree produced by MoonlightToJasminParser#signNumbers.
      visitSignNumbers(ctx) {
        return this.visitChildren(ctx);
      }
  
  
  }