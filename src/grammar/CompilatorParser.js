// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,33,166,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,
2,42,8,2,4,2,44,8,2,11,2,12,2,45,1,3,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,4,
1,4,1,4,1,4,1,4,3,4,61,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,83,8,7,10,7,12,7,86,9,7,1,7,3,7,89,
8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,98,8,8,10,8,12,8,101,9,8,1,8,1,8,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,5,10,112,8,10,10,10,12,10,115,9,10,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,126,8,11,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,5,12,135,8,12,10,12,12,12,138,9,12,1,12,1,12,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,153,8,13,1,13,1,13,1,13,1,13,
1,13,1,13,5,13,161,8,13,10,13,12,13,164,9,13,1,13,0,1,26,14,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,0,2,1,0,10,11,1,0,4,8,174,0,29,1,0,0,0,2,33,1,0,
0,0,4,43,1,0,0,0,6,53,1,0,0,0,8,55,1,0,0,0,10,65,1,0,0,0,12,73,1,0,0,0,14,
80,1,0,0,0,16,90,1,0,0,0,18,104,1,0,0,0,20,107,1,0,0,0,22,119,1,0,0,0,24,
127,1,0,0,0,26,152,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,
29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,12,0,0,34,35,5,21,0,0,35,36,
5,32,0,0,36,37,3,4,2,0,37,38,5,22,0,0,38,3,1,0,0,0,39,41,3,6,3,0,40,42,5,
32,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,39,1,0,0,0,44,45,1,0,
0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,0,0,47,54,3,8,4,0,48,54,3,12,6,
0,49,54,3,14,7,0,50,54,3,10,5,0,51,54,3,24,12,0,52,54,3,22,11,0,53,47,1,
0,0,0,53,48,1,0,0,0,53,49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,
0,0,54,7,1,0,0,0,55,56,5,23,0,0,56,57,5,3,0,0,57,60,5,29,0,0,58,59,5,9,0,
0,59,61,3,26,13,0,60,58,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,24,0,
0,63,64,5,32,0,0,64,9,1,0,0,0,65,66,5,19,0,0,66,67,5,29,0,0,67,68,5,9,0,
0,68,69,5,1,0,0,69,70,3,26,13,0,70,71,5,2,0,0,71,72,5,24,0,0,72,11,1,0,0,
0,73,74,5,19,0,0,74,75,5,20,0,0,75,76,5,1,0,0,76,77,3,26,13,0,77,78,5,2,
0,0,78,79,5,24,0,0,79,13,1,0,0,0,80,84,3,16,8,0,81,83,3,18,9,0,82,81,1,0,
0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,
0,87,89,3,20,10,0,88,87,1,0,0,0,88,89,1,0,0,0,89,15,1,0,0,0,90,91,5,13,0,
0,91,92,5,1,0,0,92,93,3,26,13,0,93,94,5,2,0,0,94,95,5,21,0,0,95,99,5,32,
0,0,96,98,3,6,3,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,
0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,22,0,0,103,17,1,0,0,0,104,105,
5,15,0,0,105,106,3,16,8,0,106,19,1,0,0,0,107,108,5,16,0,0,108,109,5,21,0,
0,109,113,5,32,0,0,110,112,3,6,3,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,
1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,5,22,0,0,
117,118,5,32,0,0,118,21,1,0,0,0,119,120,5,19,0,0,120,125,5,29,0,0,121,122,
5,4,0,0,122,126,5,4,0,0,123,124,5,5,0,0,124,126,5,5,0,0,125,121,1,0,0,0,
125,123,1,0,0,0,126,23,1,0,0,0,127,128,5,17,0,0,128,129,5,1,0,0,129,130,
3,26,13,0,130,131,5,2,0,0,131,132,5,21,0,0,132,136,5,32,0,0,133,135,3,6,
3,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,
139,1,0,0,0,138,136,1,0,0,0,139,140,5,22,0,0,140,25,1,0,0,0,141,142,6,13,
-1,0,142,143,5,1,0,0,143,144,3,26,13,0,144,145,5,2,0,0,145,153,1,0,0,0,146,
153,7,0,0,0,147,153,5,25,0,0,148,153,5,27,0,0,149,153,5,28,0,0,150,153,5,
26,0,0,151,153,5,29,0,0,152,141,1,0,0,0,152,146,1,0,0,0,152,147,1,0,0,0,
152,148,1,0,0,0,152,149,1,0,0,0,152,150,1,0,0,0,152,151,1,0,0,0,153,162,
1,0,0,0,154,155,10,8,0,0,155,156,7,1,0,0,156,161,3,26,13,9,157,158,10,6,
0,0,158,159,7,0,0,0,159,161,3,26,13,7,160,154,1,0,0,0,160,157,1,0,0,0,161,
164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,27,1,0,0,0,164,162,1,0,0,
0,14,31,41,45,53,60,84,88,99,113,125,136,152,160,162];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'('", "')'", null, "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'='", null, null, "'SerenityClass'", 
                            "'CozyCondition'", "'TwilightOption'", "'else'", 
                            "'DreamElse'", "'DreamLoop'", "'do'", "'->'", 
                            "'WHISPER'", "'{'", "'}'", "'#'", "'.'" ];
    static symbolicNames = [ null, null, null, "TYPE", "PLUS", "MINUS", 
                             "MULT", "DIV", "MOD", "IGUAL", "OC", "OL", 
                             "SERENITYCLASS", "COZYCONDITION", "TWILIGHTOPTION", 
                             "ELSE", "DREAMYELSE", "DREAMLOOP", "DO", "ARROW", 
                             "WHISPER", "INITKEY", "FINALKEY", "GATITO", 
                             "PUNTITO", "STARSTRING", "NUM", "CHAR", "FLOAT", 
                             "ID", "LINECOMMENT", "COMMENT", "NEWLINE", 
                             "SPACES" ];
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
	        this.state = 63;
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompilatorParser.RULE_asignacion);
	    try {
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
	    try {
	        localctx = new ShowExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(CompilatorParser.ARROW);
	        this.state = 74;
	        this.match(CompilatorParser.WHISPER);
	        this.state = 75;
	        this.match(CompilatorParser.T__0);
	        this.state = 76;
	        this.expr(0);
	        this.state = 77;
	        this.match(CompilatorParser.T__1);
	        this.state = 78;
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
	        this.state = 80;
	        this.ifStatement();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 81;
	            this.elseIfStatement();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 87;
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
	        this.state = 90;
	        this.match(CompilatorParser.COZYCONDITION);
	        this.state = 91;
	        this.match(CompilatorParser.T__0);
	        this.state = 92;
	        this.expr(0);
	        this.state = 93;
	        this.match(CompilatorParser.T__1);
	        this.state = 94;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 95;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 96;
	            this.contenido();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
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
	        this.state = 104;
	        this.match(CompilatorParser.ELSE);
	        this.state = 105;
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
	        this.state = 107;
	        this.match(CompilatorParser.DREAMYELSE);
	        this.state = 108;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 109;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 110;
	            this.contenido();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 116;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 117;
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
	        this.state = 119;
	        this.match(CompilatorParser.ARROW);
	        this.state = 120;
	        this.match(CompilatorParser.ID);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 121;
	            this.match(CompilatorParser.PLUS);
	            this.state = 122;
	            this.match(CompilatorParser.PLUS);
	            break;
	        case 5:
	            this.state = 123;
	            this.match(CompilatorParser.MINUS);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(CompilatorParser.DREAMLOOP);
	        this.state = 128;
	        this.match(CompilatorParser.T__0);
	        this.state = 129;
	        this.expr(0);
	        this.state = 130;
	        this.match(CompilatorParser.T__1);
	        this.state = 131;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 132;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9052160) !== 0)) {
	            this.state = 133;
	            this.contenido();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 139;
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
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 142;
	            this.match(CompilatorParser.T__0);
	            this.state = 143;
	            this.expr(0);
	            this.state = 144;
	            this.match(CompilatorParser.T__1);
	            break;
	        case 10:
	        case 11:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 146;
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
	            this.state = 147;
	            this.match(CompilatorParser.STARSTRING);
	            break;
	        case 27:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            this.match(CompilatorParser.CHAR);
	            break;
	        case 28:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(CompilatorParser.FLOAT);
	            break;
	        case 26:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(CompilatorParser.NUM);
	            break;
	        case 29:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(CompilatorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 160;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 155;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 496) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 156;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 158;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 164;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
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
