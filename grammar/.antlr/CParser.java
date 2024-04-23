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
		TYPE=1, STRING=2, PLUS=3, MINUS=4, MULT=5, DIV=6, IGUAL=7, OC=8, OL=9, 
		VOID=10, MAIN=11, INITPAR=12, FINALPAR=13, IF=14, ELSEIF=15, ELSE=16, 
		PRINTF=17, INITKEY=18, FINALKEY=19, SEMI=20, INT=21, ID=22, INV_ID=23, 
		WRONGID=24, LINECOMMENT=25, COMMENT=26, NEWLINE=27, SPACES=28;
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
			null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, "'void'", 
			"'main'", "'('", "')'", "'if'", "'else if'", "'else'", "'printf'", "'{'", 
			"'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", 
			"OL", "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSEIF", "ELSE", 
			"PRINTF", "INITKEY", "FINALKEY", "SEMI", "INT", "ID", "INV_ID", "WRONGID", 
			"LINECOMMENT", "COMMENT", "NEWLINE", "SPACES"
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 105005062L) != 0)) {
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
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
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
				condicional();
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
		public Token id;
		public TerminalNode TYPE() { return getToken(CParser.TYPE, 0); }
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public TerminalNode IGUAL() { return getToken(CParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode INV_ID() { return getToken(CParser.INV_ID, 0); }
		public TerminalNode INT() { return getToken(CParser.INT, 0); }
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
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				match(TYPE);
				setState(54);
				match(ID);
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGUAL) {
					{
					setState(55);
					match(IGUAL);
					setState(56);
					expr(0);
					}
				}

				setState(59);
				match(SEMI);
				setState(60);
				match(NEWLINE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				match(TYPE);
				setState(62);
				((DeclaracionContext)_localctx).id = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==INV_ID) ) {
					((DeclaracionContext)_localctx).id = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGUAL) {
					{
					setState(63);
					match(IGUAL);
					setState(64);
					expr(0);
					}
				}

				setState(67);
				match(SEMI);
				setState(68);
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
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
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
			setState(71);
			match(ID);
			setState(72);
			match(IGUAL);
			setState(73);
			expr(0);
			setState(74);
			match(SEMI);
			setState(75);
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
			setState(90);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				_localctx = new ShowExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(77);
				match(PRINTF);
				setState(78);
				match(INITPAR);
				setState(79);
				expr(0);
				setState(80);
				match(FINALPAR);
				setState(81);
				match(SEMI);
				setState(82);
				match(NEWLINE);
				}
				break;
			case 2:
				_localctx = new ShowStringContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(84);
				match(PRINTF);
				setState(85);
				match(INITPAR);
				setState(86);
				match(STRING);
				setState(87);
				match(FINALPAR);
				setState(88);
				match(SEMI);
				setState(89);
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
			setState(92);
			ifStatement();
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(93);
				elseIfStatement();
				}
				}
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(99);
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
		public TerminalNode IF() { return getToken(CParser.IF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
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
			setState(102);
			match(IF);
			setState(103);
			match(INITPAR);
			setState(104);
			expr(0);
			setState(105);
			match(FINALPAR);
			setState(106);
			match(INITKEY);
			setState(107);
			match(NEWLINE);
			setState(108);
			block();
			setState(109);
			match(FINALKEY);
			setState(110);
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
		public TerminalNode ELSEIF() { return getToken(CParser.ELSEIF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
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
		enterRule(_localctx, 18, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(ELSEIF);
			setState(113);
			match(INITPAR);
			setState(114);
			expr(0);
			setState(115);
			match(FINALPAR);
			setState(116);
			match(INITKEY);
			setState(117);
			match(NEWLINE);
			setState(118);
			block();
			setState(119);
			match(FINALKEY);
			setState(120);
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
		enterRule(_localctx, 20, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(ELSE);
			setState(123);
			match(INITKEY);
			setState(124);
			match(NEWLINE);
			setState(125);
			block();
			setState(126);
			match(FINALKEY);
			setState(127);
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
		public Token cond_value;
		public Token operation;
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode OC() { return getToken(CParser.OC, 0); }
		public TerminalNode OL() { return getToken(CParser.OL, 0); }
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode INT() { return getToken(CParser.INT, 0); }
		public TerminalNode MULT() { return getToken(CParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(CParser.DIV, 0); }
		public TerminalNode PLUS() { return getToken(CParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CParser.MINUS, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
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
			setState(137);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INITPAR:
				{
				setState(130);
				match(INITPAR);
				setState(131);
				expr(0);
				setState(132);
				match(FINALPAR);
				}
				break;
			case OC:
			case OL:
				{
				setState(134);
				((ExprContext)_localctx).cond_value = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==OC || _la==OL) ) {
					((ExprContext)_localctx).cond_value = (Token)_errHandler.recoverInline(this);
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
				setState(135);
				match(ID);
				}
				break;
			case INT:
				{
				setState(136);
				match(INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(152);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(150);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(139);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(140);
						expr(8);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(141);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(142);
						((ExprContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULT || _la==DIV) ) {
							((ExprContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(143);
						expr(7);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(144);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(145);
						((ExprContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((ExprContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(146);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(147);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(148);
						((ExprContext)_localctx).cond_value = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==OC || _la==OL) ) {
							((ExprContext)_localctx).cond_value = (Token)_errHandler.recoverInline(this);
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
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		"\u0004\u0001\u001c\u009c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0001\u0000\u0004\u0000\u001a\b\u0000\u000b\u0000\f\u0000\u001b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002(\b\u0002\n\u0002"+
		"\f\u0002+\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u00034\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004:\b\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004B\b"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004F\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006[\b\u0006\u0001\u0007\u0001\u0007\u0005\u0007_\b\u0007\n\u0007\f"+
		"\u0007b\t\u0007\u0001\u0007\u0003\u0007e\b\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0003\u000b\u008a\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0005\u000b\u0097\b\u000b\n\u000b\f\u000b\u009a\t\u000b\u0001"+
		"\u000b\u0000\u0001\u0016\f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0000\u0004\u0002\u0000\u0015\u0015\u0017\u0017\u0001\u0000"+
		"\b\t\u0001\u0000\u0005\u0006\u0001\u0000\u0003\u0004\u00a4\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004)\u0001"+
		"\u0000\u0000\u0000\u00063\u0001\u0000\u0000\u0000\bE\u0001\u0000\u0000"+
		"\u0000\nG\u0001\u0000\u0000\u0000\fZ\u0001\u0000\u0000\u0000\u000e\\\u0001"+
		"\u0000\u0000\u0000\u0010f\u0001\u0000\u0000\u0000\u0012p\u0001\u0000\u0000"+
		"\u0000\u0014z\u0001\u0000\u0000\u0000\u0016\u0089\u0001\u0000\u0000\u0000"+
		"\u0018\u001a\u0003\u0002\u0001\u0000\u0019\u0018\u0001\u0000\u0000\u0000"+
		"\u001a\u001b\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000"+
		"\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000"+
		"\u001d\u001e\u0005\n\u0000\u0000\u001e\u001f\u0005\u000b\u0000\u0000\u001f"+
		" \u0005\f\u0000\u0000 !\u0005\r\u0000\u0000!\"\u0005\u0012\u0000\u0000"+
		"\"#\u0005\u001b\u0000\u0000#$\u0003\u0004\u0002\u0000$%\u0005\u0013\u0000"+
		"\u0000%\u0003\u0001\u0000\u0000\u0000&(\u0003\u0006\u0003\u0000\'&\u0001"+
		"\u0000\u0000\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000"+
		")*\u0001\u0000\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+)\u0001\u0000"+
		"\u0000\u0000,4\u0003\b\u0004\u0000-4\u0003\n\u0005\u0000.4\u0003\f\u0006"+
		"\u0000/4\u0003\u000e\u0007\u000004\u0005\u0002\u0000\u000014\u0005\u001a"+
		"\u0000\u000024\u0005\u0019\u0000\u00003,\u0001\u0000\u0000\u00003-\u0001"+
		"\u0000\u0000\u00003.\u0001\u0000\u0000\u00003/\u0001\u0000\u0000\u0000"+
		"30\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000\u0000"+
		"\u00004\u0007\u0001\u0000\u0000\u000056\u0005\u0001\u0000\u000069\u0005"+
		"\u0016\u0000\u000078\u0005\u0007\u0000\u00008:\u0003\u0016\u000b\u0000"+
		"97\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000"+
		"\u0000;<\u0005\u0014\u0000\u0000<F\u0005\u001b\u0000\u0000=>\u0005\u0001"+
		"\u0000\u0000>A\u0007\u0000\u0000\u0000?@\u0005\u0007\u0000\u0000@B\u0003"+
		"\u0016\u000b\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000"+
		"BC\u0001\u0000\u0000\u0000CD\u0005\u0014\u0000\u0000DF\u0005\u001b\u0000"+
		"\u0000E5\u0001\u0000\u0000\u0000E=\u0001\u0000\u0000\u0000F\t\u0001\u0000"+
		"\u0000\u0000GH\u0005\u0016\u0000\u0000HI\u0005\u0007\u0000\u0000IJ\u0003"+
		"\u0016\u000b\u0000JK\u0005\u0014\u0000\u0000KL\u0005\u001b\u0000\u0000"+
		"L\u000b\u0001\u0000\u0000\u0000MN\u0005\u0011\u0000\u0000NO\u0005\f\u0000"+
		"\u0000OP\u0003\u0016\u000b\u0000PQ\u0005\r\u0000\u0000QR\u0005\u0014\u0000"+
		"\u0000RS\u0005\u001b\u0000\u0000S[\u0001\u0000\u0000\u0000TU\u0005\u0011"+
		"\u0000\u0000UV\u0005\f\u0000\u0000VW\u0005\u0002\u0000\u0000WX\u0005\r"+
		"\u0000\u0000XY\u0005\u0014\u0000\u0000Y[\u0005\u001b\u0000\u0000ZM\u0001"+
		"\u0000\u0000\u0000ZT\u0001\u0000\u0000\u0000[\r\u0001\u0000\u0000\u0000"+
		"\\`\u0003\u0010\b\u0000]_\u0003\u0012\t\u0000^]\u0001\u0000\u0000\u0000"+
		"_b\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000"+
		"\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000ce\u0003\u0014"+
		"\n\u0000dc\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000e\u000f\u0001"+
		"\u0000\u0000\u0000fg\u0005\u000e\u0000\u0000gh\u0005\f\u0000\u0000hi\u0003"+
		"\u0016\u000b\u0000ij\u0005\r\u0000\u0000jk\u0005\u0012\u0000\u0000kl\u0005"+
		"\u001b\u0000\u0000lm\u0003\u0004\u0002\u0000mn\u0005\u0013\u0000\u0000"+
		"no\u0005\u001b\u0000\u0000o\u0011\u0001\u0000\u0000\u0000pq\u0005\u000f"+
		"\u0000\u0000qr\u0005\f\u0000\u0000rs\u0003\u0016\u000b\u0000st\u0005\r"+
		"\u0000\u0000tu\u0005\u0012\u0000\u0000uv\u0005\u001b\u0000\u0000vw\u0003"+
		"\u0004\u0002\u0000wx\u0005\u0013\u0000\u0000xy\u0005\u001b\u0000\u0000"+
		"y\u0013\u0001\u0000\u0000\u0000z{\u0005\u0010\u0000\u0000{|\u0005\u0012"+
		"\u0000\u0000|}\u0005\u001b\u0000\u0000}~\u0003\u0004\u0002\u0000~\u007f"+
		"\u0005\u0013\u0000\u0000\u007f\u0080\u0005\u001b\u0000\u0000\u0080\u0015"+
		"\u0001\u0000\u0000\u0000\u0081\u0082\u0006\u000b\uffff\uffff\u0000\u0082"+
		"\u0083\u0005\f\u0000\u0000\u0083\u0084\u0003\u0016\u000b\u0000\u0084\u0085"+
		"\u0005\r\u0000\u0000\u0085\u008a\u0001\u0000\u0000\u0000\u0086\u008a\u0007"+
		"\u0001\u0000\u0000\u0087\u008a\u0005\u0016\u0000\u0000\u0088\u008a\u0005"+
		"\u0015\u0000\u0000\u0089\u0081\u0001\u0000\u0000\u0000\u0089\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u0088\u0001"+
		"\u0000\u0000\u0000\u008a\u0098\u0001\u0000\u0000\u0000\u008b\u008c\n\u0007"+
		"\u0000\u0000\u008c\u0097\u0003\u0016\u000b\b\u008d\u008e\n\u0006\u0000"+
		"\u0000\u008e\u008f\u0007\u0002\u0000\u0000\u008f\u0097\u0003\u0016\u000b"+
		"\u0007\u0090\u0091\n\u0005\u0000\u0000\u0091\u0092\u0007\u0003\u0000\u0000"+
		"\u0092\u0097\u0003\u0016\u000b\u0006\u0093\u0094\n\u0003\u0000\u0000\u0094"+
		"\u0095\u0007\u0001\u0000\u0000\u0095\u0097\u0003\u0016\u000b\u0004\u0096"+
		"\u008b\u0001\u0000\u0000\u0000\u0096\u008d\u0001\u0000\u0000\u0000\u0096"+
		"\u0090\u0001\u0000\u0000\u0000\u0096\u0093\u0001\u0000\u0000\u0000\u0097"+
		"\u009a\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098"+
		"\u0099\u0001\u0000\u0000\u0000\u0099\u0017\u0001\u0000\u0000\u0000\u009a"+
		"\u0098\u0001\u0000\u0000\u0000\f\u001b)39AEZ`d\u0089\u0096\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}