grammar MoonlightToC;
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

asignacion          :   ARROW ID IGUAL '(' expr ')' PUNTITO 
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

expr                :   '(' expr ')'   
                    |	expr operation=(MULT|DIV|PLUS|MINUS|MOD) expr
                    |   cond_value = (OC | OL) 
                    |   expr cond_value = (OC | OL) expr                    
                    |   STARSTRING                                          
                    |   CHAR                                                
                    |   FLOAT                                              
                    |   NUM                                                 
                    |   ID                                                  
                    ;
