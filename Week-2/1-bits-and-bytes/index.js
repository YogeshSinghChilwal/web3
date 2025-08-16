//* Representing bytes in JS
let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes[1])

let uint8Arr = new Uint8Array([0, 255, 127, 128]); ///Each element in this array is an integer between 0 and 255
// uint8Arr[1] = 300;
// uint8Arr[1] = 30;
// uint8Arr[1] = 0;
console.log(uint8Arr[1])


//* Bytes to Ascii
function bytesToAscii(byteArray) {
  return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// Example usage:
const bytes1 = [72, 101, 108, 108, 111, 32, 33]; // Corresponds to "Hello"
const asciiString1 = bytesToAscii(bytes1);
console.log(asciiString1); // Output: "Hello"

//* Ascii to Bytes
function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Example usage:
const ascii1 = "Hello";
const byteArray2 = asciiToBytes(ascii1);
console.log(byteArray2); // Output: [72, 101, 108, 108, 111]

//*UInt8Array to ascii
function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes3 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes3);
console.log(asciiString); // Output: "Hello"


//* Ascii to UInt8Array
function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
