/* You have a list of users. Return only the users who are active. */

const users = [
  { id: 1, name: "Amit", isActive: true },
  { id: 2, name: "Sara", isActive: false },
  { id: 3, name: "John", isActive: true },
];

function filterUser(users) {
  let newUsers = [];
  for (let user of users) {
    if (user.isActive === true) {
      newUsers.push(user);
    }
  }
  return newUsers;
}

console.log(filterUser(users));
