import * as readline from "readline";
import InfixParser from "./lib/InfixParser";
import PostfixParser from "./lib/PostfixParser";

function main(): void {
    const stdin = readline.createInterface(process.stdin);
    stdin.on("line", line => {
        const postfix = InfixParser.parse(line);
        const root = PostfixParser.parse(postfix);
        console.log(root.calculate());
    });
}

if (!module.parent) main();
