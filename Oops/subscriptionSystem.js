/* Create a subscription system with:

Free plan
Premium plan

Premium users get access to extra features.*/

class User {
  constructor(name) {
    this.name = name;
  }
  accessFeature(plan) {
    console.log(`Access granted to ${plan} for ${this.name}`);
  }
}

class PremiumUser extends User {
  constructor(name) {
    super(name);
  }
  accessFeature(plan) {
    console.log(`Access granted to ${plan} for ${this.name}`);
  }
}

const user = new PremiumUser("Riya");
user.accessFeature("HD Streaming");
