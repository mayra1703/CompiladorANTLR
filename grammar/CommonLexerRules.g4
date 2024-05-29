lexer grammar CommonLexerRules;


TYPE                :       'relaxint' | 'nightchar' | 'skyfloat';

PLUS                :       '+';
MINUS               :       '-';
MULT                :       '*';
DIV                 :       '/';
MOD                 :       '%';
IGUAL               :       '=';

OC                  :       ('<'|'>'|'<='|'>='|'!=');
OL                  :       ('||'|'&&'|'=='|'peaceful'|'chaotic');

MATH_EQUALS		    :       ('+='|'-='|'*='|'/='|'%=');

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
NUM 			    :       MINUS?[0-9]+ ;
CHAR                :       '"'[a-zA-Z ]?'"';
FLOAT 			    :       [0-9]+[.][0-9]+;
ID                  :       [A-Za-z0-9]+;
LINECOMMENT         :       '//' .*? '\r'? '\n'-> skip ;
COMMENT             :       '/*' .*? '*/'-> skip ;
NEWLINE             :       '\r'? '\n' ;
SPACES              :       [ \t\r\n]+ -> skip ;
COMA                :       ',';