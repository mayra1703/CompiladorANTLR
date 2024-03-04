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
		TYPE=1, PLUS=2, MINUS=3, TIMES=4, DIV=5, SWEET=6, INITKEY=7, FINALKEY=8, 
		GATITO=9, PUNTITO=10, NUM=11, ID=12, WRONGID=13, NEWLINE=14, SPACES=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "INITKEY", "FINALKEY", 
			"GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", "'{'", "'}'", "'#'", 
			"'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "INITKEY", "FINALKEY", 
			"GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
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
		"\u0004\u0000\u000ff\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u00004\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\n\u0004\nM\b\n\u000b\n\f\nN\u0001\u000b\u0004\u000bR\b\u000b"+
		"\u000b\u000b\f\u000bS\u0001\f\u0004\fW\b\f\u000b\f\f\fX\u0001\r\u0003"+
		"\r\\\b\r\u0001\r\u0001\r\u0001\u000e\u0004\u000ea\b\u000e\u000b\u000e"+
		"\f\u000eb\u0001\u000e\u0001\u000e\u0000\u0000\u000f\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u0001\u0000"+
		"\u0004\u0001\u000009\u0002\u0000AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000"+
		"\t\n\r\r  l\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u00013\u0001\u0000\u0000\u0000\u0003"+
		"5\u0001\u0000\u0000\u0000\u00057\u0001\u0000\u0000\u0000\u00079\u0001"+
		"\u0000\u0000\u0000\t;\u0001\u0000\u0000\u0000\u000b=\u0001\u0000\u0000"+
		"\u0000\rC\u0001\u0000\u0000\u0000\u000fE\u0001\u0000\u0000\u0000\u0011"+
		"G\u0001\u0000\u0000\u0000\u0013I\u0001\u0000\u0000\u0000\u0015L\u0001"+
		"\u0000\u0000\u0000\u0017Q\u0001\u0000\u0000\u0000\u0019V\u0001\u0000\u0000"+
		"\u0000\u001b[\u0001\u0000\u0000\u0000\u001d`\u0001\u0000\u0000\u0000\u001f"+
		" \u0005m\u0000\u0000 !\u0005i\u0000\u0000!\"\u0005n\u0000\u0000\"4\u0005"+
		"t\u0000\u0000#$\u0005m\u0000\u0000$%\u0005i\u0000\u0000%&\u0005n\u0000"+
		"\u0000&\'\u0005t\u0000\u0000\'(\u0005c\u0000\u0000()\u0005h\u0000\u0000"+
		")*\u0005a\u0000\u0000*4\u0005r\u0000\u0000+,\u0005m\u0000\u0000,-\u0005"+
		"i\u0000\u0000-.\u0005n\u0000\u0000./\u0005t\u0000\u0000/0\u0005f\u0000"+
		"\u000001\u0005l\u0000\u000012\u0005o\u0000\u000024\u0005t\u0000\u0000"+
		"3\u001f\u0001\u0000\u0000\u00003#\u0001\u0000\u0000\u00003+\u0001\u0000"+
		"\u0000\u00004\u0002\u0001\u0000\u0000\u000056\u0005+\u0000\u00006\u0004"+
		"\u0001\u0000\u0000\u000078\u0005-\u0000\u00008\u0006\u0001\u0000\u0000"+
		"\u00009:\u0005*\u0000\u0000:\b\u0001\u0000\u0000\u0000;<\u0005/\u0000"+
		"\u0000<\n\u0001\u0000\u0000\u0000=>\u0005S\u0000\u0000>?\u0005w\u0000"+
		"\u0000?@\u0005e\u0000\u0000@A\u0005e\u0000\u0000AB\u0005t\u0000\u0000"+
		"B\f\u0001\u0000\u0000\u0000CD\u0005{\u0000\u0000D\u000e\u0001\u0000\u0000"+
		"\u0000EF\u0005}\u0000\u0000F\u0010\u0001\u0000\u0000\u0000GH\u0005#\u0000"+
		"\u0000H\u0012\u0001\u0000\u0000\u0000IJ\u0005.\u0000\u0000J\u0014\u0001"+
		"\u0000\u0000\u0000KM\u0007\u0000\u0000\u0000LK\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000O\u0016\u0001\u0000\u0000\u0000PR\u0007\u0001\u0000\u0000QP\u0001"+
		"\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000"+
		"ST\u0001\u0000\u0000\u0000T\u0018\u0001\u0000\u0000\u0000UW\u0007\u0002"+
		"\u0000\u0000VU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XV\u0001"+
		"\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000Y\u001a\u0001\u0000\u0000"+
		"\u0000Z\\\u0005\r\u0000\u0000[Z\u0001\u0000\u0000\u0000[\\\u0001\u0000"+
		"\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0005\n\u0000\u0000^\u001c\u0001"+
		"\u0000\u0000\u0000_a\u0007\u0003\u0000\u0000`_\u0001\u0000\u0000\u0000"+
		"ab\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000de\u0006\u000e\u0000\u0000e\u001e\u0001"+
		"\u0000\u0000\u0000\u0007\u00003NSX[b\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}