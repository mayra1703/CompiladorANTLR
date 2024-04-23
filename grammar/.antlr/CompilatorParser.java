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
		T__0=1, T__1=2, TYPE=3, PLUS=4, MINUS=5, MULT=6, DIV=7, IGUAL=8, OC=9, 
		OL=10, SERENITYCLASS=11, COZYCONDITION=12, TWILIGHTOPTION=13, ELSE=14, 
		DREAMYELSE=15, ARROW=16, WHISPER=17, INITKEY=18, FINALKEY=19, GATITO=20, 
		PUNTITO=21, STARSTRING=22, CHAR=23, NUM=24, FLOAT=25, ID=26, WRONGID=27, 
		LINECOMMENT=28, COMMENT=29, NEWLINE=30, SPACES=31;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_block = 2, RULE_contenido = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_condicional = 7, RULE_ifStatement = 8, 
		RULE_elseIfStatement = 9, RULE_elseStatement = 10, RULE_expr = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "block", "contenido", "declaracion", "asignacion", "impresion", 
			"condicional", "ifStatement", "elseIfStatement", "elseStatement", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, 
			"'SerenityClass'", "'CozyCondition'", "'TwilightOption'", "'Else'", "'DreamElse'", 
			"'->'", "'WHISPER'", "'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "TYPE", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", 
			"OL", "SERENITYCLASS", "COZYCONDITION", "TWILIGHTOPTION", "ELSE", "DREAMYELSE", 
			"ARROW", "WHISPER", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", "STARSTRING", 
			"CHAR", "NUM", "FLOAT", "ID", "WRONGID", "LINECOMMENT", "COMMENT", "NEWLINE", 
			"SPACES"
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
			setState(25); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(24);
				start();
				}
				}
				setState(27); 
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
			setState(29);
			match(SERENITYCLASS);
			setState(30);
			match(INITKEY);
			setState(31);
			match(NEWLINE);
			setState(32);
			block();
			setState(33);
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
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 810618880L) != 0)) {
				{
				{
				setState(35);
				contenido();
				}
				}
				setState(40);
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
		public TerminalNode STARSTRING() { return getToken(CompilatorParser.STARSTRING, 0); }
		public TerminalNode COMMENT() { return getToken(CompilatorParser.COMMENT, 0); }
		public TerminalNode LINECOMMENT() { return getToken(CompilatorParser.LINECOMMENT, 0); }
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_contenido);
		try {
			setState(48);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(41);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				impresion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(43);
				condicional();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(44);
				asignacion();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(45);
				match(STARSTRING);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(46);
				match(COMMENT);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(47);
				match(LINECOMMENT);
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
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
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
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public InvalidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declaracion);
		int _la;
		try {
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				match(GATITO);
				setState(51);
				match(TYPE);
				setState(52);
				match(ID);
				setState(53);
				match(PUNTITO);
				setState(54);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				match(GATITO);
				setState(56);
				match(TYPE);
				setState(57);
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
				setState(58);
				match(PUNTITO);
				setState(59);
				match(NEWLINE);
				}
				break;
			case 3:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				match(GATITO);
				setState(61);
				match(TYPE);
				setState(62);
				match(ID);
				setState(63);
				match(IGUAL);
				setState(64);
				expr(0);
				setState(65);
				match(PUNTITO);
				setState(66);
				match(NEWLINE);
				}
				break;
			case 4:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(68);
				match(GATITO);
				setState(69);
				match(TYPE);
				setState(70);
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
				setState(71);
				match(IGUAL);
				setState(72);
				expr(0);
				setState(73);
				match(PUNTITO);
				setState(74);
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
	public static class AsignacionContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(CompilatorParser.ARROW, 0); }
		public TerminalNode ID() { return getToken(CompilatorParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CompilatorParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUNTITO() { return getToken(CompilatorParser.PUNTITO, 0); }
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
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
			setState(78);
			match(ARROW);
			setState(79);
			match(ID);
			setState(80);
			match(IGUAL);
			setState(81);
			match(T__0);
			setState(82);
			expr(0);
			setState(83);
			match(T__1);
			setState(84);
			match(PUNTITO);
			setState(85);
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
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
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
		public TerminalNode NEWLINE() { return getToken(CompilatorParser.NEWLINE, 0); }
		public ShowExprContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		try {
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new ShowExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				match(ARROW);
				setState(88);
				match(WHISPER);
				setState(89);
				match(T__0);
				setState(90);
				expr(0);
				setState(91);
				match(T__1);
				setState(92);
				match(PUNTITO);
				setState(93);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new ShowStringContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(95);
				match(ARROW);
				setState(96);
				match(WHISPER);
				setState(97);
				match(T__0);
				setState(98);
				match(STARSTRING);
				setState(99);
				match(T__1);
				setState(100);
				match(PUNTITO);
				setState(101);
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
			setState(104);
			ifStatement();
			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSE) {
				{
				{
				setState(105);
				elseIfStatement();
				}
				}
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DREAMYELSE) {
				{
				setState(111);
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
		public List<TerminalNode> NEWLINE() { return getTokens(CompilatorParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CompilatorParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(COZYCONDITION);
			setState(115);
			match(T__0);
			setState(116);
			expr(0);
			setState(117);
			match(T__1);
			setState(118);
			match(INITKEY);
			setState(119);
			match(NEWLINE);
			setState(120);
			block();
			setState(121);
			match(FINALKEY);
			setState(122);
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
			setState(124);
			match(ELSE);
			setState(125);
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
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CompilatorParser.FINALKEY, 0); }
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(DREAMYELSE);
			setState(128);
			match(INITKEY);
			setState(129);
			match(NEWLINE);
			setState(130);
			block();
			setState(131);
			match(FINALKEY);
			setState(132);
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
		public TerminalNode MULT() { return getToken(CompilatorParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(CompilatorParser.DIV, 0); }
		public MultidivContext(ExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(135);
				match(T__0);
				setState(136);
				expr(0);
				setState(137);
				match(T__1);
				}
				break;
			case OC:
			case OL:
				{
				_localctx = new ConditionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(139);
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
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(140);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(141);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(157);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(155);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new ImpmultiContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(144);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(145);
						expr(8);
						}
						break;
					case 2:
						{
						_localctx = new MultidivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(146);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(147);
						((MultidivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULT || _la==DIV) ) {
							((MultidivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(148);
						expr(7);
						}
						break;
					case 3:
						{
						_localctx = new MasmenosContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(149);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(150);
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
						setState(151);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new ConditionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(152);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(153);
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
						setState(154);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(159);
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
		case 11:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001f\u00a1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0001\u0000\u0004\u0000\u001a\b\u0000\u000b\u0000\f\u0000\u001b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0005\u0002%\b\u0002\n\u0002\f\u0002(\t\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003"+
		"\u00031\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004M\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006g\b\u0006\u0001\u0007\u0001\u0007\u0005\u0007k\b\u0007\n\u0007\f"+
		"\u0007n\t\u0007\u0001\u0007\u0003\u0007q\b\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0003\u000b\u008f\b\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u009c\b\u000b\n\u000b\f\u000b"+
		"\u009f\t\u000b\u0001\u000b\u0000\u0001\u0016\f\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0004\u0002\u0000\u0018\u0018"+
		"\u001b\u001b\u0001\u0000\t\n\u0001\u0000\u0006\u0007\u0001\u0000\u0004"+
		"\u0005\u00a9\u0000\u0019\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000"+
		"\u0000\u0000\u0004&\u0001\u0000\u0000\u0000\u00060\u0001\u0000\u0000\u0000"+
		"\bL\u0001\u0000\u0000\u0000\nN\u0001\u0000\u0000\u0000\ff\u0001\u0000"+
		"\u0000\u0000\u000eh\u0001\u0000\u0000\u0000\u0010r\u0001\u0000\u0000\u0000"+
		"\u0012|\u0001\u0000\u0000\u0000\u0014\u007f\u0001\u0000\u0000\u0000\u0016"+
		"\u008e\u0001\u0000\u0000\u0000\u0018\u001a\u0003\u0002\u0001\u0000\u0019"+
		"\u0018\u0001\u0000\u0000\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b"+
		"\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c"+
		"\u0001\u0001\u0000\u0000\u0000\u001d\u001e\u0005\u000b\u0000\u0000\u001e"+
		"\u001f\u0005\u0012\u0000\u0000\u001f \u0005\u001e\u0000\u0000 !\u0003"+
		"\u0004\u0002\u0000!\"\u0005\u0013\u0000\u0000\"\u0003\u0001\u0000\u0000"+
		"\u0000#%\u0003\u0006\u0003\u0000$#\u0001\u0000\u0000\u0000%(\u0001\u0000"+
		"\u0000\u0000&$\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000\'\u0005"+
		"\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000)1\u0003\b\u0004\u0000"+
		"*1\u0003\f\u0006\u0000+1\u0003\u000e\u0007\u0000,1\u0003\n\u0005\u0000"+
		"-1\u0005\u0016\u0000\u0000.1\u0005\u001d\u0000\u0000/1\u0005\u001c\u0000"+
		"\u00000)\u0001\u0000\u0000\u00000*\u0001\u0000\u0000\u00000+\u0001\u0000"+
		"\u0000\u00000,\u0001\u0000\u0000\u00000-\u0001\u0000\u0000\u00000.\u0001"+
		"\u0000\u0000\u00000/\u0001\u0000\u0000\u00001\u0007\u0001\u0000\u0000"+
		"\u000023\u0005\u0014\u0000\u000034\u0005\u0003\u0000\u000045\u0005\u001a"+
		"\u0000\u000056\u0005\u0015\u0000\u00006M\u0005\u001e\u0000\u000078\u0005"+
		"\u0014\u0000\u000089\u0005\u0003\u0000\u00009:\u0007\u0000\u0000\u0000"+
		":;\u0005\u0015\u0000\u0000;M\u0005\u001e\u0000\u0000<=\u0005\u0014\u0000"+
		"\u0000=>\u0005\u0003\u0000\u0000>?\u0005\u001a\u0000\u0000?@\u0005\b\u0000"+
		"\u0000@A\u0003\u0016\u000b\u0000AB\u0005\u0015\u0000\u0000BC\u0005\u001e"+
		"\u0000\u0000CM\u0001\u0000\u0000\u0000DE\u0005\u0014\u0000\u0000EF\u0005"+
		"\u0003\u0000\u0000FG\u0007\u0000\u0000\u0000GH\u0005\b\u0000\u0000HI\u0003"+
		"\u0016\u000b\u0000IJ\u0005\u0015\u0000\u0000JK\u0005\u001e\u0000\u0000"+
		"KM\u0001\u0000\u0000\u0000L2\u0001\u0000\u0000\u0000L7\u0001\u0000\u0000"+
		"\u0000L<\u0001\u0000\u0000\u0000LD\u0001\u0000\u0000\u0000M\t\u0001\u0000"+
		"\u0000\u0000NO\u0005\u0010\u0000\u0000OP\u0005\u001a\u0000\u0000PQ\u0005"+
		"\b\u0000\u0000QR\u0005\u0001\u0000\u0000RS\u0003\u0016\u000b\u0000ST\u0005"+
		"\u0002\u0000\u0000TU\u0005\u0015\u0000\u0000UV\u0005\u001e\u0000\u0000"+
		"V\u000b\u0001\u0000\u0000\u0000WX\u0005\u0010\u0000\u0000XY\u0005\u0011"+
		"\u0000\u0000YZ\u0005\u0001\u0000\u0000Z[\u0003\u0016\u000b\u0000[\\\u0005"+
		"\u0002\u0000\u0000\\]\u0005\u0015\u0000\u0000]^\u0005\u001e\u0000\u0000"+
		"^g\u0001\u0000\u0000\u0000_`\u0005\u0010\u0000\u0000`a\u0005\u0011\u0000"+
		"\u0000ab\u0005\u0001\u0000\u0000bc\u0005\u0016\u0000\u0000cd\u0005\u0002"+
		"\u0000\u0000de\u0005\u0015\u0000\u0000eg\u0005\u001e\u0000\u0000fW\u0001"+
		"\u0000\u0000\u0000f_\u0001\u0000\u0000\u0000g\r\u0001\u0000\u0000\u0000"+
		"hl\u0003\u0010\b\u0000ik\u0003\u0012\t\u0000ji\u0001\u0000\u0000\u0000"+
		"kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000"+
		"\u0000mp\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000oq\u0003\u0014"+
		"\n\u0000po\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000q\u000f\u0001"+
		"\u0000\u0000\u0000rs\u0005\f\u0000\u0000st\u0005\u0001\u0000\u0000tu\u0003"+
		"\u0016\u000b\u0000uv\u0005\u0002\u0000\u0000vw\u0005\u0012\u0000\u0000"+
		"wx\u0005\u001e\u0000\u0000xy\u0003\u0004\u0002\u0000yz\u0005\u0013\u0000"+
		"\u0000z{\u0005\u001e\u0000\u0000{\u0011\u0001\u0000\u0000\u0000|}\u0005"+
		"\u000e\u0000\u0000}~\u0003\u0010\b\u0000~\u0013\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0005\u000f\u0000\u0000\u0080\u0081\u0005\u0012\u0000\u0000"+
		"\u0081\u0082\u0005\u001e\u0000\u0000\u0082\u0083\u0003\u0004\u0002\u0000"+
		"\u0083\u0084\u0005\u0013\u0000\u0000\u0084\u0085\u0005\u001e\u0000\u0000"+
		"\u0085\u0015\u0001\u0000\u0000\u0000\u0086\u0087\u0006\u000b\uffff\uffff"+
		"\u0000\u0087\u0088\u0005\u0001\u0000\u0000\u0088\u0089\u0003\u0016\u000b"+
		"\u0000\u0089\u008a\u0005\u0002\u0000\u0000\u008a\u008f\u0001\u0000\u0000"+
		"\u0000\u008b\u008f\u0007\u0001\u0000\u0000\u008c\u008f\u0005\u001a\u0000"+
		"\u0000\u008d\u008f\u0005\u0018\u0000\u0000\u008e\u0086\u0001\u0000\u0000"+
		"\u0000\u008e\u008b\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000"+
		"\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008f\u009d\u0001\u0000\u0000"+
		"\u0000\u0090\u0091\n\u0007\u0000\u0000\u0091\u009c\u0003\u0016\u000b\b"+
		"\u0092\u0093\n\u0006\u0000\u0000\u0093\u0094\u0007\u0002\u0000\u0000\u0094"+
		"\u009c\u0003\u0016\u000b\u0007\u0095\u0096\n\u0005\u0000\u0000\u0096\u0097"+
		"\u0007\u0003\u0000\u0000\u0097\u009c\u0003\u0016\u000b\u0006\u0098\u0099"+
		"\n\u0003\u0000\u0000\u0099\u009a\u0007\u0001\u0000\u0000\u009a\u009c\u0003"+
		"\u0016\u000b\u0004\u009b\u0090\u0001\u0000\u0000\u0000\u009b\u0092\u0001"+
		"\u0000\u0000\u0000\u009b\u0095\u0001\u0000\u0000\u0000\u009b\u0098\u0001"+
		"\u0000\u0000\u0000\u009c\u009f\u0001\u0000\u0000\u0000\u009d\u009b\u0001"+
		"\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u0017\u0001"+
		"\u0000\u0000\u0000\u009f\u009d\u0001\u0000\u0000\u0000\n\u001b&0Lflp\u008e"+
		"\u009b\u009d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}