grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET INITKEY NEWLINE contenido FINALKEY;

contenido   :   expr | (declaracion | impresion | ifStatement)*;

declaracion :   GATITO TYPE ID PUNTITO NEWLINE  #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
            |   GATITO TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
            ;

impresion   :   ARROW SHOW '(' expr ')' PUNTITO NEWLINE #showExpr
            ;

ifStatement :   SWEETCONDITION '(' condition ')' INITKEY statement FINALKEY NEWLINE (ELSE INITKEY statement FINALKEY)? NEWLINE
            ;

condition   :   expr operator=(OL | OC) expr
            ;

statement   :   expr | declaracion | impresion | ifStatement
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

