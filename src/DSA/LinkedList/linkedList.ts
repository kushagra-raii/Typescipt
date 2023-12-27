class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class List<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  print(): void {
    let traverser = this.head;
    if (!traverser) {
      console.log("The list is Empty");
      return;
    }
    while (traverser !== null) {
      console.log(traverser.data);
      traverser = traverser.next;
    }
  }

  insertAtBegin(value: T): void {
    const newNode = new Node<T>(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(value: T): void {
    let traverser = this.head;
    const newNode = new Node<T>(value);
    if (!traverser) {
      this.head = newNode;
      return;
    }
    while (traverser.next !== null) {
      traverser = traverser.next;
    }
    traverser.next = newNode;
  }

  deleteAtBegin(): void {
    if (!this.head) {
      console.log("List is empty, nothing to delete");
      return;
    }

    this.head = this.head.next;
  }

  deleteAtEnd(): void {
    let traverser = this.head;
    if (!traverser) {
      console.log("List is empty, nothing to delete");
      return;
    }

    if (!traverser.next) {
      this.head = null;
      return;
    }

    while (traverser.next!.next !== null) {
      traverser = traverser.next!;
    }
    traverser.next = null;
  }
/*
  reverse(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let temp: null | Node<T> = this.head;
    let prev = this.head;
    let forward = this.head.next;
    while (this.head.next !== null && forward !== null) {
      this.head = forward;
      forward = forward.next;
      this.head.next = prev;
      prev = this.head;
    }
    temp.next = null;
  }
  */
 reverse(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let current = this.head;
    while (current !== null ) {
      let forward = current.next;
      current.next = prev;
      prev  = current;
      current = forward!;
    }
    this.head = prev;
  }
}

const newList = new List<string>();

newList.insertAtBegin("Kushagra");
newList.insertAtBegin("mahendra");
newList.insertAtBegin("kaushal");
newList.insertAtBegin("karan");
newList.insertAtBegin("johan");
newList.insertAtEnd("jatin");

newList.print();
newList.deleteAtBegin();
newList.deleteAtEnd();
console.log(``);

newList.print();
console.log(``);
newList.reverse();
newList.print();

export {};
