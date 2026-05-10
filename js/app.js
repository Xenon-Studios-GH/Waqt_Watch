const products = [
    {
        id: 1,
        brand: "Rolex",
        name: "Submariner Date",
        price: 15500,
        gender: "men",
        material: "steel",
        image: "watch-1",
        description: "The Submariner Date in Oystersteel with a Cerachrom bezel insert in black ceramic and a black dial with a large luminescent hour markers. It is the benchmark divers' watch.",
        specs: {
            caseSize: "41mm",
            movement: "Automatic",
            waterResistance: "300m",
            material: "Oystersteel",
            crystal: "Sapphire"
        }
    },
    {
        id: 2,
        brand: "Patek Philippe",
        name: "Nautilus 5711",
        price: 85000,
        gender: "men",
        material: "steel",
        image: "watch-2",
        description: "The Nautilus is an iconic timepiece with its distinctive porthole design. This blue dial variant has become one of the most sought-after watches in the world.",
        specs: {
            caseSize: "40mm",
            movement: "Automatic",
            waterResistance: "120m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 3,
        brand: "Omega",
        name: "Speedmaster Professional",
        price: 7200,
        gender: "men",
        material: "steel",
        image: "watch-3",
        description: "The Moonwatch is the legendary chronograph that was worn on the Moon during the Apollo missions. A true icon of space exploration.",
        specs: {
            caseSize: "42mm",
            movement: "Manual",
            waterResistance: "50m",
            material: "Stainless Steel",
            crystal: "Hesalite"
        }
    },
    {
        id: 4,
        brand: "Audemars Piguet",
        name: "Royal Oak 15500ST",
        price: 45000,
        gender: "men",
        material: "steel",
        image: "watch-4",
        description: "The Royal Oak revolutionized the watch industry with its bold octagonal bezel and integrated bracelet. A masterpiece of bold design.",
        specs: {
            caseSize: "41mm",
            movement: "Automatic",
            waterResistance: "50m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 5,
        brand: "Vacheron Constantin",
        name: "Overseas Chronograph",
        price: 32000,
        gender: "men",
        material: "steel",
        image: "watch-5",
        description: "The Overseas represents Vacheron Constantin's boldest interpretation of the modern sporty-elegant watch. A perfect fusion of tradition and innovation.",
        specs: {
            caseSize: "42.5mm",
            movement: "Automatic",
            waterResistance: "150m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 6,
        brand: "A. Lange & Söhne",
        name: "Lange 1",
        price: 52000,
        gender: "men",
        material: "gold",
        image: "watch-6",
        description: "The Lange 1 is a symbol of German watchmaking excellence. Its asymmetric dial with outsize date display has become an unmistakable signature.",
        specs: {
            caseSize: "38.5mm",
            movement: "Manual",
            waterResistance: "30m",
            material: "18K Rose Gold",
            crystal: "Sapphire"
        }
    },
    {
        id: 7,
        brand: "Cartier",
        name: "Santos de Cartier",
        price: 8900,
        gender: "men",
        material: "steel",
        image: "watch-7",
        description: "The Santos was the first modern wristwatch, created for Alberto Santos-Dumont in 1904. A timeless icon that has never gone out of style.",
        specs: {
            caseSize: "39.8mm",
            movement: "Automatic",
            waterResistance: "100m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 8,
        brand: "Jaeger-LeCoultre",
        name: "Reverso Classic",
        price: 6800,
        gender: "women",
        material: "steel",
        image: "watch-8",
        description: "The Reverso was created in 1931 for polo players. Its Art Deco lines and reversible case make it one of the most recognizable watches ever made.",
        specs: {
            caseSize: "45.5mm x 27.4mm",
            movement: "Manual",
            waterResistance: "30m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 9,
        brand: "IWC",
        name: "Portugieser Chronograph",
        price: 9100,
        gender: "men",
        material: "steel",
        image: "watch-9",
        description: "The Portugieser combines classical elegance with precise chronograph functionality. Its clean dial and Arabic numerals evoke the spirit of maritime exploration.",
        specs: {
            caseSize: "41mm",
            movement: "Automatic",
            waterResistance: "30m",
            material: "Stainless Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 10,
        brand: "Breguet",
        name: "Classique 5177",
        price: 38500,
        gender: "men",
        material: "gold",
        image: "watch-10",
        description: "The Classique 5177 embodies Breguet's timeless elegance with its guilloche dial and flame-blued hands. A testament to traditional Haute Horlogerie.",
        specs: {
            caseSize: "38mm",
            movement: "Automatic",
            waterResistance: "30m",
            material: "18K White Gold",
            crystal: "Sapphire"
        }
    },
    {
        id: 11,
        brand: "Omega",
        name: "Constellation Small Seconds",
        price: 5400,
        gender: "women",
        material: "steel",
        image: "watch-11",
        description: "The Constellation collection represents celestial perfection. This small seconds model combines feminine elegance with exceptional craftsmanship.",
        specs: {
            caseSize: "27mm",
            movement: "Automatic",
            waterResistance: "100m",
            material: "Steel",
            crystal: "Sapphire"
        }
    },
    {
        id: 12,
        brand: "Patek Philippe",
        name: "Calatrava 5196",
        price: 42500,
        gender: "women",
        material: "gold",
        image: "watch-12",
        description: "The Calatrava represents the essence of round dress watch design. Its pure, understated elegance has defined the art of wearing a great watch.",
        specs: {
            caseSize: "37mm",
            movement: "Manual",
            waterResistance: "30m",
            material: "18K Rose Gold",
            crystal: "Sapphire"
        }
    }
];

const state = {
    cart: JSON.parse(localStorage.getItem('chronos_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('chronos_wishlist')) || [],
    filters: {
        search: '',
        brands: [],
        gender: 'all',
        materials: [],
        minPrice: 0,
        maxPrice: 100000
    },
    checkoutStep: 1
};

function saveState() {
    localStorage.setItem('waqt_cart', JSON.stringify(state.cart));
    localStorage.setItem('waqt_wishlist', JSON.stringify(state.wishlist));
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price);
}

function generateWatchSVG(imageId) {
    const watchImages = {
        'watch-1': 'WATCH FACES 1_upscayl_2x_upscayl-standard-4x.webp',
        'watch-2': 'WATCH FACES 2_upscayl_2x_upscayl-standard-4x.webp',
        'watch-3': 'WATCH FACES 3_upscayl_3x_upscayl-standard-4x.webp',
        'watch-4': 'WATCH FACES 4_upscayl_2x_upscayl-standard-4x.webp',
        'watch-5': 'WATCH FACES 6_upscayl_2x_upscayl-standard-4x.webp',
        'watch-6': 'WATCH FACES 7_upscayl_3x_upscayl-standard-4x.webp',
        'watch-7': 'WATCH FACES 8_upscayl_1x_upscayl-standard-4x.webp',
        'watch-8': 'WATCH FACES 9_upscayl_2x_upscayl-standard-4x.webp',
        'watch-9': 'WATCH FACES 10_upscayl_1x_upscayl-standard-4x.webp',
        'watch-10': 'WATCH FACES 11_upscayl_1x_upscayl-standard-4x.webp',
        'watch-11': 'WATCH FACES 1_upscayl_2x_upscayl-standard-4x.webp',
        'watch-12': 'WATCH FACES 2_upscayl_2x_upscayl-standard-4x.webp'
    };

    const imageFile = watchImages[imageId] || 'WATCH FACES 1_upscayl_2x_upscayl-standard-4x.webp';

    return `<img src="assets/watch/${imageFile}" alt="Watch" class="product-watch-img">`;
}

function renderProductCard(product) {
    const isInWishlist = state.wishlist.includes(product.id);
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${generateWatchSVG(product.image)}
                <div class="product-overlay">
                    <button class="quick-add-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
            </div>
        </div>
    `;
}

function renderCartItem(item) {
    return `
        <div class="cart-item" data-cart-id="${item.id}">
            <div class="cart-item-image">
                ${generateWatchSVG(item.image)}
            </div>
            <div class="cart-item-details">
                <p class="cart-item-brand">${item.brand}</p>
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn" data-action="decrease" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                        </button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        </div>
    `;
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const cartSubtotal = document.querySelector('.cart-subtotal-value');

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('show', totalItems > 0);

    if (cartItems) {
        if (state.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = state.cart.map(renderCartItem).join('');
            attachCartItemListeners();
        }
    }

    if (cartSubtotal) {
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = formatPrice(subtotal);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }

    saveState();
    updateCartUI();
    openCartDrawer();
}

function updateCartItem(productId, change) {
    const item = state.cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }

    saveState();
    updateCartUI();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveState();
    updateCartUI();
}

function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
    } else {
        state.wishlist.push(productId);
    }
    saveState();

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        if (btn.dataset.id === String(productId)) {
            btn.classList.toggle('active', state.wishlist.includes(productId));
        }
    });
}

function openCartDrawer() {
    document.querySelector('.cart-drawer').classList.add('open');
    document.querySelector('.cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    document.querySelector('.cart-drawer').classList.remove('open');
    document.querySelector('.cart-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openAuthModal() {
    document.querySelector('.auth-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.querySelector('.auth-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function switchAuthTab(tabName) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.toggle('active', form.dataset.form === tabName);
    });
}

function filterProducts() {
    let filtered = [...products];

    if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.brand.toLowerCase().includes(searchLower)
        );
    }

    if (state.filters.brands.length > 0) {
        filtered = filtered.filter(p => state.filters.brands.includes(p.brand));
    }

    if (state.filters.gender !== 'all') {
        filtered = filtered.filter(p => p.gender === state.filters.gender);
    }

    if (state.filters.materials.length > 0) {
        filtered = filtered.filter(p => state.filters.materials.includes(p.material));
    }

    filtered = filtered.filter(p =>
        p.price >= state.filters.minPrice &&
        p.price <= state.filters.maxPrice
    );

    return filtered;
}

function renderFilteredProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    const filtered = filterProducts();

    grid.innerHTML = filtered.map(renderProductCard).join('');

    const resultsCount = document.querySelector('.results-count');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} of ${products.length} timepieces`;
    }

    attachProductCardListeners();
}

function attachProductCardListeners() {
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
        });
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            window.location.href = `product-detail.html?id=${productId}`;
        });
        card.style.cursor = 'pointer';
    });
}

function attachCartItemListeners() {
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            const action = btn.dataset.action;
            updateCartItem(productId, action === 'increase' ? 1 : -1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            removeFromCart(productId);
        });
    });
}

function handleCheckoutStep(step) {
    state.checkoutStep = step;

    document.querySelectorAll('.checkout-step').forEach((stepEl, index) => {
        const stepNum = index + 1;
        stepEl.classList.remove('active', 'completed');
        if (stepNum < step) {
            stepEl.classList.add('completed');
        } else if (stepNum === step) {
            stepEl.classList.add('active');
        }
    });

    document.querySelectorAll('.checkout-form-section').forEach((formEl, index) => {
        formEl.style.display = index + 1 === step ? 'block' : 'none';
    });
}

function initializeFilters() {
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.checked = state.filters.brands.includes(checkbox.value);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                state.filters.brands.push(checkbox.value);
            } else {
                state.filters.brands = state.filters.brands.filter(b => b !== checkbox.value);
            }
            renderFilteredProducts();
        });
    });

    const genderBtns = document.querySelectorAll('.gender-btn');
    genderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            genderBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filters.gender = btn.dataset.gender;
            renderFilteredProducts();
        });
    });

    const materialCheckboxes = document.querySelectorAll('input[name="material"]');
    materialCheckboxes.forEach(checkbox => {
        checkbox.checked = state.filters.materials.includes(checkbox.value);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                state.filters.materials.push(checkbox.value);
            } else {
                state.filters.materials = state.filters.materials.filter(m => m !== checkbox.value);
            }
            renderFilteredProducts();
        });
    });

    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            state.filters = {
                search: '',
                brands: [],
                gender: 'all',
                materials: [],
                minPrice: 0,
                maxPrice: 100000
            };

            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            genderBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.gender === 'all');
            });

            const searchInput = document.querySelector('.search-input');
            if (searchInput) searchInput.value = '';

            renderFilteredProducts();
        });
    }
}

function getProductFromURL() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    return products.find(p => p.id === productId);
}

function renderProductDetail(product) {
    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    const isInWishlist = state.wishlist.includes(product.id);

    document.querySelector('.product-gallery').innerHTML = `
        <div class="product-main-image">
            ${generateWatchSVG(product.image)}
        </div>
        <div class="product-thumbnails">
            ${Array(4).fill().map(() => `
                <div class="product-thumbnail active">
                    ${generateWatchSVG(product.image)}
                </div>
            `).join('')}
        </div>
    `;

    document.querySelector('.product-detail-info').innerHTML = `
        <p class="detail-brand">${product.brand}</p>
        <h1 class="detail-name">${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>
        <p class="detail-description">${product.description}</p>
        
        <div class="detail-specs">
            <table class="specs-table">
                <tr><td>Case Size</td><td>${product.specs.caseSize}</td></tr>
                <tr><td>Movement</td><td>${product.specs.movement}</td></tr>
                <tr><td>Water Resistance</td><td>${product.specs.waterResistance}</td></tr>
                <tr><td>Material</td><td>${product.specs.material}</td></tr>
                <tr><td>Crystal</td><td>${product.specs.crystal}</td></tr>
            </table>
        </div>
        
        <div class="detail-actions">
            <div class="quantity-selector">
                <button id="decrease-qty">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </button>
                <span id="product-qty">1</span>
                <button id="increase-qty">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </button>
            </div>
            <button class="btn btn-primary add-to-cart-btn" id="add-to-cart-detail">Add to Cart</button>
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                <svg viewBox="0 0 24 24" fill="${isInWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            </button>
        </div>
    `;

    let quantity = 1;
    const qtyDisplay = document.getElementById('product-qty');

    document.getElementById('decrease-qty').addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            qtyDisplay.textContent = quantity;
        }
    });

    document.getElementById('increase-qty').addEventListener('click', () => {
        quantity++;
        qtyDisplay.textContent = quantity;
    });

    document.getElementById('add-to-cart-detail').addEventListener('click', () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
    });

    document.querySelector('.wishlist-btn').addEventListener('click', () => {
        toggleWishlist(product.id);
    });
}

function renderCheckoutSummary() {
    const orderItems = document.querySelector('.order-items');
    const orderSubtotal = document.querySelector('.order-subtotal span:last-child');
    const orderShipping = document.querySelector('.order-shipping span:last-child');
    const orderTotal = document.querySelector('.order-total-row.total span:last-child');

    if (orderItems) {
        orderItems.innerHTML = state.cart.map(item => `
            <div class="order-item">
                <div class="order-item-image">
                    ${generateWatchSVG(item.image)}
                </div>
                <div class="order-item-details">
                    <p class="order-item-name">${item.name}</p>
                    <p class="order-item-variant">Qty: ${item.quantity}</p>
                </div>
                <p class="order-item-price">${formatPrice(item.price * item.quantity)}</p>
            </div>
        `).join('');
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (orderSubtotal) orderSubtotal.textContent = formatPrice(subtotal);
    if (orderShipping) orderShipping.textContent = 'Free';
    if (orderTotal) orderTotal.textContent = formatPrice(subtotal);
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    updateCartUI();

    document.querySelector('.cart-icon').addEventListener('click', openCartDrawer);
    document.querySelector('.cart-close').addEventListener('click', closeCartDrawer);
    document.querySelector('.cart-overlay').addEventListener('click', closeCartDrawer);

    document.querySelector('.search-btn, .header-action').addEventListener('click', openAuthModal);
    document.querySelector('.auth-close').addEventListener('click', closeAuthModal);
    document.querySelector('.auth-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeAuthModal();
    });

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });

    document.querySelector('.checkout-btn')?.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    if (page === 'index.html' || page === '' || path.endsWith('/Watch/')) {
        const featuredProducts = products.slice(0, 8);
        document.querySelector('.products-grid').innerHTML = featuredProducts.map(renderProductCard).join('');
        attachProductCardListeners();
    }

    if (page === 'products.html') {
        renderFilteredProducts();
        initializeFilters();

        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                state.filters.search = e.target.value;
                renderFilteredProducts();
            });
        }
    }

    if (page === 'product-detail.html') {
        const product = getProductFromURL();
        renderProductDetail(product);

        const relatedGrid = document.getElementById('related-products');
        if (relatedGrid) {
            const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);
            relatedGrid.innerHTML = relatedProducts.map(renderProductCard).join('');
            attachProductCardListeners();
        }
    }

    if (page === 'checkout.html') {
        renderCheckoutSummary();
        handleCheckoutStep(1);

        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (state.checkoutStep < 3) {
                    handleCheckoutStep(state.checkoutStep + 1);
                }
            });
        });

        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (state.checkoutStep > 1) {
                    handleCheckoutStep(state.checkoutStep - 1);
                }
            });
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
        });
    }

    if (document.querySelector('.hero-carousel')) {
        initCarousel();
    }

    if (document.querySelector('.hero')) {
        initHeaderScroll();
    }

    if (document.getElementById('new-arrivals-grid') || document.getElementById('top-sales-grid')) {
        initProductSections();
    }

    if (document.querySelector('.about-hero')) {
        initAboutPage();
    }
});

function initHeaderScroll() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(header, {
        y: -100,
        duration: 0.3,
        ease: 'power2.out'
    });

    ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
            if (self.progress < 0.1) {
                gsap.to(header, {
                    y: -100,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(header, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        }
    });
}

function initProductSections() {
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const topSalesGrid = document.getElementById('top-sales-grid');

    if (newArrivalsGrid) {
        const newArrivals = products.slice(0, 8);
        newArrivalsGrid.innerHTML = newArrivals.map(renderProductCard).join('');
        attachProductCardListeners();
    }

    if (topSalesGrid) {
        const topSales = products.slice(0, 8);
        topSalesGrid.innerHTML = topSales.map(renderProductCard).join('');
        attachProductCardListeners();
    }
}

function initCarousel() {
    const hero = document.querySelector('.hero');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    let autoPlayInterval;
    const slideCount = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % slideCount);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + slideCount) % slideCount);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    hero.addEventListener('mouseenter', stopAutoPlay);
    hero.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
}

function initAboutPage() {
    if (typeof gsap !== 'undefined') {
        gsap.from('.about-hero-label', { opacity: 0, y: 20, duration: 1, delay: 0.2 });
        gsap.from('.title-word', { opacity: 0, y: 50, duration: 1, stagger: 0.3, delay: 0.4 });
        gsap.from('.about-hero-line', { opacity: 0, width: 0, duration: 1, delay: 0.8 });
        gsap.from('.about-hero-subtitle', { opacity: 0, y: 20, duration: 1, delay: 1 });

        gsap.utils.toArray('.value-card').forEach(function (card, i) {
            gsap.from(card, { opacity: 0, y: 30, duration: 0.8, delay: i * 0.1 });
        });

        gsap.utils.toArray('.stat-item').forEach(function (item) {
            gsap.from(item, { opacity: 0, y: 30, duration: 0.8 });
        });

        gsap.utils.toArray('.timeline-item').forEach(function (item, i) {
            gsap.from(item, { opacity: 0, y: 30, duration: 0.8, delay: i * 0.15 });
        });

        gsap.from('.about-cta .cta-content > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8 });
    }
}

if (document.querySelector('.about-hero')) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.about-hero-label', {
        scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1
    });

    gsap.from('.title-word', {
        scrollTrigger: {
            trigger: '.about-hero-title',
            start: 'top 80%'
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('.about-hero-line', {
        scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 70%'
        },
        opacity: 0,
        scaleX: 0,
        duration: 1
    });

    gsap.from('.about-hero-subtitle', {
        scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 60%'
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5
    });

    gsap.utils.toArray('.value-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });

    gsap.utils.toArray('.stat-number').forEach((stat) => {
        const target = parseInt(stat.dataset.target);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%'
            },
            innerHTML: 0,
            duration: 2,
            snap: { innerHTML: 1 },
            onUpdate: function () {
                this.targets()[0].innerHTML = Math.round(this.ratio * target);
            }
        });
    });

    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    gsap.from('.about-cta .cta-content > *', {
        scrollTrigger: {
            trigger: '.about-cta',
            start: 'top 70%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    const heroScrollBtn = document.querySelector('.about-hero-scroll');
    if (heroScrollBtn) {
        heroScrollBtn.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: '.about-intro',
                duration: 1,
                ease: 'power3.out'
            });
        });
    }
}
