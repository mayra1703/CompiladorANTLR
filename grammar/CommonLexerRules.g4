lexer grammar CommonLexerRules;


TYPE                :       'mint' | 'mintchar' | 'mintflot';
STRING              :       '"' .*? '"';

PLUS                :       '+';
MINUS               :       '-';
TIMES               :       '*';
DIV                 :       '/';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'true'|'false');
BOOL                :       ('true'|'false');

SWEET               :       'Sweet';
SWEETCONDITION      :       'SweetCondition';
ELSE                :       'Else';
ARROW               :       '->';
SHOW                :       'SHOW';
INITKEY             :       '{';
FINALKEY            :       '}';
GATITO              :       '#';
PUNTITO             :       '.';
NUM                 :       [0-9]+;
ID                  :       [A-Za-z]+;
WRONGID             :       [a-zA-Z0-9_+\-*/]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;