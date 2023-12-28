import { StackList } from "./stackList";
import { StackArray } from "./stack";

const stack = new StackList<number>();
stack.push(15);
stack.push(16);
stack.push(17);
stack.push(18);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());


const stack2 = new StackArray<number>();
stack2.push(15);
stack2.push(16);
stack2.push(17);
stack2.push(18);

console.log(stack2.pop());
console.log(stack2.peek());
console.log(stack2.pop());
