grammar C;
import LexerRules;

file                :   start+;

start               :   VOID MAIN INITPAR FINALPAR INITKEY block FINALKEY;

block               :   (contenido NEWLINE?)*
                    ;

contenido           :   declaracion
                    |   asignacion
                    |   condicional
                    |   whileStatement
                    |   impresion
                    |   incremento
                    ;

declaracion         :   TYPE ID (IGUAL expr)? SEMI?
			        ;   

asignacion          :   ID '=' expr SEMI 
                    ;

impresion           :   PRINTF '(' expr (COMA expr)* ')' SEMI 
                    ;

condicional         :   ifStatement elseIfStatement* elseStatement?
                    ;

ifStatement         :   IF '(' expr ')' INITKEY contenido* FINALKEY
                    ;

elseIfStatement     :   ELSE ifStatement
                    ;

elseStatement       :   ELSE INITKEY contenido* FINALKEY NEWLINE
                    ;

whileStatement      :   WHILE '(' expr ')' INITKEY contenido* FINALKEY
                    ;

expr                :   '(' expr ')'                                        
                    |	expr operation=(MULT|DIV|PLUS|MINUS|MOD) expr	    
                    |   cond_value = (OC | OL | BOOL)                              
                    |   expr cond_value = (OC | OL | BOOL) expr        
                    |   STRING            
                    |   CHAR                                                
                    |   FLOAT                                               
                    |   INT                                                
                    |   ID                                                
                    ;

incremento          :   ID SPACES? PLUSPLUS SEMI 
                    |   ID SPACES? MINUSMINUS SEMI
                    ;

TYPE                :   'int' | 'char' | 'float'
                    ;
BOOL                :   'true' | 'false'
                    ;