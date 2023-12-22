let score: number | string = 33;

// Note: try to keep it as strict as possible

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let kushagra: User | Admin = {name:"kush", id:1250};

kushagra = {userName:"kr",id:1250};




// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

export {}