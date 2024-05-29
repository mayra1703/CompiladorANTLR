// Generated from ./grammar/C.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CVisitor from './CVisitor.js';

const serializedATN = [4,1,35,174,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
2,1,2,3,2,44,8,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
57,8,3,1,4,1,4,1,4,1,4,3,4,63,8,4,1,4,3,4,66,8,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,5,6,78,8,6,10,6,12,6,81,9,6,1,6,1,6,1,6,1,7,1,7,5,7,88,8,
7,10,7,12,7,91,9,7,1,7,3,7,94,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,102,8,8,10,
8,12,8,105,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,5,10,115,8,10,10,10,12,
10,118,9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,129,8,11,10,
11,12,11,132,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,3,12,147,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,155,8,12,10,12,
12,12,158,9,12,1,13,1,13,3,13,162,8,13,1,13,1,13,1,13,1,13,3,13,168,8,13,
1,13,1,13,3,13,172,8,13,1,13,0,1,24,14,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,0,3,2,0,11,11,14,14,2,0,2,2,12,13,1,0,6,10,186,0,29,1,0,0,0,2,33,1,0,
0,0,4,47,1,0,0,0,6,56,1,0,0,0,8,58,1,0,0,0,10,67,1,0,0,0,12,72,1,0,0,0,14,
85,1,0,0,0,16,95,1,0,0,0,18,108,1,0,0,0,20,111,1,0,0,0,22,122,1,0,0,0,24,
146,1,0,0,0,26,171,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,
29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,15,0,0,34,35,5,16,0,0,35,36,
5,17,0,0,36,37,5,18,0,0,37,38,5,24,0,0,38,39,3,4,2,0,39,40,5,25,0,0,40,3,
1,0,0,0,41,43,3,6,3,0,42,44,5,32,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,
0,0,0,45,41,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,
0,49,47,1,0,0,0,50,57,3,8,4,0,51,57,3,10,5,0,52,57,3,14,7,0,53,57,3,22,11,
0,54,57,3,12,6,0,55,57,3,26,13,0,56,50,1,0,0,0,56,51,1,0,0,0,56,52,1,0,0,
0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,0,58,59,5,1,0,0,59,
62,5,30,0,0,60,61,5,11,0,0,61,63,3,24,12,0,62,60,1,0,0,0,62,63,1,0,0,0,63,
65,1,0,0,0,64,66,5,26,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,67,68,
5,30,0,0,68,69,7,0,0,0,69,70,3,24,12,0,70,71,5,26,0,0,71,11,1,0,0,0,72,73,
5,23,0,0,73,74,5,17,0,0,74,79,3,24,12,0,75,76,5,35,0,0,76,78,3,24,12,0,77,
75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,
1,0,0,0,82,83,5,18,0,0,83,84,5,26,0,0,84,13,1,0,0,0,85,89,3,16,8,0,86,88,
3,18,9,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,93,1,
0,0,0,91,89,1,0,0,0,92,94,3,20,10,0,93,92,1,0,0,0,93,94,1,0,0,0,94,15,1,
0,0,0,95,96,5,19,0,0,96,97,5,17,0,0,97,98,3,24,12,0,98,99,5,18,0,0,99,103,
5,24,0,0,100,102,3,6,3,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,
103,104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,107,5,25,0,0,107,17,
1,0,0,0,108,109,5,20,0,0,109,110,3,16,8,0,110,19,1,0,0,0,111,112,5,20,0,
0,112,116,5,24,0,0,113,115,3,6,3,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,
1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,5,25,0,0,
120,121,5,32,0,0,121,21,1,0,0,0,122,123,5,22,0,0,123,124,5,17,0,0,124,125,
3,24,12,0,125,126,5,18,0,0,126,130,5,24,0,0,127,129,3,6,3,0,128,127,1,0,
0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,
130,1,0,0,0,133,134,5,25,0,0,134,23,1,0,0,0,135,136,6,12,-1,0,136,137,5,
17,0,0,137,138,3,24,12,0,138,139,5,18,0,0,139,147,1,0,0,0,140,147,7,1,0,
0,141,147,5,3,0,0,142,147,5,28,0,0,143,147,5,29,0,0,144,147,5,27,0,0,145,
147,5,30,0,0,146,135,1,0,0,0,146,140,1,0,0,0,146,141,1,0,0,0,146,142,1,0,
0,0,146,143,1,0,0,0,146,144,1,0,0,0,146,145,1,0,0,0,147,156,1,0,0,0,148,
149,10,8,0,0,149,150,7,2,0,0,150,155,3,24,12,9,151,152,10,6,0,0,152,153,
7,1,0,0,153,155,3,24,12,7,154,148,1,0,0,0,154,151,1,0,0,0,155,158,1,0,0,
0,156,154,1,0,0,0,156,157,1,0,0,0,157,25,1,0,0,0,158,156,1,0,0,0,159,161,
5,30,0,0,160,162,5,33,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,
0,163,164,5,4,0,0,164,172,5,26,0,0,165,167,5,30,0,0,166,168,5,33,0,0,167,
166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,5,5,0,0,170,172,5,26,
0,0,171,159,1,0,0,0,171,165,1,0,0,0,172,27,1,0,0,0,18,31,43,47,56,62,65,
79,89,93,103,116,130,146,154,156,161,167,171];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CParser extends antlr4.Parser {

    static grammarFileName = "C.g4";
    static literalNames = [ null, null, null, null, null, null, "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'='", null, null, null, 
                            "'void'", "'main'", "'('", "')'", "'if'", "'else'", 
                            "'do'", "'while'", "'printf'", "'{'", "'}'", 
                            "';'", null, null, null, null, null, null, null, 
                            null, "','" ];
    static symbolicNames = [ null, "TYPE", "BOOL", "STRING", "PLUSPLUS", 
                             "MINUSMINUS", "PLUS", "MINUS", "MULT", "DIV", 
                             "MOD", "IGUAL", "OC", "OL", "MATH_EQUALS", 
                             "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", 
                             "ELSE", "DO", "WHILE", "PRINTF", "INITKEY", 
                             "FINALKEY", "SEMI", "INT", "CHAR", "FLOAT", 
                             "ID", "INV_ID", "NEWLINE", "SPACES", "LINE_COMMENT", 
                             "COMA" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "whileStatement", 
                         "expr", "incremento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CParser.ruleNames;
        this.literalNames = CParser.literalNames;
        this.symbolicNames = CParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
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
	    this.enterRule(localctx, 0, CParser.RULE_file);
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
	        } while(_la===15);
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
	    this.enterRule(localctx, 2, CParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(CParser.VOID);
	        this.state = 34;
	        this.match(CParser.MAIN);
	        this.state = 35;
	        this.match(CParser.INITPAR);
	        this.state = 36;
	        this.match(CParser.FINALPAR);
	        this.state = 37;
	        this.match(CParser.INITKEY);
	        this.state = 38;
	        this.block();
	        this.state = 39;
	        this.match(CParser.FINALKEY);
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
	    this.enterRule(localctx, 4, CParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1086849026) !== 0)) {
	            this.state = 41;
	            this.contenido();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 42;
	                this.match(CParser.NEWLINE);
	            }

	            this.state = 49;
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
	    this.enterRule(localctx, 6, CParser.RULE_contenido);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
	            this.whileStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.impresion();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 55;
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
	    this.enterRule(localctx, 8, CParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(CParser.TYPE);
	        this.state = 59;
	        this.match(CParser.ID);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 60;
	            this.match(CParser.IGUAL);
	            this.state = 61;
	            this.expr(0);
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 64;
	            this.match(CParser.SEMI);
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
	    this.enterRule(localctx, 10, CParser.RULE_asignacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(CParser.ID);
	        this.state = 68;
	        localctx.eq = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===14)) {
	            localctx.eq = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
	        this.match(CParser.SEMI);
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
	    this.enterRule(localctx, 12, CParser.RULE_impresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CParser.PRINTF);
	        this.state = 73;
	        this.match(CParser.INITPAR);
	        this.state = 74;
	        this.expr(0);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 75;
	            this.match(CParser.COMA);
	            this.state = 76;
	            this.expr(0);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
	        this.match(CParser.FINALPAR);
	        this.state = 83;
	        this.match(CParser.SEMI);
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
	    this.enterRule(localctx, 14, CParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.ifStatement();
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 86;
	                this.elseIfStatement(); 
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 92;
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
	    this.enterRule(localctx, 16, CParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(CParser.IF);
	        this.state = 96;
	        this.match(CParser.INITPAR);
	        this.state = 97;
	        this.expr(0);
	        this.state = 98;
	        this.match(CParser.FINALPAR);
	        this.state = 99;
	        this.match(CParser.INITKEY);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1086849026) !== 0)) {
	            this.state = 100;
	            this.contenido();
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 106;
	        this.match(CParser.FINALKEY);
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
	    this.enterRule(localctx, 18, CParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(CParser.ELSE);
	        this.state = 109;
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
	    this.enterRule(localctx, 20, CParser.RULE_elseStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(CParser.ELSE);
	        this.state = 112;
	        this.match(CParser.INITKEY);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1086849026) !== 0)) {
	            this.state = 113;
	            this.contenido();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.match(CParser.FINALKEY);
	        this.state = 120;
	        this.match(CParser.NEWLINE);
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
	    this.enterRule(localctx, 22, CParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(CParser.WHILE);
	        this.state = 123;
	        this.match(CParser.INITPAR);
	        this.state = 124;
	        this.expr(0);
	        this.state = 125;
	        this.match(CParser.FINALPAR);
	        this.state = 126;
	        this.match(CParser.INITKEY);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1086849026) !== 0)) {
	            this.state = 127;
	            this.contenido();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
	        this.match(CParser.FINALKEY);
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
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, CParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.state = 136;
	            this.match(CParser.INITPAR);
	            this.state = 137;
	            this.expr(0);
	            this.state = 138;
	            this.match(CParser.FINALPAR);
	            break;
	        case 2:
	        case 12:
	        case 13:
	            this.state = 140;
	            localctx.cond_value = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 12292) !== 0))) {
	                localctx.cond_value = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 3:
	            this.state = 141;
	            this.match(CParser.STRING);
	            break;
	        case 28:
	            this.state = 142;
	            this.match(CParser.CHAR);
	            break;
	        case 29:
	            this.state = 143;
	            this.match(CParser.FLOAT);
	            break;
	        case 27:
	            this.state = 144;
	            this.match(CParser.INT);
	            break;
	        case 30:
	            this.state = 145;
	            this.match(CParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 154;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 148;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 149;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1984) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 150;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 152;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 12292) !== 0))) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 153;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 158;
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



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CParser.RULE_incremento);
	    var _la = 0;
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(CParser.ID);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 160;
	                this.match(CParser.SPACES);
	            }

	            this.state = 163;
	            this.match(CParser.PLUSPLUS);
	            this.state = 164;
	            this.match(CParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.match(CParser.ID);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 166;
	                this.match(CParser.SPACES);
	            }

	            this.state = 169;
	            this.match(CParser.MINUSMINUS);
	            this.state = 170;
	            this.match(CParser.SEMI);
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


}

CParser.EOF = antlr4.Token.EOF;
CParser.TYPE = 1;
CParser.BOOL = 2;
CParser.STRING = 3;
CParser.PLUSPLUS = 4;
CParser.MINUSMINUS = 5;
CParser.PLUS = 6;
CParser.MINUS = 7;
CParser.MULT = 8;
CParser.DIV = 9;
CParser.MOD = 10;
CParser.IGUAL = 11;
CParser.OC = 12;
CParser.OL = 13;
CParser.MATH_EQUALS = 14;
CParser.VOID = 15;
CParser.MAIN = 16;
CParser.INITPAR = 17;
CParser.FINALPAR = 18;
CParser.IF = 19;
CParser.ELSE = 20;
CParser.DO = 21;
CParser.WHILE = 22;
CParser.PRINTF = 23;
CParser.INITKEY = 24;
CParser.FINALKEY = 25;
CParser.SEMI = 26;
CParser.INT = 27;
CParser.CHAR = 28;
CParser.FLOAT = 29;
CParser.ID = 30;
CParser.INV_ID = 31;
CParser.NEWLINE = 32;
CParser.SPACES = 33;
CParser.LINE_COMMENT = 34;
CParser.COMA = 35;

CParser.RULE_file = 0;
CParser.RULE_start = 1;
CParser.RULE_block = 2;
CParser.RULE_contenido = 3;
CParser.RULE_declaracion = 4;
CParser.RULE_asignacion = 5;
CParser.RULE_impresion = 6;
CParser.RULE_condicional = 7;
CParser.RULE_ifStatement = 8;
CParser.RULE_elseIfStatement = 9;
CParser.RULE_elseStatement = 10;
CParser.RULE_whileStatement = 11;
CParser.RULE_expr = 12;
CParser.RULE_incremento = 13;

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
        this.ruleIndex = CParser.RULE_file;
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
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_start;
    }

	VOID() {
	    return this.getToken(CParser.VOID, 0);
	};

	MAIN() {
	    return this.getToken(CParser.MAIN, 0);
	};

	INITPAR() {
	    return this.getToken(CParser.INITPAR, 0);
	};

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	INITKEY() {
	    return this.getToken(CParser.INITKEY, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_block;
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
	        return this.getTokens(CParser.NEWLINE);
	    } else {
	        return this.getToken(CParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_contenido;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_declaracion;
    }

	TYPE() {
	    return this.getToken(CParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(CParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_asignacion;
        this.eq = null;
    }

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	IGUAL() {
	    return this.getToken(CParser.IGUAL, 0);
	};

	MATH_EQUALS() {
	    return this.getToken(CParser.MATH_EQUALS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_impresion;
    }

	PRINTF() {
	    return this.getToken(CParser.PRINTF, 0);
	};

	INITPAR() {
	    return this.getToken(CParser.INITPAR, 0);
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

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParser.COMA);
	    } else {
	        return this.getToken(CParser.COMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = CParser.RULE_condicional;
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
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(CParser.IF, 0);
	};

	INITPAR() {
	    return this.getToken(CParser.INITPAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	INITKEY() {
	    return this.getToken(CParser.INITKEY, 0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
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
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_elseIfStatement;
    }

	ELSE() {
	    return this.getToken(CParser.ELSE, 0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_elseStatement;
    }

	ELSE() {
	    return this.getToken(CParser.ELSE, 0);
	};

	INITKEY() {
	    return this.getToken(CParser.INITKEY, 0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
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
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(CParser.WHILE, 0);
	};

	INITPAR() {
	    return this.getToken(CParser.INITPAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	INITKEY() {
	    return this.getToken(CParser.INITKEY, 0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
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
	    if ( visitor instanceof CVisitor ) {
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
        this.ruleIndex = CParser.RULE_expr;
        this.cond_value = null;
        this.operation = null;
    }

	INITPAR() {
	    return this.getToken(CParser.INITPAR, 0);
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

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	OC() {
	    return this.getToken(CParser.OC, 0);
	};

	OL() {
	    return this.getToken(CParser.OL, 0);
	};

	BOOL() {
	    return this.getToken(CParser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(CParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(CParser.CHAR, 0);
	};

	FLOAT() {
	    return this.getToken(CParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(CParser.INT, 0);
	};

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	MULT() {
	    return this.getToken(CParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(CParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(CParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CParser.MINUS, 0);
	};

	MOD() {
	    return this.getToken(CParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitExpr(this);
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
        this.ruleIndex = CParser.RULE_incremento;
    }

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	PLUSPLUS() {
	    return this.getToken(CParser.PLUSPLUS, 0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	SPACES() {
	    return this.getToken(CParser.SPACES, 0);
	};

	MINUSMINUS() {
	    return this.getToken(CParser.MINUSMINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CParser.FileContext = FileContext; 
CParser.StartContext = StartContext; 
CParser.BlockContext = BlockContext; 
CParser.ContenidoContext = ContenidoContext; 
CParser.DeclaracionContext = DeclaracionContext; 
CParser.AsignacionContext = AsignacionContext; 
CParser.ImpresionContext = ImpresionContext; 
CParser.CondicionalContext = CondicionalContext; 
CParser.IfStatementContext = IfStatementContext; 
CParser.ElseIfStatementContext = ElseIfStatementContext; 
CParser.ElseStatementContext = ElseStatementContext; 
CParser.WhileStatementContext = WhileStatementContext; 
CParser.ExprContext = ExprContext; 
CParser.IncrementoContext = IncrementoContext; 
