/* Flatten a nested comments structure into a single array. */

const comments = [
  {
    id: 1,
    text: "Hello",
    replies: [{ id: 2, text: "Hi", replies: [] }],
  },
];

function flatComment(comments) {
  let arr = [];
  for (let comment of comments) {
    arr.push({
      id: comment.id,
      text: comment.text,
    });
    if (comment.replies.length > 0) {
      arr = arr.concat(flatComment(comment.replies));
    }
  }
  return arr;
}

console.log(flatComment(comments));
