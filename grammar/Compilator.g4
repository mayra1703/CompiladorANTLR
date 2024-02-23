grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET '{' NEWLINE contenido '}';

contenido   :   declaracion*;

declaracion :   '#' type ID PUNTITO NEWLINE;
                

type        :   'mint' | 'mintchar' | 'mintflot';

