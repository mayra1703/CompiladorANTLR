// Generated from c:/Users/mayme/OneDrive/Desktop/copia-compilador/CompiladorANTLR/grammar/Compilator.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, TYPE=3, PLUS=4, MINUS=5, MULT=6, DIV=7, MOD=8, IGUAL=9, 
		OC=10, OL=11, MATH_EQUALS=12, SERENITYCLASS=13, COZYCONDITION=14, TWILIGHTOPTION=15, 
		ELSE=16, DREAMYELSE=17, DREAMLOOP=18, DO=19, ARROW=20, WHISPER=21, INITKEY=22, 
		FINALKEY=23, GATITO=24, PUNTITO=25, STARSTRING=26, NUM=27, CHAR=28, FLOAT=29, 
		ID=30, LINECOMMENT=31, COMMENT=32, NEWLINE=33, SPACES=34, COMA=35;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_block = 2, RULE_contenido = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_condicional = 7, RULE_ifStatement = 8, 
		RULE_elseIfStatement = 9, RULE_elseStatement = 10, RULE_incremento = 11, 
		RULE_whileStatement = 12, RULE_expr = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "block", "contenido", "declaracion", "asignacion", "impresion", 
			"condicional", "ifStatement", "elseIfStatement", "elseStatement", "incremento", 
			"whileStatement", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", "'%'", "'='", null, 
			null, null, "'SerenityClass'", "'CozyCondition'", "'TwilightOption'", 
			"'else'", "'DreamElse'", "'DreamLoop'", "'do'", "'->'", "'WHISPER'", 
			"'{'", "'}'", "'#'", "'.'", null, null, null, null, null, null, null, 
			null, null, "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "TYPE", "PLUS", "MINUS", "MULT", "DIV", "MOD", "IGUAL", 
			"OC", "OL", "MATH_EQUALS", "SERENITYCLASS", "COZYCONDITION", "TWILIGHTOPTION", 
			"ELSE", "DREAMYELSE", "DREAMLOOP", "DO", "ARROW", "WHISPER", "INITKEY", 
			"FINALKEY", "GATITO", "PUNTITO", "STARSTRING", "NUM", "CHAR", "FLOAT", 
			"ID", "LINECOMMENT", "COMMENT", "NEWLINE", "SPACES", "COMA"
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
			setState(29); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(28);
				start();
				}
				}
				setState(31); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SERENITYCLASS );
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
		public TerminalNode SERENITYCLASS() { return getToken(CompilatorParser.SERENITYCLASS, 0); }
		public TerminalNode INITKEY() { return getToken(CompilatorParser.INITKEY, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
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
			setState(33);
			match(SERENITYCLASS);
			setState(34);
			match(INITKEY);
			setState(35);
			match(NEWLINE);
			setState(36);
			block();
			setState(37);
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
	public static class BlockContext extends ParserRuleContext {
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(CompilatorParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CompilatorParser.NEWLINE, i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 18104320L) != 0)) {
				{
				{
				setState(39);
				contenido();
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(40);
					match(NEWLINE);
					}
				}

				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public IncrementoContext incremento() {
			return getRuleContext(IncrementoContext.class,0);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_contenido);
		try {
			setState(54);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				impresion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				condicional();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				asignacion();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				whileStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(53);
				incremento();
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
	public static class DeclaracionContext extends ParserRuleContext {
		public TerminalNode GATITO() { return getToken(CompilatorParser.GATITO, 0); }
		public TerminalNode TYPE() { return getToken(CompilatorParser.TYPE, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declaracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(GATITO);
			setState(57);
			match(TYPE);
			setState(58);
			match(ID);
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(59);
				match(IGUAL);
				setState(60);
				expr(0);
				}
			}

			setState(63);
			match(PUNTITO);
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
	public static class AsignacionContext extends ParserRuleContext {
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
	 
		public AsignacionContext() { }
		public void copyFrom(AsignacionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NormalAssignContext extends AsignacionContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public NormalAssignContext(AsignacionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MathAssignContext extends AsignacionContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode MATH_EQUALS() { return getToken(CompilatorParser.MATH_EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public MathAssignContext(AsignacionContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignacion);
		try {
			setState(81);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new NormalAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				match(ARROW);
				setState(66);
				match(ID);
				setState(67);
				match(IGUAL);
				setState(68);
				match(T__0);
				setState(69);
				expr(0);
				setState(70);
				match(T__1);
				setState(71);
				match(PUNTITO);
				}
				break;
			case 2:
				_localctx = new MathAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(73);
				match(ARROW);
				setState(74);
				match(ID);
				setState(75);
				match(MATH_EQUALS);
				setState(76);
				match(T__0);
				setState(77);
				expr(0);
				setState(78);
				match(T__1);
				setState(79);
				match(PUNTITO);
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
		public TerminalNode WHISPER() { return getToken(CompilatorParser.WHISPER, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public List<TerminalNode> COMA() { return getTokens(CompilatorParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(CompilatorParser.COMA, i);
		}
		public ShowExprContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		int _la;
		try {
			_localctx = new ShowExprContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(ARROW);
			setState(84);
			match(WHISPER);
			setState(85);
			match(T__0);
			setState(86);
			expr(0);
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(87);
				match(COMA);
				setState(88);
				expr(0);
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			match(T__1);
			setState(95);
			match(PUNTITO);
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
	public static class CondicionalContext extends ParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public List<ElseIfStatementContext> elseIfStatement() {
			return getRuleContexts(ElseIfStatementContext.class);
		}
		public ElseIfStatementContext elseIfStatement(int i) {
			return getRuleContext(ElseIfStatementContext.class,i);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public CondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicional; }
	}

	public final CondicionalContext condicional() throws RecognitionException {
		CondicionalContext _localctx = new CondicionalContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_condicional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			ifStatement();
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSE) {
				{
				{
				setState(98);
				elseIfStatement();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DREAMYELSE) {
				{
				setState(104);
				elseStatement();
				}
			}

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
		public TerminalNode COZYCONDITION() { return getToken(CompilatorParser.COZYCONDITION, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode INITKEY() { return getToken(CompilatorParser.INITKEY, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(COZYCONDITION);
			setState(108);
			match(T__0);
			setState(109);
			expr(0);
			setState(110);
			match(T__1);
			setState(111);
			match(INITKEY);
			setState(112);
			match(NEWLINE);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 18104320L) != 0)) {
				{
				{
				setState(113);
				contenido();
				}
				}
				setState(118);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(119);
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
	public static class ElseIfStatementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CompilatorParser.ELSE, 0); }
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(ELSE);
			setState(122);
			ifStatement();
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
	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode DREAMYELSE() { return getToken(CompilatorParser.DREAMYELSE, 0); }
		public TerminalNode INITKEY() { return getToken(CompilatorParser.INITKEY, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(CompilatorParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CompilatorParser.NEWLINE, i);
		}
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_elseStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(DREAMYELSE);
			setState(125);
			match(INITKEY);
			setState(126);
			match(NEWLINE);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 18104320L) != 0)) {
				{
				{
				setState(127);
				contenido();
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(133);
			match(FINALKEY);
			setState(134);
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
	public static class IncrementoContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public List<TerminalNode> PLUS() { return getTokens(CompilatorParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(CompilatorParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(CompilatorParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(CompilatorParser.MINUS, i);
		}
		public IncrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incremento; }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_incremento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(ARROW);
			setState(137);
			match(ID);
			setState(142);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				{
				setState(138);
				match(PLUS);
				setState(139);
				match(PLUS);
				}
				break;
			case MINUS:
				{
				setState(140);
				match(MINUS);
				setState(141);
				match(MINUS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode DREAMLOOP() { return getToken(CompilatorParser.DREAMLOOP, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode INITKEY() { return getToken(CompilatorParser.INITKEY, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_whileStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(DREAMLOOP);
			setState(145);
			match(T__0);
			setState(146);
			expr(0);
			setState(147);
			match(T__1);
			setState(148);
			match(INITKEY);
			setState(149);
			match(NEWLINE);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 18104320L) != 0)) {
				{
				{
				setState(150);
				contenido();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
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
	public static class ConditionContext extends ExprContext {
		public Token cond_value;
		public TerminalNode OC() { return getToken(CompilatorParser.OC, 0); }
		public TerminalNode OL() { return getToken(CompilatorParser.OL, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ConditionContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValueAsCharContext extends ExprContext {
		public TerminalNode STARSTRING() { return getToken(CompilatorParser.STARSTRING, 0); }
		public TerminalNode CHAR() { return getToken(CompilatorParser.CHAR, 0); }
		public ValueAsCharContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultDivContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MULT() { return getToken(CompilatorParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(CompilatorParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CompilatorParser.MOD, 0); }
		public MultDivContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumContext extends ExprContext {
		public TerminalNode FLOAT() { return getToken(CompilatorParser.FLOAT, 0); }
		public TerminalNode NUM() { return getToken(CompilatorParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CompilatorParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CompilatorParser.MINUS, 0); }
		public AddSubContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SignNumbersContext extends ExprContext {
		public Token operation;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(CompilatorParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CompilatorParser.MINUS, 0); }
		public SignNumbersContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(159);
				match(T__0);
				setState(160);
				expr(0);
				setState(161);
				match(T__1);
				}
				break;
			case PLUS:
			case MINUS:
				{
				_localctx = new SignNumbersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(163);
				((SignNumbersContext)_localctx).operation = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
					((SignNumbersContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(164);
				expr(8);
				}
				break;
			case OC:
			case OL:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(165);
				((ConditionContext)_localctx).cond_value = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==OC || _la==OL) ) {
					((ConditionContext)_localctx).cond_value = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case STARSTRING:
				{
				_localctx = new ValueAsCharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(166);
				match(STARSTRING);
				}
				break;
			case CHAR:
				{
				_localctx = new ValueAsCharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(167);
				match(CHAR);
				}
				break;
			case FLOAT:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(168);
				match(FLOAT);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(169);
				match(NUM);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(170);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(184);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(182);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new MultDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(173);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(174);
						((MultDivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 448L) != 0)) ) {
							((MultDivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(175);
						expr(11);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(176);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(177);
						((AddSubContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((AddSubContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(178);
						expr(10);
						}
						break;
					case 3:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(179);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(180);
						((ConditionContext)_localctx).cond_value = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==OC || _la==OL) ) {
							((ConditionContext)_localctx).cond_value = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(181);
						expr(7);
						}
						break;
					}
					} 
				}
				setState(186);
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
		case 13:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001#\u00bc\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000\u000b"+
		"\u0000\f\u0000\u001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0003\u0002*\b\u0002\u0005"+
		"\u0002,\b\u0002\n\u0002\f\u0002/\t\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00037\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004>\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u0005R\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0005\u0006Z\b\u0006\n\u0006\f\u0006]\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005"+
		"\u0007d\b\u0007\n\u0007\f\u0007g\t\u0007\u0001\u0007\u0003\u0007j\b\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bs\b\b"+
		"\n\b\f\bv\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n"+
		"\u0001\n\u0001\n\u0005\n\u0081\b\n\n\n\f\n\u0084\t\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0003\u000b\u008f\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0005\f\u0098\b\f\n\f\f\f\u009b\t\f\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0003\r\u00ac\b\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00b7\b\r\n\r\f\r\u00ba"+
		"\t\r\u0001\r\u0000\u0001\u001a\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0003\u0001\u0000\u0004\u0005"+
		"\u0001\u0000\n\u000b\u0001\u0000\u0006\b\u00c8\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0002!\u0001\u0000\u0000\u0000\u0004-\u0001\u0000\u0000\u0000"+
		"\u00066\u0001\u0000\u0000\u0000\b8\u0001\u0000\u0000\u0000\nQ\u0001\u0000"+
		"\u0000\u0000\fS\u0001\u0000\u0000\u0000\u000ea\u0001\u0000\u0000\u0000"+
		"\u0010k\u0001\u0000\u0000\u0000\u0012y\u0001\u0000\u0000\u0000\u0014|"+
		"\u0001\u0000\u0000\u0000\u0016\u0088\u0001\u0000\u0000\u0000\u0018\u0090"+
		"\u0001\u0000\u0000\u0000\u001a\u00ab\u0001\u0000\u0000\u0000\u001c\u001e"+
		"\u0003\u0002\u0001\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e\u001f"+
		"\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001"+
		"\u0000\u0000\u0000 \u0001\u0001\u0000\u0000\u0000!\"\u0005\r\u0000\u0000"+
		"\"#\u0005\u0016\u0000\u0000#$\u0005!\u0000\u0000$%\u0003\u0004\u0002\u0000"+
		"%&\u0005\u0017\u0000\u0000&\u0003\u0001\u0000\u0000\u0000\')\u0003\u0006"+
		"\u0003\u0000(*\u0005!\u0000\u0000)(\u0001\u0000\u0000\u0000)*\u0001\u0000"+
		"\u0000\u0000*,\u0001\u0000\u0000\u0000+\'\u0001\u0000\u0000\u0000,/\u0001"+
		"\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000"+
		".\u0005\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u000007\u0003\b\u0004"+
		"\u000017\u0003\f\u0006\u000027\u0003\u000e\u0007\u000037\u0003\n\u0005"+
		"\u000047\u0003\u0018\f\u000057\u0003\u0016\u000b\u000060\u0001\u0000\u0000"+
		"\u000061\u0001\u0000\u0000\u000062\u0001\u0000\u0000\u000063\u0001\u0000"+
		"\u0000\u000064\u0001\u0000\u0000\u000065\u0001\u0000\u0000\u00007\u0007"+
		"\u0001\u0000\u0000\u000089\u0005\u0018\u0000\u00009:\u0005\u0003\u0000"+
		"\u0000:=\u0005\u001e\u0000\u0000;<\u0005\t\u0000\u0000<>\u0003\u001a\r"+
		"\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>?\u0001\u0000"+
		"\u0000\u0000?@\u0005\u0019\u0000\u0000@\t\u0001\u0000\u0000\u0000AB\u0005"+
		"\u0014\u0000\u0000BC\u0005\u001e\u0000\u0000CD\u0005\t\u0000\u0000DE\u0005"+
		"\u0001\u0000\u0000EF\u0003\u001a\r\u0000FG\u0005\u0002\u0000\u0000GH\u0005"+
		"\u0019\u0000\u0000HR\u0001\u0000\u0000\u0000IJ\u0005\u0014\u0000\u0000"+
		"JK\u0005\u001e\u0000\u0000KL\u0005\f\u0000\u0000LM\u0005\u0001\u0000\u0000"+
		"MN\u0003\u001a\r\u0000NO\u0005\u0002\u0000\u0000OP\u0005\u0019\u0000\u0000"+
		"PR\u0001\u0000\u0000\u0000QA\u0001\u0000\u0000\u0000QI\u0001\u0000\u0000"+
		"\u0000R\u000b\u0001\u0000\u0000\u0000ST\u0005\u0014\u0000\u0000TU\u0005"+
		"\u0015\u0000\u0000UV\u0005\u0001\u0000\u0000V[\u0003\u001a\r\u0000WX\u0005"+
		"#\u0000\u0000XZ\u0003\u001a\r\u0000YW\u0001\u0000\u0000\u0000Z]\u0001"+
		"\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000"+
		"\\^\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000^_\u0005\u0002\u0000"+
		"\u0000_`\u0005\u0019\u0000\u0000`\r\u0001\u0000\u0000\u0000ae\u0003\u0010"+
		"\b\u0000bd\u0003\u0012\t\u0000cb\u0001\u0000\u0000\u0000dg\u0001\u0000"+
		"\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fi\u0001"+
		"\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000hj\u0003\u0014\n\u0000ih\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000j\u000f\u0001\u0000\u0000"+
		"\u0000kl\u0005\u000e\u0000\u0000lm\u0005\u0001\u0000\u0000mn\u0003\u001a"+
		"\r\u0000no\u0005\u0002\u0000\u0000op\u0005\u0016\u0000\u0000pt\u0005!"+
		"\u0000\u0000qs\u0003\u0006\u0003\u0000rq\u0001\u0000\u0000\u0000sv\u0001"+
		"\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000"+
		"uw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000wx\u0005\u0017\u0000"+
		"\u0000x\u0011\u0001\u0000\u0000\u0000yz\u0005\u0010\u0000\u0000z{\u0003"+
		"\u0010\b\u0000{\u0013\u0001\u0000\u0000\u0000|}\u0005\u0011\u0000\u0000"+
		"}~\u0005\u0016\u0000\u0000~\u0082\u0005!\u0000\u0000\u007f\u0081\u0003"+
		"\u0006\u0003\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\u0084\u0001"+
		"\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001"+
		"\u0000\u0000\u0000\u0083\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0005\u0017\u0000\u0000\u0086\u0087\u0005"+
		"!\u0000\u0000\u0087\u0015\u0001\u0000\u0000\u0000\u0088\u0089\u0005\u0014"+
		"\u0000\u0000\u0089\u008e\u0005\u001e\u0000\u0000\u008a\u008b\u0005\u0004"+
		"\u0000\u0000\u008b\u008f\u0005\u0004\u0000\u0000\u008c\u008d\u0005\u0005"+
		"\u0000\u0000\u008d\u008f\u0005\u0005\u0000\u0000\u008e\u008a\u0001\u0000"+
		"\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0017\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0005\u0012\u0000\u0000\u0091\u0092\u0005\u0001"+
		"\u0000\u0000\u0092\u0093\u0003\u001a\r\u0000\u0093\u0094\u0005\u0002\u0000"+
		"\u0000\u0094\u0095\u0005\u0016\u0000\u0000\u0095\u0099\u0005!\u0000\u0000"+
		"\u0096\u0098\u0003\u0006\u0003\u0000\u0097\u0096\u0001\u0000\u0000\u0000"+
		"\u0098\u009b\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000"+
		"\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u009c\u0001\u0000\u0000\u0000"+
		"\u009b\u0099\u0001\u0000\u0000\u0000\u009c\u009d\u0005\u0017\u0000\u0000"+
		"\u009d\u0019\u0001\u0000\u0000\u0000\u009e\u009f\u0006\r\uffff\uffff\u0000"+
		"\u009f\u00a0\u0005\u0001\u0000\u0000\u00a0\u00a1\u0003\u001a\r\u0000\u00a1"+
		"\u00a2\u0005\u0002\u0000\u0000\u00a2\u00ac\u0001\u0000\u0000\u0000\u00a3"+
		"\u00a4\u0007\u0000\u0000\u0000\u00a4\u00ac\u0003\u001a\r\b\u00a5\u00ac"+
		"\u0007\u0001\u0000\u0000\u00a6\u00ac\u0005\u001a\u0000\u0000\u00a7\u00ac"+
		"\u0005\u001c\u0000\u0000\u00a8\u00ac\u0005\u001d\u0000\u0000\u00a9\u00ac"+
		"\u0005\u001b\u0000\u0000\u00aa\u00ac\u0005\u001e\u0000\u0000\u00ab\u009e"+
		"\u0001\u0000\u0000\u0000\u00ab\u00a3\u0001\u0000\u0000\u0000\u00ab\u00a5"+
		"\u0001\u0000\u0000\u0000\u00ab\u00a6\u0001\u0000\u0000\u0000\u00ab\u00a7"+
		"\u0001\u0000\u0000\u0000\u00ab\u00a8\u0001\u0000\u0000\u0000\u00ab\u00a9"+
		"\u0001\u0000\u0000\u0000\u00ab\u00aa\u0001\u0000\u0000\u0000\u00ac\u00b8"+
		"\u0001\u0000\u0000\u0000\u00ad\u00ae\n\n\u0000\u0000\u00ae\u00af\u0007"+
		"\u0002\u0000\u0000\u00af\u00b7\u0003\u001a\r\u000b\u00b0\u00b1\n\t\u0000"+
		"\u0000\u00b1\u00b2\u0007\u0000\u0000\u0000\u00b2\u00b7\u0003\u001a\r\n"+
		"\u00b3\u00b4\n\u0006\u0000\u0000\u00b4\u00b5\u0007\u0001\u0000\u0000\u00b5"+
		"\u00b7\u0003\u001a\r\u0007\u00b6\u00ad\u0001\u0000\u0000\u0000\u00b6\u00b0"+
		"\u0001\u0000\u0000\u0000\u00b6\u00b3\u0001\u0000\u0000\u0000\u00b7\u00ba"+
		"\u0001\u0000\u0000\u0000\u00b8\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9"+
		"\u0001\u0000\u0000\u0000\u00b9\u001b\u0001\u0000\u0000\u0000\u00ba\u00b8"+
		"\u0001\u0000\u0000\u0000\u0010\u001f)-6=Q[eit\u0082\u008e\u0099\u00ab"+
		"\u00b6\u00b8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}