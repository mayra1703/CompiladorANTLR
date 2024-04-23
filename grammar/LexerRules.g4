lexer grammar LexerRules;

STRING              :       '"' .*? '"';

PLUS                :       '+';
MINUS               :       '-';
MULT               :       '*';
DIV                 :       '/';
IGUAL               :       '=';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'true'|'false');

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
WRONGID             :       [a-zA-Z0-9_+\-*/]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;