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
		TYPE=1, PLUS=2, MINUS=3, MULT=4, DIV=5, IGUAL=6, OC=7, OL=8, SERENITYCLASS=9, 
		COZYCONDITION=10, TWILIGHTOPTION=11, ELSE=12, DREAMYELSE=13, ARROW=14, 
		WHISPER=15, INITKEY=16, FINALKEY=17, GATITO=18, PUNTITO=19, STARSTRING=20, 
		CHAR=21, NUM=22, FLOAT=23, ID=24, WRONGID=25, LINECOMMENT=26, COMMENT=27, 
		NEWLINE=28, SPACES=29;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TYPE", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", "SERENITYCLASS", 
			"COZYCONDITION", "TWILIGHTOPTION", "ELSE", "DREAMYELSE", "ARROW", "WHISPER", 
			"INITKEY", "FINALKEY", "GATITO", "PUNTITO", "STARSTRING", "CHAR", "NUM", 
			"FLOAT", "ID", "WRONGID", "LINECOMMENT", "COMMENT", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, "'SerenityClass'", 
			"'CozyCondition'", "'TwilightOption'", "'Else'", "'DreamElse'", "'->'", 
			"'WHISPER'", "'{'", "'}'", "'#'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TYPE", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", "SERENITYCLASS", 
			"COZYCONDITION", "TWILIGHTOPTION", "ELSE", "DREAMYELSE", "ARROW", "WHISPER", 
			"INITKEY", "FINALKEY", "GATITO", "PUNTITO", "STARSTRING", "CHAR", "NUM", 
			"FLOAT", "ID", "WRONGID", "LINECOMMENT", "COMMENT", "NEWLINE", "SPACES"
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
		"\u0004\u0000\u001d\u011e\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000"+
		"U\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006h\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007"+
		"\u007f\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0005\u0013\u00d0\b\u0013\n\u0013\f\u0013\u00d3"+
		"\t\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0004\u0015\u00dc\b\u0015\u000b\u0015\f\u0015\u00dd"+
		"\u0001\u0016\u0004\u0016\u00e1\b\u0016\u000b\u0016\f\u0016\u00e2\u0001"+
		"\u0016\u0001\u0016\u0004\u0016\u00e7\b\u0016\u000b\u0016\f\u0016\u00e8"+
		"\u0001\u0017\u0004\u0017\u00ec\b\u0017\u000b\u0017\f\u0017\u00ed\u0001"+
		"\u0018\u0004\u0018\u00f1\b\u0018\u000b\u0018\f\u0018\u00f2\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0005\u0019\u00f9\b\u0019\n\u0019"+
		"\f\u0019\u00fc\t\u0019\u0001\u0019\u0003\u0019\u00ff\b\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0001\u001a\u0005\u001a\u0109\b\u001a\n\u001a\f\u001a\u010c\t\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0003"+
		"\u001b\u0114\b\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0004\u001c\u0119"+
		"\b\u001c\u000b\u001c\f\u001c\u011a\u0001\u001c\u0001\u001c\u0003\u00d1"+
		"\u00fa\u010a\u0000\u001d\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c9\u001d"+
		"\u0001\u0000\u0007\u0002\u0000<<>>\u0003\u0000  AZaz\u0001\u000009\u0001"+
		"\u0000..\u0002\u0000AZaz\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r "+
		" \u0131\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000"+
		"!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001"+
		"\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000"+
		"\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000"+
		"\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u00003"+
		"\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001\u0000"+
		"\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0001T\u0001\u0000\u0000\u0000"+
		"\u0003V\u0001\u0000\u0000\u0000\u0005X\u0001\u0000\u0000\u0000\u0007Z"+
		"\u0001\u0000\u0000\u0000\t\\\u0001\u0000\u0000\u0000\u000b^\u0001\u0000"+
		"\u0000\u0000\rg\u0001\u0000\u0000\u0000\u000f~\u0001\u0000\u0000\u0000"+
		"\u0011\u0080\u0001\u0000\u0000\u0000\u0013\u008e\u0001\u0000\u0000\u0000"+
		"\u0015\u009c\u0001\u0000\u0000\u0000\u0017\u00ab\u0001\u0000\u0000\u0000"+
		"\u0019\u00b0\u0001\u0000\u0000\u0000\u001b\u00ba\u0001\u0000\u0000\u0000"+
		"\u001d\u00bd\u0001\u0000\u0000\u0000\u001f\u00c5\u0001\u0000\u0000\u0000"+
		"!\u00c7\u0001\u0000\u0000\u0000#\u00c9\u0001\u0000\u0000\u0000%\u00cb"+
		"\u0001\u0000\u0000\u0000\'\u00cd\u0001\u0000\u0000\u0000)\u00d6\u0001"+
		"\u0000\u0000\u0000+\u00db\u0001\u0000\u0000\u0000-\u00e0\u0001\u0000\u0000"+
		"\u0000/\u00eb\u0001\u0000\u0000\u00001\u00f0\u0001\u0000\u0000\u00003"+
		"\u00f4\u0001\u0000\u0000\u00005\u0104\u0001\u0000\u0000\u00007\u0113\u0001"+
		"\u0000\u0000\u00009\u0118\u0001\u0000\u0000\u0000;<\u0005r\u0000\u0000"+
		"<=\u0005e\u0000\u0000=>\u0005l\u0000\u0000>?\u0005a\u0000\u0000?@\u0005"+
		"x\u0000\u0000@A\u0005i\u0000\u0000AB\u0005n\u0000\u0000BU\u0005t\u0000"+
		"\u0000CD\u0005n\u0000\u0000DE\u0005i\u0000\u0000EF\u0005g\u0000\u0000"+
		"FG\u0005h\u0000\u0000GH\u0005t\u0000\u0000HI\u0005c\u0000\u0000IJ\u0005"+
		"h\u0000\u0000JK\u0005a\u0000\u0000KU\u0005r\u0000\u0000LM\u0005s\u0000"+
		"\u0000MN\u0005k\u0000\u0000NO\u0005y\u0000\u0000OP\u0005f\u0000\u0000"+
		"PQ\u0005l\u0000\u0000QR\u0005o\u0000\u0000RS\u0005a\u0000\u0000SU\u0005"+
		"t\u0000\u0000T;\u0001\u0000\u0000\u0000TC\u0001\u0000\u0000\u0000TL\u0001"+
		"\u0000\u0000\u0000U\u0002\u0001\u0000\u0000\u0000VW\u0005+\u0000\u0000"+
		"W\u0004\u0001\u0000\u0000\u0000XY\u0005-\u0000\u0000Y\u0006\u0001\u0000"+
		"\u0000\u0000Z[\u0005*\u0000\u0000[\b\u0001\u0000\u0000\u0000\\]\u0005"+
		"/\u0000\u0000]\n\u0001\u0000\u0000\u0000^_\u0005=\u0000\u0000_\f\u0001"+
		"\u0000\u0000\u0000`h\u0007\u0000\u0000\u0000ab\u0005<\u0000\u0000bh\u0005"+
		"=\u0000\u0000cd\u0005>\u0000\u0000dh\u0005=\u0000\u0000ef\u0005!\u0000"+
		"\u0000fh\u0005=\u0000\u0000g`\u0001\u0000\u0000\u0000ga\u0001\u0000\u0000"+
		"\u0000gc\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000h\u000e\u0001"+
		"\u0000\u0000\u0000ij\u0005|\u0000\u0000j\u007f\u0005|\u0000\u0000kl\u0005"+
		"&\u0000\u0000l\u007f\u0005&\u0000\u0000mn\u0005=\u0000\u0000n\u007f\u0005"+
		"=\u0000\u0000op\u0005p\u0000\u0000pq\u0005e\u0000\u0000qr\u0005a\u0000"+
		"\u0000rs\u0005c\u0000\u0000st\u0005e\u0000\u0000tu\u0005f\u0000\u0000"+
		"uv\u0005u\u0000\u0000v\u007f\u0005l\u0000\u0000wx\u0005c\u0000\u0000x"+
		"y\u0005h\u0000\u0000yz\u0005a\u0000\u0000z{\u0005o\u0000\u0000{|\u0005"+
		"t\u0000\u0000|}\u0005i\u0000\u0000}\u007f\u0005c\u0000\u0000~i\u0001\u0000"+
		"\u0000\u0000~k\u0001\u0000\u0000\u0000~m\u0001\u0000\u0000\u0000~o\u0001"+
		"\u0000\u0000\u0000~w\u0001\u0000\u0000\u0000\u007f\u0010\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0005S\u0000\u0000\u0081\u0082\u0005e\u0000\u0000\u0082"+
		"\u0083\u0005r\u0000\u0000\u0083\u0084\u0005e\u0000\u0000\u0084\u0085\u0005"+
		"n\u0000\u0000\u0085\u0086\u0005i\u0000\u0000\u0086\u0087\u0005t\u0000"+
		"\u0000\u0087\u0088\u0005y\u0000\u0000\u0088\u0089\u0005C\u0000\u0000\u0089"+
		"\u008a\u0005l\u0000\u0000\u008a\u008b\u0005a\u0000\u0000\u008b\u008c\u0005"+
		"s\u0000\u0000\u008c\u008d\u0005s\u0000\u0000\u008d\u0012\u0001\u0000\u0000"+
		"\u0000\u008e\u008f\u0005C\u0000\u0000\u008f\u0090\u0005o\u0000\u0000\u0090"+
		"\u0091\u0005z\u0000\u0000\u0091\u0092\u0005y\u0000\u0000\u0092\u0093\u0005"+
		"C\u0000\u0000\u0093\u0094\u0005o\u0000\u0000\u0094\u0095\u0005n\u0000"+
		"\u0000\u0095\u0096\u0005d\u0000\u0000\u0096\u0097\u0005i\u0000\u0000\u0097"+
		"\u0098\u0005t\u0000\u0000\u0098\u0099\u0005i\u0000\u0000\u0099\u009a\u0005"+
		"o\u0000\u0000\u009a\u009b\u0005n\u0000\u0000\u009b\u0014\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0005T\u0000\u0000\u009d\u009e\u0005w\u0000\u0000\u009e"+
		"\u009f\u0005i\u0000\u0000\u009f\u00a0\u0005l\u0000\u0000\u00a0\u00a1\u0005"+
		"i\u0000\u0000\u00a1\u00a2\u0005g\u0000\u0000\u00a2\u00a3\u0005h\u0000"+
		"\u0000\u00a3\u00a4\u0005t\u0000\u0000\u00a4\u00a5\u0005O\u0000\u0000\u00a5"+
		"\u00a6\u0005p\u0000\u0000\u00a6\u00a7\u0005t\u0000\u0000\u00a7\u00a8\u0005"+
		"i\u0000\u0000\u00a8\u00a9\u0005o\u0000\u0000\u00a9\u00aa\u0005n\u0000"+
		"\u0000\u00aa\u0016\u0001\u0000\u0000\u0000\u00ab\u00ac\u0005E\u0000\u0000"+
		"\u00ac\u00ad\u0005l\u0000\u0000\u00ad\u00ae\u0005s\u0000\u0000\u00ae\u00af"+
		"\u0005e\u0000\u0000\u00af\u0018\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005"+
		"D\u0000\u0000\u00b1\u00b2\u0005r\u0000\u0000\u00b2\u00b3\u0005e\u0000"+
		"\u0000\u00b3\u00b4\u0005a\u0000\u0000\u00b4\u00b5\u0005m\u0000\u0000\u00b5"+
		"\u00b6\u0005E\u0000\u0000\u00b6\u00b7\u0005l\u0000\u0000\u00b7\u00b8\u0005"+
		"s\u0000\u0000\u00b8\u00b9\u0005e\u0000\u0000\u00b9\u001a\u0001\u0000\u0000"+
		"\u0000\u00ba\u00bb\u0005-\u0000\u0000\u00bb\u00bc\u0005>\u0000\u0000\u00bc"+
		"\u001c\u0001\u0000\u0000\u0000\u00bd\u00be\u0005W\u0000\u0000\u00be\u00bf"+
		"\u0005H\u0000\u0000\u00bf\u00c0\u0005I\u0000\u0000\u00c0\u00c1\u0005S"+
		"\u0000\u0000\u00c1\u00c2\u0005P\u0000\u0000\u00c2\u00c3\u0005E\u0000\u0000"+
		"\u00c3\u00c4\u0005R\u0000\u0000\u00c4\u001e\u0001\u0000\u0000\u0000\u00c5"+
		"\u00c6\u0005{\u0000\u0000\u00c6 \u0001\u0000\u0000\u0000\u00c7\u00c8\u0005"+
		"}\u0000\u0000\u00c8\"\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005#\u0000"+
		"\u0000\u00ca$\u0001\u0000\u0000\u0000\u00cb\u00cc\u0005.\u0000\u0000\u00cc"+
		"&\u0001\u0000\u0000\u0000\u00cd\u00d1\u0005\"\u0000\u0000\u00ce\u00d0"+
		"\t\u0000\u0000\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000\u00d0\u00d3\u0001"+
		"\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000\u0000\u00d1\u00cf\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d4\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001"+
		"\u0000\u0000\u0000\u00d4\u00d5\u0005\"\u0000\u0000\u00d5(\u0001\u0000"+
		"\u0000\u0000\u00d6\u00d7\u0005\"\u0000\u0000\u00d7\u00d8\u0007\u0001\u0000"+
		"\u0000\u00d8\u00d9\u0005\"\u0000\u0000\u00d9*\u0001\u0000\u0000\u0000"+
		"\u00da\u00dc\u0007\u0002\u0000\u0000\u00db\u00da\u0001\u0000\u0000\u0000"+
		"\u00dc\u00dd\u0001\u0000\u0000\u0000\u00dd\u00db\u0001\u0000\u0000\u0000"+
		"\u00dd\u00de\u0001\u0000\u0000\u0000\u00de,\u0001\u0000\u0000\u0000\u00df"+
		"\u00e1\u0007\u0002\u0000\u0000\u00e0\u00df\u0001\u0000\u0000\u0000\u00e1"+
		"\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e0\u0001\u0000\u0000\u0000\u00e2"+
		"\u00e3\u0001\u0000\u0000\u0000\u00e3\u00e4\u0001\u0000\u0000\u0000\u00e4"+
		"\u00e6\u0007\u0003\u0000\u0000\u00e5\u00e7\u0007\u0002\u0000\u0000\u00e6"+
		"\u00e5\u0001\u0000\u0000\u0000\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8"+
		"\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000\u0000\u0000\u00e9"+
		".\u0001\u0000\u0000\u0000\u00ea\u00ec\u0007\u0004\u0000\u0000\u00eb\u00ea"+
		"\u0001\u0000\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000\u0000\u00ed\u00eb"+
		"\u0001\u0000\u0000\u0000\u00ed\u00ee\u0001\u0000\u0000\u0000\u00ee0\u0001"+
		"\u0000\u0000\u0000\u00ef\u00f1\u0007\u0005\u0000\u0000\u00f0\u00ef\u0001"+
		"\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000\u0000\u0000\u00f2\u00f0\u0001"+
		"\u0000\u0000\u0000\u00f2\u00f3\u0001\u0000\u0000\u0000\u00f32\u0001\u0000"+
		"\u0000\u0000\u00f4\u00f5\u0005/\u0000\u0000\u00f5\u00f6\u0005/\u0000\u0000"+
		"\u00f6\u00fa\u0001\u0000\u0000\u0000\u00f7\u00f9\t\u0000\u0000\u0000\u00f8"+
		"\u00f7\u0001\u0000\u0000\u0000\u00f9\u00fc\u0001\u0000\u0000\u0000\u00fa"+
		"\u00fb\u0001\u0000\u0000\u0000\u00fa\u00f8\u0001\u0000\u0000\u0000\u00fb"+
		"\u00fe\u0001\u0000\u0000\u0000\u00fc\u00fa\u0001\u0000\u0000\u0000\u00fd"+
		"\u00ff\u0005\r\u0000\u0000\u00fe\u00fd\u0001\u0000\u0000\u0000\u00fe\u00ff"+
		"\u0001\u0000\u0000\u0000\u00ff\u0100\u0001\u0000\u0000\u0000\u0100\u0101"+
		"\u0005\n\u0000\u0000\u0101\u0102\u0001\u0000\u0000\u0000\u0102\u0103\u0006"+
		"\u0019\u0000\u0000\u01034\u0001\u0000\u0000\u0000\u0104\u0105\u0005/\u0000"+
		"\u0000\u0105\u0106\u0005*\u0000\u0000\u0106\u010a\u0001\u0000\u0000\u0000"+
		"\u0107\u0109\t\u0000\u0000\u0000\u0108\u0107\u0001\u0000\u0000\u0000\u0109"+
		"\u010c\u0001\u0000\u0000\u0000\u010a\u010b\u0001\u0000\u0000\u0000\u010a"+
		"\u0108\u0001\u0000\u0000\u0000\u010b\u010d\u0001\u0000\u0000\u0000\u010c"+
		"\u010a\u0001\u0000\u0000\u0000\u010d\u010e\u0005*\u0000\u0000\u010e\u010f"+
		"\u0005/\u0000\u0000\u010f\u0110\u0001\u0000\u0000\u0000\u0110\u0111\u0006"+
		"\u001a\u0000\u0000\u01116\u0001\u0000\u0000\u0000\u0112\u0114\u0005\r"+
		"\u0000\u0000\u0113\u0112\u0001\u0000\u0000\u0000\u0113\u0114\u0001\u0000"+
		"\u0000\u0000\u0114\u0115\u0001\u0000\u0000\u0000\u0115\u0116\u0005\n\u0000"+
		"\u0000\u01168\u0001\u0000\u0000\u0000\u0117\u0119\u0007\u0006\u0000\u0000"+
		"\u0118\u0117\u0001\u0000\u0000\u0000\u0119\u011a\u0001\u0000\u0000\u0000"+
		"\u011a\u0118\u0001\u0000\u0000\u0000\u011a\u011b\u0001\u0000\u0000\u0000"+
		"\u011b\u011c\u0001\u0000\u0000\u0000\u011c\u011d\u0006\u001c\u0000\u0000"+
		"\u011d:\u0001\u0000\u0000\u0000\u000f\u0000Tg~\u00d1\u00dd\u00e2\u00e8"+
		"\u00ed\u00f2\u00fa\u00fe\u010a\u0113\u011a\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}