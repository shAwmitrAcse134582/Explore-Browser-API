
//*name Section
document.getElementById('send-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-Field');
    const nameValue = nameField.value;
    // console.log(nameValue);
    localStorage.setItem('name', nameValue);
})

document.getElementById('delete-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-Field');
    const nameValue = nameField.value;
    // console.log(nameValue);
    localStorage.removeItem('name', nameValue);
})


//*Email Section
document.getElementById('send-email').addEventListener('click', function () {
    const emailField = document.getElementById('email-Field');
    const emailValue = emailField.value;
    // console.log(nameValue);
    localStorage.setItem('email', emailValue);
})

document.getElementById('delete-email').addEventListener('click', function () {
    const emailField = document.getElementById('email-Field');
    const emailValue = emailField.value;
    // console.log(nameValue);
    localStorage.removeItem('email', emailValue);
})

//*messege Section
document.getElementById('send-messege').addEventListener('click', function () {
    const messegeField = document.getElementById('messege-Field');
    const messegeValue = messegeField.value;
    // console.log(nameValue);
    localStorage.setItem('messege', messegeValue);
})

document.getElementById('delete-messege').addEventListener('click', function () {
    const messegeField = document.getElementById('messege-Field');
    const messegeValue = messegeField.value;
    // console.log(nameValue);
    localStorage.removeItem('messege', messegeValue);
})

document.getElementById('reset').addEventListener('click', function () {
    localStorage.clear();
})