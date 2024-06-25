// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setupModals();
});

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> $${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    } else {
        console.error('Product list element not found.');
    }
}

function setupModals() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLoginBtn = document.getElementById('close-login');
    const closeRegisterBtn = document.getElementById('close-register');

    if (loginBtn && loginModal && closeLoginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });

        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    if (registerBtn && registerModal && closeRegisterBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });

        closeRegisterBtn.addEventListener('click', () => {
            registerModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });
    }
}
