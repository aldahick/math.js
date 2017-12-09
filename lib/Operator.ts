import * as fs from "fs";
import Node from "./Node";

export default abstract class Operator {
    public abstract get representation(): string;
    public abstract get priority(): number;
    public abstract calculate(a: number, b: number): number;
    public abstract derive(a: Node, b: Node): Node;

    public toString(): string {
        return this.representation;
    }

    public static operators: {[key: string]: Operator} = {};
    public static init(): void {
        if (Object.keys(this.operators).length > 0) return;
        fs.readdirSync(__dirname + "/operators").filter(f => f.endsWith(".js")).forEach(f => {
            const operator: Operator = new (require(__dirname + "/operators/" + f).default)();
            this.operators[operator.representation] = operator;
        });
    }
}
