/*
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathStuff.Functions.Operators {
	public class AddOperator : Operator {
		public override char Representation => '+';
		public override int Priority => 3;
		public override float Calculate(float a, float b) => a + b;

		public override Node Derive(Node a, Node b) {
			return new OperatorNode(Find('+')) {
				Left = a.Derive(),
				Right = b.Derive()
			};
		}
	}
}

*/

import Node from "../Node";
import Operator from "../Operator";
import OperatorNode from "../nodes/OperatorNode";

export default class AddOperator extends Operator {
    public get representation(): string { return "+"; }
    public get priority(): number { return 3; }
    public calculate(a: number, b: number) { return a + b; }

    public derive(a: Node, b: Node): Node {
        return new OperatorNode(Operator.operators["+"], {
            left: a.derive(),
            right: b.derive()
        });
    }
}
