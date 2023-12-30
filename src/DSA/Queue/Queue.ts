class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class Queue<T> {
  front: Node<T> | null;
  rear: Node<T> | null;
  size: number;

  constructor() {
    this.front = this.rear = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.front === null;
  }

  enqueue(data: T): void {
    const newNode = new Node<T>(data);

    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedData = this.front!.data;
    this.front = this.front!.next;

    if (this.front === null) {
      this.rear = null;
    }

    this.size--;

    return removedData;
  }

  peek(): T | null {
    return this.front?.data || null;
  }

  getSize(): number {
    return this.size;
  }
}
