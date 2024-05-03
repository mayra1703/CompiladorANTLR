// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,34,172,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,
2,42,8,2,4,2,44,8,2,11,2,12,2,45,1,3,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,4,
1,4,1,4,1,4,1,4,3,4,61,8,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,1,6,5,6,79,8,6,10,6,12,6,82,9,6,1,6,1,6,1,6,1,7,1,7,5,7,89,
8,7,10,7,12,7,92,9,7,1,7,3,7,95,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,104,
8,8,10,8,12,8,107,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,118,8,
10,10,10,12,10,121,9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,
132,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,141,8,12,10,12,12,12,144,
9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,
13,159,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,167,8,13,10,13,12,13,170,
9,13,1,13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,1,0,10,11,1,
0,4,8,181,0,29,1,0,0,0,2,33,1,0,0,0,4,43,1,0,0,0,6,53,1,0,0,0,8,55,1,0,0,
0,10,64,1,0,0,0,12,72,1,0,0,0,14,86,1,0,0,0,16,96,1,0,0,0,18,110,1,0,0,0,
20,113,1,0,0,0,22,125,1,0,0,0,24,133,1,0,0,0,26,158,1,0,0,0,28,30,3,2,1,
0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,
34,5,12,0,0,34,35,5,21,0,0,35,36,5,32,0,0,36,37,3,4,2,0,37,38,5,22,0,0,38,
3,1,0,0,0,39,41,3,6,3,0,40,42,5,32,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,44,
1,0,0,0,43,39,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,
0,0,47,54,3,8,4,0,48,54,3,12,6,0,49,54,3,14,7,0,50,54,3,10,5,0,51,54,3,24,
12,0,52,54,3,22,11,0,53,47,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,0,53,50,1,0,
0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,7,1,0,0,0,55,56,5,23,0,0,56,57,5,3,0,
0,57,60,5,29,0,0,58,59,5,9,0,0,59,61,3,26,13,0,60,58,1,0,0,0,60,61,1,0,0,
0,61,62,1,0,0,0,62,63,5,24,0,0,63,9,1,0,0,0,64,65,5,19,0,0,65,66,5,29,0,
0,66,67,5,9,0,0,67,68,5,1,0,0,68,69,3,26,13,0,69,70,5,2,0,0,70,71,5,24,0,
0,71,11,1,0,0,0,72,73,5,19,0,0,73,74,5,20,0,0,74,75,5,1,0,0,75,80,3,26,13,
0,76,77,5,34,0,0,77,79,3,26,13,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,
0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,2,0,0,84,85,5,24,0,0,
85,13,1,0,0,0,86,90,3,16,8,0,87,89,3,18,9,0,88,87,1,0,0,0,89,92,1,0,0,0,
90,88,1,0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,95,3,20,10,0,
94,93,1,0,0,0,94,95,1,0,0,0,95,15,1,0,0,0,96,97,5,13,0,0,97,98,5,1,0,0,98,
99,3,26,13,0,99,100,5,2,0,0,100,101,5,21,0,0,101,105,5,32,0,0,102,104,3,
6,3,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,
108,1,0,0,0,107,105,1,0,0,0,108,109,5,22,0,0,109,17,1,0,0,0,110,111,5,15,
0,0,111,112,3,16,8,0,112,19,1,0,0,0,113,114,5,16,0,0,114,115,5,21,0,0,115,
119,5,32,0,0,116,118,3,6,3,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,1,0,
0,0,119,120,1,0,0,0,120,122,1,0,0,0,121,119,1,0,0,0,122,123,5,22,0,0,123,
124,5,32,0,0,124,21,1,0,0,0,125,126,5,19,0,0,126,131,5,29,0,0,127,128,5,
4,0,0,128,132,5,4,0,0,129,130,5,5,0,0,130,132,5,5,0,0,131,127,1,0,0,0,131,
129,1,0,0,0,132,23,1,0,0,0,133,134,5,17,0,0,134,135,5,1,0,0,135,136,3,26,
13,0,136,137,5,2,0,0,137,138,5,21,0,0,138,142,5,32,0,0,139,141,3,6,3,0,140,
139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,145,1,0,
0,0,144,142,1,0,0,0,145,146,5,22,0,0,146,25,1,0,0,0,147,148,6,13,-1,0,148,
149,5,1,0,0,149,150,3,26,13,0,150,151,5,2,0,0,151,159,1,0,0,0,152,159,7,
0,0,0,153,159,5,25,0,0,154,159,5,27,0,0,155,159,5,28,0,0,156,159,5,26,0,
0,157,159,5,29,0,0,158,147,1,0,0,0,158,152,1,0,0,0,158,153,1,0,0,0,158,154,
1,0,0,0,158,155,1,0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,168,1,0,0,0,
160,161,10,8,0,0,161,162,7,1,0,0,162,167,3,26,13,9,163,164,10,6,0,0,164,
165,7,0,0,0,165,167,3,26,13,7,166,160,1,0,0,0,166,163,1,0,0,0,167,170,1,
0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,27,1,0,0,0,170,168,1,0,0,0,15,
31,41,45,53,60,80,90,94,105,119,131,142,158,166,168];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'('", "')'", null, "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'='", null, null, "'SerenityClass'", 
                            "'CozyCondition'", "'TwilightOption'", "'else'", 
                            "'DreamElse'", "'DreamLoop'", "'do'", "'->'", 
                            "'WHISPER'", "'{'", "'}'", "'#'", "'.'", null, 
                            null, null, null, null, null, null, null, null, 
                            "','" ];
    static symbolicNames = [ null, null, null, "TYPE", "PLUS", "MINUS", 
                             "MULT", "DIV", "MOD", "IGUAL", "OC", "OL", 
                             "SERENITYCLASS", "COZYCONDITION", "TWILIGHTOPTION", 
                             "ELSE", "DREAMYELSE", "DREAMLOOP", "DO", "ARROW", 
                             "WHISPER", "INITKEY", "FINALKEY", "GATITO", 
                             "PUNTITO", "STARSTRING", "NUM", "CHAR", "FLOAT", 
                             "ID", "LINECOMMENT", "COMMENT", "NEWLINE", 
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
    			return this.precpred(this._ctx, 8);
    		case 1:
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
	        } while(_la===12);
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
	        this.state = 43; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 39;
	            this.contenido();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 40;
	                this.match(CompilatorParser.NEWLINE);
	            }

	            this.state = 45; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0));
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
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.asignacion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.whileStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 52;
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
	        this.state = 55;
	        this.match(CompilatorParser.GATITO);
	        this.state = 56;
	        this.match(CompilatorParser.TYPE);
	        this.state = 57;
	        this.match(CompilatorParser.ID);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 58;
	            this.match(CompilatorParser.IGUAL);
	            this.state = 59;
	            this.expr(0);
	        }

	        this.state = 62;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(CompilatorParser.ARROW);
	        this.state = 65;
	        this.match(CompilatorParser.ID);
	        this.state = 66;
	        this.match(CompilatorParser.IGUAL);
	        this.state = 67;
	        this.match(CompilatorParser.T__0);
	        this.state = 68;
	        this.expr(0);
	        this.state = 69;
	        this.match(CompilatorParser.T__1);
	        this.state = 70;
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompilatorParser.RULE_impresion);
	    var _la = 0;
	    try {
	        localctx = new ShowExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CompilatorParser.ARROW);
	        this.state = 73;
	        this.match(CompilatorParser.WHISPER);
	        this.state = 74;
	        this.match(CompilatorParser.T__0);
	        this.state = 75;
	        this.expr(0);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 76;
	            this.match(CompilatorParser.COMA);
	            this.state = 77;
	            this.expr(0);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.match(CompilatorParser.T__1);
	        this.state = 84;
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
	        this.state = 86;
	        this.ifStatement();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 87;
	            this.elseIfStatement();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 93;
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
	        this.state = 96;
	        this.match(CompilatorParser.COZYCONDITION);
	        this.state = 97;
	        this.match(CompilatorParser.T__0);
	        this.state = 98;
	        this.expr(0);
	        this.state = 99;
	        this.match(CompilatorParser.T__1);
	        this.state = 100;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 101;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 102;
	            this.contenido();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	        this.state = 110;
	        this.match(CompilatorParser.ELSE);
	        this.state = 111;
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
	        this.state = 113;
	        this.match(CompilatorParser.DREAMYELSE);
	        this.state = 114;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 115;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 116;
	            this.contenido();
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 122;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 123;
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
	        this.state = 125;
	        this.match(CompilatorParser.ARROW);
	        this.state = 126;
	        this.match(CompilatorParser.ID);
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 127;
	            this.match(CompilatorParser.PLUS);
	            this.state = 128;
	            this.match(CompilatorParser.PLUS);
	            break;
	        case 5:
	            this.state = 129;
	            this.match(CompilatorParser.MINUS);
	            this.state = 130;
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
	        this.state = 133;
	        this.match(CompilatorParser.DREAMLOOP);
	        this.state = 134;
	        this.match(CompilatorParser.T__0);
	        this.state = 135;
	        this.expr(0);
	        this.state = 136;
	        this.match(CompilatorParser.T__1);
	        this.state = 137;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 138;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 139;
	            this.contenido();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 145;
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
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 148;
	            this.match(CompilatorParser.T__0);
	            this.state = 149;
	            this.expr(0);
	            this.state = 150;
	            this.match(CompilatorParser.T__1);
	            break;
	        case 10:
	        case 11:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 152;
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
	        case 25:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(CompilatorParser.STARSTRING);
	            break;
	        case 27:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.match(CompilatorParser.CHAR);
	            break;
	        case 28:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.match(CompilatorParser.FLOAT);
	            break;
	        case 26:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 156;
	            this.match(CompilatorParser.NUM);
	            break;
	        case 29:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.match(CompilatorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 166;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 161;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 496) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 162;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 164;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
CompilatorParser.SERENITYCLASS = 12;
CompilatorParser.COZYCONDITION = 13;
CompilatorParser.TWILIGHTOPTION = 14;
CompilatorParser.ELSE = 15;
CompilatorParser.DREAMYELSE = 16;
CompilatorParser.DREAMLOOP = 17;
CompilatorParser.DO = 18;
CompilatorParser.ARROW = 19;
CompilatorParser.WHISPER = 20;
CompilatorParser.INITKEY = 21;
CompilatorParser.FINALKEY = 22;
CompilatorParser.GATITO = 23;
CompilatorParser.PUNTITO = 24;
CompilatorParser.STARSTRING = 25;
CompilatorParser.NUM = 26;
CompilatorParser.CHAR = 27;
CompilatorParser.FLOAT = 28;
CompilatorParser.ID = 29;
CompilatorParser.LINECOMMENT = 30;
CompilatorParser.COMMENT = 31;
CompilatorParser.NEWLINE = 32;
CompilatorParser.SPACES = 33;
CompilatorParser.COMA = 34;

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
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

class ArithmeticContext extends ExprContext {

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

	PLUS() {
	    return this.getToken(CompilatorParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CompilatorParser.MINUS, 0);
	};

	MOD() {
	    return this.getToken(CompilatorParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitArithmetic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ArithmeticContext = ArithmeticContext;

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
