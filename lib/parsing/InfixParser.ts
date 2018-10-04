import Operator from "./Operator";

export default class InfixParser {
    private infix: string;
    protected constructor(infix: string) {
        this.infix = infix;
    }

    protected parse(): string {
        Operator.init();
        const operators: Operator[] = [];
        let output = "";
        let token: string;
        while ((token = this.getNextToken()).length !== 0) {
            const operator = Operator.operators[token[0]];
            if (operator === undefined || operator.representation === "-" && token.length > 1) {
                // token is not an operator, or a negative number (not subtraction)
                output += this.parseToken(token);
                continue;
            }
            if (operator.representation === "(") operators.push(operator);
            else if (operator.representation === ")") {
                while (operators.length > 0 && operators[operators.length - 1].representation !== "(") {
                    output += operators.pop() + " ";
                }
                operators.pop();
            } else { // binary operator
                while (operators.length > 0 && operators[operators.length - 1].priority <= operator.priority) {
                    output += operators.pop() + " ";
                }
                operators.push(operator);
            }
        }
        while (operators.length > 0) output += operators.pop() + " ";
        return output.trimRight();
    }

    private getNextToken(): string {
        let token = "";
        for (let i = 0; i < this.infix.length; i++) {
            const char: string = this.infix[i];
            const isLast: boolean = i === this.infix.length - 1;
            if (isLast && char !== " ") token += char;
            if (char === " " || isLast) {
                this.infix = this.infix.substring(i + 1);
                return token;
            }
            token += char;
        }
        return "";
    }

    private parseToken(token: string): string {
        const value = Number(token);
        return (isNaN(value) ? token : value) + " ";
    }

    public static parse(infix: string): string {
        return new InfixParser(infix).parse();
    }
}
