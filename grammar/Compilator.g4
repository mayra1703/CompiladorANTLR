grammar Compilator;
import CommonLexerRules;

file        :   start+;

start       :   SWEET INITKEY NEWLINE block FINALKEY;

block       :   contenido*
            ;

contenido   :   declaracion
            |   impresion
            |   ifStatement
            |   STRING
            |   COMMENT
            |   LINECOMMENT
            ;

declaracion :   GATITO TYPE ID PUNTITO NEWLINE  #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
            |   GATITO TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
            |   GATITO TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
            ;

impresion   :   ARROW SHOW '(' expr ')' PUNTITO NEWLINE #showExpr
            |   ARROW SHOW '(' STRING ')' PUNTITO NEWLINE #showString
            ;

ifStatement :   SWEETCONDITION '(' condition ')' INITKEY NEWLINE block FINALKEY NEWLINE (ELSE INITKEY NEWLINE block FINALKEY)? 
            ;

condition   :    cond_value = (OC | OL)
            |    expr cond_value = (OC | OL) expr
            |    condition cond_value = (OC | OL) condition
            ;

expr        :   '(' expr ')'  #parentesis
            |   expr expr  #impmulti
            |   expr operation=(TIMES|DIV) expr  #multidiv
            |   expr operation=(PLUS|MINUS) expr #masmenos
            |   ID  #id
            |   NUM #num
            ;

