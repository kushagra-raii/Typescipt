// Variables

let greetings: string = "Namastey Dunia";
greetings.toLowerCase();
console.log(greetings);
console.log(greetings);


let userId: number = 15442;

// bad practice Its already obvious the variable is number since we are assigning it.
// not same as js since ts is smnart enough to know its a no.

// userId.toUpperCase(); // err since userId is no.

let val = 123;
// val.toUpperCase(); // still err


let isLoggedIn: boolean = false;

// any 

let hero; 

function getHero(){
    return "thor";
}
hero = getHero();
// return boolean or anything. 

let hero1: string; 

function getHero1(){
    return "thor";
}
// only string can be returned
hero1 = getHero1();

// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.



export {}