// var url = require('url');
// var adr = "https://localhost:4000/editors/dashboard?uname=asdf&key=ah463hg"
// var q = url.parse(adr, true);

// console.log(q);

// console.log("Hello Node")
// setInterval(() => {
// console.log("Hello Bhavishya")
// },1000)

const fs = require('fs')
const read = fs.readFile('./input.txt',(err, data) => {
    console.log(data.toString())
})
console.log(read)

const output = "This is what I want to add to the file"
fs.writeFile('./input.txt', output, (err) => {
    console.log('Done')
})