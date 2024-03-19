grammar Compilator;
import CommonLexerRules;

file        :   start+;

start        :   SWEET INITKEY NEWLINE contenido FINALKEY;

contenido   :   expr
            |   (declaracion | impresion | ifStatement)*
            |   STRING
            ;

declaracion :   GATITO TYPE ID PUNTITO NEWLINE  #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
            |   GATITO TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
            ;

impresion   :   ARROW SHOW '(' expr ')' PUNTITO NEWLINE #showExpr
            |   ARROW SHOW '(' STRING ')' PUNTITO NEWLINE #showString
            ;

ifStatement :   SWEETCONDITION '(' condition ')' INITKEY statement FINALKEY (ELSE INITKEY statement FINALKEY)? NEWLINE
            ;

condition   :    expr OC expr   # comparisonExpr
            |    expr OL expr   # logicalExpr
            |    BOOL           # boolCondition
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

