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
		T__0=1, T__1=2, T__2=3, TYPE=4, PLUS=5, MINUS=6, TIMES=7, DIV=8, OC=9, 
		OL=10, SWEET=11, SWEETCONDITION=12, ELSE=13, ARROW=14, SHOW=15, INITKEY=16, 
		FINALKEY=17, GATITO=18, PUNTITO=19, NUM=20, ID=21, WRONGID=22, NEWLINE=23, 
		SPACES=24;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_contenido = 2, RULE_declaracion = 3, 
		RULE_impresion = 4, RULE_ifStatement = 5, RULE_condition = 6, RULE_statement = 7, 
		RULE_expr = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "contenido", "declaracion", "impresion", "ifStatement", 
			"condition", "statement", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", null, null, 
			"'Sweet'", "'SweetCondition'", "'Else'", "'->'", "'SHOW'", "'{'", "'}'", 
			"'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "OC", 
			"OL", "SWEET", "SWEETCONDITION", "ELSE", "ARROW", "SHOW", "INITKEY", 
			"FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
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
			setState(19); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(18);
				start();
				}
				}
				setState(21); 
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
			setState(23);
			match(SWEET);
			setState(24);
			match(INITKEY);
			setState(25);
			match(NEWLINE);
			setState(26);
			contenido();
			setState(27);
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
		public List<IfStatementContext> ifStatement() {
			return getRuleContexts(IfStatementContext.class);
		}
		public IfStatementContext ifStatement(int i) {
			return getRuleContext(IfStatementContext.class,i);
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
			setState(38);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case NUM:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(29);
				expr(0);
				}
				break;
			case SWEETCONDITION:
			case ARROW:
			case FINALKEY:
			case GATITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 282624L) != 0)) {
					{
					setState(33);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case GATITO:
						{
						setState(30);
						declaracion();
						}
						break;
					case ARROW:
						{
						setState(31);
						impresion();
						}
						break;
					case SWEETCONDITION:
						{
						setState(32);
						ifStatement();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(37);
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
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				match(GATITO);
				setState(41);
				match(TYPE);
				setState(42);
				match(ID);
				setState(43);
				match(PUNTITO);
				setState(44);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				match(GATITO);
				setState(46);
				match(TYPE);
				setState(47);
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
				setState(48);
				match(PUNTITO);
				setState(49);
				match(NEWLINE);
				}
				break;
			case 3:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				match(GATITO);
				setState(51);
				match(TYPE);
				setState(52);
				match(ID);
				setState(53);
				match(T__0);
				setState(54);
				expr(0);
				setState(55);
				match(PUNTITO);
				setState(56);
				match(NEWLINE);
				}
				break;
			case 4:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(58);
				match(GATITO);
				setState(59);
				match(TYPE);
				setState(60);
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
				setState(61);
				match(T__0);
				setState(62);
				expr(0);
				setState(63);
				match(PUNTITO);
				setState(64);
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
			setState(68);
			match(ARROW);
			setState(69);
			match(SHOW);
			setState(70);
			match(T__1);
			setState(71);
			expr(0);
			setState(72);
			match(T__2);
			setState(73);
			match(PUNTITO);
			setState(74);
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
	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode SWEETCONDITION() { return getToken(CompilatorParser.SWEETCONDITION, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public List<TerminalNode> INITKEY() { return getTokens(CompilatorParser.INITKEY); }
		public TerminalNode INITKEY(int i) {
			return getToken(CompilatorParser.INITKEY, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> FINALKEY() { return getTokens(CompilatorParser.FINALKEY); }
		public TerminalNode FINALKEY(int i) {
			return getToken(CompilatorParser.FINALKEY, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(CompilatorParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CompilatorParser.NEWLINE, i);
		}
		public TerminalNode ELSE() { return getToken(CompilatorParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(SWEETCONDITION);
			setState(77);
			match(T__1);
			setState(78);
			condition();
			setState(79);
			match(T__2);
			setState(80);
			match(INITKEY);
			setState(81);
			statement();
			setState(82);
			match(FINALKEY);
			setState(83);
			match(NEWLINE);
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(84);
				match(ELSE);
				setState(85);
				match(INITKEY);
				setState(86);
				statement();
				setState(87);
				match(FINALKEY);
				}
			}

			setState(91);
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
	public static class ConditionContext extends ParserRuleContext {
		public Token operator;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OL() { return getToken(CompilatorParser.OL, 0); }
		public TerminalNode OC() { return getToken(CompilatorParser.OC, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			expr(0);
			setState(94);
			((ConditionContext)_localctx).operator = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==OC || _la==OL) ) {
				((ConditionContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(95);
			expr(0);
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
	public static class StatementContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		try {
			setState(101);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case NUM:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(97);
				expr(0);
				}
				break;
			case GATITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				declaracion();
				}
				break;
			case ARROW:
				enterOuterAlt(_localctx, 3);
				{
				setState(99);
				impresion();
				}
				break;
			case SWEETCONDITION:
				enterOuterAlt(_localctx, 4);
				{
				setState(100);
				ifStatement();
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
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(104);
				match(T__1);
				setState(105);
				expr(0);
				setState(106);
				match(T__2);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(109);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(122);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(120);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new ImpmultiContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(112);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(113);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MultidivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(114);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(115);
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
						setState(116);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new MasmenosContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(117);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(118);
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
						setState(119);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(124);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		case 8:
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
		"\u0004\u0001\u0018~\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0004\u0000\u0014\b\u0000\u000b\u0000\f\u0000\u0015"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\"\b\u0002"+
		"\n\u0002\f\u0002%\t\u0002\u0003\u0002\'\b\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003C\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"Z\b\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007"+
		"f\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003"+
		"\bo\b\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0005\by\b\b\n\b\f\b|\t\b\u0001\b\u0000\u0001\u0010\t\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0000\u0004\u0002\u0000\u0014\u0014\u0016\u0016"+
		"\u0001\u0000\t\n\u0001\u0000\u0007\b\u0001\u0000\u0005\u0006\u0085\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0002\u0017\u0001\u0000\u0000\u0000\u0004"+
		"&\u0001\u0000\u0000\u0000\u0006B\u0001\u0000\u0000\u0000\bD\u0001\u0000"+
		"\u0000\u0000\nL\u0001\u0000\u0000\u0000\f]\u0001\u0000\u0000\u0000\u000e"+
		"e\u0001\u0000\u0000\u0000\u0010n\u0001\u0000\u0000\u0000\u0012\u0014\u0003"+
		"\u0002\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0015\u0001"+
		"\u0000\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001"+
		"\u0000\u0000\u0000\u0016\u0001\u0001\u0000\u0000\u0000\u0017\u0018\u0005"+
		"\u000b\u0000\u0000\u0018\u0019\u0005\u0010\u0000\u0000\u0019\u001a\u0005"+
		"\u0017\u0000\u0000\u001a\u001b\u0003\u0004\u0002\u0000\u001b\u001c\u0005"+
		"\u0011\u0000\u0000\u001c\u0003\u0001\u0000\u0000\u0000\u001d\'\u0003\u0010"+
		"\b\u0000\u001e\"\u0003\u0006\u0003\u0000\u001f\"\u0003\b\u0004\u0000 "+
		"\"\u0003\n\u0005\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f\u0001\u0000"+
		"\u0000\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000\u0000#!\u0001"+
		"\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000&\u001d\u0001\u0000\u0000\u0000&#\u0001\u0000"+
		"\u0000\u0000\'\u0005\u0001\u0000\u0000\u0000()\u0005\u0012\u0000\u0000"+
		")*\u0005\u0004\u0000\u0000*+\u0005\u0015\u0000\u0000+,\u0005\u0013\u0000"+
		"\u0000,C\u0005\u0017\u0000\u0000-.\u0005\u0012\u0000\u0000./\u0005\u0004"+
		"\u0000\u0000/0\u0007\u0000\u0000\u000001\u0005\u0013\u0000\u00001C\u0005"+
		"\u0017\u0000\u000023\u0005\u0012\u0000\u000034\u0005\u0004\u0000\u0000"+
		"45\u0005\u0015\u0000\u000056\u0005\u0001\u0000\u000067\u0003\u0010\b\u0000"+
		"78\u0005\u0013\u0000\u000089\u0005\u0017\u0000\u00009C\u0001\u0000\u0000"+
		"\u0000:;\u0005\u0012\u0000\u0000;<\u0005\u0004\u0000\u0000<=\u0007\u0000"+
		"\u0000\u0000=>\u0005\u0001\u0000\u0000>?\u0003\u0010\b\u0000?@\u0005\u0013"+
		"\u0000\u0000@A\u0005\u0017\u0000\u0000AC\u0001\u0000\u0000\u0000B(\u0001"+
		"\u0000\u0000\u0000B-\u0001\u0000\u0000\u0000B2\u0001\u0000\u0000\u0000"+
		"B:\u0001\u0000\u0000\u0000C\u0007\u0001\u0000\u0000\u0000DE\u0005\u000e"+
		"\u0000\u0000EF\u0005\u000f\u0000\u0000FG\u0005\u0002\u0000\u0000GH\u0003"+
		"\u0010\b\u0000HI\u0005\u0003\u0000\u0000IJ\u0005\u0013\u0000\u0000JK\u0005"+
		"\u0017\u0000\u0000K\t\u0001\u0000\u0000\u0000LM\u0005\f\u0000\u0000MN"+
		"\u0005\u0002\u0000\u0000NO\u0003\f\u0006\u0000OP\u0005\u0003\u0000\u0000"+
		"PQ\u0005\u0010\u0000\u0000QR\u0003\u000e\u0007\u0000RS\u0005\u0011\u0000"+
		"\u0000SY\u0005\u0017\u0000\u0000TU\u0005\r\u0000\u0000UV\u0005\u0010\u0000"+
		"\u0000VW\u0003\u000e\u0007\u0000WX\u0005\u0011\u0000\u0000XZ\u0001\u0000"+
		"\u0000\u0000YT\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z[\u0001"+
		"\u0000\u0000\u0000[\\\u0005\u0017\u0000\u0000\\\u000b\u0001\u0000\u0000"+
		"\u0000]^\u0003\u0010\b\u0000^_\u0007\u0001\u0000\u0000_`\u0003\u0010\b"+
		"\u0000`\r\u0001\u0000\u0000\u0000af\u0003\u0010\b\u0000bf\u0003\u0006"+
		"\u0003\u0000cf\u0003\b\u0004\u0000df\u0003\n\u0005\u0000ea\u0001\u0000"+
		"\u0000\u0000eb\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ed\u0001"+
		"\u0000\u0000\u0000f\u000f\u0001\u0000\u0000\u0000gh\u0006\b\uffff\uffff"+
		"\u0000hi\u0005\u0002\u0000\u0000ij\u0003\u0010\b\u0000jk\u0005\u0003\u0000"+
		"\u0000ko\u0001\u0000\u0000\u0000lo\u0005\u0015\u0000\u0000mo\u0005\u0014"+
		"\u0000\u0000ng\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000nm\u0001"+
		"\u0000\u0000\u0000oz\u0001\u0000\u0000\u0000pq\n\u0005\u0000\u0000qy\u0003"+
		"\u0010\b\u0006rs\n\u0004\u0000\u0000st\u0007\u0002\u0000\u0000ty\u0003"+
		"\u0010\b\u0005uv\n\u0003\u0000\u0000vw\u0007\u0003\u0000\u0000wy\u0003"+
		"\u0010\b\u0004xp\u0001\u0000\u0000\u0000xr\u0001\u0000\u0000\u0000xu\u0001"+
		"\u0000\u0000\u0000y|\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000"+
		"z{\u0001\u0000\u0000\u0000{\u0011\u0001\u0000\u0000\u0000|z\u0001\u0000"+
		"\u0000\u0000\n\u0015!#&BYenxz";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}