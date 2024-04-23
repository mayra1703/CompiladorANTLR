grammar C;
import LexerRules;

file            :   start+;

start           :   VOID MAIN INITPAR FINALPAR INITKEY NEWLINE block FINALKEY;

block           :   contenido*
                ;

contenido       :   declaracion
                |   asignacion
                |   impresion
                |   condicional
                |   STRING
                |   COMMENT
                |   LINECOMMENT
                ;

declaracion     :   TYPE ID (IGUAL expr)? SEMI NEWLINE
			    |	TYPE id=(INV_ID|INT) (IGUAL expr)? SEMI NEWLINE
			    ;   

asignacion      :   ID '=' expr SEMI NEWLINE
                ;

impresion       :   PRINTF '(' expr ')' SEMI NEWLINE #showExpr
                |   PRINTF '(' STRING ')' SEMI NEWLINE #showString
                ;

condicional     :   ifStatement elseIfStatement* elseStatement?
                ;

ifStatement     :   IF '(' expr ')' INITKEY NEWLINE block FINALKEY NEWLINE
                ;

elseIfStatement :   ELSEIF '(' expr ')' INITKEY NEWLINE block FINALKEY NEWLINE;

elseStatement   :   ELSE INITKEY NEWLINE block FINALKEY NEWLINE;

expr            :   '(' expr ')'
                |   expr expr
                |   expr operation=(MULT|DIV) expr
                |   expr operation=(PLUS|MINUS) expr
                |   cond_value = (OC | OL)
                |   expr cond_value = (OC | OL) expr
                |   ID
                |   INT
                ;


TYPE            :   'int' | 'char' | 'float';