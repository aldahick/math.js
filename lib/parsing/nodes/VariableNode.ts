import ConstantNode from "./ConstantNode";
import Node from "../Node";

export default class VariableNode extends Node {
    public readonly name: string;
    public constructor(name: string) {
        super();
        this.name = name;
    }

    public calculate(): number {
        // TODO implement properly
        throw new Error();
    }

    public derive(): Node {
        return new ConstantNode(1);
    }

    public toString(): string {
        return this.name.toString();
    }
}
