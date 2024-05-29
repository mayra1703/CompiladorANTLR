// Generated from ./grammar/MoonlightToC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MoonlightToCVisitor from './MoonlightToCVisitor.js';

const serializedATN = [4,1,34,173,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,
2,42,8,2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,55,8,3,
1,4,1,4,1,4,1,4,1,4,3,4,62,8,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,6,1,6,5,6,80,8,6,10,6,12,6,83,9,6,1,6,1,6,1,6,1,7,1,7,5,
7,90,8,7,10,7,12,7,93,9,7,1,7,3,7,96,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,
105,8,8,10,8,12,8,108,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,119,
8,10,10,10,12,10,122,9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,
11,133,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,142,8,12,10,12,12,12,
145,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,160,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,168,8,13,10,13,12,13,171,
9,13,1,13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,1,0,10,11,1,
0,4,8,182,0,29,1,0,0,0,2,33,1,0,0,0,4,45,1,0,0,0,6,54,1,0,0,0,8,56,1,0,0,
0,10,65,1,0,0,0,12,73,1,0,0,0,14,87,1,0,0,0,16,97,1,0,0,0,18,111,1,0,0,0,
20,114,1,0,0,0,22,126,1,0,0,0,24,134,1,0,0,0,26,159,1,0,0,0,28,30,3,2,1,
0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,
34,5,12,0,0,34,35,5,21,0,0,35,36,5,32,0,0,36,37,3,4,2,0,37,38,5,22,0,0,38,
3,1,0,0,0,39,41,3,6,3,0,40,42,5,32,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,44,
1,0,0,0,43,39,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,
0,0,47,45,1,0,0,0,48,55,3,8,4,0,49,55,3,12,6,0,50,55,3,14,7,0,51,55,3,10,
5,0,52,55,3,24,12,0,53,55,3,22,11,0,54,48,1,0,0,0,54,49,1,0,0,0,54,50,1,
0,0,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,7,1,0,0,0,56,57,5,23,
0,0,57,58,5,3,0,0,58,61,5,29,0,0,59,60,5,9,0,0,60,62,3,26,13,0,61,59,1,0,
0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,24,0,0,64,9,1,0,0,0,65,66,5,19,0,
0,66,67,5,29,0,0,67,68,5,9,0,0,68,69,5,1,0,0,69,70,3,26,13,0,70,71,5,2,0,
0,71,72,5,24,0,0,72,11,1,0,0,0,73,74,5,19,0,0,74,75,5,20,0,0,75,76,5,1,0,
0,76,81,3,26,13,0,77,78,5,34,0,0,78,80,3,26,13,0,79,77,1,0,0,0,80,83,1,0,
0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,1,0,0,0,84,85,5,2,0,
0,85,86,5,24,0,0,86,13,1,0,0,0,87,91,3,16,8,0,88,90,3,18,9,0,89,88,1,0,0,
0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,
94,96,3,20,10,0,95,94,1,0,0,0,95,96,1,0,0,0,96,15,1,0,0,0,97,98,5,13,0,0,
98,99,5,1,0,0,99,100,3,26,13,0,100,101,5,2,0,0,101,102,5,21,0,0,102,106,
5,32,0,0,103,105,3,6,3,0,104,103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,
106,107,1,0,0,0,107,109,1,0,0,0,108,106,1,0,0,0,109,110,5,22,0,0,110,17,
1,0,0,0,111,112,5,15,0,0,112,113,3,16,8,0,113,19,1,0,0,0,114,115,5,16,0,
0,115,116,5,21,0,0,116,120,5,32,0,0,117,119,3,6,3,0,118,117,1,0,0,0,119,
122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,120,1,0,
0,0,123,124,5,22,0,0,124,125,5,32,0,0,125,21,1,0,0,0,126,127,5,19,0,0,127,
132,5,29,0,0,128,129,5,4,0,0,129,133,5,4,0,0,130,131,5,5,0,0,131,133,5,5,
0,0,132,128,1,0,0,0,132,130,1,0,0,0,133,23,1,0,0,0,134,135,5,17,0,0,135,
136,5,1,0,0,136,137,3,26,13,0,137,138,5,2,0,0,138,139,5,21,0,0,139,143,5,
32,0,0,140,142,3,6,3,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,
144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,22,0,0,147,25,1,0,
0,0,148,149,6,13,-1,0,149,150,5,1,0,0,150,151,3,26,13,0,151,152,5,2,0,0,
152,160,1,0,0,0,153,160,7,0,0,0,154,160,5,25,0,0,155,160,5,27,0,0,156,160,
5,28,0,0,157,160,5,26,0,0,158,160,5,29,0,0,159,148,1,0,0,0,159,153,1,0,0,
0,159,154,1,0,0,0,159,155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,0,159,158,
1,0,0,0,160,169,1,0,0,0,161,162,10,8,0,0,162,163,7,1,0,0,163,168,3,26,13,
9,164,165,10,6,0,0,165,166,7,0,0,0,166,168,3,26,13,7,167,161,1,0,0,0,167,
164,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,27,1,0,0,
0,171,169,1,0,0,0,15,31,41,45,54,61,81,91,95,106,120,132,143,159,167,169];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MoonlightToCParser extends antlr4.Parser {

    static grammarFileName = "MoonlightToC.g4";
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
        this.ruleNames = MoonlightToCParser.ruleNames;
        this.literalNames = MoonlightToCParser.literalNames;
        this.symbolicNames = MoonlightToCParser.symbolicNames;
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
	    this.enterRule(localctx, 0, MoonlightToCParser.RULE_file);
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
	    this.enterRule(localctx, 2, MoonlightToCParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MoonlightToCParser.SERENITYCLASS);
	        this.state = 34;
	        this.match(MoonlightToCParser.INITKEY);
	        this.state = 35;
	        this.match(MoonlightToCParser.NEWLINE);
	        this.state = 36;
	        this.block();
	        this.state = 37;
	        this.match(MoonlightToCParser.FINALKEY);
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
	    this.enterRule(localctx, 4, MoonlightToCParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 39;
	            this.contenido();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 40;
	                this.match(MoonlightToCParser.NEWLINE);
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
	    this.enterRule(localctx, 6, MoonlightToCParser.RULE_contenido);
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
	    this.enterRule(localctx, 8, MoonlightToCParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(MoonlightToCParser.GATITO);
	        this.state = 57;
	        this.match(MoonlightToCParser.TYPE);
	        this.state = 58;
	        this.match(MoonlightToCParser.ID);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 59;
	            this.match(MoonlightToCParser.IGUAL);
	            this.state = 60;
	            this.expr(0);
	        }

	        this.state = 63;
	        this.match(MoonlightToCParser.PUNTITO);
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
	    this.enterRule(localctx, 10, MoonlightToCParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MoonlightToCParser.ARROW);
	        this.state = 66;
	        this.match(MoonlightToCParser.ID);
	        this.state = 67;
	        this.match(MoonlightToCParser.IGUAL);
	        this.state = 68;
	        this.match(MoonlightToCParser.T__0);
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
	        this.match(MoonlightToCParser.T__1);
	        this.state = 71;
	        this.match(MoonlightToCParser.PUNTITO);
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
	    this.enterRule(localctx, 12, MoonlightToCParser.RULE_impresion);
	    var _la = 0;
	    try {
	        localctx = new ShowExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(MoonlightToCParser.ARROW);
	        this.state = 74;
	        this.match(MoonlightToCParser.WHISPER);
	        this.state = 75;
	        this.match(MoonlightToCParser.T__0);
	        this.state = 76;
	        this.expr(0);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 77;
	            this.match(MoonlightToCParser.COMA);
	            this.state = 78;
	            this.expr(0);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this.match(MoonlightToCParser.T__1);
	        this.state = 85;
	        this.match(MoonlightToCParser.PUNTITO);
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
	    this.enterRule(localctx, 14, MoonlightToCParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.ifStatement();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 88;
	            this.elseIfStatement();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 94;
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
	    this.enterRule(localctx, 16, MoonlightToCParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(MoonlightToCParser.COZYCONDITION);
	        this.state = 98;
	        this.match(MoonlightToCParser.T__0);
	        this.state = 99;
	        this.expr(0);
	        this.state = 100;
	        this.match(MoonlightToCParser.T__1);
	        this.state = 101;
	        this.match(MoonlightToCParser.INITKEY);
	        this.state = 102;
	        this.match(MoonlightToCParser.NEWLINE);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 103;
	            this.contenido();
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 109;
	        this.match(MoonlightToCParser.FINALKEY);
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
	    this.enterRule(localctx, 18, MoonlightToCParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(MoonlightToCParser.ELSE);
	        this.state = 112;
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
	    this.enterRule(localctx, 20, MoonlightToCParser.RULE_elseStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(MoonlightToCParser.DREAMYELSE);
	        this.state = 115;
	        this.match(MoonlightToCParser.INITKEY);
	        this.state = 116;
	        this.match(MoonlightToCParser.NEWLINE);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 117;
	            this.contenido();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 123;
	        this.match(MoonlightToCParser.FINALKEY);
	        this.state = 124;
	        this.match(MoonlightToCParser.NEWLINE);
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
	    this.enterRule(localctx, 22, MoonlightToCParser.RULE_incremento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(MoonlightToCParser.ARROW);
	        this.state = 127;
	        this.match(MoonlightToCParser.ID);
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 128;
	            this.match(MoonlightToCParser.PLUS);
	            this.state = 129;
	            this.match(MoonlightToCParser.PLUS);
	            break;
	        case 5:
	            this.state = 130;
	            this.match(MoonlightToCParser.MINUS);
	            this.state = 131;
	            this.match(MoonlightToCParser.MINUS);
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
	    this.enterRule(localctx, 24, MoonlightToCParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(MoonlightToCParser.DREAMLOOP);
	        this.state = 135;
	        this.match(MoonlightToCParser.T__0);
	        this.state = 136;
	        this.expr(0);
	        this.state = 137;
	        this.match(MoonlightToCParser.T__1);
	        this.state = 138;
	        this.match(MoonlightToCParser.INITKEY);
	        this.state = 139;
	        this.match(MoonlightToCParser.NEWLINE);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 140;
	            this.contenido();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this.match(MoonlightToCParser.FINALKEY);
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
	    this.enterRecursionRule(localctx, 26, MoonlightToCParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 149;
	            this.match(MoonlightToCParser.T__0);
	            this.state = 150;
	            this.expr(0);
	            this.state = 151;
	            this.match(MoonlightToCParser.T__1);
	            break;
	        case 10:
	        case 11:
	            this.state = 153;
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
	            this.state = 154;
	            this.match(MoonlightToCParser.STARSTRING);
	            break;
	        case 27:
	            this.state = 155;
	            this.match(MoonlightToCParser.CHAR);
	            break;
	        case 28:
	            this.state = 156;
	            this.match(MoonlightToCParser.FLOAT);
	            break;
	        case 26:
	            this.state = 157;
	            this.match(MoonlightToCParser.NUM);
	            break;
	        case 29:
	            this.state = 158;
	            this.match(MoonlightToCParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 169;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 167;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MoonlightToCParser.RULE_expr);
	                    this.state = 161;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 162;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 496) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 163;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MoonlightToCParser.RULE_expr);
	                    this.state = 164;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
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
	                    this.state = 166;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 171;
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

MoonlightToCParser.EOF = antlr4.Token.EOF;
MoonlightToCParser.T__0 = 1;
MoonlightToCParser.T__1 = 2;
MoonlightToCParser.TYPE = 3;
MoonlightToCParser.PLUS = 4;
MoonlightToCParser.MINUS = 5;
MoonlightToCParser.MULT = 6;
MoonlightToCParser.DIV = 7;
MoonlightToCParser.MOD = 8;
MoonlightToCParser.IGUAL = 9;
MoonlightToCParser.OC = 10;
MoonlightToCParser.OL = 11;
MoonlightToCParser.SERENITYCLASS = 12;
MoonlightToCParser.COZYCONDITION = 13;
MoonlightToCParser.TWILIGHTOPTION = 14;
MoonlightToCParser.ELSE = 15;
MoonlightToCParser.DREAMYELSE = 16;
MoonlightToCParser.DREAMLOOP = 17;
MoonlightToCParser.DO = 18;
MoonlightToCParser.ARROW = 19;
MoonlightToCParser.WHISPER = 20;
MoonlightToCParser.INITKEY = 21;
MoonlightToCParser.FINALKEY = 22;
MoonlightToCParser.GATITO = 23;
MoonlightToCParser.PUNTITO = 24;
MoonlightToCParser.STARSTRING = 25;
MoonlightToCParser.NUM = 26;
MoonlightToCParser.CHAR = 27;
MoonlightToCParser.FLOAT = 28;
MoonlightToCParser.ID = 29;
MoonlightToCParser.LINECOMMENT = 30;
MoonlightToCParser.COMMENT = 31;
MoonlightToCParser.NEWLINE = 32;
MoonlightToCParser.SPACES = 33;
MoonlightToCParser.COMA = 34;

MoonlightToCParser.RULE_file = 0;
MoonlightToCParser.RULE_start = 1;
MoonlightToCParser.RULE_block = 2;
MoonlightToCParser.RULE_contenido = 3;
MoonlightToCParser.RULE_declaracion = 4;
MoonlightToCParser.RULE_asignacion = 5;
MoonlightToCParser.RULE_impresion = 6;
MoonlightToCParser.RULE_condicional = 7;
MoonlightToCParser.RULE_ifStatement = 8;
MoonlightToCParser.RULE_elseIfStatement = 9;
MoonlightToCParser.RULE_elseStatement = 10;
MoonlightToCParser.RULE_incremento = 11;
MoonlightToCParser.RULE_whileStatement = 12;
MoonlightToCParser.RULE_expr = 13;

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
        this.ruleIndex = MoonlightToCParser.RULE_file;
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_start;
    }

	SERENITYCLASS() {
	    return this.getToken(MoonlightToCParser.SERENITYCLASS, 0);
	};

	INITKEY() {
	    return this.getToken(MoonlightToCParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(MoonlightToCParser.NEWLINE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(MoonlightToCParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_block;
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
	        return this.getTokens(MoonlightToCParser.NEWLINE);
	    } else {
	        return this.getToken(MoonlightToCParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_contenido;
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_declaracion;
    }

	GATITO() {
	    return this.getToken(MoonlightToCParser.GATITO, 0);
	};

	TYPE() {
	    return this.getToken(MoonlightToCParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(MoonlightToCParser.ID, 0);
	};

	PUNTITO() {
	    return this.getToken(MoonlightToCParser.PUNTITO, 0);
	};

	IGUAL() {
	    return this.getToken(MoonlightToCParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_asignacion;
    }

	ARROW() {
	    return this.getToken(MoonlightToCParser.ARROW, 0);
	};

	ID() {
	    return this.getToken(MoonlightToCParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(MoonlightToCParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PUNTITO() {
	    return this.getToken(MoonlightToCParser.PUNTITO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_impresion;
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
	    return this.getToken(MoonlightToCParser.ARROW, 0);
	};

	WHISPER() {
	    return this.getToken(MoonlightToCParser.WHISPER, 0);
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
	    return this.getToken(MoonlightToCParser.PUNTITO, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MoonlightToCParser.COMA);
	    } else {
	        return this.getToken(MoonlightToCParser.COMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
	        return visitor.visitShowExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MoonlightToCParser.ShowExprContext = ShowExprContext;

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
        this.ruleIndex = MoonlightToCParser.RULE_condicional;
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_ifStatement;
    }

	COZYCONDITION() {
	    return this.getToken(MoonlightToCParser.COZYCONDITION, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	INITKEY() {
	    return this.getToken(MoonlightToCParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(MoonlightToCParser.NEWLINE, 0);
	};

	FINALKEY() {
	    return this.getToken(MoonlightToCParser.FINALKEY, 0);
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_elseIfStatement;
    }

	ELSE() {
	    return this.getToken(MoonlightToCParser.ELSE, 0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_elseStatement;
    }

	DREAMYELSE() {
	    return this.getToken(MoonlightToCParser.DREAMYELSE, 0);
	};

	INITKEY() {
	    return this.getToken(MoonlightToCParser.INITKEY, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MoonlightToCParser.NEWLINE);
	    } else {
	        return this.getToken(MoonlightToCParser.NEWLINE, i);
	    }
	};


	FINALKEY() {
	    return this.getToken(MoonlightToCParser.FINALKEY, 0);
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_incremento;
    }

	ARROW() {
	    return this.getToken(MoonlightToCParser.ARROW, 0);
	};

	ID() {
	    return this.getToken(MoonlightToCParser.ID, 0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MoonlightToCParser.PLUS);
	    } else {
	        return this.getToken(MoonlightToCParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MoonlightToCParser.MINUS);
	    } else {
	        return this.getToken(MoonlightToCParser.MINUS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_whileStatement;
    }

	DREAMLOOP() {
	    return this.getToken(MoonlightToCParser.DREAMLOOP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	INITKEY() {
	    return this.getToken(MoonlightToCParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(MoonlightToCParser.NEWLINE, 0);
	};

	FINALKEY() {
	    return this.getToken(MoonlightToCParser.FINALKEY, 0);
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
	    if ( visitor instanceof MoonlightToCVisitor ) {
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
        this.ruleIndex = MoonlightToCParser.RULE_expr;
        this.cond_value = null;
        this.operation = null;
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

	OC() {
	    return this.getToken(MoonlightToCParser.OC, 0);
	};

	OL() {
	    return this.getToken(MoonlightToCParser.OL, 0);
	};

	STARSTRING() {
	    return this.getToken(MoonlightToCParser.STARSTRING, 0);
	};

	CHAR() {
	    return this.getToken(MoonlightToCParser.CHAR, 0);
	};

	FLOAT() {
	    return this.getToken(MoonlightToCParser.FLOAT, 0);
	};

	NUM() {
	    return this.getToken(MoonlightToCParser.NUM, 0);
	};

	ID() {
	    return this.getToken(MoonlightToCParser.ID, 0);
	};

	MULT() {
	    return this.getToken(MoonlightToCParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(MoonlightToCParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(MoonlightToCParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(MoonlightToCParser.MINUS, 0);
	};

	MOD() {
	    return this.getToken(MoonlightToCParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MoonlightToCVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MoonlightToCParser.FileContext = FileContext; 
MoonlightToCParser.StartContext = StartContext; 
MoonlightToCParser.BlockContext = BlockContext; 
MoonlightToCParser.ContenidoContext = ContenidoContext; 
MoonlightToCParser.DeclaracionContext = DeclaracionContext; 
MoonlightToCParser.AsignacionContext = AsignacionContext; 
MoonlightToCParser.ImpresionContext = ImpresionContext; 
MoonlightToCParser.CondicionalContext = CondicionalContext; 
MoonlightToCParser.IfStatementContext = IfStatementContext; 
MoonlightToCParser.ElseIfStatementContext = ElseIfStatementContext; 
MoonlightToCParser.ElseStatementContext = ElseStatementContext; 
MoonlightToCParser.IncrementoContext = IncrementoContext; 
MoonlightToCParser.WhileStatementContext = WhileStatementContext; 
MoonlightToCParser.ExprContext = ExprContext; 
