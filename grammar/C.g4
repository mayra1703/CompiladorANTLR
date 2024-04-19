grammar C;
import LexerRules;

file            :   start+;

start           :   VOID MAIN INITPAR FINALPAR INITKEY NEWLINE block FINALKEY;

block           :   contenido*
                ;

contenido       :   declaracion
                |   impresion
                |   ifStatement
                |   STRING
                |   COMMENT
                |   LINECOMMENT
                ;

declaracion     :   TYPE ID SEMI NEWLINE  #validAssign
                |   TYPE VALORID = (WRONGID | NUM) SEMI NEWLINE    #invalidAssign
                |   TYPE ID '=' expr SEMI NEWLINE    #validAssign
                |   TYPE VALORID = (WRONGID | NUM) '=' expr SEMI NEWLINE    #invalidAssign
                ;

impresion       :   PRINTF '(' expr ')' SEMI NEWLINE #showExpr
                |   PRINTF '(' STRING ')' SEMI NEWLINE #showString
                ;

ifStatement     :   IF '(' condition ')' INITKEY NEWLINE block FINALKEY NEWLINE (elseIfStatement | elseStatement)?
                ;

elseIfStatement :   ELSEIF '(' condition ')' INITKEY NEWLINE block FINALKEY NEWLINE;

elseStatement   :   ELSE INITKEY NEWLINE block FINALKEY NEWLINE;

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

