/* Simulate handling API user data using a class. Store users and provide methods to:

add users
get all users
find user by email*/

class User {
  constructor() {
    this.obj = [];
  }
  addUser(obj) {
    this.obj.push(obj);
  }

  getAllUsers() {
    return this.obj;
  }

  getUserByEmail(email) {
    const user = this.obj.find((item) => item.email === email);
    console.log(`User found: ${user.name}`);
  }
}

const api = new User();
api.addUser({ name: "Amit", email: "amit@mail.com" });
api.addUser({ name: "Riya", email: "riya@mail.com" });
api.getUserByEmail("riya@mail.com");
console.log(api.getAllUsers());
