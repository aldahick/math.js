/*
using System;
using System.Collections.Generic;
using System.Text;

namespace MathStuff.Functions {
	public class VariableNode : Node {
		public char Name { get; }
		public VariableNode(string name) {
			this.Name = name[0];
		}
		public override float CalculateValue(bool forceRecalculation = false, Dictionary<char, float> variables = null) {
			if (variables == null) {
				throw new NotSupportedException();
			}
			return variables[this.Name];
		}

		public override Node Derive() {
			return new ConstantNode(1);
		}

		public override string ToString() {
			return this.Name.ToString();
		}
	}
}

*/

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
