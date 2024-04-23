lexer grammar LexerRules;

STRING              :       '"' .*? '"';

PLUS                :       '+';
MINUS               :       '-';
MULT                :       '*';
DIV                 :       '/';
IGUAL               :       '=';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'==');

VOID                :       'void';
MAIN                :       'main';
INITPAR             :       '(';
FINALPAR            :       ')';
IF                  :       'if';
ELSEIF              :       'else if';
ELSE                :       'else';
PRINTF              :       'printf';
INITKEY             :       '{';
FINALKEY            :       '}';
SEMI                :       ';';
INT                 :       [0-9]+;
ID				    :       [a-zA-Z]([a-zA-Z0-9_]+)?;
INV_ID 			    :       [A-Za-z0-9+\-]+;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;