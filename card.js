const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValue('product-name-field');
    const quantity = getInputValue('product-quantity-field');
    displayProducts(product, quantity);
    console.log(product, quantity);

    //*set to local Storage
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity)

}
const getshoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart')
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getshoppingCartFromLocalStorage();
    //*add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    //*saved to local storage
    localStorage.setItem('cart', cartStringified);

}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    productContainer.appendChild(li);
}


const displayStoredCarts = () => {
    const cart = getshoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
    }
}

displayStoredCarts();