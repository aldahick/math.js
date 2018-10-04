import { Vector3 } from "../../lib/dimensional";
import { expect } from "chai";

function expectEquals<Type>(a: Vector3<Type>, b: Vector3<Type>, expected = true): void {
    expect(a.equals(b)).to.equal(expected, `expected ${a} to equal ${b}`);
}

describe("Vector3", () => {
    describe("#both()", () => {
        it("should apply predicate and return result", () => {
            const result = new Vector3(1, 2, 3).both(new Vector3(1, 2, 3), (a, b) => a * b);
            expectEquals(result, new Vector3(1, 4, 9));
        });
    });
    describe("#equals()", () => {
        it("should return true for identical vectors", () => {
            expectEquals(new Vector3(1, 2, 3), new Vector3(1, 2, 3));
        });
        it("should return false for almost-identical vectors", () => {
            expectEquals(new Vector3(1, 2, 3), new Vector3(1, 2, 4), false);
        });
        it("should return false for different vectors", () => {
            expectEquals(new Vector3(1, 2, 3), new Vector3(4, 5, 6), false);
        });
    });
    describe("#isNumeric()", () => {
        it("should return true for numeric vectors", () => {
            expect(new Vector3(1, 2, 3).isNumeric()).to.equal(true);
        });
        it("should return false for non-numeric vectors", () => {
            expect(new Vector3("a", "b", "c").isNumeric()).to.equal(false);
        });
    });
    describe("#map()", () => {
        it("should apply predicate and return result", () => {
            expectEquals(new Vector3(1, 2, 3).map(v => v + 1), new Vector3(2, 3, 4));
        });
    });
    describe("#toArray()", () => {
        it("should return an array with the same values as the vector", () => {
            expect(new Vector3(1, 2, 3).toArray()).to.deep.equal([1, 2, 3]);
        });
    });
    describe("#toString()", () => {
        it("should produce a parenthetical representation", () => {
            expect(new Vector3(1, 2, 3).toString()).to.equal("(1, 2, 3)");
        });
    });

    describe("#angle()", () => {
        it("should return the correct result", () => {
            expect(new Vector3(1, 1, 0).angle(new Vector3(1, -1, 0))).to.equal(Math.PI / 2);
        });
    });
    describe("#cross()", () => {
        it("should return the correct result", () => {
            expectEquals(new Vector3(1, 1, 0).cross(new Vector3(1, -1, 0)), new Vector3(0, 0, -2));
        });
    });
    describe("#dot()", () => {
        it("should return the correct result", () => {
            expect(new Vector3(1, 2, 3).dot(new Vector3(4, 5, 6))).to.equal(32);
        });
    });
    describe("#magnitude()", () => {
        it("should return the correct result", () => {
            expect(new Vector3(0, 3, 4).magnitude()).to.equal(5);
        });
    });
    describe("#project()", () => {
        it("should return the correct result", () => {
            expectEquals(new Vector3(1, 1, 0).project(new Vector3(1, -1, 0)), new Vector3(0, 0, 0));
        });
    });
    describe("#scale()", () => {
        it("should return the correct result", () => {
            expectEquals(new Vector3(1, 2, 3).scale(2), new Vector3(2, 4, 6));
        });
    });
    describe("#unit()", () => {
        it("should return the correct result", () => {
            expectEquals(new Vector3(0, 3, 4).unit(), new Vector3(0, 0.6, 0.8));
        });
    });
});
