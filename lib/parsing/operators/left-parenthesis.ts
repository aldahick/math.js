import Node from "../Node";
import Operator from "../Operator";

export default class LeftParenthesisOperator extends Operator {
    public get representation(): string { return "("; }
    public get priority(): number { return 10; }
    public calculate() { return 0; }

    public derive(): Node {
        throw new Error();
    }
}
