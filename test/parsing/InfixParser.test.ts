import { expect } from "chai";
import { InfixParser } from "../../lib/parsing";

describe("InfixParser", () => {
    it("should parse simple operations correctly", () => {
        expect(InfixParser.parse("1 + 2")).to.equal("1 2 +");
    });
    it("should parse more complex operations correctly", () => {
        expect(InfixParser.parse("x ^ y / ( 5 * z ) + 10")).to.equal("x y ^ 5 z * / 10 +");
    });
});
