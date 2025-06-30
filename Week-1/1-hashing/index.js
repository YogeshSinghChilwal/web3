
//* Node.js code for generating SHA-256 
const crypto = require('crypto');

const input = "Yogesh";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

//? Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

//* A: You will have to brute force until you find a value that starts with 00000
function findInput(prefix){
    let input = 0;
    while(true){
        let inputStr = input.toString()
        let inputHash = crypto.createHash('sha256').update(inputStr).digest('hex')
        console.log("Not an answer:- " + inputHash)
        if(inputHash.startsWith(prefix)){
            return input
        }
        input++
    }
}

console.log(findInput('0000'))