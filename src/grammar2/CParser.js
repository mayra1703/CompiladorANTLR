// Generated from ./grammar/C.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CVisitor from './CVisitor.js';

const serializedATN = [4,1,30,174,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
2,1,2,3,2,44,8,2,4,2,46,8,2,11,2,12,2,47,1,3,1,3,1,3,1,3,1,3,1,3,3,3,56,
8,3,1,4,1,4,1,4,1,4,3,4,62,8,4,1,4,1,4,1,4,1,4,1,4,3,4,69,8,4,1,4,3,4,72,
8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,87,8,7,10,7,
12,7,90,9,7,1,7,3,7,93,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,101,8,8,10,8,12,8,
104,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,5,10,114,8,10,10,10,12,10,117,
9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,127,8,11,1,11,5,11,130,
8,11,10,11,12,11,133,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,143,
8,12,10,12,12,12,146,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,3,13,161,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,169,8,
13,10,13,12,13,172,9,13,1,13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,0,3,2,0,24,24,28,28,1,0,10,11,1,0,4,8,185,0,29,1,0,0,0,2,33,1,0,0,0,4,
45,1,0,0,0,6,55,1,0,0,0,8,71,1,0,0,0,10,73,1,0,0,0,12,78,1,0,0,0,14,84,1,
0,0,0,16,94,1,0,0,0,18,107,1,0,0,0,20,110,1,0,0,0,22,121,1,0,0,0,24,136,
1,0,0,0,26,160,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,
0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,12,0,0,34,35,5,13,0,0,35,36,5,14,
0,0,36,37,5,15,0,0,37,38,5,21,0,0,38,39,3,4,2,0,39,40,5,22,0,0,40,3,1,0,
0,0,41,43,3,6,3,0,42,44,5,29,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,
0,45,41,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,
56,3,8,4,0,50,56,3,10,5,0,51,56,3,14,7,0,52,56,3,24,12,0,53,56,3,12,6,0,
54,56,3,22,11,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,0,0,0,
55,53,1,0,0,0,55,54,1,0,0,0,56,7,1,0,0,0,57,58,5,1,0,0,58,61,5,27,0,0,59,
60,5,9,0,0,60,62,3,26,13,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,
72,5,23,0,0,64,65,5,1,0,0,65,68,7,0,0,0,66,67,5,9,0,0,67,69,3,26,13,0,68,
66,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,72,5,23,0,0,71,57,1,0,0,0,71,64,
1,0,0,0,72,9,1,0,0,0,73,74,5,27,0,0,74,75,5,9,0,0,75,76,3,26,13,0,76,77,
5,23,0,0,77,11,1,0,0,0,78,79,5,20,0,0,79,80,5,14,0,0,80,81,3,26,13,0,81,
82,5,15,0,0,82,83,5,23,0,0,83,13,1,0,0,0,84,88,3,16,8,0,85,87,3,18,9,0,86,
85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,92,1,0,0,0,90,88,
1,0,0,0,91,93,3,20,10,0,92,91,1,0,0,0,92,93,1,0,0,0,93,15,1,0,0,0,94,95,
5,16,0,0,95,96,5,14,0,0,96,97,3,26,13,0,97,98,5,15,0,0,98,102,5,21,0,0,99,
101,3,6,3,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,
0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,22,0,0,106,17,1,0,0,0,107,108,
5,17,0,0,108,109,3,16,8,0,109,19,1,0,0,0,110,111,5,17,0,0,111,115,5,21,0,
0,112,114,3,6,3,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,
1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,22,0,0,119,120,5,29,0,
0,120,21,1,0,0,0,121,126,5,27,0,0,122,123,5,4,0,0,123,127,5,4,0,0,124,125,
5,5,0,0,125,127,5,5,0,0,126,122,1,0,0,0,126,124,1,0,0,0,127,131,1,0,0,0,
128,130,5,30,0,0,129,128,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,
1,0,0,0,132,134,1,0,0,0,133,131,1,0,0,0,134,135,5,23,0,0,135,23,1,0,0,0,
136,137,5,19,0,0,137,138,5,14,0,0,138,139,3,26,13,0,139,140,5,15,0,0,140,
144,5,21,0,0,141,143,3,6,3,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,
0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,5,22,0,0,148,
25,1,0,0,0,149,150,6,13,-1,0,150,151,5,14,0,0,151,152,3,26,13,0,152,153,
5,15,0,0,153,161,1,0,0,0,154,161,7,1,0,0,155,161,5,3,0,0,156,161,5,25,0,
0,157,161,5,26,0,0,158,161,5,24,0,0,159,161,5,27,0,0,160,149,1,0,0,0,160,
154,1,0,0,0,160,155,1,0,0,0,160,156,1,0,0,0,160,157,1,0,0,0,160,158,1,0,
0,0,160,159,1,0,0,0,161,170,1,0,0,0,162,163,10,8,0,0,163,164,7,2,0,0,164,
169,3,26,13,9,165,166,10,6,0,0,166,167,7,1,0,0,167,169,3,26,13,7,168,162,
1,0,0,0,168,165,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,
171,27,1,0,0,0,172,170,1,0,0,0,17,31,43,47,55,61,68,71,88,92,102,115,126,
131,144,160,168,170];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CParser extends antlr4.Parser {

    static grammarFileName = "C.g4";
    static literalNames = [ null, null, null, null, "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'='", null, null, "'void'", "'main'", 
                            "'('", "')'", "'if'", "'else'", "'do'", "'while'", 
                            "'printf'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "TYPE", "BOOL", "STRING", "PLUS", "MINUS", 
                             "MULT", "DIV", "MOD", "IGUAL", "OC", "OL", 
                             "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", 
                             "ELSE", "DO", "WHILE", "PRINTF", "INITKEY", 
                             "FINALKEY", "SEMI", "INT", "CHAR", "FLOAT", 
                             "ID", "INV_ID", "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "incremento", 
                         "whileStatement", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CParser.ruleNames;
        this.literalNames = CParser.literalNames;
        this.symbolicNames = CParser.symbolicNames;
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
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 41;
	            this.contenido();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 42;
	                this.match(CParser.NEWLINE);
	            }

	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135856130) !== 0));
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
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.condicional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.whileStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 53;
	            this.impresion();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 54;
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(CParser.TYPE);
	            this.state = 58;
	            this.match(CParser.ID);
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 59;
	                this.match(CParser.IGUAL);
	                this.state = 60;
	                this.expr(0);
	            }

	            this.state = 63;
	            this.match(CParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(CParser.TYPE);
	            this.state = 65;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===28)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 66;
	                this.match(CParser.IGUAL);
	                this.state = 67;
	                this.expr(0);
	            }

	            this.state = 70;
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(CParser.ID);
	        this.state = 74;
	        this.match(CParser.IGUAL);
	        this.state = 75;
	        this.expr(0);
	        this.state = 76;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(CParser.PRINTF);
	        this.state = 79;
	        this.match(CParser.INITPAR);
	        this.state = 80;
	        this.expr(0);
	        this.state = 81;
	        this.match(CParser.FINALPAR);
	        this.state = 82;
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
	        this.state = 84;
	        this.ifStatement();
	        this.state = 88;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 85;
	                this.elseIfStatement(); 
	            }
	            this.state = 90;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 91;
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
	        this.state = 94;
	        this.match(CParser.IF);
	        this.state = 95;
	        this.match(CParser.INITPAR);
	        this.state = 96;
	        this.expr(0);
	        this.state = 97;
	        this.match(CParser.FINALPAR);
	        this.state = 98;
	        this.match(CParser.INITKEY);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135856130) !== 0)) {
	            this.state = 99;
	            this.contenido();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
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
	        this.state = 107;
	        this.match(CParser.ELSE);
	        this.state = 108;
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
	        this.state = 110;
	        this.match(CParser.ELSE);
	        this.state = 111;
	        this.match(CParser.INITKEY);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135856130) !== 0)) {
	            this.state = 112;
	            this.contenido();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(CParser.FINALKEY);
	        this.state = 119;
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



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CParser.RULE_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(CParser.ID);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 122;
	            this.match(CParser.PLUS);
	            this.state = 123;
	            this.match(CParser.PLUS);
	            break;
	        case 5:
	            this.state = 124;
	            this.match(CParser.MINUS);
	            this.state = 125;
	            this.match(CParser.MINUS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 128;
	            this.match(CParser.SPACES);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 134;
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(CParser.WHILE);
	        this.state = 137;
	        this.match(CParser.INITPAR);
	        this.state = 138;
	        this.expr(0);
	        this.state = 139;
	        this.match(CParser.FINALPAR);
	        this.state = 140;
	        this.match(CParser.INITKEY);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135856130) !== 0)) {
	            this.state = 141;
	            this.contenido();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, CParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 150;
	            this.match(CParser.INITPAR);
	            this.state = 151;
	            this.expr(0);
	            this.state = 152;
	            this.match(CParser.FINALPAR);
	            break;
	        case 10:
	        case 11:
	            this.state = 154;
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
	        case 3:
	            this.state = 155;
	            this.match(CParser.STRING);
	            break;
	        case 25:
	            this.state = 156;
	            this.match(CParser.CHAR);
	            break;
	        case 26:
	            this.state = 157;
	            this.match(CParser.FLOAT);
	            break;
	        case 24:
	            this.state = 158;
	            this.match(CParser.INT);
	            break;
	        case 27:
	            this.state = 159;
	            this.match(CParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 168;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 163;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 496) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 164;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 166;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 167;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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

CParser.EOF = antlr4.Token.EOF;
CParser.TYPE = 1;
CParser.BOOL = 2;
CParser.STRING = 3;
CParser.PLUS = 4;
CParser.MINUS = 5;
CParser.MULT = 6;
CParser.DIV = 7;
CParser.MOD = 8;
CParser.IGUAL = 9;
CParser.OC = 10;
CParser.OL = 11;
CParser.VOID = 12;
CParser.MAIN = 13;
CParser.INITPAR = 14;
CParser.FINALPAR = 15;
CParser.IF = 16;
CParser.ELSE = 17;
CParser.DO = 18;
CParser.WHILE = 19;
CParser.PRINTF = 20;
CParser.INITKEY = 21;
CParser.FINALKEY = 22;
CParser.SEMI = 23;
CParser.INT = 24;
CParser.CHAR = 25;
CParser.FLOAT = 26;
CParser.ID = 27;
CParser.INV_ID = 28;
CParser.NEWLINE = 29;
CParser.SPACES = 30;

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
CParser.RULE_incremento = 11;
CParser.RULE_whileStatement = 12;
CParser.RULE_expr = 13;

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
        this.id = null;
    }

	TYPE() {
	    return this.getToken(CParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	IGUAL() {
	    return this.getToken(CParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	INV_ID() {
	    return this.getToken(CParser.INV_ID, 0);
	};

	INT() {
	    return this.getToken(CParser.INT, 0);
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
    }

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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	FINALPAR() {
	    return this.getToken(CParser.FINALPAR, 0);
	};

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
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

	SEMI() {
	    return this.getToken(CParser.SEMI, 0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParser.PLUS);
	    } else {
	        return this.getToken(CParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParser.MINUS);
	    } else {
	        return this.getToken(CParser.MINUS, i);
	    }
	};


	SPACES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParser.SPACES);
	    } else {
	        return this.getToken(CParser.SPACES, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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
CParser.IncrementoContext = IncrementoContext; 
CParser.WhileStatementContext = WhileStatementContext; 
CParser.ExprContext = ExprContext; 
