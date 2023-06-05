const printDigits = num =>{
    while (num){
        let lastNum = num % 10
        console.log(lastNum)
        num = (num - lastNum) / 10
    }
}

printDigits(1)
console.log(``)
printDigits(314)
console.log(``)
printDigits(12)
console.log(``)
printDigits(45433267)
