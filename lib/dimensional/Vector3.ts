export class Vector3<Value = number> {
    static readonly zero = new Vector3(0, 0, 0);
    constructor(
        readonly x: Value,
        readonly y: Value,
        readonly z: Value
    ) { }

    angle = this.numeric(function(other: Vector3): number {
        return Math.acos(
            this.dot(other) /
            (this.magnitude() * other.magnitude())
        );
    });

    cross = this.numeric(function(other: Vector3): Vector3 {
        return new Vector3<number>(
            this.y * other.z - this.z * other.y,
            this.x * other.z - this.z * other.x,
            this.x * other.y - this.y * other.x
        );
    });

    dot = this.numeric(function(other: Vector3): number {
        return this.both(other, (a, b) => a * b).toArray().reduce((p, v) => p + v);
    });

    magnitude = this.numeric(function(): number {
        return Math.sqrt(this.toArray().map(v => v ** 2).reduce((p, v) => p + v));
    });

    project = this.numeric(function(other: Vector3): Vector3 {
        return this.scale(this.dot(other) / this.magnitude());
    });

    scale = this.numeric(function(scalar: number): Vector3 {
        return this.map(v => v * scalar);
    });

    unit = this.numeric(function(): Vector3 {
        return this.map(v => v / this.magnitude());
    });

    both<Return, OtherValue>(other: Vector3<OtherValue>, predicate: (a: Value, b: OtherValue) => Return): Vector3<Return> {
        return this.map((value, key) => predicate(value, other[key]));
    }

    map<Return>(predicate: (value: Value, key: "x" | "y" | "z") => Return): Vector3<Return> {
        return new Vector3(
            predicate(this.x, "x"),
            predicate(this.y, "y"),
            predicate(this.z, "z")
        );
    }

    equals(other: Vector3<Value>): boolean {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }

    toArray(): [Value, Value, Value] {
        return [this.x, this.y, this.z];
    }

    isNumeric(): this is Vector3 {
        return typeof(this.x) === "number";
    }

    numeric<Params extends any[], Return>(method: (this: Vector3, ...params: Params) => Return): (...params: Params) => Return {
        return (...params: Params): Return => {
            if (!this.isNumeric()) throw new Error("non-numeric vector can't do this");
            return method.apply(this, params);
        };
    }
}
