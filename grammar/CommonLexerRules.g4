lexer grammar CommonLexerRules;


TYPE                :       'relaxint' | 'nightchar' | 'skyfloat';
STARSTRING          :       '"' .*? '"';

PLUS                :       '+';
MINUS               :       '-';
TIMES               :       '*';
DIV                 :       '/';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'peaceful'|'chaotic');

SERENITYCLASS       :       'SerenityClass';
COZYCONDITION       :       'CozyCondition';
TWILIGHTOPTION      :       'TwilightOption';
DREAMYELSE          :       'DreamElse';
ARROW               :       '->';
WHISPER             :       'WHISPER';
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