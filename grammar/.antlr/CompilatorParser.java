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
		T__0=1, T__1=2, T__2=3, TYPE=4, STRING=5, PLUS=6, MINUS=7, TIMES=8, DIV=9, 
		OC=10, OL=11, BOOL=12, SWEET=13, SWEETCONDITION=14, ELSE=15, ARROW=16, 
		SHOW=17, INITKEY=18, FINALKEY=19, GATITO=20, PUNTITO=21, NUM=22, ID=23, 
		WRONGID=24, LINECOMMENT=25, COMMENT=26, NEWLINE=27, SPACES=28;
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
			null, "'='", "'('", "')'", null, null, "'+'", "'-'", "'*'", "'/'", null, 
			null, null, "'Sweet'", "'SweetCondition'", "'Else'", "'->'", "'SHOW'", 
			"'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "TYPE", "STRING", "PLUS", "MINUS", "TIMES", "DIV", 
			"OC", "OL", "BOOL", "SWEET", "SWEETCONDITION", "ELSE", "ARROW", "SHOW", 
			"INITKEY", "FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "LINECOMMENT", 
			"COMMENT", "NEWLINE", "SPACES"
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
		public TerminalNode STRING() { return getToken(CompilatorParser.STRING, 0); }
		public TerminalNode COMMENT() { return getToken(CompilatorParser.COMMENT, 0); }
		public TerminalNode LINECOMMENT() { return getToken(CompilatorParser.LINECOMMENT, 0); }
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
			setState(41);
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
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1130496L) != 0)) {
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
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(38);
				match(STRING);
				}
				break;
			case COMMENT:
				enterOuterAlt(_localctx, 4);
				{
				setState(39);
				match(COMMENT);
				}
				break;
			case LINECOMMENT:
				enterOuterAlt(_localctx, 5);
				{
				setState(40);
				match(LINECOMMENT);
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
		public TerminalNode LINECOMMENT() { return getToken(CompilatorParser.LINECOMMENT, 0); }
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
		public TerminalNode LINECOMMENT() { return getToken(CompilatorParser.LINECOMMENT, 0); }
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
			setState(81);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(43);
				match(GATITO);
				setState(44);
				match(TYPE);
				setState(45);
				match(ID);
				setState(46);
				match(PUNTITO);
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LINECOMMENT) {
					{
					setState(47);
					match(LINECOMMENT);
					}
				}

				setState(50);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
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
				match(PUNTITO);
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LINECOMMENT) {
					{
					setState(55);
					match(LINECOMMENT);
					}
				}

				setState(58);
				match(NEWLINE);
				}
				break;
			case 3:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
				match(GATITO);
				setState(60);
				match(TYPE);
				setState(61);
				match(ID);
				setState(62);
				match(T__0);
				setState(63);
				expr(0);
				setState(64);
				match(PUNTITO);
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LINECOMMENT) {
					{
					setState(65);
					match(LINECOMMENT);
					}
				}

				setState(68);
				match(NEWLINE);
				}
				break;
			case 4:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(70);
				match(GATITO);
				setState(71);
				match(TYPE);
				setState(72);
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
				setState(73);
				match(T__0);
				setState(74);
				expr(0);
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LINECOMMENT) {
					{
					setState(75);
					match(LINECOMMENT);
					}
				}

				setState(78);
				match(PUNTITO);
				setState(79);
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
	public static class ShowStringContext extends ImpresionContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode SHOW() { return getToken(CompilatorParser.SHOW, 0); }
		public TerminalNode STRING() { return getToken(CompilatorParser.STRING, 0); }
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public ShowStringContext(ImpresionContext ctx) { copyFrom(ctx); }
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
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				_localctx = new ShowExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				match(ARROW);
				setState(84);
				match(SHOW);
				setState(85);
				match(T__1);
				setState(86);
				expr(0);
				setState(87);
				match(T__2);
				setState(88);
				match(PUNTITO);
				setState(89);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new ShowStringContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				match(ARROW);
				setState(92);
				match(SHOW);
				setState(93);
				match(T__1);
				setState(94);
				match(STRING);
				setState(95);
				match(T__2);
				setState(96);
				match(PUNTITO);
				setState(97);
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
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
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
			setState(100);
			match(SWEETCONDITION);
			setState(101);
			match(T__1);
			setState(102);
			condition();
			setState(103);
			match(T__2);
			setState(104);
			match(INITKEY);
			setState(105);
			statement();
			setState(106);
			match(FINALKEY);
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(107);
				match(ELSE);
				setState(108);
				match(INITKEY);
				setState(109);
				statement();
				setState(110);
				match(FINALKEY);
				}
			}

			setState(114);
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
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	 
		public ConditionContext() { }
		public void copyFrom(ConditionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicalExprContext extends ConditionContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OL() { return getToken(CompilatorParser.OL, 0); }
		public LogicalExprContext(ConditionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExprContext extends ConditionContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OC() { return getToken(CompilatorParser.OC, 0); }
		public ComparisonExprContext(ConditionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BoolConditionContext extends ConditionContext {
		public TerminalNode BOOL() { return getToken(CompilatorParser.BOOL, 0); }
		public BoolConditionContext(ConditionContext ctx) { copyFrom(ctx); }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_condition);
		try {
			setState(125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				_localctx = new ComparisonExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				expr(0);
				setState(117);
				match(OC);
				setState(118);
				expr(0);
				}
				break;
			case 2:
				_localctx = new LogicalExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				expr(0);
				setState(121);
				match(OL);
				setState(122);
				expr(0);
				}
				break;
			case 3:
				_localctx = new BoolConditionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(124);
				match(BOOL);
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
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case NUM:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(127);
				expr(0);
				}
				break;
			case GATITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				declaracion();
				}
				break;
			case ARROW:
				enterOuterAlt(_localctx, 3);
				{
				setState(129);
				impresion();
				}
				break;
			case SWEETCONDITION:
				enterOuterAlt(_localctx, 4);
				{
				setState(130);
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
			setState(140);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(134);
				match(T__1);
				setState(135);
				expr(0);
				setState(136);
				match(T__2);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(138);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(139);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(152);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(150);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new ImpmultiContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(142);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(143);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MultidivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(144);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(145);
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
						setState(146);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new MasmenosContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(147);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(148);
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
						setState(149);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(154);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
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
		"\u0004\u0001\u001c\u009c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0001\u0000\u0004\u0000\u0014\b\u0000\u000b\u0000\f\u0000"+
		"\u0015\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\"\b"+
		"\u0002\n\u0002\f\u0002%\t\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u0002*\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u00031\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u00039\b\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003C\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003M\b"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003R\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004c\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005q\b"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006~\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007\u0084\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\b\u008d\b\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0005\b\u0097\b\b\n\b\f\b\u009a\t\b\u0001\b\u0000\u0001\u0010"+
		"\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000\u0003\u0002\u0000\u0016"+
		"\u0016\u0018\u0018\u0001\u0000\b\t\u0001\u0000\u0006\u0007\u00ad\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0002\u0017\u0001\u0000\u0000\u0000\u0004"+
		")\u0001\u0000\u0000\u0000\u0006Q\u0001\u0000\u0000\u0000\bb\u0001\u0000"+
		"\u0000\u0000\nd\u0001\u0000\u0000\u0000\f}\u0001\u0000\u0000\u0000\u000e"+
		"\u0083\u0001\u0000\u0000\u0000\u0010\u008c\u0001\u0000\u0000\u0000\u0012"+
		"\u0014\u0003\u0002\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014"+
		"\u0015\u0001\u0000\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015"+
		"\u0016\u0001\u0000\u0000\u0000\u0016\u0001\u0001\u0000\u0000\u0000\u0017"+
		"\u0018\u0005\r\u0000\u0000\u0018\u0019\u0005\u0012\u0000\u0000\u0019\u001a"+
		"\u0005\u001b\u0000\u0000\u001a\u001b\u0003\u0004\u0002\u0000\u001b\u001c"+
		"\u0005\u0013\u0000\u0000\u001c\u0003\u0001\u0000\u0000\u0000\u001d*\u0003"+
		"\u0010\b\u0000\u001e\"\u0003\u0006\u0003\u0000\u001f\"\u0003\b\u0004\u0000"+
		" \"\u0003\n\u0005\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f\u0001\u0000"+
		"\u0000\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000\u0000#!\u0001"+
		"\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$*\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000&*\u0005\u0005\u0000\u0000\'*\u0005\u001a\u0000"+
		"\u0000(*\u0005\u0019\u0000\u0000)\u001d\u0001\u0000\u0000\u0000)#\u0001"+
		"\u0000\u0000\u0000)&\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000"+
		")(\u0001\u0000\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+,\u0005\u0014"+
		"\u0000\u0000,-\u0005\u0004\u0000\u0000-.\u0005\u0017\u0000\u0000.0\u0005"+
		"\u0015\u0000\u0000/1\u0005\u0019\u0000\u00000/\u0001\u0000\u0000\u0000"+
		"01\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u00002R\u0005\u001b\u0000"+
		"\u000034\u0005\u0014\u0000\u000045\u0005\u0004\u0000\u000056\u0007\u0000"+
		"\u0000\u000068\u0005\u0015\u0000\u000079\u0005\u0019\u0000\u000087\u0001"+
		"\u0000\u0000\u000089\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000"+
		":R\u0005\u001b\u0000\u0000;<\u0005\u0014\u0000\u0000<=\u0005\u0004\u0000"+
		"\u0000=>\u0005\u0017\u0000\u0000>?\u0005\u0001\u0000\u0000?@\u0003\u0010"+
		"\b\u0000@B\u0005\u0015\u0000\u0000AC\u0005\u0019\u0000\u0000BA\u0001\u0000"+
		"\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0005"+
		"\u001b\u0000\u0000ER\u0001\u0000\u0000\u0000FG\u0005\u0014\u0000\u0000"+
		"GH\u0005\u0004\u0000\u0000HI\u0007\u0000\u0000\u0000IJ\u0005\u0001\u0000"+
		"\u0000JL\u0003\u0010\b\u0000KM\u0005\u0019\u0000\u0000LK\u0001\u0000\u0000"+
		"\u0000LM\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NO\u0005\u0015"+
		"\u0000\u0000OP\u0005\u001b\u0000\u0000PR\u0001\u0000\u0000\u0000Q+\u0001"+
		"\u0000\u0000\u0000Q3\u0001\u0000\u0000\u0000Q;\u0001\u0000\u0000\u0000"+
		"QF\u0001\u0000\u0000\u0000R\u0007\u0001\u0000\u0000\u0000ST\u0005\u0010"+
		"\u0000\u0000TU\u0005\u0011\u0000\u0000UV\u0005\u0002\u0000\u0000VW\u0003"+
		"\u0010\b\u0000WX\u0005\u0003\u0000\u0000XY\u0005\u0015\u0000\u0000YZ\u0005"+
		"\u001b\u0000\u0000Zc\u0001\u0000\u0000\u0000[\\\u0005\u0010\u0000\u0000"+
		"\\]\u0005\u0011\u0000\u0000]^\u0005\u0002\u0000\u0000^_\u0005\u0005\u0000"+
		"\u0000_`\u0005\u0003\u0000\u0000`a\u0005\u0015\u0000\u0000ac\u0005\u001b"+
		"\u0000\u0000bS\u0001\u0000\u0000\u0000b[\u0001\u0000\u0000\u0000c\t\u0001"+
		"\u0000\u0000\u0000de\u0005\u000e\u0000\u0000ef\u0005\u0002\u0000\u0000"+
		"fg\u0003\f\u0006\u0000gh\u0005\u0003\u0000\u0000hi\u0005\u0012\u0000\u0000"+
		"ij\u0003\u000e\u0007\u0000jp\u0005\u0013\u0000\u0000kl\u0005\u000f\u0000"+
		"\u0000lm\u0005\u0012\u0000\u0000mn\u0003\u000e\u0007\u0000no\u0005\u0013"+
		"\u0000\u0000oq\u0001\u0000\u0000\u0000pk\u0001\u0000\u0000\u0000pq\u0001"+
		"\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rs\u0005\u001b\u0000\u0000"+
		"s\u000b\u0001\u0000\u0000\u0000tu\u0003\u0010\b\u0000uv\u0005\n\u0000"+
		"\u0000vw\u0003\u0010\b\u0000w~\u0001\u0000\u0000\u0000xy\u0003\u0010\b"+
		"\u0000yz\u0005\u000b\u0000\u0000z{\u0003\u0010\b\u0000{~\u0001\u0000\u0000"+
		"\u0000|~\u0005\f\u0000\u0000}t\u0001\u0000\u0000\u0000}x\u0001\u0000\u0000"+
		"\u0000}|\u0001\u0000\u0000\u0000~\r\u0001\u0000\u0000\u0000\u007f\u0084"+
		"\u0003\u0010\b\u0000\u0080\u0084\u0003\u0006\u0003\u0000\u0081\u0084\u0003"+
		"\b\u0004\u0000\u0082\u0084\u0003\n\u0005\u0000\u0083\u007f\u0001\u0000"+
		"\u0000\u0000\u0083\u0080\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000"+
		"\u0000\u0000\u0083\u0082\u0001\u0000\u0000\u0000\u0084\u000f\u0001\u0000"+
		"\u0000\u0000\u0085\u0086\u0006\b\uffff\uffff\u0000\u0086\u0087\u0005\u0002"+
		"\u0000\u0000\u0087\u0088\u0003\u0010\b\u0000\u0088\u0089\u0005\u0003\u0000"+
		"\u0000\u0089\u008d\u0001\u0000\u0000\u0000\u008a\u008d\u0005\u0017\u0000"+
		"\u0000\u008b\u008d\u0005\u0016\u0000\u0000\u008c\u0085\u0001\u0000\u0000"+
		"\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008c\u008b\u0001\u0000\u0000"+
		"\u0000\u008d\u0098\u0001\u0000\u0000\u0000\u008e\u008f\n\u0005\u0000\u0000"+
		"\u008f\u0097\u0003\u0010\b\u0006\u0090\u0091\n\u0004\u0000\u0000\u0091"+
		"\u0092\u0007\u0001\u0000\u0000\u0092\u0097\u0003\u0010\b\u0005\u0093\u0094"+
		"\n\u0003\u0000\u0000\u0094\u0095\u0007\u0002\u0000\u0000\u0095\u0097\u0003"+
		"\u0010\b\u0004\u0096\u008e\u0001\u0000\u0000\u0000\u0096\u0090\u0001\u0000"+
		"\u0000\u0000\u0096\u0093\u0001\u0000\u0000\u0000\u0097\u009a\u0001\u0000"+
		"\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000"+
		"\u0000\u0000\u0099\u0011\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000"+
		"\u0000\u0000\u0010\u0015!#)08BLQbp}\u0083\u008c\u0096\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}