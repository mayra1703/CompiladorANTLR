grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET '{' NEWLINE contenido '}';

contenido   :   declaracion*;

declaracion :   '#' type (ID '=' (NUM|ID))? PUNTITO NEWLINE;

type        :   'mint' | 'mintchar' | 'mintflot';

NUM         :   [0-9]+;
