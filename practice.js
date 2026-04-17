/*const users = [
  { firstName: "Amit", lastName: "Sharma" },
  { firstName: "Priya", lastName: "Das" },
];

function practice(users) {
  let arr = [];
  for (let user of users) {
    arr.push(user.firstName);
  }
  return arr;
}

console.log(practice(users));*/

const users = [
  { name: "Rahul", isActive: true },
  { name: "Sneha", isActive: false },
  { name: "Arjun", isActive: true },
];

function practice(users) {
  let arr = [];
  for (let user of users) {
    if (user.isActive) {
      arr.push(user);
    }
  }
  return arr;
}

console.log(practice(users));
