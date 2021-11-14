const isNarcissistic = (num) => {
    let sum = 0, temp = num;
    while(temp){
       sum += Math.pow(temp % 10, 5);
       temp = Math.floor(temp / 10);
    };
    return sum === num;
};

const validNumber = () => {
    for(let i=0; i<10000; i++) {
        if(isNarcissistic(i) === true){
            console.log(i);
        }
    }
};
validNumber();



