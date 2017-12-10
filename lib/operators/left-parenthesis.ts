import Node from "../Node";
import Operator from "../Operator";

export default class LeftParenthesisOperator extends Operator {
    public get representation(): string { return "("; }
    public get priority(): number { return 10; }
    public calculate(a: number, b: number) { return 0; }

    public derive(a: Node, b: Node): Node {
        throw new Error();
    }
}
