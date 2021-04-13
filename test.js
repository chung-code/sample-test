// var faker = require('faker');

// console.log(typeof(faker.random.word()));

let words = ['h','e','l','l','o']
let fres = [5, 4, 12, 44, 8]

let data = []
for(var i = 0; i < words.length; i++) {
  var dic = {word: words[i], fre: fres[i]};
  (data.push(dic));
}

console.log(data)