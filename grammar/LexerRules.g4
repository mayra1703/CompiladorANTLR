lexer grammar LexerRules;


TYPE                :       'int' | 'char' | 'float';
STRING              :       '"' .*? '"';

PLUS                :       '+';
MINUS               :       '-';
TIMES               :       '*';
DIV                 :       '/';

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
NUM                 :       [0-9]+;
ID                  :       [A-Za-z]+;
WRONGID             :       [a-zA-Z0-9_+\-*/]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;