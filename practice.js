let str = 'C:\fakepath\picture-16.jpg';
let arr = [];

for (let i=0;i<str.length;i++) {
  if (i >= 10) {
    arr.push(str[i]);
  }
}

let jointStr = arr.join('');

console.log(jointStr);