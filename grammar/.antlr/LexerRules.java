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
		MAIN=10, INITPAR=11, FINALPAR=12, IF=13, ELSEIF=14, ELSE=15, PRINTF=16, 
		INITKEY=17, FINALKEY=18, SEMI=19, INT=20, ID=21, INV_ID=22, NEWLINE=23, 
		SPACES=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", "VOID", 
			"MAIN", "INITPAR", "FINALPAR", "IF", "ELSEIF", "ELSE", "PRINTF", "INITKEY", 
			"FINALKEY", "SEMI", "INT", "ID", "INV_ID", "NEWLINE", "SPACES"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'+'", "'-'", "'*'", "'/'", "'='", null, null, "'void'", 
			"'main'", "'('", "')'", "'if'", "'else if'", "'else'", "'printf'", "'{'", 
			"'}'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "STRING", "PLUS", "MINUS", "MULT", "DIV", "IGUAL", "OC", "OL", 
			"VOID", "MAIN", "INITPAR", "FINALPAR", "IF", "ELSEIF", "ELSE", "PRINTF", 
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
		"\u0004\u0000\u0018\u009e\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0005\u00004\b\u0000\n\u0000\f\u00007\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0003\u0006L\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007T\b\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013"+
		"\u0082\b\u0013\u000b\u0013\f\u0013\u0083\u0001\u0014\u0001\u0014\u0004"+
		"\u0014\u0088\b\u0014\u000b\u0014\f\u0014\u0089\u0003\u0014\u008c\b\u0014"+
		"\u0001\u0015\u0004\u0015\u008f\b\u0015\u000b\u0015\f\u0015\u0090\u0001"+
		"\u0016\u0003\u0016\u0094\b\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0004"+
		"\u0017\u0099\b\u0017\u000b\u0017\f\u0017\u009a\u0001\u0017\u0001\u0017"+
		"\u00015\u0000\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t"+
		"\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f"+
		"\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014"+
		")\u0015+\u0016-\u0017/\u0018\u0001\u0000\u0006\u0002\u0000<<>>\u0001\u0000"+
		"09\u0002\u0000AZaz\u0004\u000009AZ__az\u0005\u0000++--09AZaz\u0003\u0000"+
		"\t\n\r\r  \u00a9\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00011\u0001\u0000\u0000\u0000\u0003"+
		":\u0001\u0000\u0000\u0000\u0005<\u0001\u0000\u0000\u0000\u0007>\u0001"+
		"\u0000\u0000\u0000\t@\u0001\u0000\u0000\u0000\u000bB\u0001\u0000\u0000"+
		"\u0000\rK\u0001\u0000\u0000\u0000\u000fS\u0001\u0000\u0000\u0000\u0011"+
		"U\u0001\u0000\u0000\u0000\u0013Z\u0001\u0000\u0000\u0000\u0015_\u0001"+
		"\u0000\u0000\u0000\u0017a\u0001\u0000\u0000\u0000\u0019c\u0001\u0000\u0000"+
		"\u0000\u001bf\u0001\u0000\u0000\u0000\u001dn\u0001\u0000\u0000\u0000\u001f"+
		"s\u0001\u0000\u0000\u0000!z\u0001\u0000\u0000\u0000#|\u0001\u0000\u0000"+
		"\u0000%~\u0001\u0000\u0000\u0000\'\u0081\u0001\u0000\u0000\u0000)\u0085"+
		"\u0001\u0000\u0000\u0000+\u008e\u0001\u0000\u0000\u0000-\u0093\u0001\u0000"+
		"\u0000\u0000/\u0098\u0001\u0000\u0000\u000015\u0005\"\u0000\u000024\t"+
		"\u0000\u0000\u000032\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u0000"+
		"56\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000068\u0001\u0000\u0000"+
		"\u000075\u0001\u0000\u0000\u000089\u0005\"\u0000\u00009\u0002\u0001\u0000"+
		"\u0000\u0000:;\u0005+\u0000\u0000;\u0004\u0001\u0000\u0000\u0000<=\u0005"+
		"-\u0000\u0000=\u0006\u0001\u0000\u0000\u0000>?\u0005*\u0000\u0000?\b\u0001"+
		"\u0000\u0000\u0000@A\u0005/\u0000\u0000A\n\u0001\u0000\u0000\u0000BC\u0005"+
		"=\u0000\u0000C\f\u0001\u0000\u0000\u0000DL\u0007\u0000\u0000\u0000EF\u0005"+
		"<\u0000\u0000FL\u0005=\u0000\u0000GH\u0005>\u0000\u0000HL\u0005=\u0000"+
		"\u0000IJ\u0005!\u0000\u0000JL\u0005=\u0000\u0000KD\u0001\u0000\u0000\u0000"+
		"KE\u0001\u0000\u0000\u0000KG\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000"+
		"\u0000L\u000e\u0001\u0000\u0000\u0000MN\u0005|\u0000\u0000NT\u0005|\u0000"+
		"\u0000OP\u0005&\u0000\u0000PT\u0005&\u0000\u0000QR\u0005=\u0000\u0000"+
		"RT\u0005=\u0000\u0000SM\u0001\u0000\u0000\u0000SO\u0001\u0000\u0000\u0000"+
		"SQ\u0001\u0000\u0000\u0000T\u0010\u0001\u0000\u0000\u0000UV\u0005v\u0000"+
		"\u0000VW\u0005o\u0000\u0000WX\u0005i\u0000\u0000XY\u0005d\u0000\u0000"+
		"Y\u0012\u0001\u0000\u0000\u0000Z[\u0005m\u0000\u0000[\\\u0005a\u0000\u0000"+
		"\\]\u0005i\u0000\u0000]^\u0005n\u0000\u0000^\u0014\u0001\u0000\u0000\u0000"+
		"_`\u0005(\u0000\u0000`\u0016\u0001\u0000\u0000\u0000ab\u0005)\u0000\u0000"+
		"b\u0018\u0001\u0000\u0000\u0000cd\u0005i\u0000\u0000de\u0005f\u0000\u0000"+
		"e\u001a\u0001\u0000\u0000\u0000fg\u0005e\u0000\u0000gh\u0005l\u0000\u0000"+
		"hi\u0005s\u0000\u0000ij\u0005e\u0000\u0000jk\u0005 \u0000\u0000kl\u0005"+
		"i\u0000\u0000lm\u0005f\u0000\u0000m\u001c\u0001\u0000\u0000\u0000no\u0005"+
		"e\u0000\u0000op\u0005l\u0000\u0000pq\u0005s\u0000\u0000qr\u0005e\u0000"+
		"\u0000r\u001e\u0001\u0000\u0000\u0000st\u0005p\u0000\u0000tu\u0005r\u0000"+
		"\u0000uv\u0005i\u0000\u0000vw\u0005n\u0000\u0000wx\u0005t\u0000\u0000"+
		"xy\u0005f\u0000\u0000y \u0001\u0000\u0000\u0000z{\u0005{\u0000\u0000{"+
		"\"\u0001\u0000\u0000\u0000|}\u0005}\u0000\u0000}$\u0001\u0000\u0000\u0000"+
		"~\u007f\u0005;\u0000\u0000\u007f&\u0001\u0000\u0000\u0000\u0080\u0082"+
		"\u0007\u0001\u0000\u0000\u0081\u0080\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0083\u0084"+
		"\u0001\u0000\u0000\u0000\u0084(\u0001\u0000\u0000\u0000\u0085\u008b\u0007"+
		"\u0002\u0000\u0000\u0086\u0088\u0007\u0003\u0000\u0000\u0087\u0086\u0001"+
		"\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u0087\u0001"+
		"\u0000\u0000\u0000\u0089\u008a\u0001\u0000\u0000\u0000\u008a\u008c\u0001"+
		"\u0000\u0000\u0000\u008b\u0087\u0001\u0000\u0000\u0000\u008b\u008c\u0001"+
		"\u0000\u0000\u0000\u008c*\u0001\u0000\u0000\u0000\u008d\u008f\u0007\u0004"+
		"\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000"+
		"\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000"+
		"\u0000\u0000\u0091,\u0001\u0000\u0000\u0000\u0092\u0094\u0005\r\u0000"+
		"\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000"+
		"\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0096\u0005\n\u0000\u0000"+
		"\u0096.\u0001\u0000\u0000\u0000\u0097\u0099\u0007\u0005\u0000\u0000\u0098"+
		"\u0097\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a"+
		"\u0098\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u0001\u0000\u0000\u0000\u009c\u009d\u0006\u0017\u0000\u0000\u009d"+
		"0\u0001\u0000\u0000\u0000\n\u00005KS\u0083\u0089\u008b\u0090\u0093\u009a"+
		"\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}