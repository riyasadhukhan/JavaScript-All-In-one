/* Remove duplicate users based on email. */

const users = [
  { id: 1, email: "a@test.com" },
  { id: 2, email: "b@test.com" },
  { id: 3, email: "a@test.com" },
];

function removeDuplicate(users) {
  let seen = new Set();
  let newArr = [];
  for (let i in users) {
    if (!seen.has(users[i].email)) {
      seen.add(users[i].email);
      newArr.push(users[i]);
      console.log(users[i].email);
    }
  }
  return newArr;
}

console.log(removeDuplicate(users));
