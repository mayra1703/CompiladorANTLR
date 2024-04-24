// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,30,148,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,
8,0,11,0,12,0,27,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,2,37,8,2,10,2,12,2,40,9,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,49,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,3,4,64,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,90,8,6,1,7,1,7,5,
7,94,8,7,10,7,12,7,97,9,7,1,7,3,7,100,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,3,11,130,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,5,11,143,8,11,10,11,12,11,146,9,11,1,11,0,1,22,12,0,
2,4,6,8,10,12,14,16,18,20,22,0,3,1,0,9,10,1,0,6,7,1,0,4,5,154,0,25,1,0,0,
0,2,29,1,0,0,0,4,38,1,0,0,0,6,48,1,0,0,0,8,63,1,0,0,0,10,65,1,0,0,0,12,89,
1,0,0,0,14,91,1,0,0,0,16,101,1,0,0,0,18,111,1,0,0,0,20,114,1,0,0,0,22,129,
1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,
0,0,0,28,1,1,0,0,0,29,30,5,11,0,0,30,31,5,18,0,0,31,32,5,29,0,0,32,33,3,
4,2,0,33,34,5,19,0,0,34,3,1,0,0,0,35,37,3,6,3,0,36,35,1,0,0,0,37,40,1,0,
0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,5,1,0,0,0,40,38,1,0,0,0,41,49,3,8,4,0,
42,49,3,12,6,0,43,49,3,14,7,0,44,49,3,10,5,0,45,49,5,22,0,0,46,49,5,28,0,
0,47,49,5,27,0,0,48,41,1,0,0,0,48,42,1,0,0,0,48,43,1,0,0,0,48,44,1,0,0,0,
48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,7,1,0,0,0,50,51,5,20,0,0,51,
52,5,3,0,0,52,53,5,26,0,0,53,54,5,21,0,0,54,64,5,29,0,0,55,56,5,20,0,0,56,
57,5,3,0,0,57,58,5,26,0,0,58,59,5,8,0,0,59,60,3,22,11,0,60,61,5,21,0,0,61,
62,5,29,0,0,62,64,1,0,0,0,63,50,1,0,0,0,63,55,1,0,0,0,64,9,1,0,0,0,65,66,
5,16,0,0,66,67,5,26,0,0,67,68,5,8,0,0,68,69,5,1,0,0,69,70,3,22,11,0,70,71,
5,2,0,0,71,72,5,21,0,0,72,73,5,29,0,0,73,11,1,0,0,0,74,75,5,16,0,0,75,76,
5,17,0,0,76,77,5,1,0,0,77,78,3,22,11,0,78,79,5,2,0,0,79,80,5,21,0,0,80,81,
5,29,0,0,81,90,1,0,0,0,82,83,5,16,0,0,83,84,5,17,0,0,84,85,5,1,0,0,85,86,
5,22,0,0,86,87,5,2,0,0,87,88,5,21,0,0,88,90,5,29,0,0,89,74,1,0,0,0,89,82,
1,0,0,0,90,13,1,0,0,0,91,95,3,16,8,0,92,94,3,18,9,0,93,92,1,0,0,0,94,97,
1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,98,100,3,
20,10,0,99,98,1,0,0,0,99,100,1,0,0,0,100,15,1,0,0,0,101,102,5,12,0,0,102,
103,5,1,0,0,103,104,3,22,11,0,104,105,5,2,0,0,105,106,5,18,0,0,106,107,5,
29,0,0,107,108,3,4,2,0,108,109,5,19,0,0,109,110,5,29,0,0,110,17,1,0,0,0,
111,112,5,14,0,0,112,113,3,16,8,0,113,19,1,0,0,0,114,115,5,15,0,0,115,116,
5,18,0,0,116,117,5,29,0,0,117,118,3,4,2,0,118,119,5,19,0,0,119,120,5,29,
0,0,120,21,1,0,0,0,121,122,6,11,-1,0,122,123,5,1,0,0,123,124,3,22,11,0,124,
125,5,2,0,0,125,130,1,0,0,0,126,130,7,0,0,0,127,130,5,26,0,0,128,130,5,24,
0,0,129,121,1,0,0,0,129,126,1,0,0,0,129,127,1,0,0,0,129,128,1,0,0,0,130,
144,1,0,0,0,131,132,10,7,0,0,132,143,3,22,11,8,133,134,10,6,0,0,134,135,
7,1,0,0,135,143,3,22,11,7,136,137,10,5,0,0,137,138,7,2,0,0,138,143,3,22,
11,6,139,140,10,3,0,0,140,141,7,0,0,0,141,143,3,22,11,4,142,131,1,0,0,0,
142,133,1,0,0,0,142,136,1,0,0,0,142,139,1,0,0,0,143,146,1,0,0,0,144,142,
1,0,0,0,144,145,1,0,0,0,145,23,1,0,0,0,146,144,1,0,0,0,10,27,38,48,63,89,
95,99,129,142,144];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'('", "')'", null, "'+'", "'-'", "'*'", 
                            "'/'", "'='", null, null, "'SerenityClass'", 
                            "'CozyCondition'", "'TwilightOption'", "'else'", 
                            "'DreamElse'", "'->'", "'WHISPER'", "'{'", "'}'", 
                            "'#'", "'.'" ];
    static symbolicNames = [ null, null, null, "TYPE", "PLUS", "MINUS", 
                             "MULT", "DIV", "IGUAL", "OC", "OL", "SERENITYCLASS", 
                             "COZYCONDITION", "TWILIGHTOPTION", "ELSE", 
                             "DREAMYELSE", "ARROW", "WHISPER", "INITKEY", 
                             "FINALKEY", "GATITO", "PUNTITO", "STARSTRING", 
                             "CHAR", "NUM", "FLOAT", "ID", "LINECOMMENT", 
                             "COMMENT", "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompilatorParser.ruleNames;
        this.literalNames = CompilatorParser.literalNames;
        this.symbolicNames = CompilatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 3);
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
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.start();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11);
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
	        this.state = 29;
	        this.match(CompilatorParser.SERENITYCLASS);
	        this.state = 30;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 31;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 32;
	        this.block();
	        this.state = 33;
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 407965696) !== 0)) {
	            this.state = 35;
	            this.contenido();
	            this.state = 40;
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
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.asignacion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
	            this.match(CompilatorParser.STARSTRING);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 46;
	            this.match(CompilatorParser.COMMENT);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 47;
	            this.match(CompilatorParser.LINECOMMENT);
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
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(CompilatorParser.GATITO);
	            this.state = 51;
	            this.match(CompilatorParser.TYPE);
	            this.state = 52;
	            this.match(CompilatorParser.ID);
	            this.state = 53;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 54;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(CompilatorParser.GATITO);
	            this.state = 56;
	            this.match(CompilatorParser.TYPE);
	            this.state = 57;
	            this.match(CompilatorParser.ID);
	            this.state = 58;
	            this.match(CompilatorParser.IGUAL);
	            this.state = 59;
	            this.expr(0);
	            this.state = 60;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 61;
	            this.match(CompilatorParser.NEWLINE);
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
	        this.state = 72;
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompilatorParser.RULE_impresion);
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ShowExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(CompilatorParser.ARROW);
	            this.state = 75;
	            this.match(CompilatorParser.WHISPER);
	            this.state = 76;
	            this.match(CompilatorParser.T__0);
	            this.state = 77;
	            this.expr(0);
	            this.state = 78;
	            this.match(CompilatorParser.T__1);
	            this.state = 79;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 80;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ShowStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.match(CompilatorParser.ARROW);
	            this.state = 83;
	            this.match(CompilatorParser.WHISPER);
	            this.state = 84;
	            this.match(CompilatorParser.T__0);
	            this.state = 85;
	            this.match(CompilatorParser.STARSTRING);
	            this.state = 86;
	            this.match(CompilatorParser.T__1);
	            this.state = 87;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 88;
	            this.match(CompilatorParser.NEWLINE);
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



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompilatorParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.ifStatement();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 92;
	            this.elseIfStatement();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 98;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(CompilatorParser.COZYCONDITION);
	        this.state = 102;
	        this.match(CompilatorParser.T__0);
	        this.state = 103;
	        this.expr(0);
	        this.state = 104;
	        this.match(CompilatorParser.T__1);
	        this.state = 105;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 106;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 107;
	        this.block();
	        this.state = 108;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 109;
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



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CompilatorParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(CompilatorParser.ELSE);
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
	    this.enterRule(localctx, 20, CompilatorParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(CompilatorParser.DREAMYELSE);
	        this.state = 115;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 116;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 117;
	        this.block();
	        this.state = 118;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 119;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, CompilatorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 122;
	            this.match(CompilatorParser.T__0);
	            this.state = 123;
	            this.expr(0);
	            this.state = 124;
	            this.match(CompilatorParser.T__1);
	            break;
	        case 9:
	        case 10:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            localctx.cond_value = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	                localctx.cond_value = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 26:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 127;
	            this.match(CompilatorParser.ID);
	            break;
	        case 24:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 128;
	            this.match(CompilatorParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 142;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ImpmultiContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 131;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 132;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new MultidivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 134;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 135;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new MasmenosContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 136;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 137;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 138;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 139;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 140;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 141;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 146;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
CompilatorParser.IGUAL = 8;
CompilatorParser.OC = 9;
CompilatorParser.OL = 10;
CompilatorParser.SERENITYCLASS = 11;
CompilatorParser.COZYCONDITION = 12;
CompilatorParser.TWILIGHTOPTION = 13;
CompilatorParser.ELSE = 14;
CompilatorParser.DREAMYELSE = 15;
CompilatorParser.ARROW = 16;
CompilatorParser.WHISPER = 17;
CompilatorParser.INITKEY = 18;
CompilatorParser.FINALKEY = 19;
CompilatorParser.GATITO = 20;
CompilatorParser.PUNTITO = 21;
CompilatorParser.STARSTRING = 22;
CompilatorParser.CHAR = 23;
CompilatorParser.NUM = 24;
CompilatorParser.FLOAT = 25;
CompilatorParser.ID = 26;
CompilatorParser.LINECOMMENT = 27;
CompilatorParser.COMMENT = 28;
CompilatorParser.NEWLINE = 29;
CompilatorParser.SPACES = 30;

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
CompilatorParser.RULE_expr = 11;

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

	STARSTRING() {
	    return this.getToken(CompilatorParser.STARSTRING, 0);
	};

	COMMENT() {
	    return this.getToken(CompilatorParser.COMMENT, 0);
	};

	LINECOMMENT() {
	    return this.getToken(CompilatorParser.LINECOMMENT, 0);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        return visitor.visitValidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ValidAssignContext = ValidAssignContext;

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

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
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


class ShowStringContext extends ImpresionContext {

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

	STARSTRING() {
	    return this.getToken(CompilatorParser.STARSTRING, 0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitShowString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ShowStringContext = ShowStringContext;

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

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
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


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
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


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitElseStatement(this);
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

class MultidivContext extends ExprContext {

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

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitMultidiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.MultidivContext = MultidivContext;

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

class MasmenosContext extends ExprContext {

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
	        return visitor.visitMasmenos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.MasmenosContext = MasmenosContext;

class ImpmultiContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
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

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitImpmulti(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ImpmultiContext = ImpmultiContext;

class NumContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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
CompilatorParser.ExprContext = ExprContext; 
