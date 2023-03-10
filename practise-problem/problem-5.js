const operation = (a, b, c) => {

    if (c == add) {
        return a - b;
    }
    else if (c == sub) {
        return a - b;
    }
    else if (c == mul) {
        return a * b;
    }
    else if (c == div) {
        return a / b;
    }
    else if (c == mod) {
        return a % b;
    }
    else {
        return "invalid opeartion";
    }
}


function add(a) {

}

function sub() {

}
function mul() {

}

function div() {

}
function mod() {

}


const res = operation(10, 5, add);
console.log(res);

