const showAlert = () => {

    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('this is too low number');
    }


}

const askSomething = () => {
    const decision = confirm('Are you ask something');
    console.log(decision);
    if (decision === true) {
        alert('ok!this is your answer');
    }
    else {
        console.log("I can't provide valid answer");
    }
}

const getInfo = () => {

    const name = prompt('tell us your name');
    console.log(name);
    if (!!name) {
        console.log('welcome here', name);
    }
}
