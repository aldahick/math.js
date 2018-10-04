import { expect } from "chai";
import { PostfixParser } from "../../lib/parsing";

describe("PostfixParser", () => {
    it("should parse simple operations correctly", () => {
        const root = PostfixParser.parse("1 2 +");
        expect(root.toInfix()).to.equal("1 + 2");
    });
    it("should parse more complex operations correctly", () => {
        const root = PostfixParser.parse("x y ^ 5 z * / 10 +");
        expect(root.toInfix()).to.equal("x ^ y / 5 * z + 10");
    });
});
