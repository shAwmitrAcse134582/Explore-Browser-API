function greeting(person, name) {
    greetingHandler(name);
    goodEvening(name);
}


// const numbers = [10, 20, 30, 40];
// const laptop = {
//     price: 45000,
//     brand: 'lenevo',
//     memory: '8gb'
// }
// greeting(numbers);
// greeting(laptop);

function greetingHandler(name) {
    console.log('Good Morning', name);
}
function goodEvening(name) {
    console.log('good Evening', name);
}

greeting(greetingHandler, 'Shawmitra');
greeting(goodEvening, 'Dwip');