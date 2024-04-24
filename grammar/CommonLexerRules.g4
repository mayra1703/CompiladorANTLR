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
ELSE                :       'else';
DREAMYELSE          :       'DreamElse';
DREAMLOOP           :       'DreamLoop';
DO                  :       'do';
ARROW               :       '->';
WHISPER             :       'WHISPER';
INITKEY             :       '{';
FINALKEY            :       '}';
GATITO              :       '#';
PUNTITO             :       '.';

STARSTRING          :       '"' .*? '"';
NUM 			    :       [0-9]+ ;
ID                  :       [A-Za-z]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;