grammar Compilator;
import CommonLexerRules;

file            :   start+;

start           :   SERENITYCLASS INITKEY NEWLINE block FINALKEY;

block           :   contenido*
                ;

contenido       :   declaracion
                |   impresion
                |   ifStatement
                |   STARSTRING
                |   COMMENT
                |   LINECOMMENT
                ;

declaracion     :   GATITO TYPE ID PUNTITO NEWLINE  #validAssign
                |   GATITO TYPE VALORID = (WRONGID | NUM) PUNTITO NEWLINE    #invalidAssign
                |   GATITO TYPE ID '=' expr PUNTITO NEWLINE    #validAssign
                |   GATITO TYPE VALORID = (WRONGID | NUM) '=' expr PUNTITO NEWLINE    #invalidAssign
                ;

impresion       :   ARROW WHISPER '(' expr ')' PUNTITO NEWLINE #showExpr
                |   ARROW WHISPER '(' STARSTRING ')' PUNTITO NEWLINE #showString
                ;

ifStatement     :   COZYCONDITION '(' condition ')' INITKEY NEWLINE block FINALKEY NEWLINE (elseIfStatement | elseStatement)?
                ;

elseIfStatement :   TWILIGHTOPTION '(' condition ')' INITKEY NEWLINE block FINALKEY NEWLINE;

elseStatement   :   DREAMYELSE INITKEY NEWLINE block FINALKEY NEWLINE;

condition       :   cond_value = (OC | OL)
                |   expr cond_value = (OC | OL) expr
                |   condition cond_value = (OC | OL) condition
                ;

expr            :   '(' expr ')'  #parentesis
                |   expr expr  #impmulti
                |   expr operation=(TIMES|DIV) expr  #multidiv
                |   expr operation=(PLUS|MINUS) expr #masmenos
                |   ID  #id
                |   NUM #num
                ;

