const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Titulo do Post", "loren ipsum...");

post.addComment("Helio", "Bom");
post.addComment("Daiana", "Legal");

console.log(john);
console.log(post);