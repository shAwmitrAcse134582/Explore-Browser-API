const getInput = name => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;

}


const addName = () => {
    const fName = getInput('fName');
    const lName = getInput('lname');
    displayvalue(fName, lName);
    saveItemToLocalStorage(fName, lName);
}

const getNameFromLocalStorage = () => {
    let savedName = localStorage.getItem('name')
    let name = {};
    if (savedName) {
        name = JSON.parse(savedName);
    }
    return name;
}

const saveItemToLocalStorage = (fname, lname) => {
    const name = getNameFromLocalStorage();
    //*add product to the object as property
    name[fname] = lname;
    const nameStringified = JSON.stringify(name);
    //*saved to local storage
    localStorage.setItem('name', nameStringified);

}

const displayvalue = (fname, lname) => {
    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = `${fname} : ${lname}`;
    listItem.appendChild(li);

}

const displayStoredName = () => {
    const name = getNameFromLocalStorage();
    for (const fname in name) {
        const lname = name[fname];
        console.log(fname, lname);
    }
}

displayStoredName();



