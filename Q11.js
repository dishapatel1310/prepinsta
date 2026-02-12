let  n = 1234;
let sum = 0;
while(n>0){
    r=n%10;
    n=Math.floor(n/10);
    sum+=r;
}
console.log("sum of digit Number : ",sum);