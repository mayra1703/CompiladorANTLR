// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,26,142,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,
1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,3,2,40,8,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,68,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,85,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,3,5,99,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,112,8,6,1,7,1,7,1,7,1,7,3,7,118,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,127,
8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,137,8,8,10,8,12,8,140,9,8,1,8,0,
1,16,9,0,2,4,6,8,10,12,14,16,0,3,2,0,22,22,24,24,1,0,8,9,1,0,6,7,153,0,19,
1,0,0,0,2,23,1,0,0,0,4,39,1,0,0,0,6,67,1,0,0,0,8,84,1,0,0,0,10,86,1,0,0,
0,12,111,1,0,0,0,14,117,1,0,0,0,16,126,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,
0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,24,5,13,0,0,
24,25,5,18,0,0,25,26,5,25,0,0,26,27,3,4,2,0,27,28,5,19,0,0,28,3,1,0,0,0,
29,40,3,16,8,0,30,34,3,6,3,0,31,34,3,8,4,0,32,34,3,10,5,0,33,30,1,0,0,0,
33,31,1,0,0,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,
40,1,0,0,0,37,35,1,0,0,0,38,40,5,5,0,0,39,29,1,0,0,0,39,35,1,0,0,0,39,38,
1,0,0,0,40,5,1,0,0,0,41,42,5,20,0,0,42,43,5,4,0,0,43,44,5,23,0,0,44,45,5,
21,0,0,45,68,5,25,0,0,46,47,5,20,0,0,47,48,5,4,0,0,48,49,7,0,0,0,49,50,5,
21,0,0,50,68,5,25,0,0,51,52,5,20,0,0,52,53,5,4,0,0,53,54,5,23,0,0,54,55,
5,1,0,0,55,56,3,16,8,0,56,57,5,21,0,0,57,58,5,25,0,0,58,68,1,0,0,0,59,60,
5,20,0,0,60,61,5,4,0,0,61,62,7,0,0,0,62,63,5,1,0,0,63,64,3,16,8,0,64,65,
5,21,0,0,65,66,5,25,0,0,66,68,1,0,0,0,67,41,1,0,0,0,67,46,1,0,0,0,67,51,
1,0,0,0,67,59,1,0,0,0,68,7,1,0,0,0,69,70,5,16,0,0,70,71,5,17,0,0,71,72,5,
2,0,0,72,73,3,16,8,0,73,74,5,3,0,0,74,75,5,21,0,0,75,76,5,25,0,0,76,85,1,
0,0,0,77,78,5,16,0,0,78,79,5,17,0,0,79,80,5,2,0,0,80,81,5,5,0,0,81,82,5,
3,0,0,82,83,5,21,0,0,83,85,5,25,0,0,84,69,1,0,0,0,84,77,1,0,0,0,85,9,1,0,
0,0,86,87,5,14,0,0,87,88,5,2,0,0,88,89,3,12,6,0,89,90,5,3,0,0,90,91,5,18,
0,0,91,92,3,14,7,0,92,98,5,19,0,0,93,94,5,15,0,0,94,95,5,18,0,0,95,96,3,
14,7,0,96,97,5,19,0,0,97,99,1,0,0,0,98,93,1,0,0,0,98,99,1,0,0,0,99,100,1,
0,0,0,100,101,5,25,0,0,101,11,1,0,0,0,102,103,3,16,8,0,103,104,5,10,0,0,
104,105,3,16,8,0,105,112,1,0,0,0,106,107,3,16,8,0,107,108,5,11,0,0,108,109,
3,16,8,0,109,112,1,0,0,0,110,112,5,12,0,0,111,102,1,0,0,0,111,106,1,0,0,
0,111,110,1,0,0,0,112,13,1,0,0,0,113,118,3,16,8,0,114,118,3,6,3,0,115,118,
3,8,4,0,116,118,3,10,5,0,117,113,1,0,0,0,117,114,1,0,0,0,117,115,1,0,0,0,
117,116,1,0,0,0,118,15,1,0,0,0,119,120,6,8,-1,0,120,121,5,2,0,0,121,122,
3,16,8,0,122,123,5,3,0,0,123,127,1,0,0,0,124,127,5,23,0,0,125,127,5,22,0,
0,126,119,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,138,1,0,0,0,128,129,
10,5,0,0,129,137,3,16,8,6,130,131,10,4,0,0,131,132,7,1,0,0,132,137,3,16,
8,5,133,134,10,3,0,0,134,135,7,2,0,0,135,137,3,16,8,4,136,128,1,0,0,0,136,
130,1,0,0,0,136,133,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,
0,0,139,17,1,0,0,0,140,138,1,0,0,0,12,21,33,35,39,67,84,98,111,117,126,136,
138];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'='", "'('", "')'", null, null, "'+'", 
                            "'-'", "'*'", "'/'", null, null, null, "'Sweet'", 
                            "'SweetCondition'", "'Else'", "'->'", "'SHOW'", 
                            "'{'", "'}'", "'#'", "'.'" ];
    static symbolicNames = [ null, null, null, null, "TYPE", "STRING", "PLUS", 
                             "MINUS", "TIMES", "DIV", "OC", "OL", "BOOL", 
                             "SWEET", "SWEETCONDITION", "ELSE", "ARROW", 
                             "SHOW", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", 
                             "NUM", "ID", "WRONGID", "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "contenido", "declaracion", "impresion", 
                         "ifStatement", "condition", "statement", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompilatorParser.ruleNames;
        this.literalNames = CompilatorParser.literalNames;
        this.symbolicNames = CompilatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
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
    			return this.precpred(this._ctx, 4);
    		case 2:
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
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.start();
	            this.state = 21; 
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
	        this.state = 23;
	        this.match(CompilatorParser.SWEET);
	        this.state = 24;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 25;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 26;
	        this.contenido();
	        this.state = 27;
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



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompilatorParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.expr(0);
	            break;
	        case 14:
	        case 16:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1130496) !== 0)) {
	                this.state = 33;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 20:
	                    this.state = 30;
	                    this.declaracion();
	                    break;
	                case 16:
	                    this.state = 31;
	                    this.impresion();
	                    break;
	                case 14:
	                    this.state = 32;
	                    this.ifStatement();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 37;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.match(CompilatorParser.STRING);
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
	    this.enterRule(localctx, 6, CompilatorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(CompilatorParser.GATITO);
	            this.state = 42;
	            this.match(CompilatorParser.TYPE);
	            this.state = 43;
	            this.match(CompilatorParser.ID);
	            this.state = 44;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 45;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(CompilatorParser.GATITO);
	            this.state = 47;
	            this.match(CompilatorParser.TYPE);
	            this.state = 48;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===24)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 49;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 50;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 3:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(CompilatorParser.GATITO);
	            this.state = 52;
	            this.match(CompilatorParser.TYPE);
	            this.state = 53;
	            this.match(CompilatorParser.ID);
	            this.state = 54;
	            this.match(CompilatorParser.T__0);
	            this.state = 55;
	            this.expr(0);
	            this.state = 56;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 57;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 4:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.match(CompilatorParser.GATITO);
	            this.state = 60;
	            this.match(CompilatorParser.TYPE);
	            this.state = 61;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===24)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            this.match(CompilatorParser.T__0);
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompilatorParser.RULE_impresion);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ShowExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(CompilatorParser.ARROW);
	            this.state = 70;
	            this.match(CompilatorParser.SHOW);
	            this.state = 71;
	            this.match(CompilatorParser.T__1);
	            this.state = 72;
	            this.expr(0);
	            this.state = 73;
	            this.match(CompilatorParser.T__2);
	            this.state = 74;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 75;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ShowStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(CompilatorParser.ARROW);
	            this.state = 78;
	            this.match(CompilatorParser.SHOW);
	            this.state = 79;
	            this.match(CompilatorParser.T__1);
	            this.state = 80;
	            this.match(CompilatorParser.STRING);
	            this.state = 81;
	            this.match(CompilatorParser.T__2);
	            this.state = 82;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 83;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompilatorParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CompilatorParser.SWEETCONDITION);
	        this.state = 87;
	        this.match(CompilatorParser.T__1);
	        this.state = 88;
	        this.condition();
	        this.state = 89;
	        this.match(CompilatorParser.T__2);
	        this.state = 90;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 91;
	        this.statement();
	        this.state = 92;
	        this.match(CompilatorParser.FINALKEY);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 93;
	            this.match(CompilatorParser.ELSE);
	            this.state = 94;
	            this.match(CompilatorParser.INITKEY);
	            this.state = 95;
	            this.statement();
	            this.state = 96;
	            this.match(CompilatorParser.FINALKEY);
	        }

	        this.state = 100;
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompilatorParser.RULE_condition);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.expr(0);
	            this.state = 103;
	            this.match(CompilatorParser.OC);
	            this.state = 104;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new LogicalExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.expr(0);
	            this.state = 107;
	            this.match(CompilatorParser.OL);
	            this.state = 108;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new BoolConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 110;
	            this.match(CompilatorParser.BOOL);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompilatorParser.RULE_statement);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.expr(0);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.declaracion();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.impresion();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 116;
	            this.ifStatement();
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, CompilatorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 120;
	            this.match(CompilatorParser.T__1);
	            this.state = 121;
	            this.expr(0);
	            this.state = 122;
	            this.match(CompilatorParser.T__2);
	            break;
	        case 23:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 124;
	            this.match(CompilatorParser.ID);
	            break;
	        case 22:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 125;
	            this.match(CompilatorParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ImpmultiContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 129;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new MultidivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 131;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 132;
	                    this.expr(5);
	                    break;

	                case 3:
	                    localctx = new MasmenosContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
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
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
CompilatorParser.T__2 = 3;
CompilatorParser.TYPE = 4;
CompilatorParser.STRING = 5;
CompilatorParser.PLUS = 6;
CompilatorParser.MINUS = 7;
CompilatorParser.TIMES = 8;
CompilatorParser.DIV = 9;
CompilatorParser.OC = 10;
CompilatorParser.OL = 11;
CompilatorParser.BOOL = 12;
CompilatorParser.SWEET = 13;
CompilatorParser.SWEETCONDITION = 14;
CompilatorParser.ELSE = 15;
CompilatorParser.ARROW = 16;
CompilatorParser.SHOW = 17;
CompilatorParser.INITKEY = 18;
CompilatorParser.FINALKEY = 19;
CompilatorParser.GATITO = 20;
CompilatorParser.PUNTITO = 21;
CompilatorParser.NUM = 22;
CompilatorParser.ID = 23;
CompilatorParser.WRONGID = 24;
CompilatorParser.NEWLINE = 25;
CompilatorParser.SPACES = 26;

CompilatorParser.RULE_file = 0;
CompilatorParser.RULE_start = 1;
CompilatorParser.RULE_contenido = 2;
CompilatorParser.RULE_declaracion = 3;
CompilatorParser.RULE_impresion = 4;
CompilatorParser.RULE_ifStatement = 5;
CompilatorParser.RULE_condition = 6;
CompilatorParser.RULE_statement = 7;
CompilatorParser.RULE_expr = 8;

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

	SWEET() {
	    return this.getToken(CompilatorParser.SWEET, 0);
	};

	INITKEY() {
	    return this.getToken(CompilatorParser.INITKEY, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	ifStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfStatementContext);
	    } else {
	        return this.getTypedRuleContext(IfStatementContext,i);
	    }
	};

	STRING() {
	    return this.getToken(CompilatorParser.STRING, 0);
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

class InvalidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        this.VALORID = null;;
        super.copyFrom(ctx);
    }

	GATITO() {
	    return this.getToken(CompilatorParser.GATITO, 0);
	};

	TYPE() {
	    return this.getToken(CompilatorParser.TYPE, 0);
	};

	PUNTITO() {
	    return this.getToken(CompilatorParser.PUNTITO, 0);
	};

	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	WRONGID() {
	    return this.getToken(CompilatorParser.WRONGID, 0);
	};

	NUM() {
	    return this.getToken(CompilatorParser.NUM, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitInvalidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.InvalidAssignContext = InvalidAssignContext;

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

	SHOW() {
	    return this.getToken(CompilatorParser.SHOW, 0);
	};

	STRING() {
	    return this.getToken(CompilatorParser.STRING, 0);
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

	SHOW() {
	    return this.getToken(CompilatorParser.SHOW, 0);
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

	SWEETCONDITION() {
	    return this.getToken(CompilatorParser.SWEETCONDITION, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	INITKEY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.INITKEY);
	    } else {
	        return this.getToken(CompilatorParser.INITKEY, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	FINALKEY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompilatorParser.FINALKEY);
	    } else {
	        return this.getToken(CompilatorParser.FINALKEY, i);
	    }
	};


	NEWLINE() {
	    return this.getToken(CompilatorParser.NEWLINE, 0);
	};

	ELSE() {
	    return this.getToken(CompilatorParser.ELSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_condition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalExprContext extends ConditionContext {

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

	OL() {
	    return this.getToken(CompilatorParser.OL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitLogicalExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.LogicalExprContext = LogicalExprContext;

class ComparisonExprContext extends ConditionContext {

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

	OC() {
	    return this.getToken(CompilatorParser.OC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitComparisonExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.ComparisonExprContext = ComparisonExprContext;

class BoolConditionContext extends ConditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOL() {
	    return this.getToken(CompilatorParser.BOOL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitBoolCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompilatorParser.BoolConditionContext = BoolConditionContext;

class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompilatorParser.RULE_statement;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompilatorVisitor ) {
	        return visitor.visitStatement(this);
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

	TIMES() {
	    return this.getToken(CompilatorParser.TIMES, 0);
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
CompilatorParser.ContenidoContext = ContenidoContext; 
CompilatorParser.DeclaracionContext = DeclaracionContext; 
CompilatorParser.ImpresionContext = ImpresionContext; 
CompilatorParser.IfStatementContext = IfStatementContext; 
CompilatorParser.ConditionContext = ConditionContext; 
CompilatorParser.StatementContext = StatementContext; 
CompilatorParser.ExprContext = ExprContext; 
