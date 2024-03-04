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
		INITKEY=10, FINALKEY=11, GATITO=12, PUNTITO=13, NUM=14, ID=15, WRONGID=16, 
		NEWLINE=17, SPACES=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", 
			"INITKEY", "FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", 
			"SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", "'Sweet'", 
			"'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "SWEET", 
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
		"\u0004\u0000\u0012r\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003@\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0004\rY\b\r\u000b"+
		"\r\f\rZ\u0001\u000e\u0004\u000e^\b\u000e\u000b\u000e\f\u000e_\u0001\u000f"+
		"\u0004\u000fc\b\u000f\u000b\u000f\f\u000fd\u0001\u0010\u0003\u0010h\b"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0004\u0011m\b\u0011\u000b"+
		"\u0011\f\u0011n\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012\u0001\u0000\u0004\u0001\u000009\u0002\u0000"+
		"AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  x\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003\'"+
		"\u0001\u0000\u0000\u0000\u0005)\u0001\u0000\u0000\u0000\u0007?\u0001\u0000"+
		"\u0000\u0000\tA\u0001\u0000\u0000\u0000\u000bC\u0001\u0000\u0000\u0000"+
		"\rE\u0001\u0000\u0000\u0000\u000fG\u0001\u0000\u0000\u0000\u0011I\u0001"+
		"\u0000\u0000\u0000\u0013O\u0001\u0000\u0000\u0000\u0015Q\u0001\u0000\u0000"+
		"\u0000\u0017S\u0001\u0000\u0000\u0000\u0019U\u0001\u0000\u0000\u0000\u001b"+
		"X\u0001\u0000\u0000\u0000\u001d]\u0001\u0000\u0000\u0000\u001fb\u0001"+
		"\u0000\u0000\u0000!g\u0001\u0000\u0000\u0000#l\u0001\u0000\u0000\u0000"+
		"%&\u0005=\u0000\u0000&\u0002\u0001\u0000\u0000\u0000\'(\u0005(\u0000\u0000"+
		"(\u0004\u0001\u0000\u0000\u0000)*\u0005)\u0000\u0000*\u0006\u0001\u0000"+
		"\u0000\u0000+,\u0005m\u0000\u0000,-\u0005i\u0000\u0000-.\u0005n\u0000"+
		"\u0000.@\u0005t\u0000\u0000/0\u0005m\u0000\u000001\u0005i\u0000\u0000"+
		"12\u0005n\u0000\u000023\u0005t\u0000\u000034\u0005c\u0000\u000045\u0005"+
		"h\u0000\u000056\u0005a\u0000\u00006@\u0005r\u0000\u000078\u0005m\u0000"+
		"\u000089\u0005i\u0000\u00009:\u0005n\u0000\u0000:;\u0005t\u0000\u0000"+
		";<\u0005f\u0000\u0000<=\u0005l\u0000\u0000=>\u0005o\u0000\u0000>@\u0005"+
		"t\u0000\u0000?+\u0001\u0000\u0000\u0000?/\u0001\u0000\u0000\u0000?7\u0001"+
		"\u0000\u0000\u0000@\b\u0001\u0000\u0000\u0000AB\u0005+\u0000\u0000B\n"+
		"\u0001\u0000\u0000\u0000CD\u0005-\u0000\u0000D\f\u0001\u0000\u0000\u0000"+
		"EF\u0005*\u0000\u0000F\u000e\u0001\u0000\u0000\u0000GH\u0005/\u0000\u0000"+
		"H\u0010\u0001\u0000\u0000\u0000IJ\u0005S\u0000\u0000JK\u0005w\u0000\u0000"+
		"KL\u0005e\u0000\u0000LM\u0005e\u0000\u0000MN\u0005t\u0000\u0000N\u0012"+
		"\u0001\u0000\u0000\u0000OP\u0005{\u0000\u0000P\u0014\u0001\u0000\u0000"+
		"\u0000QR\u0005}\u0000\u0000R\u0016\u0001\u0000\u0000\u0000ST\u0005#\u0000"+
		"\u0000T\u0018\u0001\u0000\u0000\u0000UV\u0005.\u0000\u0000V\u001a\u0001"+
		"\u0000\u0000\u0000WY\u0007\u0000\u0000\u0000XW\u0001\u0000\u0000\u0000"+
		"YZ\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000"+
		"\u0000[\u001c\u0001\u0000\u0000\u0000\\^\u0007\u0001\u0000\u0000]\\\u0001"+
		"\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000"+
		"_`\u0001\u0000\u0000\u0000`\u001e\u0001\u0000\u0000\u0000ac\u0007\u0002"+
		"\u0000\u0000ba\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000db\u0001"+
		"\u0000\u0000\u0000de\u0001\u0000\u0000\u0000e \u0001\u0000\u0000\u0000"+
		"fh\u0005\r\u0000\u0000gf\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000"+
		"hi\u0001\u0000\u0000\u0000ij\u0005\n\u0000\u0000j\"\u0001\u0000\u0000"+
		"\u0000km\u0007\u0003\u0000\u0000lk\u0001\u0000\u0000\u0000mn\u0001\u0000"+
		"\u0000\u0000nl\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000op\u0001"+
		"\u0000\u0000\u0000pq\u0006\u0011\u0000\u0000q$\u0001\u0000\u0000\u0000"+
		"\u0007\u0000?Z_dgn\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}