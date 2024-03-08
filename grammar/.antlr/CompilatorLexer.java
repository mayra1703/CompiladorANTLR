// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/Compilator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CompilatorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, TYPE=4, PLUS=5, MINUS=6, TIMES=7, DIV=8, SWEET=9, 
		ARROW=10, SHOW=11, INITKEY=12, FINALKEY=13, GATITO=14, PUNTITO=15, NUM=16, 
		ID=17, WRONGID=18, NEWLINE=19, SPACES=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", 
			"ARROW", "SHOW", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", 
			"WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", 
			"'->'", "'Show'", "'{'", "'}'", "'#'", "'.'"
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


	public CompilatorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Compilator.g4"; }

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
		"\u0004\u0000\u0014~\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003"+
		"\u0003D\b\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0004\u000fe\b\u000f\u000b\u000f\f\u000f"+
		"f\u0001\u0010\u0004\u0010j\b\u0010\u000b\u0010\f\u0010k\u0001\u0011\u0004"+
		"\u0011o\b\u0011\u000b\u0011\f\u0011p\u0001\u0012\u0003\u0012t\b\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013y\b\u0013\u000b\u0013"+
		"\f\u0013z\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"!\u0011#\u0012%\u0013\'\u0014\u0001\u0000\u0004\u0001\u000009\u0002\u0000"+
		"AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  \u0084\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0001)\u0001\u0000\u0000\u0000\u0003+\u0001\u0000"+
		"\u0000\u0000\u0005-\u0001\u0000\u0000\u0000\u0007C\u0001\u0000\u0000\u0000"+
		"\tE\u0001\u0000\u0000\u0000\u000bG\u0001\u0000\u0000\u0000\rI\u0001\u0000"+
		"\u0000\u0000\u000fK\u0001\u0000\u0000\u0000\u0011M\u0001\u0000\u0000\u0000"+
		"\u0013S\u0001\u0000\u0000\u0000\u0015V\u0001\u0000\u0000\u0000\u0017["+
		"\u0001\u0000\u0000\u0000\u0019]\u0001\u0000\u0000\u0000\u001b_\u0001\u0000"+
		"\u0000\u0000\u001da\u0001\u0000\u0000\u0000\u001fd\u0001\u0000\u0000\u0000"+
		"!i\u0001\u0000\u0000\u0000#n\u0001\u0000\u0000\u0000%s\u0001\u0000\u0000"+
		"\u0000\'x\u0001\u0000\u0000\u0000)*\u0005=\u0000\u0000*\u0002\u0001\u0000"+
		"\u0000\u0000+,\u0005(\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005"+
		")\u0000\u0000.\u0006\u0001\u0000\u0000\u0000/0\u0005m\u0000\u000001\u0005"+
		"i\u0000\u000012\u0005n\u0000\u00002D\u0005t\u0000\u000034\u0005m\u0000"+
		"\u000045\u0005i\u0000\u000056\u0005n\u0000\u000067\u0005t\u0000\u0000"+
		"78\u0005c\u0000\u000089\u0005h\u0000\u00009:\u0005a\u0000\u0000:D\u0005"+
		"r\u0000\u0000;<\u0005m\u0000\u0000<=\u0005i\u0000\u0000=>\u0005n\u0000"+
		"\u0000>?\u0005t\u0000\u0000?@\u0005f\u0000\u0000@A\u0005l\u0000\u0000"+
		"AB\u0005o\u0000\u0000BD\u0005t\u0000\u0000C/\u0001\u0000\u0000\u0000C"+
		"3\u0001\u0000\u0000\u0000C;\u0001\u0000\u0000\u0000D\b\u0001\u0000\u0000"+
		"\u0000EF\u0005+\u0000\u0000F\n\u0001\u0000\u0000\u0000GH\u0005-\u0000"+
		"\u0000H\f\u0001\u0000\u0000\u0000IJ\u0005*\u0000\u0000J\u000e\u0001\u0000"+
		"\u0000\u0000KL\u0005/\u0000\u0000L\u0010\u0001\u0000\u0000\u0000MN\u0005"+
		"S\u0000\u0000NO\u0005w\u0000\u0000OP\u0005e\u0000\u0000PQ\u0005e\u0000"+
		"\u0000QR\u0005t\u0000\u0000R\u0012\u0001\u0000\u0000\u0000ST\u0005-\u0000"+
		"\u0000TU\u0005>\u0000\u0000U\u0014\u0001\u0000\u0000\u0000VW\u0005S\u0000"+
		"\u0000WX\u0005h\u0000\u0000XY\u0005o\u0000\u0000YZ\u0005w\u0000\u0000"+
		"Z\u0016\u0001\u0000\u0000\u0000[\\\u0005{\u0000\u0000\\\u0018\u0001\u0000"+
		"\u0000\u0000]^\u0005}\u0000\u0000^\u001a\u0001\u0000\u0000\u0000_`\u0005"+
		"#\u0000\u0000`\u001c\u0001\u0000\u0000\u0000ab\u0005.\u0000\u0000b\u001e"+
		"\u0001\u0000\u0000\u0000ce\u0007\u0000\u0000\u0000dc\u0001\u0000\u0000"+
		"\u0000ef\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000fg\u0001\u0000"+
		"\u0000\u0000g \u0001\u0000\u0000\u0000hj\u0007\u0001\u0000\u0000ih\u0001"+
		"\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000"+
		"kl\u0001\u0000\u0000\u0000l\"\u0001\u0000\u0000\u0000mo\u0007\u0002\u0000"+
		"\u0000nm\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pn\u0001\u0000"+
		"\u0000\u0000pq\u0001\u0000\u0000\u0000q$\u0001\u0000\u0000\u0000rt\u0005"+
		"\r\u0000\u0000sr\u0001\u0000\u0000\u0000st\u0001\u0000\u0000\u0000tu\u0001"+
		"\u0000\u0000\u0000uv\u0005\n\u0000\u0000v&\u0001\u0000\u0000\u0000wy\u0007"+
		"\u0003\u0000\u0000xw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000"+
		"zx\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000"+
		"\u0000|}\u0006\u0013\u0000\u0000}(\u0001\u0000\u0000\u0000\u0007\u0000"+
		"Cfkpsz\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}