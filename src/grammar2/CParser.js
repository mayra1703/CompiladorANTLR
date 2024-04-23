// Generated from ./grammar/C.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CVisitor from './CVisitor.js';

const serializedATN = [4,1,28,142,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,
8,0,11,0,12,0,27,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,2,40,8,2,10,2,
12,2,43,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,52,8,3,1,4,1,4,1,4,1,4,3,4,58,
8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,66,8,4,1,4,1,4,3,4,70,8,4,1,5,1,5,1,5,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,87,8,7,10,7,12,7,90,9,
7,1,7,3,7,93,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,3,11,124,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
5,11,137,8,11,10,11,12,11,140,9,11,1,11,0,1,22,12,0,2,4,6,8,10,12,14,16,
18,20,22,0,4,2,0,21,21,23,23,1,0,8,9,1,0,5,6,1,0,3,4,150,0,25,1,0,0,0,2,
29,1,0,0,0,4,41,1,0,0,0,6,51,1,0,0,0,8,69,1,0,0,0,10,71,1,0,0,0,12,77,1,
0,0,0,14,84,1,0,0,0,16,94,1,0,0,0,18,104,1,0,0,0,20,107,1,0,0,0,22,123,1,
0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,
0,0,28,1,1,0,0,0,29,30,5,10,0,0,30,31,5,11,0,0,31,32,5,12,0,0,32,33,5,13,
0,0,33,34,5,18,0,0,34,35,5,27,0,0,35,36,3,4,2,0,36,37,5,19,0,0,37,3,1,0,
0,0,38,40,3,6,3,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,
0,42,5,1,0,0,0,43,41,1,0,0,0,44,52,3,8,4,0,45,52,3,10,5,0,46,52,3,12,6,0,
47,52,3,14,7,0,48,52,5,2,0,0,49,52,5,26,0,0,50,52,5,25,0,0,51,44,1,0,0,0,
51,45,1,0,0,0,51,46,1,0,0,0,51,47,1,0,0,0,51,48,1,0,0,0,51,49,1,0,0,0,51,
50,1,0,0,0,52,7,1,0,0,0,53,54,5,1,0,0,54,57,5,22,0,0,55,56,5,7,0,0,56,58,
3,22,11,0,57,55,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,60,5,20,0,0,60,70,
5,27,0,0,61,62,5,1,0,0,62,65,7,0,0,0,63,64,5,7,0,0,64,66,3,22,11,0,65,63,
1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,5,20,0,0,68,70,5,27,0,0,69,53,
1,0,0,0,69,61,1,0,0,0,70,9,1,0,0,0,71,72,5,22,0,0,72,73,5,7,0,0,73,74,3,
22,11,0,74,75,5,20,0,0,75,76,5,27,0,0,76,11,1,0,0,0,77,78,5,17,0,0,78,79,
5,12,0,0,79,80,3,22,11,0,80,81,5,13,0,0,81,82,5,20,0,0,82,83,5,27,0,0,83,
13,1,0,0,0,84,88,3,16,8,0,85,87,3,18,9,0,86,85,1,0,0,0,87,90,1,0,0,0,88,
86,1,0,0,0,88,89,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,93,3,20,10,0,92,
91,1,0,0,0,92,93,1,0,0,0,93,15,1,0,0,0,94,95,5,14,0,0,95,96,5,12,0,0,96,
97,3,22,11,0,97,98,5,13,0,0,98,99,5,18,0,0,99,100,5,27,0,0,100,101,3,4,2,
0,101,102,5,19,0,0,102,103,5,27,0,0,103,17,1,0,0,0,104,105,5,15,0,0,105,
106,3,16,8,0,106,19,1,0,0,0,107,108,5,16,0,0,108,109,5,18,0,0,109,110,5,
27,0,0,110,111,3,4,2,0,111,112,5,19,0,0,112,113,5,27,0,0,113,21,1,0,0,0,
114,115,6,11,-1,0,115,116,5,12,0,0,116,117,3,22,11,0,117,118,5,13,0,0,118,
124,1,0,0,0,119,124,7,1,0,0,120,124,5,22,0,0,121,124,5,21,0,0,122,124,5,
2,0,0,123,114,1,0,0,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,
122,1,0,0,0,124,138,1,0,0,0,125,126,10,8,0,0,126,137,3,22,11,9,127,128,10,
7,0,0,128,129,7,2,0,0,129,137,3,22,11,8,130,131,10,6,0,0,131,132,7,3,0,0,
132,137,3,22,11,7,133,134,10,4,0,0,134,135,7,1,0,0,135,137,3,22,11,5,136,
125,1,0,0,0,136,127,1,0,0,0,136,130,1,0,0,0,136,133,1,0,0,0,137,140,1,0,
0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,23,1,0,0,0,140,138,1,0,0,0,11,27,
41,51,57,65,69,88,92,123,136,138];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CParser extends antlr4.Parser {

    static grammarFileName = "C.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'='", null, null, "'void'", "'main'", "'('", 
                            "')'", "'if'", "'else if'", "'else'", "'printf'", 
                            "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "TYPE", "STRING", "PLUS", "MINUS", "MULT", 
                             "DIV", "IGUAL", "OC", "OL", "VOID", "MAIN", 
                             "INITPAR", "FINALPAR", "IF", "ELSEIF", "ELSE", 
                             "PRINTF", "INITKEY", "FINALKEY", "SEMI", "INT", 
                             "ID", "INV_ID", "WRONGID", "LINECOMMENT", "COMMENT", 
                             "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "block", "contenido", "declaracion", 
                         "asignacion", "impresion", "condicional", "ifStatement", 
                         "elseIfStatement", "elseStatement", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CParser.ruleNames;
        this.literalNames = CParser.literalNames;
        this.symbolicNames = CParser.symbolicNames;
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
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 4);
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
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.start();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
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
	        this.state = 29;
	        this.match(CParser.VOID);
	        this.state = 30;
	        this.match(CParser.MAIN);
	        this.state = 31;
	        this.match(CParser.INITPAR);
	        this.state = 32;
	        this.match(CParser.FINALPAR);
	        this.state = 33;
	        this.match(CParser.INITKEY);
	        this.state = 34;
	        this.match(CParser.NEWLINE);
	        this.state = 35;
	        this.block();
	        this.state = 36;
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 105005062) !== 0)) {
	            this.state = 38;
	            this.contenido();
	            this.state = 43;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaracion();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.asignacion();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.impresion();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.condicional();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.match(CParser.STRING);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.match(CParser.COMMENT);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 50;
	            this.match(CParser.LINECOMMENT);
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



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(CParser.TYPE);
	            this.state = 54;
	            this.match(CParser.ID);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 55;
	                this.match(CParser.IGUAL);
	                this.state = 56;
	                this.expr(0);
	            }

	            this.state = 59;
	            this.match(CParser.SEMI);
	            this.state = 60;
	            this.match(CParser.NEWLINE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(CParser.TYPE);
	            this.state = 62;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===23)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 63;
	                this.match(CParser.IGUAL);
	                this.state = 64;
	                this.expr(0);
	            }

	            this.state = 67;
	            this.match(CParser.SEMI);
	            this.state = 68;
	            this.match(CParser.NEWLINE);
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
	        this.state = 71;
	        this.match(CParser.ID);
	        this.state = 72;
	        this.match(CParser.IGUAL);
	        this.state = 73;
	        this.expr(0);
	        this.state = 74;
	        this.match(CParser.SEMI);
	        this.state = 75;
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(CParser.PRINTF);
	        this.state = 78;
	        this.match(CParser.INITPAR);
	        this.state = 79;
	        this.expr(0);
	        this.state = 80;
	        this.match(CParser.FINALPAR);
	        this.state = 81;
	        this.match(CParser.SEMI);
	        this.state = 82;
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
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 85;
	            this.elseIfStatement();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
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
	        this.state = 99;
	        this.match(CParser.NEWLINE);
	        this.state = 100;
	        this.block();
	        this.state = 101;
	        this.match(CParser.FINALKEY);
	        this.state = 102;
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



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(CParser.ELSEIF);
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
	    this.enterRule(localctx, 20, CParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(CParser.ELSE);
	        this.state = 108;
	        this.match(CParser.INITKEY);
	        this.state = 109;
	        this.match(CParser.NEWLINE);
	        this.state = 110;
	        this.block();
	        this.state = 111;
	        this.match(CParser.FINALKEY);
	        this.state = 112;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, CParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.state = 115;
	            this.match(CParser.INITPAR);
	            this.state = 116;
	            this.expr(0);
	            this.state = 117;
	            this.match(CParser.FINALPAR);
	            break;
	        case 8:
	        case 9:
	            this.state = 119;
	            localctx.cond_value = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	                localctx.cond_value = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 22:
	            this.state = 120;
	            this.match(CParser.ID);
	            break;
	        case 21:
	            this.state = 121;
	            this.match(CParser.INT);
	            break;
	        case 2:
	            this.state = 122;
	            this.match(CParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 125;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 126;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 128;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 129;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 131;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 132;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_expr);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 134;
	                    localctx.cond_value = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.cond_value = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 135;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
CParser.STRING = 2;
CParser.PLUS = 3;
CParser.MINUS = 4;
CParser.MULT = 5;
CParser.DIV = 6;
CParser.IGUAL = 7;
CParser.OC = 8;
CParser.OL = 9;
CParser.VOID = 10;
CParser.MAIN = 11;
CParser.INITPAR = 12;
CParser.FINALPAR = 13;
CParser.IF = 14;
CParser.ELSEIF = 15;
CParser.ELSE = 16;
CParser.PRINTF = 17;
CParser.INITKEY = 18;
CParser.FINALKEY = 19;
CParser.SEMI = 20;
CParser.INT = 21;
CParser.ID = 22;
CParser.INV_ID = 23;
CParser.WRONGID = 24;
CParser.LINECOMMENT = 25;
CParser.COMMENT = 26;
CParser.NEWLINE = 27;
CParser.SPACES = 28;

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
CParser.RULE_expr = 11;

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

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
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

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	STRING() {
	    return this.getToken(CParser.STRING, 0);
	};

	COMMENT() {
	    return this.getToken(CParser.COMMENT, 0);
	};

	LINECOMMENT() {
	    return this.getToken(CParser.LINECOMMENT, 0);
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

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
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

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
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


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
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

	ELSEIF() {
	    return this.getToken(CParser.ELSEIF, 0);
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


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FINALKEY() {
	    return this.getToken(CParser.FINALKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
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

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	INT() {
	    return this.getToken(CParser.INT, 0);
	};

	STRING() {
	    return this.getToken(CParser.STRING, 0);
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
CParser.ExprContext = ExprContext; 
