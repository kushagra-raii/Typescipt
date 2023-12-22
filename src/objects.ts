let takeAndRetObj = ({name,isPaid}: {name: string, isPaid: boolean}):{} => {
    return {}
}



function takeAndRetObj1({ name, isPaid }: { name: string, isPaid: boolean }): {age: number, email: string} {
    return {age:19,email:"shd"};
}



// here the prob start
takeAndRetObj({name:"kush",isPaid: true});
// takeAndRetObj({name:"kush",isPaid: true},email:"sbnh"); // err
//but
let p1 = {
    name: "kush",
    isPaid: true,
    email: "sbnl"
}

takeAndRetObj(p1);
// wrong but no err

type User = {
    name: string;
    isPaid: boolean;
    email: string;
}

let p2: User = {
    name:"abc",
    isPaid:true,
    email:"dfkj"
}

// Note: If we returning from fn with User we cant simply return an object.
//       Instead we'll have return object of same type

export {};

