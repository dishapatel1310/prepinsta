let n = Number(prompt("Enter number: "));
let isPerfectSquare = false;

for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
        isPerfectSquare = true;
        break;
    }
}

console.log(isPerfectSquare ? "Perfect square" : "Not a perfect square");