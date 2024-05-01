grammar Compilator;
import CommonLexerRules;

file                :   start+;

start               :   SERENITYCLASS INITKEY NEWLINE block FINALKEY;

block               :   (contenido NEWLINE?)+
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

asignacion          :   ARROW ID IGUAL '(' expr ')' PUNTITO 
                    ;

impresion           :   ARROW WHISPER '(' expr ')' PUNTITO           #showExpr
                    ;

condicional         :   ifStatement elseIfStatement* elseStatement?
                    ;

ifStatement         :   COZYCONDITION '(' expr ')' INITKEY NEWLINE contenido* FINALKEY 
                    ;

elseIfStatement     :   ELSE ifStatement
                    ;

elseStatement       :   DREAMYELSE INITKEY NEWLINE contenido* FINALKEY NEWLINE
                    ;

incremento          :   ARROW ID (PLUS PLUS | MINUS MINUS)
                    ;

whileStatement      :   DREAMLOOP '(' expr ')' INITKEY NEWLINE contenido* FINALKEY
                    ;

expr                :   '(' expr ')'                                        #parentesis
                    |	expr operation=(MULT|DIV|PLUS|MINUS|MOD) expr	    #arithmetic
                    |   cond_value = (OC | OL)                              #condition
                    |   expr cond_value = (OC | OL) expr                    #condition
                    |   STARSTRING                                          #valueAsChar
                    |   CHAR                                                #valueAsChar
                    |   FLOAT                                               #num
                    |   NUM                                                 #num
                    |   ID                                                  #id
                    ;
