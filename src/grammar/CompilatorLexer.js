// Generated from ./grammar/Compilator.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,114,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,
1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,4,13,89,8,13,11,13,12,13,
90,1,14,4,14,94,8,14,11,14,12,14,95,1,15,4,15,99,8,15,11,15,12,15,100,1,
16,3,16,104,8,16,1,16,1,16,1,17,4,17,109,8,17,11,17,12,17,110,1,17,1,17,
0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
14,29,15,31,16,33,17,35,18,1,0,4,1,0,48,57,2,0,65,90,97,122,6,0,42,43,45,
45,47,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,120,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,0,
0,0,3,39,1,0,0,0,5,41,1,0,0,0,7,63,1,0,0,0,9,65,1,0,0,0,11,67,1,0,0,0,13,
69,1,0,0,0,15,71,1,0,0,0,17,73,1,0,0,0,19,79,1,0,0,0,21,81,1,0,0,0,23,83,
1,0,0,0,25,85,1,0,0,0,27,88,1,0,0,0,29,93,1,0,0,0,31,98,1,0,0,0,33,103,1,
0,0,0,35,108,1,0,0,0,37,38,5,61,0,0,38,2,1,0,0,0,39,40,5,40,0,0,40,4,1,0,
0,0,41,42,5,41,0,0,42,6,1,0,0,0,43,44,5,109,0,0,44,45,5,105,0,0,45,46,5,
110,0,0,46,64,5,116,0,0,47,48,5,109,0,0,48,49,5,105,0,0,49,50,5,110,0,0,
50,51,5,116,0,0,51,52,5,99,0,0,52,53,5,104,0,0,53,54,5,97,0,0,54,64,5,114,
0,0,55,56,5,109,0,0,56,57,5,105,0,0,57,58,5,110,0,0,58,59,5,116,0,0,59,60,
5,102,0,0,60,61,5,108,0,0,61,62,5,111,0,0,62,64,5,116,0,0,63,43,1,0,0,0,
63,47,1,0,0,0,63,55,1,0,0,0,64,8,1,0,0,0,65,66,5,43,0,0,66,10,1,0,0,0,67,
68,5,45,0,0,68,12,1,0,0,0,69,70,5,42,0,0,70,14,1,0,0,0,71,72,5,47,0,0,72,
16,1,0,0,0,73,74,5,83,0,0,74,75,5,119,0,0,75,76,5,101,0,0,76,77,5,101,0,
0,77,78,5,116,0,0,78,18,1,0,0,0,79,80,5,123,0,0,80,20,1,0,0,0,81,82,5,125,
0,0,82,22,1,0,0,0,83,84,5,35,0,0,84,24,1,0,0,0,85,86,5,46,0,0,86,26,1,0,
0,0,87,89,7,0,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,
0,91,28,1,0,0,0,92,94,7,1,0,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,
95,96,1,0,0,0,96,30,1,0,0,0,97,99,7,2,0,0,98,97,1,0,0,0,99,100,1,0,0,0,100,
98,1,0,0,0,100,101,1,0,0,0,101,32,1,0,0,0,102,104,5,13,0,0,103,102,1,0,0,
0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,5,10,0,0,106,34,1,0,0,0,107,109,
7,3,0,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,
111,112,1,0,0,0,112,113,6,17,0,0,113,36,1,0,0,0,7,0,63,90,95,100,103,110,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompilatorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'('", "')'", null, "'+'", "'-'", 
                         "'*'", "'/'", "'Sweet'", "'{'", "'}'", "'#'", "'.'" ];
	static symbolicNames = [ null, null, null, null, "TYPE", "PLUS", "MINUS", 
                          "TIMES", "DIV", "SWEET", "INITKEY", "FINALKEY", 
                          "GATITO", "PUNTITO", "NUM", "ID", "WRONGID", "NEWLINE", 
                          "SPACES" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "TYPE", "PLUS", "MINUS", "TIMES", 
                      "DIV", "SWEET", "INITKEY", "FINALKEY", "GATITO", "PUNTITO", 
                      "NUM", "ID", "WRONGID", "NEWLINE", "SPACES" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CompilatorLexer.EOF = antlr4.Token.EOF;
CompilatorLexer.T__0 = 1;
CompilatorLexer.T__1 = 2;
CompilatorLexer.T__2 = 3;
CompilatorLexer.TYPE = 4;
CompilatorLexer.PLUS = 5;
CompilatorLexer.MINUS = 6;
CompilatorLexer.TIMES = 7;
CompilatorLexer.DIV = 8;
CompilatorLexer.SWEET = 9;
CompilatorLexer.INITKEY = 10;
CompilatorLexer.FINALKEY = 11;
CompilatorLexer.GATITO = 12;
CompilatorLexer.PUNTITO = 13;
CompilatorLexer.NUM = 14;
CompilatorLexer.ID = 15;
CompilatorLexer.WRONGID = 16;
CompilatorLexer.NEWLINE = 17;
CompilatorLexer.SPACES = 18;



