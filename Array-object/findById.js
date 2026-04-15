/* Find and return a user with a specific ID. */

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Sara" },
];

const targetId = 2;

function findUser(users, targetId) {
  for (let user of users) {
    if (user.id === targetId) {
      return user;
    }
  }
}

console.log(findUser(users, targetId));
