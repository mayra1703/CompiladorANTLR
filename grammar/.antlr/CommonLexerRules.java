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
		TYPE=1, PLUS=2, MINUS=3, TIMES=4, DIV=5, SWEET=6, ARROW=7, SHOW=8, INITKEY=9, 
		FINALKEY=10, GATITO=11, PUNTITO=12, NUM=13, ID=14, WRONGID=15, NEWLINE=16, 
		SPACES=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "ARROW", "SHOW", "INITKEY", 
			"FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", "'->'", "'SHOW'", 
			"'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", "ARROW", "SHOW", 
			"INITKEY", "FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", 
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
		"\u0004\u0000\u0011r\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u00008\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0004\fY\b\f\u000b\f\f\fZ\u0001\r\u0004\r^\b\r\u000b\r\f\r_\u0001\u000e"+
		"\u0004\u000ec\b\u000e\u000b\u000e\f\u000ed\u0001\u000f\u0003\u000fh\b"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0004\u0010m\b\u0010\u000b"+
		"\u0010\f\u0010n\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011\u0001\u0000\u0004\u0001\u000009\u0002\u0000AZaz\u0006"+
		"\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  x\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000"+
		"\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u00017\u0001"+
		"\u0000\u0000\u0000\u00039\u0001\u0000\u0000\u0000\u0005;\u0001\u0000\u0000"+
		"\u0000\u0007=\u0001\u0000\u0000\u0000\t?\u0001\u0000\u0000\u0000\u000b"+
		"A\u0001\u0000\u0000\u0000\rG\u0001\u0000\u0000\u0000\u000fJ\u0001\u0000"+
		"\u0000\u0000\u0011O\u0001\u0000\u0000\u0000\u0013Q\u0001\u0000\u0000\u0000"+
		"\u0015S\u0001\u0000\u0000\u0000\u0017U\u0001\u0000\u0000\u0000\u0019X"+
		"\u0001\u0000\u0000\u0000\u001b]\u0001\u0000\u0000\u0000\u001db\u0001\u0000"+
		"\u0000\u0000\u001fg\u0001\u0000\u0000\u0000!l\u0001\u0000\u0000\u0000"+
		"#$\u0005m\u0000\u0000$%\u0005i\u0000\u0000%&\u0005n\u0000\u0000&8\u0005"+
		"t\u0000\u0000\'(\u0005m\u0000\u0000()\u0005i\u0000\u0000)*\u0005n\u0000"+
		"\u0000*+\u0005t\u0000\u0000+,\u0005c\u0000\u0000,-\u0005h\u0000\u0000"+
		"-.\u0005a\u0000\u0000.8\u0005r\u0000\u0000/0\u0005m\u0000\u000001\u0005"+
		"i\u0000\u000012\u0005n\u0000\u000023\u0005t\u0000\u000034\u0005f\u0000"+
		"\u000045\u0005l\u0000\u000056\u0005o\u0000\u000068\u0005t\u0000\u0000"+
		"7#\u0001\u0000\u0000\u00007\'\u0001\u0000\u0000\u00007/\u0001\u0000\u0000"+
		"\u00008\u0002\u0001\u0000\u0000\u00009:\u0005+\u0000\u0000:\u0004\u0001"+
		"\u0000\u0000\u0000;<\u0005-\u0000\u0000<\u0006\u0001\u0000\u0000\u0000"+
		"=>\u0005*\u0000\u0000>\b\u0001\u0000\u0000\u0000?@\u0005/\u0000\u0000"+
		"@\n\u0001\u0000\u0000\u0000AB\u0005S\u0000\u0000BC\u0005w\u0000\u0000"+
		"CD\u0005e\u0000\u0000DE\u0005e\u0000\u0000EF\u0005t\u0000\u0000F\f\u0001"+
		"\u0000\u0000\u0000GH\u0005-\u0000\u0000HI\u0005>\u0000\u0000I\u000e\u0001"+
		"\u0000\u0000\u0000JK\u0005S\u0000\u0000KL\u0005H\u0000\u0000LM\u0005O"+
		"\u0000\u0000MN\u0005W\u0000\u0000N\u0010\u0001\u0000\u0000\u0000OP\u0005"+
		"{\u0000\u0000P\u0012\u0001\u0000\u0000\u0000QR\u0005}\u0000\u0000R\u0014"+
		"\u0001\u0000\u0000\u0000ST\u0005#\u0000\u0000T\u0016\u0001\u0000\u0000"+
		"\u0000UV\u0005.\u0000\u0000V\u0018\u0001\u0000\u0000\u0000WY\u0007\u0000"+
		"\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000ZX\u0001"+
		"\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[\u001a\u0001\u0000\u0000"+
		"\u0000\\^\u0007\u0001\u0000\u0000]\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`\u001c"+
		"\u0001\u0000\u0000\u0000ac\u0007\u0002\u0000\u0000ba\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000"+
		"\u0000\u0000e\u001e\u0001\u0000\u0000\u0000fh\u0005\r\u0000\u0000gf\u0001"+
		"\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000"+
		"ij\u0005\n\u0000\u0000j \u0001\u0000\u0000\u0000km\u0007\u0003\u0000\u0000"+
		"lk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000"+
		"\u0000no\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pq\u0006\u0010"+
		"\u0000\u0000q\"\u0001\u0000\u0000\u0000\u0007\u00007Z_dgn\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}