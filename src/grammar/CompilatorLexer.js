// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,77,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,4,8,62,8,
8,11,8,12,8,63,1,9,3,9,67,8,9,1,9,1,9,1,10,4,10,72,8,10,11,10,12,10,73,1,
10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,2,
6,0,42,43,45,45,47,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,79,0,1,1,0,
0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,
25,1,0,0,0,5,27,1,0,0,0,7,29,1,0,0,0,9,34,1,0,0,0,11,43,1,0,0,0,13,52,1,
0,0,0,15,58,1,0,0,0,17,61,1,0,0,0,19,66,1,0,0,0,21,71,1,0,0,0,23,24,5,123,
0,0,24,2,1,0,0,0,25,26,5,125,0,0,26,4,1,0,0,0,27,28,5,35,0,0,28,6,1,0,0,
0,29,30,5,109,0,0,30,31,5,105,0,0,31,32,5,110,0,0,32,33,5,116,0,0,33,8,1,
0,0,0,34,35,5,109,0,0,35,36,5,105,0,0,36,37,5,110,0,0,37,38,5,116,0,0,38,
39,5,99,0,0,39,40,5,104,0,0,40,41,5,97,0,0,41,42,5,114,0,0,42,10,1,0,0,0,
43,44,5,109,0,0,44,45,5,105,0,0,45,46,5,110,0,0,46,47,5,116,0,0,47,48,5,
102,0,0,48,49,5,108,0,0,49,50,5,111,0,0,50,51,5,116,0,0,51,12,1,0,0,0,52,
53,5,83,0,0,53,54,5,119,0,0,54,55,5,101,0,0,55,56,5,101,0,0,56,57,5,116,
0,0,57,14,1,0,0,0,58,59,5,46,0,0,59,16,1,0,0,0,60,62,7,0,0,0,61,60,1,0,0,
0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,18,1,0,0,0,65,67,5,13,0,0,
66,65,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,10,0,0,69,20,1,0,0,0,70,
72,7,1,0,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,75,
1,0,0,0,75,76,6,10,0,0,76,22,1,0,0,0,4,0,63,66,73,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompilatorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'#'", "'mint'", "'mintchar'", 
                         "'mintflot'", "'Sweet'", "'.'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, "SWEET", 
                          "PUNTITO", "ID", "NEWLINE", "SPACES" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "SWEET", 
                      "PUNTITO", "ID", "NEWLINE", "SPACES" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CompilatorLexer.EOF = antlr4.Token.EOF;
CompilatorLexer.T__0 = 1;
CompilatorLexer.T__1 = 2;
CompilatorLexer.T__2 = 3;
CompilatorLexer.T__3 = 4;
CompilatorLexer.T__4 = 5;
CompilatorLexer.T__5 = 6;
CompilatorLexer.SWEET = 7;
CompilatorLexer.PUNTITO = 8;
CompilatorLexer.ID = 9;
CompilatorLexer.NEWLINE = 10;
CompilatorLexer.SPACES = 11;



