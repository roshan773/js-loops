// prime or not

let n = prompt("Enter value")

let count = 0;
let j;

for(j=1; j<=n; j++){
    if(n%j==0){
        count++;
    }
}

if(count<=2){
    document.write("Prime Number")
}
else{
    document.write("Composite number")
}