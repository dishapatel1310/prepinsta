let start = Number(prompt("Enter start: "));
let end = Number(prompt("Enter end: "));

for (let n = start; n <= end; n++) {
    let temp = n;
    let digits = n.toString().length;
    let sum = 0;

    while (temp > 0) {
        let r = temp % 10;
        sum += r ** digits;
        temp = Math.floor(temp / 10);
    }

    if (sum === n) {
        console.log(n);
    }
}