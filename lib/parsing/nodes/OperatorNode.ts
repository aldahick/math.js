import Operator from "../Operator";
import Node from "../Node";

export default class OperatorNode extends Node {
    public readonly operator: Operator;
    public constructor(operator: Operator, init?: Partial<OperatorNode>) {
        super();
        if (init) Object.assign(this, init);
        this.operator =  operator;
    }

    public calculate(): number {
        if (this.value !== undefined) return this.value;
        if (this.left === undefined || this.right === undefined) throw new ReferenceError();
        this.value = this.operator.calculate(this.left.calculate(), this.right.calculate());
        return this.value;
    }

    public derive(): Node {
        if (this.left === undefined || this.right === undefined) throw new ReferenceError();
        return this.operator.derive(this.left, this.right);
    }

    public toString(): string {
        return this.operator.toString();
    }
}
