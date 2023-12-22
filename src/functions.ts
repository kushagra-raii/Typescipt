function addTwo(num: number) {
  return num + 2;
}

let arrow = (fName: string, email: string, isPaid: boolean = false) => {};

arrow("My", "abc");

// If we wont put number in addTwo
// 1. it will accept any type
// 2. no err on num.toUpperCase kind of bs

// Better way -> what if I returned string in addTwo -> no err
// solution below

let getHello = (s: string): string => {
  return "";
};

// what if I had to return a string for condn 1 but bool for codn 2
// solution union

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
// getUpper("hitesh")

signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

// const getHello = (s: string):string => {
//     return ""
// }

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
