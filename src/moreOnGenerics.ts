function getSearchProducts<T>(products: T[]): T {
  // do some db stuff
  const prodIndex = 3;
  return products[prodIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const prodIndex = 3;
  return products[prodIndex];
};

interface dbConfig {
  connection: string;
  password: string;
}

const justAnotherFn = <T, U extends dbConfig>(valOne: T, val2: U): object => {
  return {};
};

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
