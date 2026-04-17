/* Convert an array into an object indexed by ID. */

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Sara" },
];

function normalizeApi(users) {
  let obj = {};
  for (let user of users) {
    if (!user.id) {
      obj[user.id] = {};
    }
    obj[user.id] = user;
  }
  return obj;
}

console.log(normalizeApi(users));
