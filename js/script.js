// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Handle adding products in the admin panel
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Logic to display the new product
    const productContainer = document.getElementById('existingProducts');
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <p>Price: $${productPrice}</p>
        <img src="${productImage}" alt="${productName}">
    `;
    productContainer.appendChild(productDiv);
    this.reset(); // Reset the form after submission
});

// Function to filter products (placeholder function for products page)
function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const text = product.innerText.toLowerCase();
        product.style.display = text.includes(input) ? '' : 'none';
    });
}