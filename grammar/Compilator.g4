grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET INITKEY NEWLINE contenido FINALKEY;

contenido   :   expr | (declaracion | impresion)*;

declaracion :   GATITO TYPE ID PUNTITO NEWLINE  #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
            |   GATITO TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
            ;

impresion   :   ARROW SHOW '(' expr ')' PUNTITO NEWLINE #showExpr
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

