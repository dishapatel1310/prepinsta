let n = Number(prompt("Enter number: "));
let original = n;
let reverse = 0;

while (n > 0) {
    let r = n % 10;
    reverse = reverse * 10 + r;
    n = Math.floor(n / 10);
}

if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome");
}