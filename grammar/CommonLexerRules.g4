lexer grammar CommonLexerRules;


TYPE                :       'relaxint' | 'nightchar' | 'skyfloat';

PLUS                :       '+';
MINUS               :       '-';
MULT                :       '*';
DIV                 :       '/';
IGUAL               :       '=';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'peaceful'|'chaotic');

SERENITYCLASS       :       'SerenityClass';
COZYCONDITION       :       'CozyCondition';
TWILIGHTOPTION      :       'TwilightOption';
ELSE                :       'Else';
DREAMYELSE          :       'DreamElse';
ARROW               :       '->';
WHISPER             :       'WHISPER';
INITKEY             :       '{';
FINALKEY            :       '}';
GATITO              :       '#';
PUNTITO             :       '.';

STARSTRING          :       '"' .*? '"';
CHAR			    :       '"'[a-zA-Z ]'"';	
NUM 			    :       [0-9]+ ;
FLOAT 			    :       [0-9]+[.][0-9]+;
ID                  :       [A-Za-z]+;
WRONGID             :       [a-zA-Z0-9_+\-*/]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;