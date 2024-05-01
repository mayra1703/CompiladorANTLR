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
		TYPE=1, BOOL=2, STRING=3, PLUS=4, MINUS=5, MULT=6, DIV=7, IGUAL=8, OC=9, 
		OL=10, VOID=11, MAIN=12, INITPAR=13, FINALPAR=14, IF=15, ELSE=16, DO=17, 
		WHILE=18, PRINTF=19, INITKEY=20, FINALKEY=21, SEMI=22, INT=23, ID=24, 
		INV_ID=25, NEWLINE=26, SPACES=27;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_block = 2, RULE_contenido = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_condicional = 7, RULE_ifStatement = 8, 
		RULE_elseIfStatement = 9, RULE_elseStatement = 10, RULE_whileStatement = 11, 
		RULE_incremento = 12, RULE_expr = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "block", "contenido", "declaracion", "asignacion", "impresion", 
			"condicional", "ifStatement", "elseIfStatement", "elseStatement", "whileStatement", 
			"incremento", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, 
			"'void'", "'main'", "'('", "')'", "'if'", "'else'", "'do'", "'while'", 
			"'printf'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "BOOL", "STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", 
			"OC", "OL", "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSE", "DO", 
			"WHILE", "PRINTF", "INITKEY", "FINALKEY", "SEMI", "INT", "ID", "INV_ID", 
			"NEWLINE", "SPACES"
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
			setState(33);
			match(VOID);
			setState(34);
			match(MAIN);
			setState(35);
			match(INITPAR);
			setState(36);
			match(FINALPAR);
			setState(37);
			match(INITKEY);
			setState(38);
			match(NEWLINE);
			setState(39);
			block();
			setState(40);
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
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17596418L) != 0)) {
				{
				{
				setState(42);
				contenido();
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
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
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
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
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
				asignacion();
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
				whileStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				impresion();
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
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(56);
				match(TYPE);
				setState(57);
				match(ID);
				setState(60);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGUAL) {
					{
					setState(58);
					match(IGUAL);
					setState(59);
					expr(0);
					}
				}

				setState(62);
				match(SEMI);
				setState(63);
				match(NEWLINE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(64);
				match(TYPE);
				setState(65);
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
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGUAL) {
					{
					setState(66);
					match(IGUAL);
					setState(67);
					expr(0);
					}
				}

				setState(70);
				match(SEMI);
				setState(71);
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
			setState(74);
			match(ID);
			setState(75);
			match(IGUAL);
			setState(76);
			expr(0);
			setState(77);
			match(SEMI);
			setState(78);
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
		public TerminalNode PRINTF() { return getToken(CParser.PRINTF, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(PRINTF);
			setState(81);
			match(INITPAR);
			setState(82);
			expr(0);
			setState(83);
			match(FINALPAR);
			setState(84);
			match(SEMI);
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
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			ifStatement();
			setState(91);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(88);
					elseIfStatement();
					}
					} 
				}
				setState(93);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(94);
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
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
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
			setState(97);
			match(IF);
			setState(98);
			match(INITPAR);
			setState(99);
			expr(0);
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
		public TerminalNode ELSE() { return getToken(CParser.ELSE, 0); }
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
			setState(106);
			match(ELSE);
			setState(107);
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
			setState(109);
			match(ELSE);
			setState(110);
			match(INITKEY);
			setState(111);
			match(NEWLINE);
			setState(112);
			block();
			setState(113);
			match(FINALKEY);
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
	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(CParser.WHILE, 0); }
		public TerminalNode INITPAR() { return getToken(CParser.INITPAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode FINALPAR() { return getToken(CParser.FINALPAR, 0); }
		public TerminalNode INITKEY() { return getToken(CParser.INITKEY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode FINALKEY() { return getToken(CParser.FINALKEY, 0); }
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			match(WHILE);
			setState(117);
			match(INITPAR);
			setState(118);
			expr(0);
			setState(119);
			match(FINALPAR);
			setState(120);
			match(INITKEY);
			setState(121);
			block();
			setState(122);
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
	public static class IncrementoContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CParser.SEMI, 0); }
		public TerminalNode NEWLINE() { return getToken(CParser.NEWLINE, 0); }
		public List<TerminalNode> PLUS() { return getTokens(CParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(CParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(CParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(CParser.MINUS, i);
		}
		public IncrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incremento; }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_incremento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			match(ID);
			setState(129);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				{
				setState(125);
				match(PLUS);
				setState(126);
				match(PLUS);
				}
				break;
			case MINUS:
				{
				setState(127);
				match(MINUS);
				setState(128);
				match(MINUS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(131);
			match(SEMI);
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
		public TerminalNode BOOL() { return getToken(CParser.BOOL, 0); }
		public TerminalNode ID() { return getToken(CParser.ID, 0); }
		public TerminalNode INT() { return getToken(CParser.INT, 0); }
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
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
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INITPAR:
				{
				setState(135);
				match(INITPAR);
				setState(136);
				expr(0);
				setState(137);
				match(FINALPAR);
				}
				break;
			case BOOL:
			case OC:
			case OL:
				{
				setState(139);
				((ExprContext)_localctx).cond_value = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1540L) != 0)) ) {
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
				setState(140);
				match(ID);
				}
				break;
			case INT:
				{
				setState(141);
				match(INT);
				}
				break;
			case STRING:
				{
				setState(142);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(158);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(156);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(145);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(146);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(147);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(148);
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
						setState(149);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(150);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(151);
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
						setState(152);
						expr(7);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(153);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(154);
						((ExprContext)_localctx).cond_value = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1540L) != 0)) ) {
							((ExprContext)_localctx).cond_value = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(155);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(160);
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
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001b\u00a2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000"+
		"\u000b\u0000\f\u0000\u001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0005\u0002,\b\u0002\n\u0002\f\u0002/\t\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00037\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004=\b\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004E\b\u0004\u0001\u0004\u0001\u0004\u0003\u0004I\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0005\u0007Z\b\u0007\n\u0007\f\u0007]\t"+
		"\u0007\u0001\u0007\u0003\u0007`\b\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u0082\b\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0003\r\u0090\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u009d\b\r\n\r\f\r\u00a0"+
		"\t\r\u0001\r\u0000\u0001\u001a\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0004\u0002\u0000\u0017\u0017"+
		"\u0019\u0019\u0002\u0000\u0002\u0002\t\n\u0001\u0000\u0006\u0007\u0001"+
		"\u0000\u0004\u0005\u00a8\u0000\u001d\u0001\u0000\u0000\u0000\u0002!\u0001"+
		"\u0000\u0000\u0000\u0004-\u0001\u0000\u0000\u0000\u00066\u0001\u0000\u0000"+
		"\u0000\bH\u0001\u0000\u0000\u0000\nJ\u0001\u0000\u0000\u0000\fP\u0001"+
		"\u0000\u0000\u0000\u000eW\u0001\u0000\u0000\u0000\u0010a\u0001\u0000\u0000"+
		"\u0000\u0012j\u0001\u0000\u0000\u0000\u0014m\u0001\u0000\u0000\u0000\u0016"+
		"t\u0001\u0000\u0000\u0000\u0018|\u0001\u0000\u0000\u0000\u001a\u008f\u0001"+
		"\u0000\u0000\u0000\u001c\u001e\u0003\u0002\u0001\u0000\u001d\u001c\u0001"+
		"\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 \u0001\u0001\u0000\u0000"+
		"\u0000!\"\u0005\u000b\u0000\u0000\"#\u0005\f\u0000\u0000#$\u0005\r\u0000"+
		"\u0000$%\u0005\u000e\u0000\u0000%&\u0005\u0014\u0000\u0000&\'\u0005\u001a"+
		"\u0000\u0000\'(\u0003\u0004\u0002\u0000()\u0005\u0015\u0000\u0000)\u0003"+
		"\u0001\u0000\u0000\u0000*,\u0003\u0006\u0003\u0000+*\u0001\u0000\u0000"+
		"\u0000,/\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000"+
		"\u0000\u0000.\u0005\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000"+
		"07\u0003\b\u0004\u000017\u0003\n\u0005\u000027\u0003\u000e\u0007\u0000"+
		"37\u0003\u0016\u000b\u000047\u0003\f\u0006\u000057\u0003\u0018\f\u0000"+
		"60\u0001\u0000\u0000\u000061\u0001\u0000\u0000\u000062\u0001\u0000\u0000"+
		"\u000063\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000065\u0001\u0000"+
		"\u0000\u00007\u0007\u0001\u0000\u0000\u000089\u0005\u0001\u0000\u0000"+
		"9<\u0005\u0018\u0000\u0000:;\u0005\b\u0000\u0000;=\u0003\u001a\r\u0000"+
		"<:\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000"+
		"\u0000>?\u0005\u0016\u0000\u0000?I\u0005\u001a\u0000\u0000@A\u0005\u0001"+
		"\u0000\u0000AD\u0007\u0000\u0000\u0000BC\u0005\b\u0000\u0000CE\u0003\u001a"+
		"\r\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EF\u0001\u0000"+
		"\u0000\u0000FG\u0005\u0016\u0000\u0000GI\u0005\u001a\u0000\u0000H8\u0001"+
		"\u0000\u0000\u0000H@\u0001\u0000\u0000\u0000I\t\u0001\u0000\u0000\u0000"+
		"JK\u0005\u0018\u0000\u0000KL\u0005\b\u0000\u0000LM\u0003\u001a\r\u0000"+
		"MN\u0005\u0016\u0000\u0000NO\u0005\u001a\u0000\u0000O\u000b\u0001\u0000"+
		"\u0000\u0000PQ\u0005\u0013\u0000\u0000QR\u0005\r\u0000\u0000RS\u0003\u001a"+
		"\r\u0000ST\u0005\u000e\u0000\u0000TU\u0005\u0016\u0000\u0000UV\u0005\u001a"+
		"\u0000\u0000V\r\u0001\u0000\u0000\u0000W[\u0003\u0010\b\u0000XZ\u0003"+
		"\u0012\t\u0000YX\u0001\u0000\u0000\u0000Z]\u0001\u0000\u0000\u0000[Y\u0001"+
		"\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\_\u0001\u0000\u0000\u0000"+
		"][\u0001\u0000\u0000\u0000^`\u0003\u0014\n\u0000_^\u0001\u0000\u0000\u0000"+
		"_`\u0001\u0000\u0000\u0000`\u000f\u0001\u0000\u0000\u0000ab\u0005\u000f"+
		"\u0000\u0000bc\u0005\r\u0000\u0000cd\u0003\u001a\r\u0000de\u0005\u000e"+
		"\u0000\u0000ef\u0005\u0014\u0000\u0000fg\u0005\u001a\u0000\u0000gh\u0003"+
		"\u0004\u0002\u0000hi\u0005\u0015\u0000\u0000i\u0011\u0001\u0000\u0000"+
		"\u0000jk\u0005\u0010\u0000\u0000kl\u0003\u0010\b\u0000l\u0013\u0001\u0000"+
		"\u0000\u0000mn\u0005\u0010\u0000\u0000no\u0005\u0014\u0000\u0000op\u0005"+
		"\u001a\u0000\u0000pq\u0003\u0004\u0002\u0000qr\u0005\u0015\u0000\u0000"+
		"rs\u0005\u001a\u0000\u0000s\u0015\u0001\u0000\u0000\u0000tu\u0005\u0012"+
		"\u0000\u0000uv\u0005\r\u0000\u0000vw\u0003\u001a\r\u0000wx\u0005\u000e"+
		"\u0000\u0000xy\u0005\u0014\u0000\u0000yz\u0003\u0004\u0002\u0000z{\u0005"+
		"\u0015\u0000\u0000{\u0017\u0001\u0000\u0000\u0000|\u0081\u0005\u0018\u0000"+
		"\u0000}~\u0005\u0004\u0000\u0000~\u0082\u0005\u0004\u0000\u0000\u007f"+
		"\u0080\u0005\u0005\u0000\u0000\u0080\u0082\u0005\u0005\u0000\u0000\u0081"+
		"}\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0005\u0016\u0000\u0000\u0084\u0085"+
		"\u0005\u001a\u0000\u0000\u0085\u0019\u0001\u0000\u0000\u0000\u0086\u0087"+
		"\u0006\r\uffff\uffff\u0000\u0087\u0088\u0005\r\u0000\u0000\u0088\u0089"+
		"\u0003\u001a\r\u0000\u0089\u008a\u0005\u000e\u0000\u0000\u008a\u0090\u0001"+
		"\u0000\u0000\u0000\u008b\u0090\u0007\u0001\u0000\u0000\u008c\u0090\u0005"+
		"\u0018\u0000\u0000\u008d\u0090\u0005\u0017\u0000\u0000\u008e\u0090\u0005"+
		"\u0003\u0000\u0000\u008f\u0086\u0001\u0000\u0000\u0000\u008f\u008b\u0001"+
		"\u0000\u0000\u0000\u008f\u008c\u0001\u0000\u0000\u0000\u008f\u008d\u0001"+
		"\u0000\u0000\u0000\u008f\u008e\u0001\u0000\u0000\u0000\u0090\u009e\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\n\b\u0000\u0000\u0092\u009d\u0003\u001a"+
		"\r\t\u0093\u0094\n\u0007\u0000\u0000\u0094\u0095\u0007\u0002\u0000\u0000"+
		"\u0095\u009d\u0003\u001a\r\b\u0096\u0097\n\u0006\u0000\u0000\u0097\u0098"+
		"\u0007\u0003\u0000\u0000\u0098\u009d\u0003\u001a\r\u0007\u0099\u009a\n"+
		"\u0004\u0000\u0000\u009a\u009b\u0007\u0001\u0000\u0000\u009b\u009d\u0003"+
		"\u001a\r\u0005\u009c\u0091\u0001\u0000\u0000\u0000\u009c\u0093\u0001\u0000"+
		"\u0000\u0000\u009c\u0096\u0001\u0000\u0000\u0000\u009c\u0099\u0001\u0000"+
		"\u0000\u0000\u009d\u00a0\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000"+
		"\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u001b\u0001\u0000"+
		"\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\f\u001f-6<DH[_\u0081"+
		"\u008f\u009c\u009e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}