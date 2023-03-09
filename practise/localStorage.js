document.getElementById('add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    // console.log(name);
    localStorage.setItem('name', name);
})


document.getElementById('add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const age = ageField.value;
    // console.log(age);
    localStorage.setItem('age', age);
})

document.getElementById('remove-name').addEventListener('click', function () {
    localStorage.removeItem('name');
})
document.getElementById('remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})
document.getElementById('clear').addEventListener('click', function () {
    localStorage.clear();
})

