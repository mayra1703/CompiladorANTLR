// Generated from c:/Users/mayme/OneDrive/Desktop/copia-compilador/CompiladorANTLR/grammar/Compilator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CompilatorParser}.
 */
public interface CompilatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(CompilatorParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(CompilatorParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(CompilatorParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(CompilatorParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(CompilatorParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(CompilatorParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#contenido}.
	 * @param ctx the parse tree
	 */
	void enterContenido(CompilatorParser.ContenidoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#contenido}.
	 * @param ctx the parse tree
	 */
	void exitContenido(CompilatorParser.ContenidoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(CompilatorParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(CompilatorParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(CompilatorParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(CompilatorParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code showExpr}
	 * labeled alternative in {@link CompilatorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterShowExpr(CompilatorParser.ShowExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code showExpr}
	 * labeled alternative in {@link CompilatorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitShowExpr(CompilatorParser.ShowExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#condicional}.
	 * @param ctx the parse tree
	 */
	void enterCondicional(CompilatorParser.CondicionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#condicional}.
	 * @param ctx the parse tree
	 */
	void exitCondicional(CompilatorParser.CondicionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(CompilatorParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(CompilatorParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void enterElseIfStatement(CompilatorParser.ElseIfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void exitElseIfStatement(CompilatorParser.ElseIfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#elseStatement}.
	 * @param ctx the parse tree
	 */
	void enterElseStatement(CompilatorParser.ElseStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#elseStatement}.
	 * @param ctx the parse tree
	 */
	void exitElseStatement(CompilatorParser.ElseStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#incremento}.
	 * @param ctx the parse tree
	 */
	void enterIncremento(CompilatorParser.IncrementoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#incremento}.
	 * @param ctx the parse tree
	 */
	void exitIncremento(CompilatorParser.IncrementoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompilatorParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(CompilatorParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompilatorParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(CompilatorParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParentesis(CompilatorParser.ParentesisContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParentesis(CompilatorParser.ParentesisContext ctx);
	/**
	 * Enter a parse tree produced by the {@code condition}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterCondition(CompilatorParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code condition}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitCondition(CompilatorParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valueAsChar}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterValueAsChar(CompilatorParser.ValueAsCharContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valueAsChar}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitValueAsChar(CompilatorParser.ValueAsCharContext ctx);
	/**
	 * Enter a parse tree produced by the {@code num}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNum(CompilatorParser.NumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code num}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNum(CompilatorParser.NumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arithmetic}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterArithmetic(CompilatorParser.ArithmeticContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arithmetic}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitArithmetic(CompilatorParser.ArithmeticContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterId(CompilatorParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link CompilatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitId(CompilatorParser.IdContext ctx);
}