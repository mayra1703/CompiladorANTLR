// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/LexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		STRING=1, PLUS=2, MINUS=3, MULT=4, DIV=5, IGUAL=6, OC=7, OL=8, VOID=9, 
		MAIN=10, INITPAR=11, FINALPAR=12, IF=13, ELSE=14, PRINTF=15, INITKEY=16, 
		FINALKEY=17, SEMI=18, INT=19, ID=20, INV_ID=21, NEWLINE=22, SPACES=23;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", "VOID", 
			"MAIN", "INITPAR", "FINALPAR", "IF", "ELSE", "PRINTF", "INITKEY", "FINALKEY", 
			"SEMI", "INT", "ID", "INV_ID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, "'void'", 
			"'main'", "'('", "')'", "'if'", "'else'", "'printf'", "'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", 
			"VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSE", "PRINTF", "INITKEY", 
			"FINALKEY", "SEMI", "INT", "ID", "INV_ID", "NEWLINE", "SPACES"
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


	public LexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LexerRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0017\u0094\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0001\u0000\u0001\u0000"+
		"\u0005\u00002\b\u0000\n\u0000\f\u00005\t\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006"+
		"J\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0003\u0007R\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0004\u0012x\b\u0012\u000b\u0012\f\u0012y\u0001"+
		"\u0013\u0001\u0013\u0004\u0013~\b\u0013\u000b\u0013\f\u0013\u007f\u0003"+
		"\u0013\u0082\b\u0013\u0001\u0014\u0004\u0014\u0085\b\u0014\u000b\u0014"+
		"\f\u0014\u0086\u0001\u0015\u0003\u0015\u008a\b\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0004\u0016\u008f\b\u0016\u000b\u0016\f\u0016\u0090"+
		"\u0001\u0016\u0001\u0016\u00013\u0000\u0017\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017\u0001\u0000\u0006\u0002\u0000"+
		"<<>>\u0001\u000009\u0002\u0000AZaz\u0004\u000009AZ__az\u0005\u0000++-"+
		"-09AZaz\u0003\u0000\t\n\r\r  \u009f\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000"+
		"-\u0001\u0000\u0000\u0000\u0001/\u0001\u0000\u0000\u0000\u00038\u0001"+
		"\u0000\u0000\u0000\u0005:\u0001\u0000\u0000\u0000\u0007<\u0001\u0000\u0000"+
		"\u0000\t>\u0001\u0000\u0000\u0000\u000b@\u0001\u0000\u0000\u0000\rI\u0001"+
		"\u0000\u0000\u0000\u000fQ\u0001\u0000\u0000\u0000\u0011S\u0001\u0000\u0000"+
		"\u0000\u0013X\u0001\u0000\u0000\u0000\u0015]\u0001\u0000\u0000\u0000\u0017"+
		"_\u0001\u0000\u0000\u0000\u0019a\u0001\u0000\u0000\u0000\u001bd\u0001"+
		"\u0000\u0000\u0000\u001di\u0001\u0000\u0000\u0000\u001fp\u0001\u0000\u0000"+
		"\u0000!r\u0001\u0000\u0000\u0000#t\u0001\u0000\u0000\u0000%w\u0001\u0000"+
		"\u0000\u0000\'{\u0001\u0000\u0000\u0000)\u0084\u0001\u0000\u0000\u0000"+
		"+\u0089\u0001\u0000\u0000\u0000-\u008e\u0001\u0000\u0000\u0000/3\u0005"+
		"\"\u0000\u000002\t\u0000\u0000\u000010\u0001\u0000\u0000\u000025\u0001"+
		"\u0000\u0000\u000034\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u0000"+
		"46\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000067\u0005\"\u0000\u0000"+
		"7\u0002\u0001\u0000\u0000\u000089\u0005+\u0000\u00009\u0004\u0001\u0000"+
		"\u0000\u0000:;\u0005-\u0000\u0000;\u0006\u0001\u0000\u0000\u0000<=\u0005"+
		"*\u0000\u0000=\b\u0001\u0000\u0000\u0000>?\u0005/\u0000\u0000?\n\u0001"+
		"\u0000\u0000\u0000@A\u0005=\u0000\u0000A\f\u0001\u0000\u0000\u0000BJ\u0007"+
		"\u0000\u0000\u0000CD\u0005<\u0000\u0000DJ\u0005=\u0000\u0000EF\u0005>"+
		"\u0000\u0000FJ\u0005=\u0000\u0000GH\u0005!\u0000\u0000HJ\u0005=\u0000"+
		"\u0000IB\u0001\u0000\u0000\u0000IC\u0001\u0000\u0000\u0000IE\u0001\u0000"+
		"\u0000\u0000IG\u0001\u0000\u0000\u0000J\u000e\u0001\u0000\u0000\u0000"+
		"KL\u0005|\u0000\u0000LR\u0005|\u0000\u0000MN\u0005&\u0000\u0000NR\u0005"+
		"&\u0000\u0000OP\u0005=\u0000\u0000PR\u0005=\u0000\u0000QK\u0001\u0000"+
		"\u0000\u0000QM\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000R\u0010"+
		"\u0001\u0000\u0000\u0000ST\u0005v\u0000\u0000TU\u0005o\u0000\u0000UV\u0005"+
		"i\u0000\u0000VW\u0005d\u0000\u0000W\u0012\u0001\u0000\u0000\u0000XY\u0005"+
		"m\u0000\u0000YZ\u0005a\u0000\u0000Z[\u0005i\u0000\u0000[\\\u0005n\u0000"+
		"\u0000\\\u0014\u0001\u0000\u0000\u0000]^\u0005(\u0000\u0000^\u0016\u0001"+
		"\u0000\u0000\u0000_`\u0005)\u0000\u0000`\u0018\u0001\u0000\u0000\u0000"+
		"ab\u0005i\u0000\u0000bc\u0005f\u0000\u0000c\u001a\u0001\u0000\u0000\u0000"+
		"de\u0005e\u0000\u0000ef\u0005l\u0000\u0000fg\u0005s\u0000\u0000gh\u0005"+
		"e\u0000\u0000h\u001c\u0001\u0000\u0000\u0000ij\u0005p\u0000\u0000jk\u0005"+
		"r\u0000\u0000kl\u0005i\u0000\u0000lm\u0005n\u0000\u0000mn\u0005t\u0000"+
		"\u0000no\u0005f\u0000\u0000o\u001e\u0001\u0000\u0000\u0000pq\u0005{\u0000"+
		"\u0000q \u0001\u0000\u0000\u0000rs\u0005}\u0000\u0000s\"\u0001\u0000\u0000"+
		"\u0000tu\u0005;\u0000\u0000u$\u0001\u0000\u0000\u0000vx\u0007\u0001\u0000"+
		"\u0000wv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000"+
		"\u0000\u0000yz\u0001\u0000\u0000\u0000z&\u0001\u0000\u0000\u0000{\u0081"+
		"\u0007\u0002\u0000\u0000|~\u0007\u0003\u0000\u0000}|\u0001\u0000\u0000"+
		"\u0000~\u007f\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f"+
		"\u0080\u0001\u0000\u0000\u0000\u0080\u0082\u0001\u0000\u0000\u0000\u0081"+
		"}\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082(\u0001"+
		"\u0000\u0000\u0000\u0083\u0085\u0007\u0004\u0000\u0000\u0084\u0083\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087*\u0001\u0000"+
		"\u0000\u0000\u0088\u008a\u0005\r\u0000\u0000\u0089\u0088\u0001\u0000\u0000"+
		"\u0000\u0089\u008a\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\u0005\n\u0000\u0000\u008c,\u0001\u0000\u0000\u0000"+
		"\u008d\u008f\u0007\u0005\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000"+
		"\u008f\u0090\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000"+
		"\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000"+
		"\u0092\u0093\u0006\u0016\u0000\u0000\u0093.\u0001\u0000\u0000\u0000\n"+
		"\u00003IQy\u007f\u0081\u0086\u0089\u0090\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}