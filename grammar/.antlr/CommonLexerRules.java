// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/CommonLexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CommonLexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		TYPE=1, PLUS=2, MINUS=3, TIMES=4, DIV=5, OC=6, OL=7, SWEET=8, SWEETCONDITION=9, 
		ELSE=10, ARROW=11, SHOW=12, INITKEY=13, FINALKEY=14, GATITO=15, PUNTITO=16, 
		NUM=17, ID=18, WRONGID=19, NEWLINE=20, SPACES=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TYPE", "PLUS", "MINUS", "TIMES", "DIV", "OC", "OL", "SWEET", "SWEETCONDITION", 
			"ELSE", "ARROW", "SHOW", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", 
			"NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", null, null, "'Sweet'", "'SweetCondition'", 
			"'Else'", "'->'", "'SHOW'", "'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "OC", "OL", "SWEET", "SWEETCONDITION", 
			"ELSE", "ARROW", "SHOW", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", 
			"NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
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


	public CommonLexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexerRules.g4"; }

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
		"\u0004\u0000\u0015\u009f\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0003\u0000@\b\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005Q\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006Y\b\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0004\u0010\u0086\b\u0010\u000b\u0010\f"+
		"\u0010\u0087\u0001\u0011\u0004\u0011\u008b\b\u0011\u000b\u0011\f\u0011"+
		"\u008c\u0001\u0012\u0004\u0012\u0090\b\u0012\u000b\u0012\f\u0012\u0091"+
		"\u0001\u0013\u0003\u0013\u0095\b\u0013\u0001\u0013\u0001\u0013\u0001\u0014"+
		"\u0004\u0014\u009a\b\u0014\u000b\u0014\f\u0014\u009b\u0001\u0014\u0001"+
		"\u0014\u0000\u0000\u0015\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015\u0001\u0000\u0005\u0002\u0000<<>>\u0001\u000009\u0002\u0000"+
		"AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  \u00aa\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0001?\u0001\u0000"+
		"\u0000\u0000\u0003A\u0001\u0000\u0000\u0000\u0005C\u0001\u0000\u0000\u0000"+
		"\u0007E\u0001\u0000\u0000\u0000\tG\u0001\u0000\u0000\u0000\u000bP\u0001"+
		"\u0000\u0000\u0000\rX\u0001\u0000\u0000\u0000\u000fZ\u0001\u0000\u0000"+
		"\u0000\u0011`\u0001\u0000\u0000\u0000\u0013o\u0001\u0000\u0000\u0000\u0015"+
		"t\u0001\u0000\u0000\u0000\u0017w\u0001\u0000\u0000\u0000\u0019|\u0001"+
		"\u0000\u0000\u0000\u001b~\u0001\u0000\u0000\u0000\u001d\u0080\u0001\u0000"+
		"\u0000\u0000\u001f\u0082\u0001\u0000\u0000\u0000!\u0085\u0001\u0000\u0000"+
		"\u0000#\u008a\u0001\u0000\u0000\u0000%\u008f\u0001\u0000\u0000\u0000\'"+
		"\u0094\u0001\u0000\u0000\u0000)\u0099\u0001\u0000\u0000\u0000+,\u0005"+
		"m\u0000\u0000,-\u0005i\u0000\u0000-.\u0005n\u0000\u0000.@\u0005t\u0000"+
		"\u0000/0\u0005m\u0000\u000001\u0005i\u0000\u000012\u0005n\u0000\u0000"+
		"23\u0005t\u0000\u000034\u0005c\u0000\u000045\u0005h\u0000\u000056\u0005"+
		"a\u0000\u00006@\u0005r\u0000\u000078\u0005m\u0000\u000089\u0005i\u0000"+
		"\u00009:\u0005n\u0000\u0000:;\u0005t\u0000\u0000;<\u0005f\u0000\u0000"+
		"<=\u0005l\u0000\u0000=>\u0005o\u0000\u0000>@\u0005t\u0000\u0000?+\u0001"+
		"\u0000\u0000\u0000?/\u0001\u0000\u0000\u0000?7\u0001\u0000\u0000\u0000"+
		"@\u0002\u0001\u0000\u0000\u0000AB\u0005+\u0000\u0000B\u0004\u0001\u0000"+
		"\u0000\u0000CD\u0005-\u0000\u0000D\u0006\u0001\u0000\u0000\u0000EF\u0005"+
		"*\u0000\u0000F\b\u0001\u0000\u0000\u0000GH\u0005/\u0000\u0000H\n\u0001"+
		"\u0000\u0000\u0000IQ\u0007\u0000\u0000\u0000JK\u0005<\u0000\u0000KQ\u0005"+
		"=\u0000\u0000LM\u0005>\u0000\u0000MQ\u0005=\u0000\u0000NO\u0005!\u0000"+
		"\u0000OQ\u0005=\u0000\u0000PI\u0001\u0000\u0000\u0000PJ\u0001\u0000\u0000"+
		"\u0000PL\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000Q\f\u0001\u0000"+
		"\u0000\u0000RS\u0005|\u0000\u0000SY\u0005|\u0000\u0000TU\u0005&\u0000"+
		"\u0000UY\u0005&\u0000\u0000VW\u0005=\u0000\u0000WY\u0005=\u0000\u0000"+
		"XR\u0001\u0000\u0000\u0000XT\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000"+
		"\u0000Y\u000e\u0001\u0000\u0000\u0000Z[\u0005S\u0000\u0000[\\\u0005w\u0000"+
		"\u0000\\]\u0005e\u0000\u0000]^\u0005e\u0000\u0000^_\u0005t\u0000\u0000"+
		"_\u0010\u0001\u0000\u0000\u0000`a\u0005S\u0000\u0000ab\u0005w\u0000\u0000"+
		"bc\u0005e\u0000\u0000cd\u0005e\u0000\u0000de\u0005t\u0000\u0000ef\u0005"+
		"C\u0000\u0000fg\u0005o\u0000\u0000gh\u0005n\u0000\u0000hi\u0005d\u0000"+
		"\u0000ij\u0005i\u0000\u0000jk\u0005t\u0000\u0000kl\u0005i\u0000\u0000"+
		"lm\u0005o\u0000\u0000mn\u0005n\u0000\u0000n\u0012\u0001\u0000\u0000\u0000"+
		"op\u0005E\u0000\u0000pq\u0005l\u0000\u0000qr\u0005s\u0000\u0000rs\u0005"+
		"e\u0000\u0000s\u0014\u0001\u0000\u0000\u0000tu\u0005-\u0000\u0000uv\u0005"+
		">\u0000\u0000v\u0016\u0001\u0000\u0000\u0000wx\u0005S\u0000\u0000xy\u0005"+
		"H\u0000\u0000yz\u0005O\u0000\u0000z{\u0005W\u0000\u0000{\u0018\u0001\u0000"+
		"\u0000\u0000|}\u0005{\u0000\u0000}\u001a\u0001\u0000\u0000\u0000~\u007f"+
		"\u0005}\u0000\u0000\u007f\u001c\u0001\u0000\u0000\u0000\u0080\u0081\u0005"+
		"#\u0000\u0000\u0081\u001e\u0001\u0000\u0000\u0000\u0082\u0083\u0005.\u0000"+
		"\u0000\u0083 \u0001\u0000\u0000\u0000\u0084\u0086\u0007\u0001\u0000\u0000"+
		"\u0085\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000"+
		"\u0087\u0085\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000"+
		"\u0088\"\u0001\u0000\u0000\u0000\u0089\u008b\u0007\u0002\u0000\u0000\u008a"+
		"\u0089\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c"+
		"\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d"+
		"$\u0001\u0000\u0000\u0000\u008e\u0090\u0007\u0003\u0000\u0000\u008f\u008e"+
		"\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u008f"+
		"\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092&\u0001"+
		"\u0000\u0000\u0000\u0093\u0095\u0005\r\u0000\u0000\u0094\u0093\u0001\u0000"+
		"\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0096\u0001\u0000"+
		"\u0000\u0000\u0096\u0097\u0005\n\u0000\u0000\u0097(\u0001\u0000\u0000"+
		"\u0000\u0098\u009a\u0007\u0004\u0000\u0000\u0099\u0098\u0001\u0000\u0000"+
		"\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b\u0099\u0001\u0000\u0000"+
		"\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0006\u0014\u0000\u0000\u009e*\u0001\u0000\u0000\u0000"+
		"\t\u0000?PX\u0087\u008c\u0091\u0094\u009b\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}