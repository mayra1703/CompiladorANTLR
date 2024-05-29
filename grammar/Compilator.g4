grammar Compilator;
import CommonLexerRules;

file                :   start+;

start               :   SERENITYCLASS INITKEY NEWLINE block FINALKEY;

block               :   (contenido NEWLINE?)*
                    ;

contenido           :   declaracion
                    |   impresion
                    |   condicional
                    |   asignacion
                    |   whileStatement
                    |   incremento
                    ;

declaracion         :   GATITO TYPE ID (IGUAL expr)? PUNTITO
                    ;

asignacion          :   ARROW ID IGUAL '(' expr ')' PUNTITO             #normalAssign
                    |   ARROW ID MATH_EQUALS '(' expr ')' PUNTITO       #mathAssign
                    ;

impresion           :   ARROW WHISPER '(' expr (COMA expr)* ')' PUNTITO           #showExpr
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
                    |	expr operation=(MULT|DIV|MOD) expr	                #multDiv
                    |   expr operation=(PLUS|MINUS) expr                    #addSub
                    |   operation=(PLUS|MINUS) expr					        #signNumbers
                    |   cond_value = (OC | OL)                              #condition
                    |   expr cond_value = (OC | OL) expr                    #condition
                    |   STARSTRING                                          #valueAsChar
                    |   CHAR                                                #valueAsChar
                    |   FLOAT                                               #num
                    |   NUM                                                 #num
                    |   ID                                                  #id
                    ;
