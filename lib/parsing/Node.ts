export default abstract class Node {
    public left?: Node;
    public right?: Node;
    protected value!: number;
    public abstract calculate(): number;
    public abstract derive(): Node;

    public toInfix(): string {
        let infix = "";
        if (this.left !== undefined) infix += this.left.toInfix() + " ";
        infix += this.toString();
        if (this.right !== undefined) infix += " " + this.right.toInfix();
        return infix;
    }
}
