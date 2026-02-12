let n = Number(prompt("Enter number: "));

let num = n;

// check from 2 upward
for (let i = 2; i <= num; i++) {
    while (n % i === 0) {
        console.log(i);
        n = Math.floor(n / i);
    }
}