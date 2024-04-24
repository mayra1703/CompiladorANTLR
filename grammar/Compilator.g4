grammar Compilator;
import CommonLexerRules;

file                :   start+;

start               :   SERENITYCLASS INITKEY NEWLINE block FINALKEY;

block               :   contenido*
                    ;

contenido           :   declaracion
                    |   impresion
                    |   condicional
                    |   asignacion
                    |   STARSTRING
                    |   COMMENT
                    |   LINECOMMENT
                    ;

declaracion         :   GATITO TYPE ID PUNTITO NEWLINE                      #validAssign
                    |   GATITO TYPE ID '=' expr PUNTITO NEWLINE             #validAssign
                    ;

asignacion          :   ARROW ID IGUAL '(' expr ')' PUNTITO NEWLINE
                    ;

impresion           :   ARROW WHISPER '(' expr ')' PUNTITO NEWLINE          #showExpr
                    |   ARROW WHISPER '(' STARSTRING ')' PUNTITO NEWLINE    #showString
                        ;

condicional         :   ifStatement elseIfStatement* elseStatement?
                    ;

ifStatement         :   COZYCONDITION '(' expr ')' INITKEY NEWLINE block FINALKEY NEWLINE
                    ;

elseIfStatement     :   ELSE ifStatement
                    ;

elseStatement       :   DREAMYELSE INITKEY NEWLINE block FINALKEY NEWLINE
                    ;

whileStatement      :   DREAMLOOP '(' expr ')' INITKEY block FINALKEY
                    ;

doWhileStatement    :   DO '(' block ')' DREAMLOOP '(' expr ')'
                    ;

expr                :   '(' expr ')'                                        #parentesis
                    |	expr operation=(MULT|DIV|PLUS|MINUS) expr	        #arithmetic
                    |   cond_value = (OC | OL)                              #condition
                    |   expr cond_value = (OC | OL) expr                    #condition
                    |   ID                                                  #id
                    |   NUM                                                 #num
                    ;