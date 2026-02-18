function multiply(...numbers){
    let sum =1;
    for(let i =0;i<numbers.length;i++){
        if(typeof numbers[i] === typeof "s"){
            continue;
        }
        else{
            sum*=(parseInt(numbers[i]))
        }
    }
    console.log(sum);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000