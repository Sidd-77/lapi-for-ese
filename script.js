let cartCount = 0;
let cartItems = [];

function addToCart(productName, productPrice) {
    cartCount++;
    updateCartCount(cartCount);

    // Add item to cart array
    cartItems.push({ name: productName, price: productPrice });

    // You can perform additional logic here, such as updating the cart UI, storing items in local storage, etc.
}

function updateCartCount(count) {
    document.getElementById('cartCount').innerText = count;
}

function showCart() {
    // Display cart modal
    document.getElementById('cartModal').style.display = 'block';

    // Display cart items
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function closeCartModal() {
    // Close cart modal
    document.getElementById('cartModal').style.display = 'none';
}
