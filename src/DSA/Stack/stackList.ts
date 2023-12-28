import { List } from "../LinkedList/linkedList";

export class StackList<T> {
  private stack: List<T>;
  constructor() {
    this.stack = new List<T>();
  }

  push(value:T){
    this.stack.insertAtBegin(value);
  }

  pop():T|undefined{
    if(!this.stack.head){
        console.log("Stack is Empty");
        return undefined;
    }
    const value = this.stack.head.data;
    this.stack.deleteAtBegin();
    return value;
  }
  peek():T|undefined{
    if(!this.stack.head){
        console.log("Stack is Empty");
        return undefined;
    }
    return this.stack.head.data;
  }
}


