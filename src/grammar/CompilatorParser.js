// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompilatorVisitor from './CompilatorVisitor.js';

const serializedATN = [4,1,18,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,5,2,24,8,2,10,
2,12,2,27,9,2,3,2,29,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,57,8,3,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,3,4,66,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,76,
8,4,10,4,12,4,79,9,4,1,4,0,1,8,5,0,2,4,6,8,0,3,2,0,14,14,16,16,1,0,8,9,1,
0,6,7,86,0,11,1,0,0,0,2,15,1,0,0,0,4,28,1,0,0,0,6,56,1,0,0,0,8,65,1,0,0,
0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,
14,1,1,0,0,0,15,16,5,10,0,0,16,17,5,11,0,0,17,18,5,17,0,0,18,19,3,4,2,0,
19,20,5,12,0,0,20,3,1,0,0,0,21,29,3,8,4,0,22,24,3,6,3,0,23,22,1,0,0,0,24,
27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,28,21,
1,0,0,0,28,25,1,0,0,0,29,5,1,0,0,0,30,31,5,1,0,0,31,32,5,5,0,0,32,33,5,15,
0,0,33,34,5,13,0,0,34,57,5,17,0,0,35,36,5,1,0,0,36,37,5,5,0,0,37,38,5,15,
0,0,38,39,5,2,0,0,39,40,3,8,4,0,40,41,5,13,0,0,41,42,5,17,0,0,42,57,1,0,
0,0,43,44,5,1,0,0,44,45,5,5,0,0,45,46,7,0,0,0,46,47,5,13,0,0,47,57,5,17,
0,0,48,49,5,1,0,0,49,50,5,5,0,0,50,51,7,0,0,0,51,52,5,2,0,0,52,53,3,8,4,
0,53,54,5,13,0,0,54,55,5,17,0,0,55,57,1,0,0,0,56,30,1,0,0,0,56,35,1,0,0,
0,56,43,1,0,0,0,56,48,1,0,0,0,57,7,1,0,0,0,58,59,6,4,-1,0,59,60,5,3,0,0,
60,61,3,8,4,0,61,62,5,4,0,0,62,66,1,0,0,0,63,66,5,15,0,0,64,66,5,14,0,0,
65,58,1,0,0,0,65,63,1,0,0,0,65,64,1,0,0,0,66,77,1,0,0,0,67,68,10,5,0,0,68,
76,3,8,4,6,69,70,10,4,0,0,70,71,7,1,0,0,71,76,3,8,4,5,72,73,10,3,0,0,73,
74,7,2,0,0,74,76,3,8,4,4,75,67,1,0,0,0,75,69,1,0,0,0,75,72,1,0,0,0,76,79,
1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,9,1,0,0,0,79,77,1,0,0,0,7,13,25,28,
56,65,75,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompilatorParser extends antlr4.Parser {

    static grammarFileName = "Compilator.g4";
    static literalNames = [ null, "'#'", "'='", "'('", "')'", null, "'+'", 
                            "'-'", "'*'", "'/'", "'Sweet'", "'{'", "'}'", 
                            "'.'" ];
    static symbolicNames = [ null, null, null, null, null, "TYPE", "PLUS", 
                             "MINUS", "TIMES", "DIV", "SWEET", "INITKEY", 
                             "FINALKEY", "PUNTITO", "NUM", "ID", "WRONGID", 
                             "NEWLINE", "SPACES" ];
    static ruleNames = [ "file", "start", "contenido", "declaracion", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompilatorParser.ruleNames;
        this.literalNames = CompilatorParser.literalNames;
        this.symbolicNames = CompilatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
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
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.start();
	            this.state = 13; 
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
	    this.enterRule(localctx, 2, CompilatorParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.match(CompilatorParser.SWEET);
	        this.state = 16;
	        this.match(CompilatorParser.INITKEY);
	        this.state = 17;
	        this.match(CompilatorParser.NEWLINE);
	        this.state = 18;
	        this.contenido();
	        this.state = 19;
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
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.expr(0);
	            break;
	        case 1:
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 22;
	                this.declaracion();
	                this.state = 27;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.match(CompilatorParser.T__0);
	            this.state = 31;
	            this.match(CompilatorParser.TYPE);
	            this.state = 32;
	            this.match(CompilatorParser.ID);
	            this.state = 33;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 34;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 2:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.match(CompilatorParser.T__0);
	            this.state = 36;
	            this.match(CompilatorParser.TYPE);
	            this.state = 37;
	            this.match(CompilatorParser.ID);
	            this.state = 38;
	            this.match(CompilatorParser.T__1);
	            this.state = 39;
	            this.expr(0);
	            this.state = 40;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 41;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 3:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.match(CompilatorParser.T__0);
	            this.state = 44;
	            this.match(CompilatorParser.TYPE);
	            this.state = 45;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===16)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 46;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 47;
	            this.match(CompilatorParser.NEWLINE);
	            break;

	        case 4:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.match(CompilatorParser.T__0);
	            this.state = 49;
	            this.match(CompilatorParser.TYPE);
	            this.state = 50;
	            localctx.VALORID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===16)) {
	                localctx.VALORID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 51;
	            this.match(CompilatorParser.T__1);
	            this.state = 52;
	            this.expr(0);
	            this.state = 53;
	            this.match(CompilatorParser.PUNTITO);
	            this.state = 54;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, CompilatorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 59;
	            this.match(CompilatorParser.T__2);
	            this.state = 60;
	            this.expr(0);
	            this.state = 61;
	            this.match(CompilatorParser.T__3);
	            break;
	        case 15:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 63;
	            this.match(CompilatorParser.ID);
	            break;
	        case 14:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(CompilatorParser.NUM);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 75;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ImpmultiContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 68;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new MultidivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 69;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 70;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 71;
	                    this.expr(5);
	                    break;

	                case 3:
	                    localctx = new MasmenosContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompilatorParser.RULE_expr);
	                    this.state = 72;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 73;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 74;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
CompilatorParser.T__3 = 4;
CompilatorParser.TYPE = 5;
CompilatorParser.PLUS = 6;
CompilatorParser.MINUS = 7;
CompilatorParser.TIMES = 8;
CompilatorParser.DIV = 9;
CompilatorParser.SWEET = 10;
CompilatorParser.INITKEY = 11;
CompilatorParser.FINALKEY = 12;
CompilatorParser.PUNTITO = 13;
CompilatorParser.NUM = 14;
CompilatorParser.ID = 15;
CompilatorParser.WRONGID = 16;
CompilatorParser.NEWLINE = 17;
CompilatorParser.SPACES = 18;

CompilatorParser.RULE_file = 0;
CompilatorParser.RULE_start = 1;
CompilatorParser.RULE_contenido = 2;
CompilatorParser.RULE_declaracion = 3;
CompilatorParser.RULE_expr = 4;

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
CompilatorParser.ExprContext = ExprContext; 
