// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,30,164,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,2,41,
8,2,10,2,12,2,44,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,53,8,3,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,3,6,94,8,6,1,7,1,7,5,7,98,8,7,10,7,12,7,101,9,7,1,7,3,7,104,8,7,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,151,8,13,
1,13,1,13,1,13,1,13,1,13,1,13,5,13,159,8,13,10,13,12,13,162,9,13,1,13,0,
1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,1,0,9,10,1,0,4,7,166,0,
29,1,0,0,0,2,33,1,0,0,0,4,42,1,0,0,0,6,52,1,0,0,0,8,67,1,0,0,0,10,69,1,0,
0,0,12,93,1,0,0,0,14,95,1,0,0,0,16,105,1,0,0,0,18,115,1,0,0,0,20,118,1,0,
0,0,22,125,1,0,0,0,24,133,1,0,0,0,26,150,1,0,0,0,28,30,3,2,1,0,29,28,1,0,
0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,11,0,
0,34,35,5,20,0,0,35,36,5,29,0,0,36,37,3,4,2,0,37,38,5,21,0,0,38,3,1,0,0,
0,39,41,3,6,3,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,
43,5,1,0,0,0,44,42,1,0,0,0,45,53,3,8,4,0,46,53,3,12,6,0,47,53,3,14,7,0,48,
53,3,10,5,0,49,53,5,24,0,0,50,53,3,22,11,0,51,53,3,24,12,0,52,45,1,0,0,0,
52,46,1,0,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,1,0,0,0,52,50,1,0,0,0,52,
51,1,0,0,0,53,7,1,0,0,0,54,55,5,22,0,0,55,56,5,3,0,0,56,57,5,26,0,0,57,58,
5,23,0,0,58,68,5,29,0,0,59,60,5,22,0,0,60,61,5,3,0,0,61,62,5,26,0,0,62,63,
5,8,0,0,63,64,3,26,13,0,64,65,5,23,0,0,65,66,5,29,0,0,66,68,1,0,0,0,67,54,
1,0,0,0,67,59,1,0,0,0,68,9,1,0,0,0,69,70,5,18,0,0,70,71,5,26,0,0,71,72,5,
8,0,0,72,73,5,1,0,0,73,74,3,26,13,0,74,75,5,2,0,0,75,76,5,23,0,0,76,77,5,
29,0,0,77,11,1,0,0,0,78,79,5,18,0,0,79,80,5,19,0,0,80,81,5,1,0,0,81,82,3,
26,13,0,82,83,5,2,0,0,83,84,5,23,0,0,84,85,5,29,0,0,85,94,1,0,0,0,86,87,
5,18,0,0,87,88,5,19,0,0,88,89,5,1,0,0,89,90,5,24,0,0,90,91,5,2,0,0,91,92,
5,23,0,0,92,94,5,29,0,0,93,78,1,0,0,0,93,86,1,0,0,0,94,13,1,0,0,0,95,99,
3,16,8,0,96,98,3,18,9,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,
1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,102,104,3,20,10,0,103,102,1,0,0,0,
103,104,1,0,0,0,104,15,1,0,0,0,105,106,5,12,0,0,106,107,5,1,0,0,107,108,
3,26,13,0,108,109,5,2,0,0,109,110,5,20,0,0,110,111,5,29,0,0,111,112,3,4,
2,0,112,113,5,21,0,0,113,114,5,29,0,0,114,17,1,0,0,0,115,116,5,14,0,0,116,
117,3,16,8,0,117,19,1,0,0,0,118,119,5,15,0,0,119,120,5,20,0,0,120,121,5,
29,0,0,121,122,3,4,2,0,122,123,5,21,0,0,123,124,5,29,0,0,124,21,1,0,0,0,
125,126,5,16,0,0,126,127,5,1,0,0,127,128,3,26,13,0,128,129,5,2,0,0,129,130,
5,20,0,0,130,131,3,4,2,0,131,132,5,21,0,0,132,23,1,0,0,0,133,134,5,17,0,
0,134,135,5,1,0,0,135,136,3,4,2,0,136,137,5,2,0,0,137,138,5,16,0,0,138,139,
5,1,0,0,139,140,3,26,13,0,140,141,5,2,0,0,141,25,1,0,0,0,142,143,6,13,-1,
0,143,144,5,1,0,0,144,145,3,26,13,0,145,146,5,2,0,0,146,151,1,0,0,0,147,
151,7,0,0,0,148,151,5,26,0,0,149,151,5,25,0,0,150,142,1,0,0,0,150,147,1,
0,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,160,1,0,0,0,152,153,10,5,0,0,153,
154,7,1,0,0,154,159,3,26,13,6,155,156,10,3,0,0,156,157,7,0,0,0,157,159,3,
26,13,4,158,152,1,0,0,0,158,155,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,
160,161,1,0,0,0,161,27,1,0,0,0,162,160,1,0,0,0,10,31,42,52,67,93,99,103,
150,158,160];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'('", "')'", null, "'+'", "'-'", "'*'", 
                            "'/'", "'='", null, null, "'SerenityClass'", 
                            "'CozyCondition'", "'TwilightOption'", "'else'", 
                            "'DreamElse'", "'DreamLoop'", "'do'", "'->'", 
                            "'WHISPER'", "'{'", "'}'", "'#'", "'.'" ];
    static symbolicNames = [ null, null, null, "TYPE", "PLUS", "MINUS", 
                             "MULT", "DIV", "IGUAL", "OC", "OL", "SERENITYCLASS", 
                             "COZYCONDITION", "TWILIGHTOPTION", "ELSE", 
                             "DREAMYELSE", "DREAMLOOP", "DO", "ARROW", "WHISPER", 
                             "INITKEY", "FINALKEY", "GATITO", "PUNTITO", 
                             "STARSTRING", "NUM", "ID", "LINECOMMENT", "COMMENT", 
                             "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "whileStatement", 
                         "doWhileStatement", "expr" ];

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
    			return this.precpred(this._ctx, 5);
    		case 1:
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
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.start();
	            this.state = 31; 
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
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 21434368) !== 0)) {
	            this.state = 39;
	            this.contenido();
	            this.state = 44;
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
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.asignacion();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.match(CompilatorParser.STARSTRING);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 50;
	            this.whileStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 51;
	            this.doWhileStatement();
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(CompilatorParser.GATITO);
	            this.state = 55;
	            this.match(CompilatorParser.TYPE);
	            this.state = 56;
	            this.match(CompilatorParser.ID);
	            this.state = 57;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 58;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(CompilatorParser.GATITO);
	            this.state = 60;
	            this.match(CompilatorParser.TYPE);
	            this.state = 61;
	            this.match(CompilatorParser.ID);
	            this.state = 62;
	            this.match(CompilatorParser.IGUAL);
	            this.state = 63;
	            this.expr(0);
	            this.state = 64;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 65;
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
	        this.state = 69;
	        this.match(CompilatorParser.ARROW);
	        this.state = 70;
	        this.match(CompilatorParser.ID);
	        this.state = 71;
	        this.match(CompilatorParser.IGUAL);
	        this.state = 72;
	        this.match(CompilatorParser.T__0);
	        this.state = 73;
	        this.expr(0);
	        this.state = 74;
	        this.match(CompilatorParser.T__1);
	        this.state = 75;
	        this.match(CompilatorParser.PUNTITO);
	        this.state = 76;
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ShowExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(CompilatorParser.ARROW);
	            this.state = 79;
	            this.match(CompilatorParser.WHISPER);
	            this.state = 80;
	            this.match(CompilatorParser.T__0);
	            this.state = 81;
	            this.expr(0);
	            this.state = 82;
	            this.match(CompilatorParser.T__1);
	            this.state = 83;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 84;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ShowStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.match(CompilatorParser.ARROW);
	            this.state = 87;
	            this.match(CompilatorParser.WHISPER);
	            this.state = 88;
	            this.match(CompilatorParser.T__0);
	            this.state = 89;
	            this.match(CompilatorParser.STARSTRING);
	            this.state = 90;
	            this.match(CompilatorParser.T__1);
	            this.state = 91;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 92;
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
	        this.state = 95;
	        this.ifStatement();
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 96;
	            this.elseIfStatement();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 102;
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
	        this.state = 105;
	        this.match(CompilatorParser.COZYCONDITION);
	        this.state = 106;
	        this.match(CompilatorParser.T__0);
	        this.state = 107;
	        this.expr(0);
	        this.state = 108;
	        this.match(CompilatorParser.T__1);
	        this.state = 109;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 110;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 111;
	        this.block();
	        this.state = 112;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 113;
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
	        this.state = 115;
	        this.match(CompilatorParser.ELSE);
	        this.state = 116;
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
	        this.state = 118;
	        this.match(CompilatorParser.DREAMYELSE);
	        this.state = 119;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 120;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 121;
	        this.block();
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CompilatorParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(CompilatorParser.DREAMLOOP);
	        this.state = 126;
	        this.match(CompilatorParser.T__0);
	        this.state = 127;
	        this.expr(0);
	        this.state = 128;
	        this.match(CompilatorParser.T__1);
	        this.state = 129;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 130;
	        this.block();
	        this.state = 131;
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



	doWhileStatement() {
	    let localctx = new DoWhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CompilatorParser.RULE_doWhileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(CompilatorParser.DO);
	        this.state = 134;
	        this.match(CompilatorParser.T__0);
	        this.state = 135;
	        this.block();
	        this.state = 136;
	        this.match(CompilatorParser.T__1);
	        this.state = 137;
	        this.match(CompilatorParser.DREAMLOOP);
	        this.state = 138;
	        this.match(CompilatorParser.T__0);
	        this.state = 139;
	        this.expr(0);
	        this.state = 140;
	        this.match(CompilatorParser.T__1);
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
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 143;
	            this.match(CompilatorParser.T__0);
	            this.state = 144;
	            this.expr(0);
	            this.state = 145;
	            this.match(CompilatorParser.T__1);
	            break;
	        case 9:
	        case 10:
	            localctx = new ConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
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
	            this.state = 148;
	            this.match(CompilatorParser.ID);
	            break;
	        case 25:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(CompilatorParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 158;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 152;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 153;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 240) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 154;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new ConditionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 155;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 156;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 157;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 162;
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
CompilatorParser.DREAMLOOP = 16;
CompilatorParser.DO = 17;
CompilatorParser.ARROW = 18;
CompilatorParser.WHISPER = 19;
CompilatorParser.INITKEY = 20;
CompilatorParser.FINALKEY = 21;
CompilatorParser.GATITO = 22;
CompilatorParser.PUNTITO = 23;
CompilatorParser.STARSTRING = 24;
CompilatorParser.NUM = 25;
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
CompilatorParser.RULE_whileStatement = 11;
CompilatorParser.RULE_doWhileStatement = 12;
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

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	doWhileStatement() {
	    return this.getTypedRuleContext(DoWhileStatementContext,0);
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

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CompilatorParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_doWhileStatement;
    }

	DO() {
	    return this.getToken(CompilatorParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	DREAMLOOP() {
	    return this.getToken(CompilatorParser.DREAMLOOP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitDoWhileStatement(this);
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
CompilatorParser.WhileStatementContext = WhileStatementContext; 
CompilatorParser.DoWhileStatementContext = DoWhileStatementContext; 
CompilatorParser.ExprContext = ExprContext; 
