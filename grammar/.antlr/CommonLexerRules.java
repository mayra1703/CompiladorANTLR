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
		PUNTITO=9, NUM=10, ID=11, WRONGID=12, NEWLINE=13, SPACES=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "INITKEY", "FINALKEY", 
			"PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", "'{'", "'}'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "INITKEY", "FINALKEY", 
			"PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
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
		"\u0004\u0000\u000eb\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u00002\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0004\tI\b\t\u000b\t\f\tJ\u0001"+
		"\n\u0004\nN\b\n\u000b\n\f\nO\u0001\u000b\u0004\u000bS\b\u000b\u000b\u000b"+
		"\f\u000bT\u0001\f\u0003\fX\b\f\u0001\f\u0001\f\u0001\r\u0004\r]\b\r\u000b"+
		"\r\f\r^\u0001\r\u0001\r\u0000\u0000\u000e\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u0001\u0000\u0004\u0001\u0000"+
		"09\u0002\u0000AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  h\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u00011\u0001"+
		"\u0000\u0000\u0000\u00033\u0001\u0000\u0000\u0000\u00055\u0001\u0000\u0000"+
		"\u0000\u00077\u0001\u0000\u0000\u0000\t9\u0001\u0000\u0000\u0000\u000b"+
		";\u0001\u0000\u0000\u0000\rA\u0001\u0000\u0000\u0000\u000fC\u0001\u0000"+
		"\u0000\u0000\u0011E\u0001\u0000\u0000\u0000\u0013H\u0001\u0000\u0000\u0000"+
		"\u0015M\u0001\u0000\u0000\u0000\u0017R\u0001\u0000\u0000\u0000\u0019W"+
		"\u0001\u0000\u0000\u0000\u001b\\\u0001\u0000\u0000\u0000\u001d\u001e\u0005"+
		"m\u0000\u0000\u001e\u001f\u0005i\u0000\u0000\u001f \u0005n\u0000\u0000"+
		" 2\u0005t\u0000\u0000!\"\u0005m\u0000\u0000\"#\u0005i\u0000\u0000#$\u0005"+
		"n\u0000\u0000$%\u0005t\u0000\u0000%&\u0005c\u0000\u0000&\'\u0005h\u0000"+
		"\u0000\'(\u0005a\u0000\u0000(2\u0005r\u0000\u0000)*\u0005m\u0000\u0000"+
		"*+\u0005i\u0000\u0000+,\u0005n\u0000\u0000,-\u0005t\u0000\u0000-.\u0005"+
		"f\u0000\u0000./\u0005l\u0000\u0000/0\u0005o\u0000\u000002\u0005t\u0000"+
		"\u00001\u001d\u0001\u0000\u0000\u00001!\u0001\u0000\u0000\u00001)\u0001"+
		"\u0000\u0000\u00002\u0002\u0001\u0000\u0000\u000034\u0005+\u0000\u0000"+
		"4\u0004\u0001\u0000\u0000\u000056\u0005-\u0000\u00006\u0006\u0001\u0000"+
		"\u0000\u000078\u0005*\u0000\u00008\b\u0001\u0000\u0000\u00009:\u0005/"+
		"\u0000\u0000:\n\u0001\u0000\u0000\u0000;<\u0005S\u0000\u0000<=\u0005w"+
		"\u0000\u0000=>\u0005e\u0000\u0000>?\u0005e\u0000\u0000?@\u0005t\u0000"+
		"\u0000@\f\u0001\u0000\u0000\u0000AB\u0005{\u0000\u0000B\u000e\u0001\u0000"+
		"\u0000\u0000CD\u0005}\u0000\u0000D\u0010\u0001\u0000\u0000\u0000EF\u0005"+
		".\u0000\u0000F\u0012\u0001\u0000\u0000\u0000GI\u0007\u0000\u0000\u0000"+
		"HG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000"+
		"\u0000JK\u0001\u0000\u0000\u0000K\u0014\u0001\u0000\u0000\u0000LN\u0007"+
		"\u0001\u0000\u0000ML\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000"+
		"OM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000P\u0016\u0001\u0000"+
		"\u0000\u0000QS\u0007\u0002\u0000\u0000RQ\u0001\u0000\u0000\u0000ST\u0001"+
		"\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000"+
		"U\u0018\u0001\u0000\u0000\u0000VX\u0005\r\u0000\u0000WV\u0001\u0000\u0000"+
		"\u0000WX\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0005\n\u0000"+
		"\u0000Z\u001a\u0001\u0000\u0000\u0000[]\u0007\u0003\u0000\u0000\\[\u0001"+
		"\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000"+
		"^_\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`a\u0006\r\u0000\u0000"+
		"a\u001c\u0001\u0000\u0000\u0000\u0007\u00001JOTW^\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}