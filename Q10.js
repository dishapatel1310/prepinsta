let start = Number(prompt("Enter start of range: "));
let end = Number(prompt("Enter end of range: "));

for (let n = start; n <= end; n++) {

    if (n <= 1) continue;

    let isPrime = true;

    for (let i = 2; i < n; i++) {   // no Math.sqrt used
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n);
    }
}