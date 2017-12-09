/*
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathStuff.Functions {
	public class ConstantNode : Node {
		public ConstantNode(float value) {
			this.value = value;
		}

		public override float CalculateValue(bool forceRecalculation = false, Dictionary<char, float> variables = null) {
			return this.value;
		}

		public override Node Derive() {
			return new ConstantNode(0);
		}

		public override string ToString() {
			return this.value.ToString();
		}
	}
}

*/

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
