// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/Compilator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CompilatorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, TYPE=4, PLUS=5, MINUS=6, TIMES=7, DIV=8, SWEET=9, 
		ARROW=10, SHOW=11, INITKEY=12, FINALKEY=13, GATITO=14, PUNTITO=15, NUM=16, 
		ID=17, WRONGID=18, NEWLINE=19, SPACES=20;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_contenido = 2, RULE_declaracion = 3, 
		RULE_impresion = 4, RULE_expr = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "contenido", "declaracion", "impresion", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", 
			"'->'", "'SHOW'", "'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", 
			"ARROW", "SHOW", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", 
			"WRONGID", "NEWLINE", "SPACES"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Compilator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CompilatorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public List<StartContext> start() {
			return getRuleContexts(StartContext.class);
		}
		public StartContext start(int i) {
			return getRuleContext(StartContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(12);
				start();
				}
				}
				setState(15); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SWEET );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode SWEET() { return getToken(CompilatorParser.SWEET, 0); }
		public TerminalNode INITKEY() { return getToken(CompilatorParser.INITKEY, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			match(SWEET);
			setState(18);
			match(INITKEY);
			setState(19);
			match(NEWLINE);
			setState(20);
			contenido();
			setState(21);
			match(FINALKEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContenidoContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<DeclaracionContext> declaracion() {
			return getRuleContexts(DeclaracionContext.class);
		}
		public DeclaracionContext declaracion(int i) {
			return getRuleContext(DeclaracionContext.class,i);
		}
		public List<ImpresionContext> impresion() {
			return getRuleContexts(ImpresionContext.class);
		}
		public ImpresionContext impresion(int i) {
			return getRuleContext(ImpresionContext.class,i);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_contenido);
		int _la;
		try {
			setState(31);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case NUM:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				expr(0);
				}
				break;
			case ARROW:
			case FINALKEY:
			case GATITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ARROW || _la==GATITO) {
					{
					setState(26);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case GATITO:
						{
						setState(24);
						declaracion();
						}
						break;
					case ARROW:
						{
						setState(25);
						impresion();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(30);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	 
		public DeclaracionContext() { }
		public void copyFrom(DeclaracionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValidAssignContext extends DeclaracionContext {
		public TerminalNode GATITO() { return getToken(CompilatorParser.GATITO, 0); }
		public TerminalNode TYPE() { return getToken(CompilatorParser.TYPE, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ValidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InvalidAssignContext extends DeclaracionContext {
		public Token VALORID;
		public TerminalNode GATITO() { return getToken(CompilatorParser.GATITO, 0); }
		public TerminalNode TYPE() { return getToken(CompilatorParser.TYPE, 0); }
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public TerminalNode WRONGID() { return getToken(CompilatorParser.WRONGID, 0); }
		public TerminalNode NUM() { return getToken(CompilatorParser.NUM, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public InvalidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaracion);
		int _la;
		try {
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				match(GATITO);
				setState(34);
				match(TYPE);
				setState(35);
				match(ID);
				setState(36);
				match(PUNTITO);
				setState(37);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				match(GATITO);
				setState(39);
				match(TYPE);
				setState(40);
				((InvalidAssignContext)_localctx).VALORID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==NUM || _la==WRONGID) ) {
					((InvalidAssignContext)_localctx).VALORID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(41);
				match(PUNTITO);
				setState(42);
				match(NEWLINE);
				}
				break;
			case 3:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(43);
				match(GATITO);
				setState(44);
				match(TYPE);
				setState(45);
				match(ID);
				setState(46);
				match(T__0);
				setState(47);
				expr(0);
				setState(48);
				match(PUNTITO);
				setState(49);
				match(NEWLINE);
				}
				break;
			case 4:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				match(GATITO);
				setState(52);
				match(TYPE);
				setState(53);
				((InvalidAssignContext)_localctx).VALORID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==NUM || _la==WRONGID) ) {
					((InvalidAssignContext)_localctx).VALORID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(54);
				match(T__0);
				setState(55);
				expr(0);
				setState(56);
				match(PUNTITO);
				setState(57);
				match(NEWLINE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
	 
		public ImpresionContext() { }
		public void copyFrom(ImpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ShowExprContext extends ImpresionContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode SHOW() { return getToken(CompilatorParser.SHOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public ShowExprContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_impresion);
		try {
			_localctx = new ShowExprContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(ARROW);
			setState(62);
			match(SHOW);
			setState(63);
			match(T__1);
			setState(64);
			expr(0);
			setState(65);
			match(T__2);
			setState(66);
			match(PUNTITO);
			setState(67);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParentesisContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultidivContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode TIMES() { return getToken(CompilatorParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(CompilatorParser.DIV, 0); }
		public MultidivContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MasmenosContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CompilatorParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CompilatorParser.MINUS, 0); }
		public MasmenosContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImpmultiContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ImpmultiContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumContext extends ExprContext {
		public TerminalNode NUM() { return getToken(CompilatorParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(70);
				match(T__1);
				setState(71);
				expr(0);
				setState(72);
				match(T__2);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(74);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(75);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(88);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(86);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new ImpmultiContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(78);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(79);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MultidivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(80);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(81);
						((MultidivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==TIMES || _la==DIV) ) {
							((MultidivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(82);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new MasmenosContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(83);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(84);
						((MasmenosContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((MasmenosContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(85);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(90);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 5:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0014\\\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0004\u0000\u000e\b\u0000\u000b\u0000\f"+
		"\u0000\u000f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\u001b\b\u0002"+
		"\n\u0002\f\u0002\u001e\t\u0002\u0003\u0002 \b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003<\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005M\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005W\b\u0005\n\u0005"+
		"\f\u0005Z\t\u0005\u0001\u0005\u0000\u0001\n\u0006\u0000\u0002\u0004\u0006"+
		"\b\n\u0000\u0003\u0002\u0000\u0010\u0010\u0012\u0012\u0001\u0000\u0007"+
		"\b\u0001\u0000\u0005\u0006a\u0000\r\u0001\u0000\u0000\u0000\u0002\u0011"+
		"\u0001\u0000\u0000\u0000\u0004\u001f\u0001\u0000\u0000\u0000\u0006;\u0001"+
		"\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000\u0000"+
		"\f\u000e\u0003\u0002\u0001\u0000\r\f\u0001\u0000\u0000\u0000\u000e\u000f"+
		"\u0001\u0000\u0000\u0000\u000f\r\u0001\u0000\u0000\u0000\u000f\u0010\u0001"+
		"\u0000\u0000\u0000\u0010\u0001\u0001\u0000\u0000\u0000\u0011\u0012\u0005"+
		"\t\u0000\u0000\u0012\u0013\u0005\f\u0000\u0000\u0013\u0014\u0005\u0013"+
		"\u0000\u0000\u0014\u0015\u0003\u0004\u0002\u0000\u0015\u0016\u0005\r\u0000"+
		"\u0000\u0016\u0003\u0001\u0000\u0000\u0000\u0017 \u0003\n\u0005\u0000"+
		"\u0018\u001b\u0003\u0006\u0003\u0000\u0019\u001b\u0003\b\u0004\u0000\u001a"+
		"\u0018\u0001\u0000\u0000\u0000\u001a\u0019\u0001\u0000\u0000\u0000\u001b"+
		"\u001e\u0001\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0001\u0000\u0000\u0000\u001d \u0001\u0000\u0000\u0000\u001e\u001c"+
		"\u0001\u0000\u0000\u0000\u001f\u0017\u0001\u0000\u0000\u0000\u001f\u001c"+
		"\u0001\u0000\u0000\u0000 \u0005\u0001\u0000\u0000\u0000!\"\u0005\u000e"+
		"\u0000\u0000\"#\u0005\u0004\u0000\u0000#$\u0005\u0011\u0000\u0000$%\u0005"+
		"\u000f\u0000\u0000%<\u0005\u0013\u0000\u0000&\'\u0005\u000e\u0000\u0000"+
		"\'(\u0005\u0004\u0000\u0000()\u0007\u0000\u0000\u0000)*\u0005\u000f\u0000"+
		"\u0000*<\u0005\u0013\u0000\u0000+,\u0005\u000e\u0000\u0000,-\u0005\u0004"+
		"\u0000\u0000-.\u0005\u0011\u0000\u0000./\u0005\u0001\u0000\u0000/0\u0003"+
		"\n\u0005\u000001\u0005\u000f\u0000\u000012\u0005\u0013\u0000\u00002<\u0001"+
		"\u0000\u0000\u000034\u0005\u000e\u0000\u000045\u0005\u0004\u0000\u0000"+
		"56\u0007\u0000\u0000\u000067\u0005\u0001\u0000\u000078\u0003\n\u0005\u0000"+
		"89\u0005\u000f\u0000\u00009:\u0005\u0013\u0000\u0000:<\u0001\u0000\u0000"+
		"\u0000;!\u0001\u0000\u0000\u0000;&\u0001\u0000\u0000\u0000;+\u0001\u0000"+
		"\u0000\u0000;3\u0001\u0000\u0000\u0000<\u0007\u0001\u0000\u0000\u0000"+
		"=>\u0005\n\u0000\u0000>?\u0005\u000b\u0000\u0000?@\u0005\u0002\u0000\u0000"+
		"@A\u0003\n\u0005\u0000AB\u0005\u0003\u0000\u0000BC\u0005\u000f\u0000\u0000"+
		"CD\u0005\u0013\u0000\u0000D\t\u0001\u0000\u0000\u0000EF\u0006\u0005\uffff"+
		"\uffff\u0000FG\u0005\u0002\u0000\u0000GH\u0003\n\u0005\u0000HI\u0005\u0003"+
		"\u0000\u0000IM\u0001\u0000\u0000\u0000JM\u0005\u0011\u0000\u0000KM\u0005"+
		"\u0010\u0000\u0000LE\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000"+
		"LK\u0001\u0000\u0000\u0000MX\u0001\u0000\u0000\u0000NO\n\u0005\u0000\u0000"+
		"OW\u0003\n\u0005\u0006PQ\n\u0004\u0000\u0000QR\u0007\u0001\u0000\u0000"+
		"RW\u0003\n\u0005\u0005ST\n\u0003\u0000\u0000TU\u0007\u0002\u0000\u0000"+
		"UW\u0003\n\u0005\u0004VN\u0001\u0000\u0000\u0000VP\u0001\u0000\u0000\u0000"+
		"VS\u0001\u0000\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000"+
		"\u0000XY\u0001\u0000\u0000\u0000Y\u000b\u0001\u0000\u0000\u0000ZX\u0001"+
		"\u0000\u0000\u0000\b\u000f\u001a\u001c\u001f;LVX";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}