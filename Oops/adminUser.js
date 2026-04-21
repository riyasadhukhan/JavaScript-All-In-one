/* Create a base User class and extend it into AdminUser.
User → can login
Admin → can delete users*/

class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
}

class AdminUser extends User {
  constructor(name, email) {
    super(name);
    this.email = email;
  }
  deleteUser(name) {
    console.log(`User ${name} deleted`);
  }
}

const admin = new AdminUser("Neha", "admin@mail.com");
admin.login();
admin.deleteUser("Amit");
