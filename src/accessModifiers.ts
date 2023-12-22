class User {
  public email: string;
  name: string; // this is also public
  private phNo: number = 549618454; // can only be accessed inside this class
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class Users {

  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  
}
const kushagra = new User("kushagra@kush.com", "kushagra");

export {};
