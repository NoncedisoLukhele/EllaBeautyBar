// JavaScript for handling shopping cart
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, price) {
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    updateCartUI();
    updateCartCount(); // Update cart count in the navigation
    alert("Added to cart: " + itemName);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }
    updateCartUI();
    updateCartCount(); // Update cart count in the navigation
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Function to increase quantity of an item in the cart
function increaseQuantity(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    }
    updateCartUI();
    updateCartCount(); // Update cart count in the navigation
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Function to decrease quantity of an item in the cart
function decreaseQuantity(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
    }
    updateCartUI();
    updateCartCount(); // Update cart count in the navigation
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Function to update the cart UI
function updateCartUI() {
    const cartItemsContainer = document.querySelector('#cart .cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div>
                <span>${item.name} - R ${item.price} x ${item.quantity}</span>
                <button onclick="increaseQuantity('${item.name}')">+</button>
                <button onclick="decreaseQuantity('${item.name}')">-</button>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML += `
        <hr>
        <div>Total: R ${totalPrice.toFixed(2)}</div>
    `;

    const cartDisplay = document.querySelector('#cart');
    cartDisplay.classList.remove('hidden'); // Ensure cart is visible when updated
}

// Function to toggle cart visibility
function toggleCart() {
    const cartDisplay = document.querySelector('#cart');
    cartDisplay.classList.toggle('hidden'); // Toggle visibility of cart section
}

// Function to update cart count in the navigation
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count1');
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountElement.textContent = totalCount;
}

// Function to handle checkout
function checkout() {
    window.location.href = 'checkout.html'; // Redirect to checkout page
}

// Load cart from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount(); // Update cart count in the navigation
});

// Event listeners for Buy Now buttons
document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, price);
        });
    });
});

