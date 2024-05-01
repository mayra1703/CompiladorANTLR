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
		T__0=1, T__1=2, TYPE=3, PLUS=4, MINUS=5, MULT=6, DIV=7, MOD=8, IGUAL=9, 
		OC=10, OL=11, SERENITYCLASS=12, COZYCONDITION=13, TWILIGHTOPTION=14, ELSE=15, 
		DREAMYELSE=16, DREAMLOOP=17, DO=18, ARROW=19, WHISPER=20, INITKEY=21, 
		FINALKEY=22, GATITO=23, PUNTITO=24, STARSTRING=25, NUM=26, CHAR=27, FLOAT=28, 
		ID=29, LINECOMMENT=30, COMMENT=31, NEWLINE=32, SPACES=33;
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
			null, "'SerenityClass'", "'CozyCondition'", "'TwilightOption'", "'else'", 
			"'DreamElse'", "'DreamLoop'", "'do'", "'->'", "'WHISPER'", "'{'", "'}'", 
			"'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "TYPE", "PLUS", "MINUS", "MULT", "DIV", "MOD", "IGUAL", 
			"OC", "OL", "SERENITYCLASS", "COZYCONDITION", "TWILIGHTOPTION", "ELSE", 
			"DREAMYELSE", "DREAMLOOP", "DO", "ARROW", "WHISPER", "INITKEY", "FINALKEY", 
			"GATITO", "PUNTITO", "STARSTRING", "NUM", "CHAR", "FLOAT", "ID", "LINECOMMENT", 
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
			block();
			setState(36);
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
			setState(42); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(38);
				contenido();
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(39);
					match(NEWLINE);
					}
				}

				}
				}
				setState(44); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 9052160L) != 0) );
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
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				impresion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				condicional();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				asignacion();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(50);
				whileStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(51);
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
			setState(54);
			match(GATITO);
			setState(55);
			match(TYPE);
			setState(56);
			match(ID);
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(57);
				match(IGUAL);
				setState(58);
				expr(0);
				}
			}

			setState(61);
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
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignacion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(ARROW);
			setState(64);
			match(ID);
			setState(65);
			match(IGUAL);
			setState(66);
			match(T__0);
			setState(67);
			expr(0);
			setState(68);
			match(T__1);
			setState(69);
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
		public TerminalNode WHISPER() { return getToken(CompilatorParser.WHISPER, 0); }
		public TerminalNode STARSTRING() { return getToken(CompilatorParser.STARSTRING, 0); }
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public ShowStringContext(ImpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ShowExprContext extends ImpresionContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode WHISPER() { return getToken(CompilatorParser.WHISPER, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public ShowExprContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		try {
			setState(84);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new ShowExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				match(ARROW);
				setState(72);
				match(WHISPER);
				setState(73);
				match(T__0);
				setState(74);
				expr(0);
				setState(75);
				match(T__1);
				setState(76);
				match(PUNTITO);
				}
				break;
			case 2:
				_localctx = new ShowStringContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				match(ARROW);
				setState(79);
				match(WHISPER);
				setState(80);
				match(T__0);
				setState(81);
				match(STARSTRING);
				setState(82);
				match(T__1);
				setState(83);
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
			setState(86);
			ifStatement();
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSE) {
				{
				{
				setState(87);
				elseIfStatement();
				}
				}
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DREAMYELSE) {
				{
				setState(93);
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
			setState(96);
			match(COZYCONDITION);
			setState(97);
			match(T__0);
			setState(98);
			expr(0);
			setState(99);
			match(T__1);
			setState(100);
			match(INITKEY);
			setState(101);
			match(NEWLINE);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9052160L) != 0)) {
				{
				{
				setState(102);
				contenido();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
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
			setState(110);
			match(ELSE);
			setState(111);
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
			setState(113);
			match(DREAMYELSE);
			setState(114);
			match(INITKEY);
			setState(115);
			match(NEWLINE);
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9052160L) != 0)) {
				{
				{
				setState(116);
				contenido();
				}
				}
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(122);
			match(FINALKEY);
			setState(123);
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
			setState(125);
			match(ARROW);
			setState(126);
			match(ID);
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				{
				setState(127);
				match(PLUS);
				setState(128);
				match(PLUS);
				}
				break;
			case MINUS:
				{
				setState(129);
				match(MINUS);
				setState(130);
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
			setState(133);
			match(DREAMLOOP);
			setState(134);
			match(T__0);
			setState(135);
			expr(0);
			setState(136);
			match(T__1);
			setState(137);
			match(INITKEY);
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9052160L) != 0)) {
				{
				{
				setState(138);
				contenido();
				}
				}
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
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
	public static class NumContext extends ExprContext {
		public TerminalNode FLOAT() { return getToken(CompilatorParser.FLOAT, 0); }
		public TerminalNode NUM() { return getToken(CompilatorParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArithmeticContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MULT() { return getToken(CompilatorParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(CompilatorParser.DIV, 0); }
		public TerminalNode PLUS() { return getToken(CompilatorParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CompilatorParser.MINUS, 0); }
		public TerminalNode MOD() { return getToken(CompilatorParser.MOD, 0); }
		public ArithmeticContext(ExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(147);
				match(T__0);
				setState(148);
				expr(0);
				setState(149);
				match(T__1);
				}
				break;
			case OC:
			case OL:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(151);
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
				setState(152);
				match(STARSTRING);
				}
				break;
			case CHAR:
				{
				_localctx = new ValueAsCharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(153);
				match(CHAR);
				}
				break;
			case FLOAT:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(154);
				match(FLOAT);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(155);
				match(NUM);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(156);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(167);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(165);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(159);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(160);
						((ArithmeticContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 496L) != 0)) ) {
							((ArithmeticContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(161);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(162);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(163);
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
						setState(164);
						expr(7);
						}
						break;
					}
					} 
				}
				setState(169);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
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
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001!\u00ab\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000\u000b"+
		"\u0000\f\u0000\u001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0003\u0002)\b\u0002\u0004\u0002+\b\u0002"+
		"\u000b\u0002\f\u0002,\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u00035\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004<\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006U\b\u0006"+
		"\u0001\u0007\u0001\u0007\u0005\u0007Y\b\u0007\n\u0007\f\u0007\\\t\u0007"+
		"\u0001\u0007\u0003\u0007_\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0005\bh\b\b\n\b\f\bk\t\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0005\nv\b\n\n\n\f\ny\t\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u0084\b\u000b\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0005\f\u008c\b\f\n\f\f\f\u008f\t\f\u0001\f\u0001\f"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0003\r\u009e\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0005\r\u00a6\b\r\n\r\f\r\u00a9\t\r\u0001\r\u0000\u0001\u001a"+
		"\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u0000\u0002\u0001\u0000\n\u000b\u0001\u0000\u0004\b\u00b4\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0002!\u0001\u0000\u0000\u0000\u0004*\u0001"+
		"\u0000\u0000\u0000\u00064\u0001\u0000\u0000\u0000\b6\u0001\u0000\u0000"+
		"\u0000\n?\u0001\u0000\u0000\u0000\fT\u0001\u0000\u0000\u0000\u000eV\u0001"+
		"\u0000\u0000\u0000\u0010`\u0001\u0000\u0000\u0000\u0012n\u0001\u0000\u0000"+
		"\u0000\u0014q\u0001\u0000\u0000\u0000\u0016}\u0001\u0000\u0000\u0000\u0018"+
		"\u0085\u0001\u0000\u0000\u0000\u001a\u009d\u0001\u0000\u0000\u0000\u001c"+
		"\u001e\u0003\u0002\u0001\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e"+
		"\u001f\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f"+
		" \u0001\u0000\u0000\u0000 \u0001\u0001\u0000\u0000\u0000!\"\u0005\f\u0000"+
		"\u0000\"#\u0005\u0015\u0000\u0000#$\u0003\u0004\u0002\u0000$%\u0005\u0016"+
		"\u0000\u0000%\u0003\u0001\u0000\u0000\u0000&(\u0003\u0006\u0003\u0000"+
		"\')\u0005 \u0000\u0000(\'\u0001\u0000\u0000\u0000()\u0001\u0000\u0000"+
		"\u0000)+\u0001\u0000\u0000\u0000*&\u0001\u0000\u0000\u0000+,\u0001\u0000"+
		"\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-\u0005"+
		"\u0001\u0000\u0000\u0000.5\u0003\b\u0004\u0000/5\u0003\f\u0006\u00000"+
		"5\u0003\u000e\u0007\u000015\u0003\n\u0005\u000025\u0003\u0018\f\u0000"+
		"35\u0003\u0016\u000b\u00004.\u0001\u0000\u0000\u00004/\u0001\u0000\u0000"+
		"\u000040\u0001\u0000\u0000\u000041\u0001\u0000\u0000\u000042\u0001\u0000"+
		"\u0000\u000043\u0001\u0000\u0000\u00005\u0007\u0001\u0000\u0000\u0000"+
		"67\u0005\u0017\u0000\u000078\u0005\u0003\u0000\u00008;\u0005\u001d\u0000"+
		"\u00009:\u0005\t\u0000\u0000:<\u0003\u001a\r\u0000;9\u0001\u0000\u0000"+
		"\u0000;<\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=>\u0005\u0018"+
		"\u0000\u0000>\t\u0001\u0000\u0000\u0000?@\u0005\u0013\u0000\u0000@A\u0005"+
		"\u001d\u0000\u0000AB\u0005\t\u0000\u0000BC\u0005\u0001\u0000\u0000CD\u0003"+
		"\u001a\r\u0000DE\u0005\u0002\u0000\u0000EF\u0005\u0018\u0000\u0000F\u000b"+
		"\u0001\u0000\u0000\u0000GH\u0005\u0013\u0000\u0000HI\u0005\u0014\u0000"+
		"\u0000IJ\u0005\u0001\u0000\u0000JK\u0003\u001a\r\u0000KL\u0005\u0002\u0000"+
		"\u0000LM\u0005\u0018\u0000\u0000MU\u0001\u0000\u0000\u0000NO\u0005\u0013"+
		"\u0000\u0000OP\u0005\u0014\u0000\u0000PQ\u0005\u0001\u0000\u0000QR\u0005"+
		"\u0019\u0000\u0000RS\u0005\u0002\u0000\u0000SU\u0005\u0018\u0000\u0000"+
		"TG\u0001\u0000\u0000\u0000TN\u0001\u0000\u0000\u0000U\r\u0001\u0000\u0000"+
		"\u0000VZ\u0003\u0010\b\u0000WY\u0003\u0012\t\u0000XW\u0001\u0000\u0000"+
		"\u0000Y\\\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000"+
		"\u0000\u0000[^\u0001\u0000\u0000\u0000\\Z\u0001\u0000\u0000\u0000]_\u0003"+
		"\u0014\n\u0000^]\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_\u000f"+
		"\u0001\u0000\u0000\u0000`a\u0005\r\u0000\u0000ab\u0005\u0001\u0000\u0000"+
		"bc\u0003\u001a\r\u0000cd\u0005\u0002\u0000\u0000de\u0005\u0015\u0000\u0000"+
		"ei\u0005 \u0000\u0000fh\u0003\u0006\u0003\u0000gf\u0001\u0000\u0000\u0000"+
		"hk\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000"+
		"\u0000jl\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000lm\u0005\u0016"+
		"\u0000\u0000m\u0011\u0001\u0000\u0000\u0000no\u0005\u000f\u0000\u0000"+
		"op\u0003\u0010\b\u0000p\u0013\u0001\u0000\u0000\u0000qr\u0005\u0010\u0000"+
		"\u0000rs\u0005\u0015\u0000\u0000sw\u0005 \u0000\u0000tv\u0003\u0006\u0003"+
		"\u0000ut\u0001\u0000\u0000\u0000vy\u0001\u0000\u0000\u0000wu\u0001\u0000"+
		"\u0000\u0000wx\u0001\u0000\u0000\u0000xz\u0001\u0000\u0000\u0000yw\u0001"+
		"\u0000\u0000\u0000z{\u0005\u0016\u0000\u0000{|\u0005 \u0000\u0000|\u0015"+
		"\u0001\u0000\u0000\u0000}~\u0005\u0013\u0000\u0000~\u0083\u0005\u001d"+
		"\u0000\u0000\u007f\u0080\u0005\u0004\u0000\u0000\u0080\u0084\u0005\u0004"+
		"\u0000\u0000\u0081\u0082\u0005\u0005\u0000\u0000\u0082\u0084\u0005\u0005"+
		"\u0000\u0000\u0083\u007f\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000"+
		"\u0000\u0000\u0084\u0017\u0001\u0000\u0000\u0000\u0085\u0086\u0005\u0011"+
		"\u0000\u0000\u0086\u0087\u0005\u0001\u0000\u0000\u0087\u0088\u0003\u001a"+
		"\r\u0000\u0088\u0089\u0005\u0002\u0000\u0000\u0089\u008d\u0005\u0015\u0000"+
		"\u0000\u008a\u008c\u0003\u0006\u0003\u0000\u008b\u008a\u0001\u0000\u0000"+
		"\u0000\u008c\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000"+
		"\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u0090\u0001\u0000\u0000"+
		"\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0091\u0005\u0016\u0000"+
		"\u0000\u0091\u0019\u0001\u0000\u0000\u0000\u0092\u0093\u0006\r\uffff\uffff"+
		"\u0000\u0093\u0094\u0005\u0001\u0000\u0000\u0094\u0095\u0003\u001a\r\u0000"+
		"\u0095\u0096\u0005\u0002\u0000\u0000\u0096\u009e\u0001\u0000\u0000\u0000"+
		"\u0097\u009e\u0007\u0000\u0000\u0000\u0098\u009e\u0005\u0019\u0000\u0000"+
		"\u0099\u009e\u0005\u001b\u0000\u0000\u009a\u009e\u0005\u001c\u0000\u0000"+
		"\u009b\u009e\u0005\u001a\u0000\u0000\u009c\u009e\u0005\u001d\u0000\u0000"+
		"\u009d\u0092\u0001\u0000\u0000\u0000\u009d\u0097\u0001\u0000\u0000\u0000"+
		"\u009d\u0098\u0001\u0000\u0000\u0000\u009d\u0099\u0001\u0000\u0000\u0000"+
		"\u009d\u009a\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000"+
		"\u009d\u009c\u0001\u0000\u0000\u0000\u009e\u00a7\u0001\u0000\u0000\u0000"+
		"\u009f\u00a0\n\b\u0000\u0000\u00a0\u00a1\u0007\u0001\u0000\u0000\u00a1"+
		"\u00a6\u0003\u001a\r\t\u00a2\u00a3\n\u0006\u0000\u0000\u00a3\u00a4\u0007"+
		"\u0000\u0000\u0000\u00a4\u00a6\u0003\u001a\r\u0007\u00a5\u009f\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a2\u0001\u0000\u0000\u0000\u00a6\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a8\u001b\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000"+
		"\u0000\u0000\u000f\u001f(,4;TZ^iw\u0083\u008d\u009d\u00a5\u00a7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}