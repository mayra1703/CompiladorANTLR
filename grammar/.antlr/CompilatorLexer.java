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
		T__0=1, T__1=2, T__2=3, TYPE=4, PLUS=5, MINUS=6, TIMES=7, DIV=8, OC=9, 
		OL=10, SWEET=11, SWEETCONDITION=12, ELSE=13, ARROW=14, SHOW=15, INITKEY=16, 
		FINALKEY=17, GATITO=18, PUNTITO=19, NUM=20, ID=21, WRONGID=22, NEWLINE=23, 
		SPACES=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "OC", 
			"OL", "SWEET", "SWEETCONDITION", "ELSE", "ARROW", "SHOW", "INITKEY", 
			"FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'('", "')'", null, "'+'", "'-'", "'*'", "'/'", null, null, 
			"'Sweet'", "'SweetCondition'", "'Else'", "'->'", "'SHOW'", "'{'", "'}'", 
			"'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "TYPE", "PLUS", "MINUS", "TIMES", "DIV", "OC", 
			"OL", "SWEET", "SWEETCONDITION", "ELSE", "ARROW", "SHOW", "INITKEY", 
			"FINALKEY", "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", "SPACES"
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
		"\u0004\u0000\u0018\u00ab\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003L\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b]\b\b"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\te\b\t\u0001\n"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0004\u0013\u0092\b\u0013\u000b\u0013\f\u0013"+
		"\u0093\u0001\u0014\u0004\u0014\u0097\b\u0014\u000b\u0014\f\u0014\u0098"+
		"\u0001\u0015\u0004\u0015\u009c\b\u0015\u000b\u0015\f\u0015\u009d\u0001"+
		"\u0016\u0003\u0016\u00a1\b\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0004"+
		"\u0017\u00a6\b\u0017\u000b\u0017\f\u0017\u00a7\u0001\u0017\u0001\u0017"+
		"\u0000\u0000\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016-\u0017/\u0018\u0001\u0000\u0005\u0002\u0000<<>>\u0001\u000009"+
		"\u0002\u0000AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  \u00b6\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/"+
		"\u0001\u0000\u0000\u0000\u00011\u0001\u0000\u0000\u0000\u00033\u0001\u0000"+
		"\u0000\u0000\u00055\u0001\u0000\u0000\u0000\u0007K\u0001\u0000\u0000\u0000"+
		"\tM\u0001\u0000\u0000\u0000\u000bO\u0001\u0000\u0000\u0000\rQ\u0001\u0000"+
		"\u0000\u0000\u000fS\u0001\u0000\u0000\u0000\u0011\\\u0001\u0000\u0000"+
		"\u0000\u0013d\u0001\u0000\u0000\u0000\u0015f\u0001\u0000\u0000\u0000\u0017"+
		"l\u0001\u0000\u0000\u0000\u0019{\u0001\u0000\u0000\u0000\u001b\u0080\u0001"+
		"\u0000\u0000\u0000\u001d\u0083\u0001\u0000\u0000\u0000\u001f\u0088\u0001"+
		"\u0000\u0000\u0000!\u008a\u0001\u0000\u0000\u0000#\u008c\u0001\u0000\u0000"+
		"\u0000%\u008e\u0001\u0000\u0000\u0000\'\u0091\u0001\u0000\u0000\u0000"+
		")\u0096\u0001\u0000\u0000\u0000+\u009b\u0001\u0000\u0000\u0000-\u00a0"+
		"\u0001\u0000\u0000\u0000/\u00a5\u0001\u0000\u0000\u000012\u0005=\u0000"+
		"\u00002\u0002\u0001\u0000\u0000\u000034\u0005(\u0000\u00004\u0004\u0001"+
		"\u0000\u0000\u000056\u0005)\u0000\u00006\u0006\u0001\u0000\u0000\u0000"+
		"78\u0005m\u0000\u000089\u0005i\u0000\u00009:\u0005n\u0000\u0000:L\u0005"+
		"t\u0000\u0000;<\u0005m\u0000\u0000<=\u0005i\u0000\u0000=>\u0005n\u0000"+
		"\u0000>?\u0005t\u0000\u0000?@\u0005c\u0000\u0000@A\u0005h\u0000\u0000"+
		"AB\u0005a\u0000\u0000BL\u0005r\u0000\u0000CD\u0005m\u0000\u0000DE\u0005"+
		"i\u0000\u0000EF\u0005n\u0000\u0000FG\u0005t\u0000\u0000GH\u0005f\u0000"+
		"\u0000HI\u0005l\u0000\u0000IJ\u0005o\u0000\u0000JL\u0005t\u0000\u0000"+
		"K7\u0001\u0000\u0000\u0000K;\u0001\u0000\u0000\u0000KC\u0001\u0000\u0000"+
		"\u0000L\b\u0001\u0000\u0000\u0000MN\u0005+\u0000\u0000N\n\u0001\u0000"+
		"\u0000\u0000OP\u0005-\u0000\u0000P\f\u0001\u0000\u0000\u0000QR\u0005*"+
		"\u0000\u0000R\u000e\u0001\u0000\u0000\u0000ST\u0005/\u0000\u0000T\u0010"+
		"\u0001\u0000\u0000\u0000U]\u0007\u0000\u0000\u0000VW\u0005<\u0000\u0000"+
		"W]\u0005=\u0000\u0000XY\u0005>\u0000\u0000Y]\u0005=\u0000\u0000Z[\u0005"+
		"!\u0000\u0000[]\u0005=\u0000\u0000\\U\u0001\u0000\u0000\u0000\\V\u0001"+
		"\u0000\u0000\u0000\\X\u0001\u0000\u0000\u0000\\Z\u0001\u0000\u0000\u0000"+
		"]\u0012\u0001\u0000\u0000\u0000^_\u0005|\u0000\u0000_e\u0005|\u0000\u0000"+
		"`a\u0005&\u0000\u0000ae\u0005&\u0000\u0000bc\u0005=\u0000\u0000ce\u0005"+
		"=\u0000\u0000d^\u0001\u0000\u0000\u0000d`\u0001\u0000\u0000\u0000db\u0001"+
		"\u0000\u0000\u0000e\u0014\u0001\u0000\u0000\u0000fg\u0005S\u0000\u0000"+
		"gh\u0005w\u0000\u0000hi\u0005e\u0000\u0000ij\u0005e\u0000\u0000jk\u0005"+
		"t\u0000\u0000k\u0016\u0001\u0000\u0000\u0000lm\u0005S\u0000\u0000mn\u0005"+
		"w\u0000\u0000no\u0005e\u0000\u0000op\u0005e\u0000\u0000pq\u0005t\u0000"+
		"\u0000qr\u0005C\u0000\u0000rs\u0005o\u0000\u0000st\u0005n\u0000\u0000"+
		"tu\u0005d\u0000\u0000uv\u0005i\u0000\u0000vw\u0005t\u0000\u0000wx\u0005"+
		"i\u0000\u0000xy\u0005o\u0000\u0000yz\u0005n\u0000\u0000z\u0018\u0001\u0000"+
		"\u0000\u0000{|\u0005E\u0000\u0000|}\u0005l\u0000\u0000}~\u0005s\u0000"+
		"\u0000~\u007f\u0005e\u0000\u0000\u007f\u001a\u0001\u0000\u0000\u0000\u0080"+
		"\u0081\u0005-\u0000\u0000\u0081\u0082\u0005>\u0000\u0000\u0082\u001c\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005S\u0000\u0000\u0084\u0085\u0005H\u0000"+
		"\u0000\u0085\u0086\u0005O\u0000\u0000\u0086\u0087\u0005W\u0000\u0000\u0087"+
		"\u001e\u0001\u0000\u0000\u0000\u0088\u0089\u0005{\u0000\u0000\u0089 \u0001"+
		"\u0000\u0000\u0000\u008a\u008b\u0005}\u0000\u0000\u008b\"\u0001\u0000"+
		"\u0000\u0000\u008c\u008d\u0005#\u0000\u0000\u008d$\u0001\u0000\u0000\u0000"+
		"\u008e\u008f\u0005.\u0000\u0000\u008f&\u0001\u0000\u0000\u0000\u0090\u0092"+
		"\u0007\u0001\u0000\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0093\u0094"+
		"\u0001\u0000\u0000\u0000\u0094(\u0001\u0000\u0000\u0000\u0095\u0097\u0007"+
		"\u0002\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001"+
		"\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001"+
		"\u0000\u0000\u0000\u0099*\u0001\u0000\u0000\u0000\u009a\u009c\u0007\u0003"+
		"\u0000\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000"+
		"\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d\u009e\u0001\u0000"+
		"\u0000\u0000\u009e,\u0001\u0000\u0000\u0000\u009f\u00a1\u0005\r\u0000"+
		"\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000"+
		"\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005\n\u0000\u0000"+
		"\u00a3.\u0001\u0000\u0000\u0000\u00a4\u00a6\u0007\u0004\u0000\u0000\u00a5"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a9\u00aa\u0006\u0017\u0000\u0000\u00aa"+
		"0\u0001\u0000\u0000\u0000\t\u0000K\\d\u0093\u0098\u009d\u00a0\u00a7\u0001"+
		"\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}