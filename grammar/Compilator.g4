grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET '{' NEWLINE contenido '}';

contenido   :   expr | declaracion*;

declaracion :   '#' TYPE ID PUNTITO NEWLINE  #validAssign
            |   '#' TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
            |   '#' TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
            |   '#' TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
            ;

expr        :   '(' expr ')'  #parentesis
                |
                expr expr  #impmulti
                |
                expr operation=(TIMES|DIV) expr  #multidiv
                |
                expr operation=(PLUS|MINUS) expr #masmenos
                |
                ID  #id
                |
                NUM #num
                ;

