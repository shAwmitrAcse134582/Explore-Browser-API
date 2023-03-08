const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValue('product-name-field');
    const quantity = getInputValue('product-quantity-field');
    displayProducts(product, quantity)
    console.log(product, quantity);

    //*set to local Storage
    localStorage.setItem(product, quantity);

}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li);
}