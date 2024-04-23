import antlr4 from 'antlr4'

import CParser from '@/grammar2/CParser.js';
import CLexer from '@/grammar2/CLexer.js';
import CustomVisitor2 from '@/helper/CustomVisitor2.js';

let traduccion = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)

    const parser = new CParser(tokens)
    parser.buildParseTrees = true;

    const tree = parser.file();
    const visitor = new CustomVisitor2();
    return visitor.visitFile(tree);
};

export default traduccion;


