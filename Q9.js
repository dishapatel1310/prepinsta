let n = Number(prompt("Enter Number : "));

if (n <= 1) {
    console.log("not prime number");
} else {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("prime number");
    } else {
        console.log("not prime number");
    }
}