// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/C.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, TYPE=2, STRING=3, PLUS=4, MINUS=5, TIMES=6, DIV=7, OC=8, OL=9, 
		VOID=10, MAIN=11, INITPAR=12, FINALPAR=13, IF=14, ELSEIF=15, ELSE=16, 
		PRINTF=17, INITKEY=18, FINALKEY=19, SEMI=20, NUM=21, ID=22, WRONGID=23, 
		LINECOMMENT=24, COMMENT=25, NEWLINE=26, SPACES=27;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_block = 2, RULE_contenido = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_ifStatement = 7, RULE_elseIfStatement = 8, 
		RULE_elseStatement = 9, RULE_condition = 10, RULE_expr = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "block", "contenido", "declaracion", "asignacion", "impresion", 
			"ifStatement", "elseIfStatement", "elseStatement", "condition", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", null, null, "'+'", "'-'", "'*'", "'/'", null, null, "'void'", 
			"'main'", "'('", "')'", "'if'", "'else if'", "'else'", "'printf'", "'{'", 
			"'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "TYPE", "STRING", "PLUS", "MINUS", "TIMES", "DIV", "OC", 
			"OL", "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSEIF", "ELSE", 
			"PRINTF", "INITKEY", "FINALKEY", "SEMI", "NUM", "ID", "WRONGID", "LINECOMMENT", 
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
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CParser(TokenStream input) {
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
			} while ( _la==VOID );
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
		public TerminalNode VOID() { return getToken(CParser.VOID, 0); }
		public TerminalNode MAIN() { return getToken(CParser.MAIN, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode INITKEY() { return getToken(CParser.INITKEY, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CParser.FINALKEY, 0); }
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
			match(VOID);
			setState(30);
			match(MAIN);
			setState(31);
			match(INITPAR);
			setState(32);
			match(FINALPAR);
			setState(33);
			match(INITKEY);
			setState(34);
			match(NEWLINE);
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
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 65159180L) != 0)) {
				{
				{
				setState(38);
				contenido();
				}
				}
				setState(43);
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
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
		public TerminalNode COMMENT() { return getToken(CParser.COMMENT, 0); }
		public TerminalNode LINECOMMENT() { return getToken(CParser.LINECOMMENT, 0); }
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_contenido);
		try {
			setState(51);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE:
			case NUM:
			case WRONGID:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				declaracion();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				asignacion();
				}
				break;
			case PRINTF:
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				impresion();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 4);
				{
				setState(47);
				ifStatement();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 5);
				{
				setState(48);
				match(STRING);
				}
				break;
			case COMMENT:
				enterOuterAlt(_localctx, 6);
				{
				setState(49);
				match(COMMENT);
				}
				break;
			case LINECOMMENT:
				enterOuterAlt(_localctx, 7);
				{
				setState(50);
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
		public TerminalNode TYPE() { return getToken(CParser.TYPE, 0); }
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ValidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InvalidAssignContext extends DeclaracionContext {
		public Token VALORID;
		public TerminalNode TYPE() { return getToken(CParser.TYPE, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public TerminalNode WRONGID() { return getToken(CParser.WRONGID, 0); }
		public TerminalNode NUM() { return getToken(CParser.NUM, 0); }
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
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				match(TYPE);
				setState(54);
				match(ID);
				setState(55);
				match(SEMI);
				setState(56);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				match(TYPE);
				setState(58);
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
				setState(59);
				match(SEMI);
				setState(60);
				match(NEWLINE);
				}
				break;
			case 3:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(61);
				match(TYPE);
				setState(62);
				match(ID);
				setState(63);
				match(T__0);
				setState(64);
				expr(0);
				setState(65);
				match(SEMI);
				setState(66);
				match(NEWLINE);
				}
				break;
			case 4:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(68);
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
				setState(69);
				match(T__0);
				setState(70);
				expr(0);
				setState(71);
				match(SEMI);
				setState(72);
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
	public static class AssignContext extends AsignacionContext {
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public AssignContext(AsignacionContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignacion);
		try {
			_localctx = new AssignContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(ID);
			setState(77);
			match(T__0);
			setState(78);
			expr(0);
			setState(79);
			match(SEMI);
			setState(80);
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
		public TerminalNode PRINTF() { return getToken(CParser.PRINTF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public ShowStringContext(ImpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ShowExprContext extends ImpresionContext {
		public TerminalNode PRINTF() { return getToken(CParser.PRINTF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public ShowExprContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		try {
			setState(95);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new ShowExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				match(PRINTF);
				setState(83);
				match(INITPAR);
				setState(84);
				expr(0);
				setState(85);
				match(FINALPAR);
				setState(86);
				match(SEMI);
				setState(87);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new ShowStringContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(89);
				match(PRINTF);
				setState(90);
				match(INITPAR);
				setState(91);
				match(STRING);
				setState(92);
				match(FINALPAR);
				setState(93);
				match(SEMI);
				setState(94);
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
		public TerminalNode IF() { return getToken(CParser.IF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode INITKEY() { return getToken(CParser.INITKEY, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(CParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CParser.FINALKEY, 0); }
		public ElseIfStatementContext elseIfStatement() {
			return getRuleContext(ElseIfStatementContext.class,0);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(IF);
			setState(98);
			match(INITPAR);
			setState(99);
			condition(0);
			setState(100);
			match(FINALPAR);
			setState(101);
			match(INITKEY);
			setState(102);
			match(NEWLINE);
			setState(103);
			block();
			setState(104);
			match(FINALKEY);
			setState(105);
			match(NEWLINE);
			setState(108);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ELSEIF:
				{
				setState(106);
				elseIfStatement();
				}
				break;
			case ELSE:
				{
				setState(107);
				elseStatement();
				}
				break;
			case TYPE:
			case STRING:
			case IF:
			case PRINTF:
			case FINALKEY:
			case NUM:
			case ID:
			case WRONGID:
			case LINECOMMENT:
			case COMMENT:
				break;
			default:
				break;
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
	public static class ElseIfStatementContext extends ParserRuleContext {
		public TerminalNode ELSEIF() { return getToken(CParser.ELSEIF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode INITKEY() { return getToken(CParser.INITKEY, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(CParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CParser.FINALKEY, 0); }
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(ELSEIF);
			setState(111);
			match(INITPAR);
			setState(112);
			condition(0);
			setState(113);
			match(FINALPAR);
			setState(114);
			match(INITKEY);
			setState(115);
			match(NEWLINE);
			setState(116);
			block();
			setState(117);
			match(FINALKEY);
			setState(118);
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
	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CParser.ELSE, 0); }
		public TerminalNode INITKEY() { return getToken(CParser.INITKEY, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(CParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CParser.FINALKEY, 0); }
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(ELSE);
			setState(121);
			match(INITKEY);
			setState(122);
			match(NEWLINE);
			setState(123);
			block();
			setState(124);
			match(FINALKEY);
			setState(125);
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
		public Token cond_value;
		public TerminalNode OC() { return getToken(CParser.OC, 0); }
		public TerminalNode OL() { return getToken(CParser.OL, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		return condition(0);
	}

	private ConditionContext condition(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ConditionContext _localctx = new ConditionContext(_ctx, _parentState);
		ConditionContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_condition, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OC:
			case OL:
				{
				setState(128);
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
			case INITPAR:
			case NUM:
			case ID:
				{
				setState(129);
				expr(0);
				setState(130);
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
				setState(131);
				expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(140);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_condition);
					setState(135);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(136);
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
					setState(137);
					condition(2);
					}
					} 
				}
				setState(142);
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
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
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
		public TerminalNode TIMES() { return getToken(CParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(CParser.DIV, 0); }
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
		public TerminalNode PLUS() { return getToken(CParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CParser.MINUS, 0); }
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
		public TerminalNode NUM() { return getToken(CParser.NUM, 0); }
		public NumContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
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
			setState(150);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INITPAR:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(144);
				match(INITPAR);
				setState(145);
				expr(0);
				setState(146);
				match(FINALPAR);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(148);
				match(ID);
				}
				break;
			case NUM:
				{
				_localctx = new NumContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(149);
				match(NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(162);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(160);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ImpmultiContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(152);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(153);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new MultidivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(154);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(155);
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
						setState(156);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new MasmenosContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(157);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(158);
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
						setState(159);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(164);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
		case 10:
			return condition_sempred((ConditionContext)_localctx, predIndex);
		case 11:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean condition_sempred(ConditionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001b\u00a6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0001\u0000\u0004\u0000\u001a\b\u0000\u000b\u0000\f\u0000\u001b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002(\b\u0002\n\u0002"+
		"\f\u0002+\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u00034\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004K\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006`\b"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007m\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0086"+
		"\b\n\u0001\n\u0001\n\u0001\n\u0005\n\u008b\b\n\n\n\f\n\u008e\t\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0003\u000b\u0097\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00a1"+
		"\b\u000b\n\u000b\f\u000b\u00a4\t\u000b\u0001\u000b\u0000\u0002\u0014\u0016"+
		"\f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0004"+
		"\u0002\u0000\u0015\u0015\u0017\u0017\u0001\u0000\b\t\u0001\u0000\u0006"+
		"\u0007\u0001\u0000\u0004\u0005\u00ae\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0002\u001d\u0001\u0000\u0000\u0000\u0004)\u0001\u0000\u0000\u0000\u0006"+
		"3\u0001\u0000\u0000\u0000\bJ\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000"+
		"\u0000\f_\u0001\u0000\u0000\u0000\u000ea\u0001\u0000\u0000\u0000\u0010"+
		"n\u0001\u0000\u0000\u0000\u0012x\u0001\u0000\u0000\u0000\u0014\u0085\u0001"+
		"\u0000\u0000\u0000\u0016\u0096\u0001\u0000\u0000\u0000\u0018\u001a\u0003"+
		"\u0002\u0001\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u001a\u001b\u0001"+
		"\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001"+
		"\u0000\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000\u001d\u001e\u0005"+
		"\n\u0000\u0000\u001e\u001f\u0005\u000b\u0000\u0000\u001f \u0005\f\u0000"+
		"\u0000 !\u0005\r\u0000\u0000!\"\u0005\u0012\u0000\u0000\"#\u0005\u001a"+
		"\u0000\u0000#$\u0003\u0004\u0002\u0000$%\u0005\u0013\u0000\u0000%\u0003"+
		"\u0001\u0000\u0000\u0000&(\u0003\u0006\u0003\u0000\'&\u0001\u0000\u0000"+
		"\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000"+
		"\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		",4\u0003\b\u0004\u0000-4\u0003\n\u0005\u0000.4\u0003\f\u0006\u0000/4\u0003"+
		"\u000e\u0007\u000004\u0005\u0003\u0000\u000014\u0005\u0019\u0000\u0000"+
		"24\u0005\u0018\u0000\u00003,\u0001\u0000\u0000\u00003-\u0001\u0000\u0000"+
		"\u00003.\u0001\u0000\u0000\u00003/\u0001\u0000\u0000\u000030\u0001\u0000"+
		"\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000\u0000\u00004\u0007"+
		"\u0001\u0000\u0000\u000056\u0005\u0002\u0000\u000067\u0005\u0016\u0000"+
		"\u000078\u0005\u0014\u0000\u00008K\u0005\u001a\u0000\u00009:\u0005\u0002"+
		"\u0000\u0000:;\u0007\u0000\u0000\u0000;<\u0005\u0014\u0000\u0000<K\u0005"+
		"\u001a\u0000\u0000=>\u0005\u0002\u0000\u0000>?\u0005\u0016\u0000\u0000"+
		"?@\u0005\u0001\u0000\u0000@A\u0003\u0016\u000b\u0000AB\u0005\u0014\u0000"+
		"\u0000BC\u0005\u001a\u0000\u0000CK\u0001\u0000\u0000\u0000DE\u0007\u0000"+
		"\u0000\u0000EF\u0005\u0001\u0000\u0000FG\u0003\u0016\u000b\u0000GH\u0005"+
		"\u0014\u0000\u0000HI\u0005\u001a\u0000\u0000IK\u0001\u0000\u0000\u0000"+
		"J5\u0001\u0000\u0000\u0000J9\u0001\u0000\u0000\u0000J=\u0001\u0000\u0000"+
		"\u0000JD\u0001\u0000\u0000\u0000K\t\u0001\u0000\u0000\u0000LM\u0005\u0016"+
		"\u0000\u0000MN\u0005\u0001\u0000\u0000NO\u0003\u0016\u000b\u0000OP\u0005"+
		"\u0014\u0000\u0000PQ\u0005\u001a\u0000\u0000Q\u000b\u0001\u0000\u0000"+
		"\u0000RS\u0005\u0011\u0000\u0000ST\u0005\f\u0000\u0000TU\u0003\u0016\u000b"+
		"\u0000UV\u0005\r\u0000\u0000VW\u0005\u0014\u0000\u0000WX\u0005\u001a\u0000"+
		"\u0000X`\u0001\u0000\u0000\u0000YZ\u0005\u0011\u0000\u0000Z[\u0005\f\u0000"+
		"\u0000[\\\u0005\u0003\u0000\u0000\\]\u0005\r\u0000\u0000]^\u0005\u0014"+
		"\u0000\u0000^`\u0005\u001a\u0000\u0000_R\u0001\u0000\u0000\u0000_Y\u0001"+
		"\u0000\u0000\u0000`\r\u0001\u0000\u0000\u0000ab\u0005\u000e\u0000\u0000"+
		"bc\u0005\f\u0000\u0000cd\u0003\u0014\n\u0000de\u0005\r\u0000\u0000ef\u0005"+
		"\u0012\u0000\u0000fg\u0005\u001a\u0000\u0000gh\u0003\u0004\u0002\u0000"+
		"hi\u0005\u0013\u0000\u0000il\u0005\u001a\u0000\u0000jm\u0003\u0010\b\u0000"+
		"km\u0003\u0012\t\u0000lj\u0001\u0000\u0000\u0000lk\u0001\u0000\u0000\u0000"+
		"lm\u0001\u0000\u0000\u0000m\u000f\u0001\u0000\u0000\u0000no\u0005\u000f"+
		"\u0000\u0000op\u0005\f\u0000\u0000pq\u0003\u0014\n\u0000qr\u0005\r\u0000"+
		"\u0000rs\u0005\u0012\u0000\u0000st\u0005\u001a\u0000\u0000tu\u0003\u0004"+
		"\u0002\u0000uv\u0005\u0013\u0000\u0000vw\u0005\u001a\u0000\u0000w\u0011"+
		"\u0001\u0000\u0000\u0000xy\u0005\u0010\u0000\u0000yz\u0005\u0012\u0000"+
		"\u0000z{\u0005\u001a\u0000\u0000{|\u0003\u0004\u0002\u0000|}\u0005\u0013"+
		"\u0000\u0000}~\u0005\u001a\u0000\u0000~\u0013\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0006\n\uffff\uffff\u0000\u0080\u0086\u0007\u0001\u0000\u0000"+
		"\u0081\u0082\u0003\u0016\u000b\u0000\u0082\u0083\u0007\u0001\u0000\u0000"+
		"\u0083\u0084\u0003\u0016\u000b\u0000\u0084\u0086\u0001\u0000\u0000\u0000"+
		"\u0085\u007f\u0001\u0000\u0000\u0000\u0085\u0081\u0001\u0000\u0000\u0000"+
		"\u0086\u008c\u0001\u0000\u0000\u0000\u0087\u0088\n\u0001\u0000\u0000\u0088"+
		"\u0089\u0007\u0001\u0000\u0000\u0089\u008b\u0003\u0014\n\u0002\u008a\u0087"+
		"\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000\u0000\u008c\u008a"+
		"\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u0015"+
		"\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0090"+
		"\u0006\u000b\uffff\uffff\u0000\u0090\u0091\u0005\f\u0000\u0000\u0091\u0092"+
		"\u0003\u0016\u000b\u0000\u0092\u0093\u0005\r\u0000\u0000\u0093\u0097\u0001"+
		"\u0000\u0000\u0000\u0094\u0097\u0005\u0016\u0000\u0000\u0095\u0097\u0005"+
		"\u0015\u0000\u0000\u0096\u008f\u0001\u0000\u0000\u0000\u0096\u0094\u0001"+
		"\u0000\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u00a2\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\n\u0005\u0000\u0000\u0099\u00a1\u0003\u0016"+
		"\u000b\u0006\u009a\u009b\n\u0004\u0000\u0000\u009b\u009c\u0007\u0002\u0000"+
		"\u0000\u009c\u00a1\u0003\u0016\u000b\u0005\u009d\u009e\n\u0003\u0000\u0000"+
		"\u009e\u009f\u0007\u0003\u0000\u0000\u009f\u00a1\u0003\u0016\u000b\u0004"+
		"\u00a0\u0098\u0001\u0000\u0000\u0000\u00a0\u009a\u0001\u0000\u0000\u0000"+
		"\u00a0\u009d\u0001\u0000\u0000\u0000\u00a1\u00a4\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000"+
		"\u00a3\u0017\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000"+
		"\u000b\u001b)3J_l\u0085\u008c\u0096\u00a0\u00a2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}