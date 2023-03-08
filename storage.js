
//*It works on browser
//* localStorage.getItem('name')

document.getElementById('add').addEventListener('click', function () {
    const nameField = document.getElementById('name');
    const namevalue = nameField.value;
    // console.log(namevalue);
    localStorage.setItem('name', namevalue);
})

document.getElementById('add-age'), addEventListener('click', function () {
    const ageField = document.getElementById('age');
    const ageValue = ageField.value;
    // console.log(ageValue);
    localStorage.setItem('age', ageValue);

});


document.getElementById('remove').addEventListener('click', function () {
    localStorage.removeItem('name');
})

document.getElementById('remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})

document.getElementById('clear').addEventListener('click', function () {
    localStorage.clear();
})

