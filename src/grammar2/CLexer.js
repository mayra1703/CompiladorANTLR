// Generated from ./grammar/C.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,27,190,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,68,8,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,3,1,79,8,1,1,2,1,2,5,2,83,8,2,10,2,12,2,86,9,2,1,2,1,
2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,
8,107,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,115,8,9,1,10,1,10,1,10,1,10,1,10,1,
11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,
1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,4,22,162,8,22,11,22,
12,22,163,1,23,1,23,4,23,168,8,23,11,23,12,23,169,3,23,172,8,23,1,24,4,24,
175,8,24,11,24,12,24,176,1,25,3,25,180,8,25,1,25,1,25,1,26,4,26,185,8,26,
11,26,12,26,186,1,26,1,26,1,84,0,27,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
43,22,45,23,47,24,49,25,51,26,53,27,1,0,6,2,0,60,60,62,62,1,0,48,57,2,0,
65,90,97,122,4,0,48,57,65,90,95,95,97,122,5,0,43,43,45,45,48,57,65,90,97,
122,3,0,9,10,13,13,32,32,204,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,
0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,
0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
53,1,0,0,0,1,67,1,0,0,0,3,78,1,0,0,0,5,80,1,0,0,0,7,89,1,0,0,0,9,91,1,0,
0,0,11,93,1,0,0,0,13,95,1,0,0,0,15,97,1,0,0,0,17,106,1,0,0,0,19,114,1,0,
0,0,21,116,1,0,0,0,23,121,1,0,0,0,25,126,1,0,0,0,27,128,1,0,0,0,29,130,1,
0,0,0,31,133,1,0,0,0,33,138,1,0,0,0,35,141,1,0,0,0,37,147,1,0,0,0,39,154,
1,0,0,0,41,156,1,0,0,0,43,158,1,0,0,0,45,161,1,0,0,0,47,165,1,0,0,0,49,174,
1,0,0,0,51,179,1,0,0,0,53,184,1,0,0,0,55,56,5,105,0,0,56,57,5,110,0,0,57,
68,5,116,0,0,58,59,5,99,0,0,59,60,5,104,0,0,60,61,5,97,0,0,61,68,5,114,0,
0,62,63,5,102,0,0,63,64,5,108,0,0,64,65,5,111,0,0,65,66,5,97,0,0,66,68,5,
116,0,0,67,55,1,0,0,0,67,58,1,0,0,0,67,62,1,0,0,0,68,2,1,0,0,0,69,70,5,116,
0,0,70,71,5,114,0,0,71,72,5,117,0,0,72,79,5,101,0,0,73,74,5,102,0,0,74,75,
5,97,0,0,75,76,5,108,0,0,76,77,5,115,0,0,77,79,5,101,0,0,78,69,1,0,0,0,78,
73,1,0,0,0,79,4,1,0,0,0,80,84,5,34,0,0,81,83,9,0,0,0,82,81,1,0,0,0,83,86,
1,0,0,0,84,85,1,0,0,0,84,82,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,88,5,
34,0,0,88,6,1,0,0,0,89,90,5,43,0,0,90,8,1,0,0,0,91,92,5,45,0,0,92,10,1,0,
0,0,93,94,5,42,0,0,94,12,1,0,0,0,95,96,5,47,0,0,96,14,1,0,0,0,97,98,5,61,
0,0,98,16,1,0,0,0,99,107,7,0,0,0,100,101,5,60,0,0,101,107,5,61,0,0,102,103,
5,62,0,0,103,107,5,61,0,0,104,105,5,33,0,0,105,107,5,61,0,0,106,99,1,0,0,
0,106,100,1,0,0,0,106,102,1,0,0,0,106,104,1,0,0,0,107,18,1,0,0,0,108,109,
5,124,0,0,109,115,5,124,0,0,110,111,5,38,0,0,111,115,5,38,0,0,112,113,5,
61,0,0,113,115,5,61,0,0,114,108,1,0,0,0,114,110,1,0,0,0,114,112,1,0,0,0,
115,20,1,0,0,0,116,117,5,118,0,0,117,118,5,111,0,0,118,119,5,105,0,0,119,
120,5,100,0,0,120,22,1,0,0,0,121,122,5,109,0,0,122,123,5,97,0,0,123,124,
5,105,0,0,124,125,5,110,0,0,125,24,1,0,0,0,126,127,5,40,0,0,127,26,1,0,0,
0,128,129,5,41,0,0,129,28,1,0,0,0,130,131,5,105,0,0,131,132,5,102,0,0,132,
30,1,0,0,0,133,134,5,101,0,0,134,135,5,108,0,0,135,136,5,115,0,0,136,137,
5,101,0,0,137,32,1,0,0,0,138,139,5,100,0,0,139,140,5,111,0,0,140,34,1,0,
0,0,141,142,5,119,0,0,142,143,5,104,0,0,143,144,5,105,0,0,144,145,5,108,
0,0,145,146,5,101,0,0,146,36,1,0,0,0,147,148,5,112,0,0,148,149,5,114,0,0,
149,150,5,105,0,0,150,151,5,110,0,0,151,152,5,116,0,0,152,153,5,102,0,0,
153,38,1,0,0,0,154,155,5,123,0,0,155,40,1,0,0,0,156,157,5,125,0,0,157,42,
1,0,0,0,158,159,5,59,0,0,159,44,1,0,0,0,160,162,7,1,0,0,161,160,1,0,0,0,
162,163,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,46,1,0,0,0,165,171,7,
2,0,0,166,168,7,3,0,0,167,166,1,0,0,0,168,169,1,0,0,0,169,167,1,0,0,0,169,
170,1,0,0,0,170,172,1,0,0,0,171,167,1,0,0,0,171,172,1,0,0,0,172,48,1,0,0,
0,173,175,7,4,0,0,174,173,1,0,0,0,175,176,1,0,0,0,176,174,1,0,0,0,176,177,
1,0,0,0,177,50,1,0,0,0,178,180,5,13,0,0,179,178,1,0,0,0,179,180,1,0,0,0,
180,181,1,0,0,0,181,182,5,10,0,0,182,52,1,0,0,0,183,185,7,5,0,0,184,183,
1,0,0,0,185,186,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,
188,189,6,26,0,0,189,54,1,0,0,0,12,0,67,78,84,106,114,163,169,171,176,179,
186,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CLexer extends antlr4.Lexer {

    static grammarFileName = "C.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, "'+'", "'-'", "'*'", "'/'", 
                         "'='", null, null, "'void'", "'main'", "'('", "')'", 
                         "'if'", "'else'", "'do'", "'while'", "'printf'", 
                         "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "TYPE", "BOOL", "STRING", "PLUS", "MINUS", 
                          "MULT", "DIV", "IGUAL", "OC", "OL", "VOID", "MAIN", 
                          "INITPAR", "FINALPAR", "IF", "ELSE", "DO", "WHILE", 
                          "PRINTF", "INITKEY", "FINALKEY", "SEMI", "INT", 
                          "ID", "INV_ID", "NEWLINE", "SPACES" ];
	static ruleNames = [ "TYPE", "BOOL", "STRING", "PLUS", "MINUS", "MULT", 
                      "DIV", "IGUAL", "OC", "OL", "VOID", "MAIN", "INITPAR", 
                      "FINALPAR", "IF", "ELSE", "DO", "WHILE", "PRINTF", 
                      "INITKEY", "FINALKEY", "SEMI", "INT", "ID", "INV_ID", 
                      "NEWLINE", "SPACES" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CLexer.EOF = antlr4.Token.EOF;
CLexer.TYPE = 1;
CLexer.BOOL = 2;
CLexer.STRING = 3;
CLexer.PLUS = 4;
CLexer.MINUS = 5;
CLexer.MULT = 6;
CLexer.DIV = 7;
CLexer.IGUAL = 8;
CLexer.OC = 9;
CLexer.OL = 10;
CLexer.VOID = 11;
CLexer.MAIN = 12;
CLexer.INITPAR = 13;
CLexer.FINALPAR = 14;
CLexer.IF = 15;
CLexer.ELSE = 16;
CLexer.DO = 17;
CLexer.WHILE = 18;
CLexer.PRINTF = 19;
CLexer.INITKEY = 20;
CLexer.FINALKEY = 21;
CLexer.SEMI = 22;
CLexer.INT = 23;
CLexer.ID = 24;
CLexer.INV_ID = 25;
CLexer.NEWLINE = 26;
CLexer.SPACES = 27;



