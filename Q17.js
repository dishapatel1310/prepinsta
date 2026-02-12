let n = Number(prompt("Enter n: "));

let a = 0;
let b = 1;

if (n === 1) {
    console.log(0);
} else if (n === 2) {
    console.log(1);
} else {
    for (let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    console.log(b);
}
