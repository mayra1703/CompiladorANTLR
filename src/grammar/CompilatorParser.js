// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,35,188,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,
2,42,8,2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,55,8,3,
1,4,1,4,1,4,1,4,1,4,3,4,62,8,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,82,8,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,90,
8,6,10,6,12,6,93,9,6,1,6,1,6,1,6,1,7,1,7,5,7,100,8,7,10,7,12,7,103,9,7,1,
7,3,7,106,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,115,8,8,10,8,12,8,118,9,8,
1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,129,8,10,10,10,12,10,132,9,
10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,143,8,11,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,5,12,152,8,12,10,12,12,12,155,9,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,172,
8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,183,8,13,10,13,12,
13,186,9,13,1,13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,3,1,0,
4,5,1,0,10,11,1,0,6,8,200,0,29,1,0,0,0,2,33,1,0,0,0,4,45,1,0,0,0,6,54,1,
0,0,0,8,56,1,0,0,0,10,81,1,0,0,0,12,83,1,0,0,0,14,97,1,0,0,0,16,107,1,0,
0,0,18,121,1,0,0,0,20,124,1,0,0,0,22,136,1,0,0,0,24,144,1,0,0,0,26,171,1,
0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,
0,0,32,1,1,0,0,0,33,34,5,13,0,0,34,35,5,22,0,0,35,36,5,33,0,0,36,37,3,4,
2,0,37,38,5,23,0,0,38,3,1,0,0,0,39,41,3,6,3,0,40,42,5,33,0,0,41,40,1,0,0,
0,41,42,1,0,0,0,42,44,1,0,0,0,43,39,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,
45,46,1,0,0,0,46,5,1,0,0,0,47,45,1,0,0,0,48,55,3,8,4,0,49,55,3,12,6,0,50,
55,3,14,7,0,51,55,3,10,5,0,52,55,3,24,12,0,53,55,3,22,11,0,54,48,1,0,0,0,
54,49,1,0,0,0,54,50,1,0,0,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,
7,1,0,0,0,56,57,5,24,0,0,57,58,5,3,0,0,58,61,5,30,0,0,59,60,5,9,0,0,60,62,
3,26,13,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,25,0,0,64,9,
1,0,0,0,65,66,5,20,0,0,66,67,5,30,0,0,67,68,5,9,0,0,68,69,5,1,0,0,69,70,
3,26,13,0,70,71,5,2,0,0,71,72,5,25,0,0,72,82,1,0,0,0,73,74,5,20,0,0,74,75,
5,30,0,0,75,76,5,12,0,0,76,77,5,1,0,0,77,78,3,26,13,0,78,79,5,2,0,0,79,80,
5,25,0,0,80,82,1,0,0,0,81,65,1,0,0,0,81,73,1,0,0,0,82,11,1,0,0,0,83,84,5,
20,0,0,84,85,5,21,0,0,85,86,5,1,0,0,86,91,3,26,13,0,87,88,5,35,0,0,88,90,
3,26,13,0,89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,
1,0,0,0,93,91,1,0,0,0,94,95,5,2,0,0,95,96,5,25,0,0,96,13,1,0,0,0,97,101,
3,16,8,0,98,100,3,18,9,0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,
102,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,104,106,3,20,10,0,105,104,1,
0,0,0,105,106,1,0,0,0,106,15,1,0,0,0,107,108,5,14,0,0,108,109,5,1,0,0,109,
110,3,26,13,0,110,111,5,2,0,0,111,112,5,22,0,0,112,116,5,33,0,0,113,115,
3,6,3,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,
117,119,1,0,0,0,118,116,1,0,0,0,119,120,5,23,0,0,120,17,1,0,0,0,121,122,
5,16,0,0,122,123,3,16,8,0,123,19,1,0,0,0,124,125,5,17,0,0,125,126,5,22,0,
0,126,130,5,33,0,0,127,129,3,6,3,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,
1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,5,23,0,0,
134,135,5,33,0,0,135,21,1,0,0,0,136,137,5,20,0,0,137,142,5,30,0,0,138,139,
5,4,0,0,139,143,5,4,0,0,140,141,5,5,0,0,141,143,5,5,0,0,142,138,1,0,0,0,
142,140,1,0,0,0,143,23,1,0,0,0,144,145,5,18,0,0,145,146,5,1,0,0,146,147,
3,26,13,0,147,148,5,2,0,0,148,149,5,22,0,0,149,153,5,33,0,0,150,152,3,6,
3,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
156,1,0,0,0,155,153,1,0,0,0,156,157,5,23,0,0,157,25,1,0,0,0,158,159,6,13,
-1,0,159,160,5,1,0,0,160,161,3,26,13,0,161,162,5,2,0,0,162,172,1,0,0,0,163,
164,7,0,0,0,164,172,3,26,13,8,165,172,7,1,0,0,166,172,5,26,0,0,167,172,5,
28,0,0,168,172,5,29,0,0,169,172,5,27,0,0,170,172,5,30,0,0,171,158,1,0,0,
0,171,163,1,0,0,0,171,165,1,0,0,0,171,166,1,0,0,0,171,167,1,0,0,0,171,168,
1,0,0,0,171,169,1,0,0,0,171,170,1,0,0,0,172,184,1,0,0,0,173,174,10,10,0,
0,174,175,7,2,0,0,175,183,3,26,13,11,176,177,10,9,0,0,177,178,7,0,0,0,178,
183,3,26,13,10,179,180,10,6,0,0,180,181,7,1,0,0,181,183,3,26,13,7,182,173,
1,0,0,0,182,176,1,0,0,0,182,179,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,
184,185,1,0,0,0,185,27,1,0,0,0,186,184,1,0,0,0,16,31,41,45,54,61,81,91,101,
105,116,130,142,153,171,182,184];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'('", "')'", null, "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'='", null, null, null, "'SerenityClass'", 
                            "'CozyCondition'", "'TwilightOption'", "'else'", 
                            "'DreamElse'", "'DreamLoop'", "'do'", "'->'", 
                            "'WHISPER'", "'{'", "'}'", "'#'", "'.'", null, 
                            null, null, null, null, null, null, null, null, 
                            "','" ];
    static symbolicNames = [ null, null, null, "TYPE", "PLUS", "MINUS", 
                             "MULT", "DIV", "MOD", "IGUAL", "OC", "OL", 
                             "MATH_EQUALS", "SERENITYCLASS", "COZYCONDITION", 
                             "TWILIGHTOPTION", "ELSE", "DREAMYELSE", "DREAMLOOP", 
                             "DO", "ARROW", "WHISPER", "INITKEY", "FINALKEY", 
                             "GATITO", "PUNTITO", "STARSTRING", "NUM", "CHAR", 
                             "FLOAT", "ID", "LINECOMMENT", "COMMENT", "NEWLINE", 
                             "SPACES", "COMA" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "incremento", 
                         "whileStatement", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompilatorParser.ruleNames;
        this.literalNames = CompilatorParser.literalNames;
        this.symbolicNames = CompilatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompilatorParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.start();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CompilatorParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(CompilatorParser.SERENITYCLASS);
	        this.state = 34;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 35;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 36;
	        this.block();
	        this.state = 37;
	        this.match(CompilatorParser.FINALKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompilatorParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 18104320) !== 0)) {
	            this.state = 39;
	            this.contenido();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 40;
	                this.match(CompilatorParser.NEWLINE);
	            }

	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompilatorParser.RULE_contenido);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.asignacion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 52;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 53;
	            this.incremento();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompilatorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(CompilatorParser.GATITO);
	        this.state = 57;
	        this.match(CompilatorParser.TYPE);
	        this.state = 58;
	        this.match(CompilatorParser.ID);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 59;
	            this.match(CompilatorParser.IGUAL);
	            this.state = 60;
	            this.expr(0);
	        }

	        this.state = 63;
	        this.match(CompilatorParser.PUNTITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompilatorParser.RULE_asignacion);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NormalAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(CompilatorParser.ARROW);
	            this.state = 66;
	            this.match(CompilatorParser.ID);
	            this.state = 67;
	            this.match(CompilatorParser.IGUAL);
	            this.state = 68;
	            this.match(CompilatorParser.T__0);
	            this.state = 69;
	            this.expr(0);
	            this.state = 70;
	            this.match(CompilatorParser.T__1);
	            this.state = 71;
	            this.match(CompilatorParser.PUNTITO);
	            break;

	        case 2:
	            localctx = new MathAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.match(CompilatorParser.ARROW);
	            this.state = 74;
	            this.match(CompilatorParser.ID);
	            this.state = 75;
	            this.match(CompilatorParser.MATH_EQUALS);
	            this.state = 76;
	            this.match(CompilatorParser.T__0);
	            this.state = 77;
	            this.expr(0);
	            this.state = 78;
	            this.match(CompilatorParser.T__1);
	            this.state = 79;
	            this.match(CompilatorParser.PUNTITO);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompilatorParser.RULE_impresion);
	    var _la = 0;
	    try {
	        localctx = new ShowExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(CompilatorParser.ARROW);
	        this.state = 84;
	        this.match(CompilatorParser.WHISPER);
	        this.state = 85;
	        this.match(CompilatorParser.T__0);
	        this.state = 86;
	        this.expr(0);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 87;
	            this.match(CompilatorParser.COMA);
	            this.state = 88;
	            this.expr(0);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this.match(CompilatorParser.T__1);
	        this.state = 95;
	        this.match(CompilatorParser.PUNTITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompilatorParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.ifStatement();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 98;
	            this.elseIfStatement();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 104;
	            this.elseStatement();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CompilatorParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(CompilatorParser.COZYCONDITION);
	        this.state = 108;
	        this.match(CompilatorParser.T__0);
	        this.state = 109;
	        this.expr(0);
	        this.state = 110;
	        this.match(CompilatorParser.T__1);
	        this.state = 111;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 112;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 18104320) !== 0)) {
	            this.state = 113;
	            this.contenido();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.match(CompilatorParser.FINALKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CompilatorParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(CompilatorParser.ELSE);
	        this.state = 122;
	        this.ifStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CompilatorParser.RULE_elseStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(CompilatorParser.DREAMYELSE);
	        this.state = 125;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 126;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 18104320) !== 0)) {
	            this.state = 127;
	            this.contenido();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 134;
	        this.match(CompilatorParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CompilatorParser.RULE_incremento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(CompilatorParser.ARROW);
	        this.state = 137;
	        this.match(CompilatorParser.ID);
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 138;
	            this.match(CompilatorParser.PLUS);
	            this.state = 139;
	            this.match(CompilatorParser.PLUS);
	            break;
	        case 5:
	            this.state = 140;
	            this.match(CompilatorParser.MINUS);
	            this.state = 141;
	            this.match(CompilatorParser.MINUS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CompilatorParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(CompilatorParser.DREAMLOOP);
	        this.state = 145;
	        this.match(CompilatorParser.T__0);
	        this.state = 146;
	        this.expr(0);
	        this.state = 147;
	        this.match(CompilatorParser.T__1);
	        this.state = 148;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 149;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 18104320) !== 0)) {
	            this.state = 150;
	            this.contenido();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
	        this.match(CompilatorParser.FINALKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, CompilatorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 159;
	            this.match(CompilatorParser.T__0);
	            this.state = 160;
	            this.expr(0);
	            this.state = 161;
	            this.match(CompilatorParser.T__1);
	            break;
	        case 4:
	        case 5:
	            localctx = new SignNumbersContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            localctx.operation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===5)) {
	                localctx.operation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 164;
	            this.expr(8);
	            break;
	        case 10:
	        case 11:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            localctx.cond_value = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===10 || _la===11)) {
	                localctx.cond_value = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 26:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 166;
	            this.match(CompilatorParser.STARSTRING);
	            break;
	        case 28:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            this.match(CompilatorParser.CHAR);
	            break;
	        case 29:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 168;
	            this.match(CompilatorParser.FLOAT);
	            break;
	        case 27:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 169;
	            this.match(CompilatorParser.NUM);
	            break;
	        case 30:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 170;
	            this.match(CompilatorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 182;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 174;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 175;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 177;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 178;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 180;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 186;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CompilatorParser.EOF = antlr4.Token.EOF;
CompilatorParser.T__0 = 1;
CompilatorParser.T__1 = 2;
CompilatorParser.TYPE = 3;
CompilatorParser.PLUS = 4;
CompilatorParser.MINUS = 5;
CompilatorParser.MULT = 6;
CompilatorParser.DIV = 7;
CompilatorParser.MOD = 8;
CompilatorParser.IGUAL = 9;
CompilatorParser.OC = 10;
CompilatorParser.OL = 11;
CompilatorParser.MATH_EQUALS = 12;
CompilatorParser.SERENITYCLASS = 13;
CompilatorParser.COZYCONDITION = 14;
CompilatorParser.TWILIGHTOPTION = 15;
CompilatorParser.ELSE = 16;
CompilatorParser.DREAMYELSE = 17;
CompilatorParser.DREAMLOOP = 18;
CompilatorParser.DO = 19;
CompilatorParser.ARROW = 20;
CompilatorParser.WHISPER = 21;
CompilatorParser.INITKEY = 22;
CompilatorParser.FINALKEY = 23;
CompilatorParser.GATITO = 24;
CompilatorParser.PUNTITO = 25;
CompilatorParser.STARSTRING = 26;
CompilatorParser.NUM = 27;
CompilatorParser.CHAR = 28;
CompilatorParser.FLOAT = 29;
CompilatorParser.ID = 30;
CompilatorParser.LINECOMMENT = 31;
CompilatorParser.COMMENT = 32;
CompilatorParser.NEWLINE = 33;
CompilatorParser.SPACES = 34;
CompilatorParser.COMA = 35;

CompilatorParser.RULE_file = 0;
CompilatorParser.RULE_start = 1;
CompilatorParser.RULE_block = 2;
CompilatorParser.RULE_contenido = 3;
CompilatorParser.RULE_declaracion = 4;
CompilatorParser.RULE_asignacion = 5;
CompilatorParser.RULE_impresion = 6;
CompilatorParser.RULE_condicional = 7;
CompilatorParser.RULE_ifStatement = 8;
CompilatorParser.RULE_elseIfStatement = 9;
CompilatorParser.RULE_elseStatement = 10;
CompilatorParser.RULE_incremento = 11;
CompilatorParser.RULE_whileStatement = 12;
CompilatorParser.RULE_expr = 13;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_file;
    }

	start = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StartContext);
	    } else {
	        return this.getTypedRuleContext(StartContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_start;
    }

	SERENITYCLASS() {
	    return this.getToken(CompilatorParser.SERENITYCLASS, 0);
	};

	INITKEY() {
	    return this.getToken(CompilatorParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_block;
    }

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.NEWLINE);
	    } else {
	        return this.getToken(CompilatorParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContenidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_contenido;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitContenido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_declaracion;
    }

	GATITO() {
	    return this.getToken(CompilatorParser.GATITO, 0);
	};

	TYPE() {
	    return this.getToken(CompilatorParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(CompilatorParser.ID, 0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	IGUAL() {
	    return this.getToken(CompilatorParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_asignacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NormalAssignContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ARROW() {
	    return this.getToken(CompilatorParser.ARROW, 0);
	};

	ID() {
	    return this.getToken(CompilatorParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(CompilatorParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitNormalAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.NormalAssignContext = NormalAssignContext;

class MathAssignContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ARROW() {
	    return this.getToken(CompilatorParser.ARROW, 0);
	};

	ID() {
	    return this.getToken(CompilatorParser.ID, 0);
	};

	MATH_EQUALS() {
	    return this.getToken(CompilatorParser.MATH_EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitMathAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.MathAssignContext = MathAssignContext;

class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_impresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ShowExprContext extends ImpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ARROW() {
	    return this.getToken(CompilatorParser.ARROW, 0);
	};

	WHISPER() {
	    return this.getToken(CompilatorParser.WHISPER, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.COMA);
	    } else {
	        return this.getToken(CompilatorParser.COMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitShowExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ShowExprContext = ShowExprContext;

class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_condicional;
    }

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	elseIfStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatementContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatementContext,i);
	    }
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_ifStatement;
    }

	COZYCONDITION() {
	    return this.getToken(CompilatorParser.COZYCONDITION, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	INITKEY() {
	    return this.getToken(CompilatorParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_elseIfStatement;
    }

	ELSE() {
	    return this.getToken(CompilatorParser.ELSE, 0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitElseIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_elseStatement;
    }

	DREAMYELSE() {
	    return this.getToken(CompilatorParser.DREAMYELSE, 0);
	};

	INITKEY() {
	    return this.getToken(CompilatorParser.INITKEY, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.NEWLINE);
	    } else {
	        return this.getToken(CompilatorParser.NEWLINE, i);
	    }
	};


	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitElseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_incremento;
    }

	ARROW() {
	    return this.getToken(CompilatorParser.ARROW, 0);
	};

	ID() {
	    return this.getToken(CompilatorParser.ID, 0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.PLUS);
	    } else {
	        return this.getToken(CompilatorParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.MINUS);
	    } else {
	        return this.getToken(CompilatorParser.MINUS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_whileStatement;
    }

	DREAMLOOP() {
	    return this.getToken(CompilatorParser.DREAMLOOP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	INITKEY() {
	    return this.getToken(CompilatorParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ParentesisContext = ParentesisContext;

class ConditionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond_value = null;;
        super.copyFrom(ctx);
    }

	OC() {
	    return this.getToken(CompilatorParser.OC, 0);
	};

	OL() {
	    return this.getToken(CompilatorParser.OL, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ConditionContext = ConditionContext;

class ValueAsCharContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STARSTRING() {
	    return this.getToken(CompilatorParser.STARSTRING, 0);
	};

	CHAR() {
	    return this.getToken(CompilatorParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitValueAsChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ValueAsCharContext = ValueAsCharContext;

class MultDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MULT() {
	    return this.getToken(CompilatorParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(CompilatorParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CompilatorParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitMultDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.MultDivContext = MultDivContext;

class NumContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(CompilatorParser.FLOAT, 0);
	};

	NUM() {
	    return this.getToken(CompilatorParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.NumContext = NumContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CompilatorParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CompilatorParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompilatorParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.IdContext = IdContext;

class SignNumbersContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PLUS() {
	    return this.getToken(CompilatorParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CompilatorParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitSignNumbers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.SignNumbersContext = SignNumbersContext;


CompilatorParser.FileContext = FileContext; 
CompilatorParser.StartContext = StartContext; 
CompilatorParser.BlockContext = BlockContext; 
CompilatorParser.ContenidoContext = ContenidoContext; 
CompilatorParser.DeclaracionContext = DeclaracionContext; 
CompilatorParser.AsignacionContext = AsignacionContext; 
CompilatorParser.ImpresionContext = ImpresionContext; 
CompilatorParser.CondicionalContext = CondicionalContext; 
CompilatorParser.IfStatementContext = IfStatementContext; 
CompilatorParser.ElseIfStatementContext = ElseIfStatementContext; 
CompilatorParser.ElseStatementContext = ElseStatementContext; 
CompilatorParser.IncrementoContext = IncrementoContext; 
CompilatorParser.WhileStatementContext = WhileStatementContext; 
CompilatorParser.ExprContext = ExprContext; 
