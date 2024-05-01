grammar C;
import LexerRules;

file                :   start+;

start               :   VOID MAIN INITPAR FINALPAR INITKEY block FINALKEY;

block               :   (contenido NEWLINE?)+
                    ;

contenido           :   declaracion
                    |   asignacion
                    |   condicional
                    |   whileStatement
                    |   impresion
                    |   incremento
                    ;

declaracion         :   TYPE ID (IGUAL expr)? SEMI 
			        |	TYPE id=(INV_ID|INT) (IGUAL expr)? SEMI 
			        ;   

asignacion          :   ID '=' expr SEMI 
                    ;

impresion           :   PRINTF '(' expr ')' SEMI 
                    ;

condicional         :   ifStatement elseIfStatement* elseStatement?
                    ;

ifStatement         :   IF '(' expr ')' INITKEY contenido* FINALKEY
                    ;

elseIfStatement     :   ELSE ifStatement
                    ;

elseStatement       :   ELSE INITKEY contenido* FINALKEY NEWLINE
                    ;

incremento          :   ID (PLUS PLUS | MINUS MINUS) (SPACES)* SEMI 
                    ;

whileStatement      :   WHILE '(' expr ')' INITKEY contenido* FINALKEY
                    ;

expr                :   '(' expr ')'                                        
                    |	expr operation=(MULT|DIV|PLUS|MINUS|MOD) expr	    
                    |   cond_value = (OC | OL)                              
                    |   expr cond_value = (OC | OL) expr        
                    |   STRING            
                    |   CHAR                                                
                    |   FLOAT                                               
                    |   INT                                                
                    |   ID                                                
                    ;

TYPE            :   'int' | 'char' | 'float';
BOOL            :   'true' | 'false';