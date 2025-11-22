// Product Data with Gumroad Integration
// IMPORTANT: Replace the gumroadUrl values with your actual Gumroad product URLs
// Create these products in your Gumroad dashboard first!
const products = [
    {
        id: 1,
        name: "Acupressure Mat Pro",
        category: "Wellness Equipment",
        description: "Premium acupressure mat with thousands of stimulation points for muscle relief and relaxation.",
        price: 49.99,
        icon: "🧘",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com/l/msvfen"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "Wellness Devices",
        description: "Track your health metrics, workouts, and sleep patterns with this advanced fitness tracker.",
        price: 199.00,
        icon: "⌚",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com/l/yibals"
    },
    {
        id: 3,
        name: "Aromatherapy Diffuser",
        category: "Relaxation",
        description: "Create a calming atmosphere with this ultrasonic essential oil diffuser.",
        price: 39.99,
        icon: "🕯️",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR AROMATHERAPY DIFFUSER LINK
    },
    {
        id: 4,
        name: "Massage Gun",
        category: "Recovery Devices",
        description: "Professional-grade percussion massager for deep tissue recovery and muscle relief.",
        price: 149.99,
        icon: "💆",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR MASSAGE GUN LINK
    },
    {
        id: 5,
        name: "Meditation Cushion",
        category: "Mindfulness",
        description: "Comfortable meditation pillow designed to support proper posture during practice.",
        price: 34.99,
        icon: "🪷",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR MEDITATION CUSHION LINK
    },
    {
        id: 6,
        name: "Resistance Bands Set",
        category: "Fitness Equipment",
        description: "Complete set of resistance bands for strength training and physical therapy.",
        price: 29.99,
        icon: "💪",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR RESISTANCE BANDS LINK
    },
    {
        id: 7,
        name: "Smart Water Bottle",
        category: "Wellness Devices",
        description: "Stay hydrated with reminders and track your daily water intake automatically.",
        price: 44.99,
        icon: "💧",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR SMART WATER BOTTLE LINK
    },
    {
        id: 8,
        name: "Foam Roller",
        category: "Recovery Devices",
        description: "High-density foam roller for myofascial release and post-workout recovery.",
        price: 24.99,
        icon: "🎯",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR FOAM ROLLER LINK
    },
    {
        id: 9,
        name: "Air Purifier",
        category: "Wellness Devices",
        description: "HEPA filter air purifier to remove allergens and improve indoor air quality.",
        price: 129.99,
        icon: "🌬️",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR AIR PURIFIER LINK
    },
    {
        id: 10,
        name: "Acupressure Mat",
        category: "Relaxation",
        description: "Therapeutic mat with thousands of pressure points for natural pain relief and relaxation.",
        price: 54.99,
        icon: "🎭",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com/l/msvfen"
    },
    {
        id: 11,
        name: "Balance Board",
        category: "Fitness Equipment",
        description: "Improve stability, core strength, and coordination with this versatile balance trainer.",
        price: 69.99,
        icon: "⚖️",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR BALANCE BOARD LINK
    },
    {
        id: 12,
        name: "Light Therapy Lamp",
        category: "Wellness Devices",
        description: "Combat seasonal blues and boost energy with therapeutic full-spectrum light.",
        price: 89.99,
        icon: "💡",
        gumroadUrl: "https://anthonyfrmtexas.gumroad.com" // UPDATE WITH YOUR LIGHT THERAPY LAMP LINK
    }
];

// Shopping Cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
    loadCart();
});

// Display products
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card with Gumroad integration
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-icon">${product.icon}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <a href="${product.gumroadUrl}" target="_blank" class="gumroad-buy-btn">
            <button class="buy-now">Buy Now on Gumroad</button>
        </a>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    document.getElementById('product-grid').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    // Cart link
    document.querySelector('.cart-link').addEventListener('click', (e) => {
        e.preventDefault();
        openCartModal();
    });

    // Modal close button
    document.querySelector('.close').addEventListener('click', closeCartModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('cart-modal');
        if (e.target === modal) {
            closeCartModal();
        }
    });

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', checkout);

    // Contact form
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#cart') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCart();
    displayCartItems();
}

// Update cart count in navbar
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Display cart items in modal
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">Remove</button>
        `;
        
        // Add remove button listener
        cartItem.querySelector('.cart-item-remove').addEventListener('click', () => {
            removeFromCart(item.id);
        });
        
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = calculateTotal().toFixed(2);
}

// Open cart modal
function openCartModal() {
    displayCartItems();
    document.getElementById('cart-modal').style.display = 'block';
}

// Close cart modal
function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    const total = calculateTotal();
    const confirmCheckout = confirm(`Complete your order?\n\nTotal: $${total.toFixed(2)}\n\nThis is a demo store. In a real application, you would be redirected to a payment processor.`);
    
    if (confirmCheckout) {
        // Clear cart
        cart = [];
        updateCartCount();
        saveCart();
        displayCartItems();
        closeCartModal();
        showNotification('Thank you for your order! 🎉');
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('revitalize-cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('revitalize-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}
