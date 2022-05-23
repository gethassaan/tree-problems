class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.right = b;
a.left = c;
b.right = d;
b.left = e;
c.left = f;

const depthFirstSoultion = (node) => {
    if (node === null) return [];
    const leftValues = depthFirstSoultion(node.left);
    const rightValues = depthFirstSoultion(node.right);
    return [node.value, ...leftValues, ...rightValues];
}

depthFirstSoultion(a);