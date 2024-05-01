grammar Compilator;
import CommonLexerRules;

file                :   start+;

start               :   SERENITYCLASS INITKEY NEWLINE block FINALKEY;

block               :   contenido*?
                    ;

contenido           :   declaracion
                    |   impresion
                    |   condicional
                    |   asignacion
                    |   whileStatement
                    |   incremento
                    ;

declaracion         :   GATITO TYPE ID (IGUAL expr)? PUNTITO NEWLINE
                    ;

asignacion          :   ARROW ID IGUAL '(' expr ')' PUNTITO NEWLINE
                    ;

impresion           :   ARROW WHISPER '(' expr ')' PUNTITO NEWLINE          #showExpr
                    |   ARROW WHISPER '(' STARSTRING ')' PUNTITO NEWLINE    #showString
                    ;

condicional         :   ifStatement elseIfStatement* elseStatement?
                    ;

ifStatement         :   COZYCONDITION '(' expr ')' INITKEY NEWLINE contenido* FINALKEY NEWLINE
                    ;

elseIfStatement     :   ELSE ifStatement
                    ;

elseStatement       :   DREAMYELSE INITKEY NEWLINE contenido* FINALKEY NEWLINE
                    ;

incremento          :   ID (PLUS PLUS | MINUS MINUS) PUNTITO NEWLINE
                    ;

whileStatement      :   DREAMLOOP '(' expr ')' INITKEY contenido* FINALKEY
                    ;

expr                :   '(' expr ')'                                        #parentesis
                    |	expr operation=(MULT|DIV|PLUS|MINUS) expr	        #arithmetic
                    |   cond_value = (OC | OL)                              #condition
                    |   expr cond_value = (OC | OL) expr                    #condition
                    |   CHAR                                                #valueAsChar
                    |   FLOAT                                               #num
                    |   NUM                                                 #num
                    |   ID                                                  #id
                    ;
