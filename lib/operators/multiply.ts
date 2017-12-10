import Node from "../Node";
import Operator from "../Operator";
import OperatorNode from "../nodes/OperatorNode";

export default class MultiplyOperator extends Operator {
    public get representation(): string { return "*"; }
    public get priority(): number { return 2; }
    public calculate(a: number, b: number) { return a * b; }

    public derive(a: Node, b: Node): Node {
        return new OperatorNode(Operator.operators["+"], {
            left: new OperatorNode(Operator.operators["*"], {
                left: a.derive(),
                right: b
            }),
            right: new OperatorNode(Operator.operators["*"], {
                left: a,
                right: b.derive()
            })
        });
    }
}
