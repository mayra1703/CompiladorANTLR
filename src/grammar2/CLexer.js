// Generated from ./grammar/C.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,34,254,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,82,8,0,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,93,8,1,1,2,1,2,5,2,97,8,2,10,2,12,2,100,9,2,1,2,1,
2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,129,8,11,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,146,8,12,1,13,
1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,
17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,
25,3,25,193,8,25,1,25,4,25,196,8,25,11,25,12,25,197,1,26,1,26,3,26,202,8,
26,1,26,1,26,1,27,4,27,207,8,27,11,27,12,27,208,1,27,1,27,4,27,213,8,27,
11,27,12,27,214,1,28,1,28,4,28,219,8,28,11,28,12,28,220,3,28,223,8,28,1,
29,4,29,226,8,29,11,29,12,29,227,1,30,3,30,231,8,30,1,30,1,30,1,31,4,31,
236,8,31,11,31,12,31,237,1,31,1,31,1,32,1,32,1,32,1,32,5,32,246,8,32,10,
32,12,32,249,9,32,1,32,1,32,1,33,1,33,1,98,0,34,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,
19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,
31,63,32,65,33,67,34,1,0,9,2,0,60,60,62,62,1,0,48,57,3,0,32,32,65,90,97,
122,1,0,46,46,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,5,0,43,43,45,
45,48,57,65,90,97,122,3,0,9,10,13,13,32,32,2,0,10,10,13,13,275,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,
0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,
0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,
59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,1,81,1,0,
0,0,3,92,1,0,0,0,5,94,1,0,0,0,7,103,1,0,0,0,9,106,1,0,0,0,11,109,1,0,0,0,
13,111,1,0,0,0,15,113,1,0,0,0,17,115,1,0,0,0,19,117,1,0,0,0,21,119,1,0,0,
0,23,128,1,0,0,0,25,145,1,0,0,0,27,147,1,0,0,0,29,152,1,0,0,0,31,157,1,0,
0,0,33,159,1,0,0,0,35,161,1,0,0,0,37,164,1,0,0,0,39,169,1,0,0,0,41,172,1,
0,0,0,43,178,1,0,0,0,45,185,1,0,0,0,47,187,1,0,0,0,49,189,1,0,0,0,51,192,
1,0,0,0,53,199,1,0,0,0,55,206,1,0,0,0,57,216,1,0,0,0,59,225,1,0,0,0,61,230,
1,0,0,0,63,235,1,0,0,0,65,241,1,0,0,0,67,252,1,0,0,0,69,70,5,105,0,0,70,
71,5,110,0,0,71,82,5,116,0,0,72,73,5,99,0,0,73,74,5,104,0,0,74,75,5,97,0,
0,75,82,5,114,0,0,76,77,5,102,0,0,77,78,5,108,0,0,78,79,5,111,0,0,79,80,
5,97,0,0,80,82,5,116,0,0,81,69,1,0,0,0,81,72,1,0,0,0,81,76,1,0,0,0,82,2,
1,0,0,0,83,84,5,116,0,0,84,85,5,114,0,0,85,86,5,117,0,0,86,93,5,101,0,0,
87,88,5,102,0,0,88,89,5,97,0,0,89,90,5,108,0,0,90,91,5,115,0,0,91,93,5,101,
0,0,92,83,1,0,0,0,92,87,1,0,0,0,93,4,1,0,0,0,94,98,5,34,0,0,95,97,9,0,0,
0,96,95,1,0,0,0,97,100,1,0,0,0,98,99,1,0,0,0,98,96,1,0,0,0,99,101,1,0,0,
0,100,98,1,0,0,0,101,102,5,34,0,0,102,6,1,0,0,0,103,104,3,11,5,0,104,105,
3,11,5,0,105,8,1,0,0,0,106,107,3,13,6,0,107,108,3,13,6,0,108,10,1,0,0,0,
109,110,5,43,0,0,110,12,1,0,0,0,111,112,5,45,0,0,112,14,1,0,0,0,113,114,
5,42,0,0,114,16,1,0,0,0,115,116,5,47,0,0,116,18,1,0,0,0,117,118,5,37,0,0,
118,20,1,0,0,0,119,120,5,61,0,0,120,22,1,0,0,0,121,129,7,0,0,0,122,123,5,
60,0,0,123,129,5,61,0,0,124,125,5,62,0,0,125,129,5,61,0,0,126,127,5,33,0,
0,127,129,5,61,0,0,128,121,1,0,0,0,128,122,1,0,0,0,128,124,1,0,0,0,128,126,
1,0,0,0,129,24,1,0,0,0,130,131,5,124,0,0,131,146,5,124,0,0,132,133,5,38,
0,0,133,146,5,38,0,0,134,135,5,61,0,0,135,146,5,61,0,0,136,137,5,116,0,0,
137,138,5,114,0,0,138,139,5,117,0,0,139,146,5,101,0,0,140,141,5,102,0,0,
141,142,5,97,0,0,142,143,5,108,0,0,143,144,5,115,0,0,144,146,5,101,0,0,145,
130,1,0,0,0,145,132,1,0,0,0,145,134,1,0,0,0,145,136,1,0,0,0,145,140,1,0,
0,0,146,26,1,0,0,0,147,148,5,118,0,0,148,149,5,111,0,0,149,150,5,105,0,0,
150,151,5,100,0,0,151,28,1,0,0,0,152,153,5,109,0,0,153,154,5,97,0,0,154,
155,5,105,0,0,155,156,5,110,0,0,156,30,1,0,0,0,157,158,5,40,0,0,158,32,1,
0,0,0,159,160,5,41,0,0,160,34,1,0,0,0,161,162,5,105,0,0,162,163,5,102,0,
0,163,36,1,0,0,0,164,165,5,101,0,0,165,166,5,108,0,0,166,167,5,115,0,0,167,
168,5,101,0,0,168,38,1,0,0,0,169,170,5,100,0,0,170,171,5,111,0,0,171,40,
1,0,0,0,172,173,5,119,0,0,173,174,5,104,0,0,174,175,5,105,0,0,175,176,5,
108,0,0,176,177,5,101,0,0,177,42,1,0,0,0,178,179,5,112,0,0,179,180,5,114,
0,0,180,181,5,105,0,0,181,182,5,110,0,0,182,183,5,116,0,0,183,184,5,102,
0,0,184,44,1,0,0,0,185,186,5,123,0,0,186,46,1,0,0,0,187,188,5,125,0,0,188,
48,1,0,0,0,189,190,5,59,0,0,190,50,1,0,0,0,191,193,3,13,6,0,192,191,1,0,
0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,196,7,1,0,0,195,194,1,0,0,0,196,
197,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,52,1,0,0,0,199,201,5,34,
0,0,200,202,7,2,0,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,
204,5,34,0,0,204,54,1,0,0,0,205,207,7,1,0,0,206,205,1,0,0,0,207,208,1,0,
0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,212,7,3,0,0,211,
213,7,1,0,0,212,211,1,0,0,0,213,214,1,0,0,0,214,212,1,0,0,0,214,215,1,0,
0,0,215,56,1,0,0,0,216,222,7,4,0,0,217,219,7,5,0,0,218,217,1,0,0,0,219,220,
1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,223,1,0,0,0,222,218,1,0,0,0,
222,223,1,0,0,0,223,58,1,0,0,0,224,226,7,6,0,0,225,224,1,0,0,0,226,227,1,
0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,60,1,0,0,0,229,231,5,13,0,0,230,
229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,5,10,0,0,233,62,1,0,
0,0,234,236,7,7,0,0,235,234,1,0,0,0,236,237,1,0,0,0,237,235,1,0,0,0,237,
238,1,0,0,0,238,239,1,0,0,0,239,240,6,31,0,0,240,64,1,0,0,0,241,242,5,47,
0,0,242,243,5,47,0,0,243,247,1,0,0,0,244,246,8,8,0,0,245,244,1,0,0,0,246,
249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,247,1,0,
0,0,250,251,6,32,0,0,251,66,1,0,0,0,252,253,5,44,0,0,253,68,1,0,0,0,17,0,
81,92,98,128,145,192,197,201,208,214,220,222,227,230,237,247,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CLexer extends antlr4.Lexer {

    static grammarFileName = "C.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, "'+'", "'-'", 
                         "'*'", "'/'", "'%'", "'='", null, null, "'void'", 
                         "'main'", "'('", "')'", "'if'", "'else'", "'do'", 
                         "'while'", "'printf'", "'{'", "'}'", "';'", null, 
                         null, null, null, null, null, null, null, "','" ];
	static symbolicNames = [ null, "TYPE", "BOOL", "STRING", "PLUSPLUS", "MINUSMINUS", 
                          "PLUS", "MINUS", "MULT", "DIV", "MOD", "IGUAL", 
                          "OC", "OL", "VOID", "MAIN", "INITPAR", "FINALPAR", 
                          "IF", "ELSE", "DO", "WHILE", "PRINTF", "INITKEY", 
                          "FINALKEY", "SEMI", "INT", "CHAR", "FLOAT", "ID", 
                          "INV_ID", "NEWLINE", "SPACES", "LINE_COMMENT", 
                          "COMA" ];
	static ruleNames = [ "TYPE", "BOOL", "STRING", "PLUSPLUS", "MINUSMINUS", 
                      "PLUS", "MINUS", "MULT", "DIV", "MOD", "IGUAL", "OC", 
                      "OL", "VOID", "MAIN", "INITPAR", "FINALPAR", "IF", 
                      "ELSE", "DO", "WHILE", "PRINTF", "INITKEY", "FINALKEY", 
                      "SEMI", "INT", "CHAR", "FLOAT", "ID", "INV_ID", "NEWLINE", 
                      "SPACES", "LINE_COMMENT", "COMA" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CLexer.EOF = antlr4.Token.EOF;
CLexer.TYPE = 1;
CLexer.BOOL = 2;
CLexer.STRING = 3;
CLexer.PLUSPLUS = 4;
CLexer.MINUSMINUS = 5;
CLexer.PLUS = 6;
CLexer.MINUS = 7;
CLexer.MULT = 8;
CLexer.DIV = 9;
CLexer.MOD = 10;
CLexer.IGUAL = 11;
CLexer.OC = 12;
CLexer.OL = 13;
CLexer.VOID = 14;
CLexer.MAIN = 15;
CLexer.INITPAR = 16;
CLexer.FINALPAR = 17;
CLexer.IF = 18;
CLexer.ELSE = 19;
CLexer.DO = 20;
CLexer.WHILE = 21;
CLexer.PRINTF = 22;
CLexer.INITKEY = 23;
CLexer.FINALKEY = 24;
CLexer.SEMI = 25;
CLexer.INT = 26;
CLexer.CHAR = 27;
CLexer.FLOAT = 28;
CLexer.ID = 29;
CLexer.INV_ID = 30;
CLexer.NEWLINE = 31;
CLexer.SPACES = 32;
CLexer.LINE_COMMENT = 33;
CLexer.COMA = 34;



