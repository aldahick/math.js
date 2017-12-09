import Node from "./Node";
import Operator from "./Operator";
import ConstantNode from "./nodes/ConstantNode";
import OperatorNode from "./nodes/OperatorNode";
import VariableNode from "./nodes/VariableNode";

export default class PostfixParser {
    public static parse(postfix: string): Node {
        const nodes: Node[] = [];
        const tokens: string[] = postfix.split(" ").filter(t => t.length !== 0);
        for (const token of tokens) {
            const operator = Operator.operators[token];
            if (operator === undefined) {
                nodes.push(this.parseToken(token));
                continue;
            }
            const node: Node = new OperatorNode(operator);
            node.right = nodes.pop();
            node.left = nodes.pop();
            nodes.push(node);
        }
        return nodes.pop();
    }

    private static parseToken(token: string): Node {
        const value = Number(token);
        return isNaN(value) ? new VariableNode(token) : new ConstantNode(value);
    }
}
