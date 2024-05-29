lexer grammar LexerRules;

STRING              :       '"' .*? '"';

PLUSPLUS            :       PLUS PLUS;
MINUSMINUS          :       MINUS MINUS;

PLUS                :       '+';
MINUS               :       '-';
MULT                :       '*';
DIV                 :       '/';
MOD                 :       '%';
IGUAL               :       '=';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'true'|'false');

MATH_EQUALS		    :       ('+='|'-='|'*='|'/='|'%=');

VOID                :       'void';
MAIN                :       'main';
INITPAR             :       '(';
FINALPAR            :       ')';
IF                  :       'if';
ELSE                :       'else';
DO                  :       'do';
WHILE               :       'while';
PRINTF              :       'printf';
INITKEY             :       '{';
FINALKEY            :       '}';
SEMI                :       ';';
INT                 :       MINUS?[0-9]+ ;
CHAR                :       '"'[a-zA-Z ]?'"';
FLOAT 			    :       [0-9]+[.][0-9]+;
ID				    :       [a-zA-Z]([a-zA-Z0-9_]+)?;
INV_ID 			    :       [A-Za-z0-9+\-]+;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;

LINE_COMMENT        :       '//' ~[\r\n]* -> skip; 

COMA                :       ',';