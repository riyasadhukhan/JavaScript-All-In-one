/* Create a system to manage users in an application. 
Each user should have a name, email, and login status. 
You should be able to log users in and out and display their current status. */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }
  login() {
    if (this.isLoggedIn) {
      console.log(`${this.name} is already logged in`);
      return;
    }
    this.isLoggedIn = true;
    console.log(`${this.name} has logged in successfully`);
  }
  logout() {
    if (!this.isLoggedIn) {
      console.log(`${this.name} is already logged out`);
      return;
    }
    this.isLoggedIn = false;
    console.log(`${this.name} has logged out successfully`);
  }
  getStatus() {
    console.log(
      `${this.name} is currently ${this.isLoggedIn ? "logged in" : "logged out"}`,
    );
  }
}

const user1 = new User("Amit", "amit@mail.com");
user1.login();
user1.login();
user1.getStatus();
user1.logout();
user1.logout();
user1.getStatus();
