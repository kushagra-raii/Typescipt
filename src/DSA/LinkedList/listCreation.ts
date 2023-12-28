import { List } from "./linkedList";

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