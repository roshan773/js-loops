let number = 3345;
let count = 0;

while(number > 0){
    number = Math.floor(number/10);
    count++
}

console.log(count)