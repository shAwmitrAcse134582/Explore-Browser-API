const checkNumber = n => {
    if (!isNaN(n)) {
        return true;
    }
    else {
        return false;
    }
}



const n = "5";
const value = checkNumber(n);
console.log(value);