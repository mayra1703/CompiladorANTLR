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
		MAIN=10, INITPAR=11, FINALPAR=12, IF=13, ELSE=14, DO=15, WHILE=16, PRINTF=17, 
		INITKEY=18, FINALKEY=19, SEMI=20, INT=21, ID=22, INV_ID=23, NEWLINE=24, 
		SPACES=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", "VOID", 
			"MAIN", "INITPAR", "FINALPAR", "IF", "ELSE", "DO", "WHILE", "PRINTF", 
			"INITKEY", "FINALKEY", "SEMI", "INT", "ID", "INV_ID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, "'void'", 
			"'main'", "'('", "')'", "'if'", "'else'", "'do'", "'while'", "'printf'", 
			"'{'", "'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", 
			"VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSE", "DO", "WHILE", "PRINTF", 
			"INITKEY", "FINALKEY", "SEMI", "INT", "ID", "INV_ID", "NEWLINE", "SPACES"
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
		"\u0004\u0000\u0019\u00a1\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0005\u00006\b\u0000"+
		"\n\u0000\f\u00009\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006N\b\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007"+
		"V\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0014\u0004\u0014\u0085\b\u0014\u000b\u0014"+
		"\f\u0014\u0086\u0001\u0015\u0001\u0015\u0004\u0015\u008b\b\u0015\u000b"+
		"\u0015\f\u0015\u008c\u0003\u0015\u008f\b\u0015\u0001\u0016\u0004\u0016"+
		"\u0092\b\u0016\u000b\u0016\f\u0016\u0093\u0001\u0017\u0003\u0017\u0097"+
		"\b\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0004\u0018\u009c\b\u0018"+
		"\u000b\u0018\f\u0018\u009d\u0001\u0018\u0001\u0018\u00017\u0000\u0019"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017"+
		"/\u00181\u0019\u0001\u0000\u0006\u0002\u0000<<>>\u0001\u000009\u0002\u0000"+
		"AZaz\u0004\u000009AZ__az\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  \u00ac"+
		"\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000"+
		"\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000"+
		"\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/"+
		"\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u00013\u0001\u0000"+
		"\u0000\u0000\u0003<\u0001\u0000\u0000\u0000\u0005>\u0001\u0000\u0000\u0000"+
		"\u0007@\u0001\u0000\u0000\u0000\tB\u0001\u0000\u0000\u0000\u000bD\u0001"+
		"\u0000\u0000\u0000\rM\u0001\u0000\u0000\u0000\u000fU\u0001\u0000\u0000"+
		"\u0000\u0011W\u0001\u0000\u0000\u0000\u0013\\\u0001\u0000\u0000\u0000"+
		"\u0015a\u0001\u0000\u0000\u0000\u0017c\u0001\u0000\u0000\u0000\u0019e"+
		"\u0001\u0000\u0000\u0000\u001bh\u0001\u0000\u0000\u0000\u001dm\u0001\u0000"+
		"\u0000\u0000\u001fp\u0001\u0000\u0000\u0000!v\u0001\u0000\u0000\u0000"+
		"#}\u0001\u0000\u0000\u0000%\u007f\u0001\u0000\u0000\u0000\'\u0081\u0001"+
		"\u0000\u0000\u0000)\u0084\u0001\u0000\u0000\u0000+\u0088\u0001\u0000\u0000"+
		"\u0000-\u0091\u0001\u0000\u0000\u0000/\u0096\u0001\u0000\u0000\u00001"+
		"\u009b\u0001\u0000\u0000\u000037\u0005\"\u0000\u000046\t\u0000\u0000\u0000"+
		"54\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u000078\u0001\u0000\u0000"+
		"\u000075\u0001\u0000\u0000\u00008:\u0001\u0000\u0000\u000097\u0001\u0000"+
		"\u0000\u0000:;\u0005\"\u0000\u0000;\u0002\u0001\u0000\u0000\u0000<=\u0005"+
		"+\u0000\u0000=\u0004\u0001\u0000\u0000\u0000>?\u0005-\u0000\u0000?\u0006"+
		"\u0001\u0000\u0000\u0000@A\u0005*\u0000\u0000A\b\u0001\u0000\u0000\u0000"+
		"BC\u0005/\u0000\u0000C\n\u0001\u0000\u0000\u0000DE\u0005=\u0000\u0000"+
		"E\f\u0001\u0000\u0000\u0000FN\u0007\u0000\u0000\u0000GH\u0005<\u0000\u0000"+
		"HN\u0005=\u0000\u0000IJ\u0005>\u0000\u0000JN\u0005=\u0000\u0000KL\u0005"+
		"!\u0000\u0000LN\u0005=\u0000\u0000MF\u0001\u0000\u0000\u0000MG\u0001\u0000"+
		"\u0000\u0000MI\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000N\u000e"+
		"\u0001\u0000\u0000\u0000OP\u0005|\u0000\u0000PV\u0005|\u0000\u0000QR\u0005"+
		"&\u0000\u0000RV\u0005&\u0000\u0000ST\u0005=\u0000\u0000TV\u0005=\u0000"+
		"\u0000UO\u0001\u0000\u0000\u0000UQ\u0001\u0000\u0000\u0000US\u0001\u0000"+
		"\u0000\u0000V\u0010\u0001\u0000\u0000\u0000WX\u0005v\u0000\u0000XY\u0005"+
		"o\u0000\u0000YZ\u0005i\u0000\u0000Z[\u0005d\u0000\u0000[\u0012\u0001\u0000"+
		"\u0000\u0000\\]\u0005m\u0000\u0000]^\u0005a\u0000\u0000^_\u0005i\u0000"+
		"\u0000_`\u0005n\u0000\u0000`\u0014\u0001\u0000\u0000\u0000ab\u0005(\u0000"+
		"\u0000b\u0016\u0001\u0000\u0000\u0000cd\u0005)\u0000\u0000d\u0018\u0001"+
		"\u0000\u0000\u0000ef\u0005i\u0000\u0000fg\u0005f\u0000\u0000g\u001a\u0001"+
		"\u0000\u0000\u0000hi\u0005e\u0000\u0000ij\u0005l\u0000\u0000jk\u0005s"+
		"\u0000\u0000kl\u0005e\u0000\u0000l\u001c\u0001\u0000\u0000\u0000mn\u0005"+
		"d\u0000\u0000no\u0005o\u0000\u0000o\u001e\u0001\u0000\u0000\u0000pq\u0005"+
		"w\u0000\u0000qr\u0005h\u0000\u0000rs\u0005i\u0000\u0000st\u0005l\u0000"+
		"\u0000tu\u0005e\u0000\u0000u \u0001\u0000\u0000\u0000vw\u0005p\u0000\u0000"+
		"wx\u0005r\u0000\u0000xy\u0005i\u0000\u0000yz\u0005n\u0000\u0000z{\u0005"+
		"t\u0000\u0000{|\u0005f\u0000\u0000|\"\u0001\u0000\u0000\u0000}~\u0005"+
		"{\u0000\u0000~$\u0001\u0000\u0000\u0000\u007f\u0080\u0005}\u0000\u0000"+
		"\u0080&\u0001\u0000\u0000\u0000\u0081\u0082\u0005;\u0000\u0000\u0082("+
		"\u0001\u0000\u0000\u0000\u0083\u0085\u0007\u0001\u0000\u0000\u0084\u0083"+
		"\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0084"+
		"\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087*\u0001"+
		"\u0000\u0000\u0000\u0088\u008e\u0007\u0002\u0000\u0000\u0089\u008b\u0007"+
		"\u0003\u0000\u0000\u008a\u0089\u0001\u0000\u0000\u0000\u008b\u008c\u0001"+
		"\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001"+
		"\u0000\u0000\u0000\u008d\u008f\u0001\u0000\u0000\u0000\u008e\u008a\u0001"+
		"\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000\u008f,\u0001\u0000"+
		"\u0000\u0000\u0090\u0092\u0007\u0004\u0000\u0000\u0091\u0090\u0001\u0000"+
		"\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000"+
		"\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094.\u0001\u0000\u0000"+
		"\u0000\u0095\u0097\u0005\r\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000"+
		"\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000"+
		"\u0098\u0099\u0005\n\u0000\u0000\u00990\u0001\u0000\u0000\u0000\u009a"+
		"\u009c\u0007\u0005\u0000\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009c"+
		"\u009d\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f"+
		"\u00a0\u0006\u0018\u0000\u0000\u00a02\u0001\u0000\u0000\u0000\n\u0000"+
		"7MU\u0086\u008c\u008e\u0093\u0096\u009d\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}