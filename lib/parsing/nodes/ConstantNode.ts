import Node from "../Node";

export default class ConstantNode extends Node {
    public constructor(value: number) {
        super();
        this.value = value;
    }

    public calculate(): number {
        return this.value;
    }

    public derive(): Node {
        return new ConstantNode(0);
    }

    public toString(): string {
        return this.value.toString();
    }
}
