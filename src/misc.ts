// readonly
type User = {
  readonly _id: string;
  name: string;
  isPaid: boolean;
  email: string;
  creditCardDetails?: number;
};

// wont be able to update myObj._id

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };



/*
Type narrowing: narrowing down on the type 
when taking parameters the type could be more than one make sure to handle all cases
refer docs for handling when data is not provided, in operator 
https://www.typescriptlang.org/docs/handbook/2/narrowing.html
*/



export {};
