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
    this.isLoggedIn = true;
    console.log(`${this.name} is now logged in`);
  }
  logout() {
    this.isLoggedIn = false;
    console.log(`${this.name} is now logged out`);
  }
  getStatus() {
    if (this.isLoggedIn) {
      console.log(`Status: Logged In`);
    } else {
      console.log(`Status: Logged Out`);
    }
  }
}

const user1 = new User("Amit", "amit@mail.com");
user1.login();
user1.getStatus();
user1.logout();
user1.getStatus();
