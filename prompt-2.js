const takeNumber = () => {
    const num = prompt('please Enter a Number add summation with 200');
    console.log(num);

    const numInt = parseInt(num);
    console.log(numInt);
    let sum = 200 + numInt;
    alert(sum);

}