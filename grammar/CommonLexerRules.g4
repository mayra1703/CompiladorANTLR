lexer grammar CommonLexerRules;


TYPE        :   'mint' | 'mintchar' | 'mintflot';

PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';

SWEET       :       'Sweet';
PUNTITO     :       '.';
NUM         :       [0-9]+;
ID          :       [A-Za-z]+;
WRONGID     :       [a-zA-Z0-9_+\-*/]+;
NEWLINE     :       '\r'? '\n' ;
SPACES      :       [ \t\r\n]+ -> skip ;