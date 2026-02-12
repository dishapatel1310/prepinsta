let n = Number(prompt("Enter number: "));
let square = n * n;
let temp = n;

let isAutomorphic = true;

while (temp > 0) {
    if (temp % 10 !== square % 10) {
        isAutomorphic = false;
        break;
    }
    temp = Math.floor(temp / 10);
    square = Math.floor(square / 10);
}

console.log(isAutomorphic ? "Automorphic number" : "Not an Automorphic number");