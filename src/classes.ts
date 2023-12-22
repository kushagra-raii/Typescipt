class User {
  private phNo: number = 0;
  protected courseCount: number = 0;
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  


  // getters and setters

  get phoneNo(): number {
    return this.phNo;
  }
  set phoneNo(num) {
    if (num > 9999999999) {
      throw new Error("no. cannot have more than 10 digits");
    }
    this.phNo = num;
  }
}

class SubUser extends User {
    changeCourseCount(){
        this.courseCount = 5;
    }
}

const kushagra = new User("kushagra@kush.com", "kushagra");
