lexer grammar CommonLexerRules;

SWEET       :       'Sweet';
PUNTITO     :       '.';
ID          :       [A-Za-z]+;
WRONGID     :       [A-Za-z0-9_+\-*/]+;
NEWLINE     :       '\r'? '\n' ;
SPACES      :       [ \t\r\n]+ -> skip ;