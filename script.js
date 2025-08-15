// ==========================================
// BASE DE DATOS LOCAL - EDUMARKET IA
// ==========================================

// Base de datos de productos
let products = [
    {
        id: 1,
        name: "Papas nativas multicolores",
        category: "agro",
        price: 8.50,
        unit: "kg",
        location: "Lampa Centro",
        seller: "María González",
        whatsapp: "51987654321",
        description: "Papas nativas de la región altiplánica, cultivadas sin químicos. Variedades: peruanita, imilla negra, compis. Excelente para todo tipo de preparaciones.",
        tags: ["orgánico", "local", "ancestral"],
        stock: 25,
        featured: true,
        sellerId: 1
    },
    {
        id: 2,
        name: "Tejidos de alpaca artesanales",
        category: "artesania",
        price: 45.00,
        unit: "unidad",
        location: "Vila Vila",
        seller: "Carlos Mamani",
        whatsapp: "51912345678",
        description: "Hermosos tejidos artesanales en lana de alpaca 100% natural. Técnicas tradicionales transmitidas por generaciones. Colores naturales y diseños únicos.",
        tags: ["artesanal", "alpaca", "cultural"],
        stock: 8,
        featured: false,
        sellerId: 2
    },
    {
        id: 3,
        name: "Quinua real orgánica",
        category: "agro",
        price: 12.00,
        unit: "kg",
        location: "Santa Lucía",
        seller: "Rosa Ticona",
        whatsapp: "51999888777",
        description: "Quinua real del altiplano boliviano-peruano, cultivada tradicionalmente a 3800 msnm. Rica en proteínas y aminoácidos esenciales. Sin pesticidas.",
        tags: ["orgánico", "superfood", "ancestral"],
        stock: 40,
        featured: true,
        sellerId: 3
    },
    {
        id: 4,
        name: "Queso fresco de cabra",
        category: "gastronomia",
        price: 18.00,
        unit: "kg",
        location: "Cabanilla",
        seller: "Pedro Ccama",
        whatsapp: "51888777666",
        description: "Queso artesanal elaborado con leche fresca de cabras criadas en pastoreo libre. Sabor suave y textura cremosa. Proceso tradicional sin conservantes.",
        tags: ["artesanal", "fresco", "nutritivo"],
        stock: 12,
        featured: false,
        sellerId: 4
    },
    {
        id: 5,
        name: "Servicios de turismo rural",
        category: "servicios",
        price: 80.00,
        unit: "servicio",
        location: "Isla Amantaní",
        seller: "Familia Huanca",
        whatsapp: "51777666555",
        description: "Experiencia de turismo vivencial en el Lago Titicaca. Incluye hospedaje familiar, comidas típicas y actividades culturales. Conexión con la naturaleza.",
        tags: ["turismo", "cultural", "vivencial"],
        stock: 5,
        featured: true,
        sellerId: 5
    },
    {
        id: 6,
        name: "Miel de abeja pura",
        category: "gastronomia",
        price: 25.00,
        unit: "kg",
        location: "Nicasio",
        seller: "José Condori",
        whatsapp: "51666555444",
        description: "Miel pura extraída de colmenas ubicadas en zona libre de contaminación. Ideal para endulzar naturalmente. Propiedades medicinales y nutritivas.",
        tags: ["pura", "natural", "medicinal"],
        stock: 18,
        featured: false,
        sellerId: 6
    }
];

// Base de datos de vendedores
let sellers = [
    {
        id: 1,
        name: "María González",
        type: "Agricultor",
        whatsapp: "51987654321",
        email: "maria.gonzalez@gmail.com",
        district: "Lampa Centro",
        community: "Lampa",
        description: "Productora de papas nativas con 15 años de experiencia",
        registrationDate: "2024-01-15",
        status: "activo",
        verified: true,
        averageRating: 4.8,
        productCount: 3
    },
    {
        id: 2,
        name: "Carlos Mamani",
        type: "Artesano",
        whatsapp: "51912345678",
        email: "carlos.mamani@gmail.com",
        district: "Vila Vila",
        community: "Vila Vila",
        description: "Artesano especializado en tejidos de alpaca",
        registrationDate: "2024-01-20",
        status: "pendiente",
        verified: false,
        averageRating: 0,
        productCount: 1
    },
    {
        id: 3,
        name: "Rosa Ticona",
        type: "Agricultor",
        whatsapp: "51999888777",
        email: "rosa.ticona@gmail.com",
        district: "Santa Lucía",
        community: "Santa Lucía",
        description: "Cultivadora orgánica de quinua real",
        registrationDate: "2024-01-18",
        status: "activo",
        verified: true,
        averageRating: 4.9,
        productCount: 2
    },
    {
        id: 4,
        name: "Pedro Ccama",
        type: "Ganadero",
        whatsapp: "51888777666",
        email: "pedro.ccama@gmail.com",
        district: "Cabanilla",
        community: "Cabanilla",
        description: "Productor de lácteos artesanales",
        registrationDate: "2024-01-22",
        status: "activo",
        verified: true,
        averageRating: 4.7,
        productCount: 1
    },
    {
        id: 5,
        name: "Familia Huanca",
        type: "Comerciante",
        whatsapp: "51777666555",
        email: "familia.huanca@gmail.com",
        district: "Isla Amantaní",
        community: "Amantaní",
        description: "Operadores de turismo rural comunitario",
        registrationDate: "2024-01-25",
        status: "activo",
        verified: true,
        averageRating: 4.6,
        productCount: 1
    },
    {
        id: 6,
        name: "José Condori",
        type: "Apicultor",
        whatsapp: "51666555444",
        email: "jose.condori@gmail.com",
        district: "Nicasio",
        community: "Nicasio",
        description: "Apicultor con colmenas en zona natural",
        registrationDate: "2024-01-28",
        status: "activo",
        verified: true,
        averageRating: 4.5,
        productCount: 1
    }
];

// Base de datos de pedidos
let orders = [
    {
        id: 1,
        productId: 1,
        productName: "Papas nativas multicolores",
        buyerName: "Ana Quispe",
        buyerPhone: "51999888777",
        quantity: 3,
        unitPrice: 8.50,
        subtotal: 25.50,
        method: "WhatsApp",
        status: "interesado",
        date: "2024-01-22",
        comments: "Necesito para el restaurante",
        whatsappLink: "https://wa.me/51987654321"
    },
    {
        id: 2,
        productId: 2,
        productName: "Tejidos de alpaca artesanales",
        buyerName: "Luis Morales",
        buyerPhone: "51888777666",
        quantity: 1,
        unitPrice: 45.00,
        subtotal: 45.00,
        method: "Formulario",
        status: "simulado",
        date: "2024-01-23",
        comments: "Para regalo de cumpleaños",
        whatsappLink: "https://wa.me/51912345678"
    },
    {
        id: 3,
        productId: 3,
        productName: "Quinua real orgánica",
        buyerName: "Carmen Silva",
        buyerPhone: "51777666555",
        quantity: 5,
        unitPrice: 12.00,
        subtotal: 60.00,
        method: "WhatsApp",
        status: "interesado",
        date: "2024-01-24",
        comments: "Para venta en mi tienda",
        whatsappLink: "https://wa.me/51999888777"
    }
];

// Base de datos de publicidad
let ads = [
    {
        id: 1,
        productId: 1,
        productName: "Papas nativas multicolores",
        format: "cuadrado",
        title: "¡Papas nativas frescas!",
        copy: "Directo de la chacra a tu mesa",
        callToAction: "Compra ahora",
        colors: "Verde, amarillo",
        channel: "Instagram",
        status: "Entregado",
        requestDate: "2024-01-20",
        deliveryDate: "2024-01-21",
        fileUrl: "https://ejemplo.com/papa-post.jpg"
    },
    {
        id: 2,
        productId: 2,
        productName: "Tejidos de alpaca artesanales",
        format: "a4",
        title: "Tejidos Artesanales",
        copy: "100% alpaca, técnicas ancestrales",
        callToAction: "Contacta WhatsApp",
        colors: "Marrón, beige",
        channel: "Impreso",
        status: "En proceso",
        requestDate: "2024-01-23",
        deliveryDate: null,
        fileUrl: null
    }
];

// Chat history para IA
let chatHistory = [];

// ==========================================
// FUNCIONES DE NAVEGACIÓN
// ==========================================

function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Cargar contenido específico según la página
        if (pageId === 'catalog') {
            loadProducts();
        } else if (pageId === 'admin') {
            loadAdminData();
        }
    }
}

// ==========================================
// FUNCIONES DEL CATÁLOGO
// ==========================================

function loadProducts(filteredProducts = null) {
    const grid = document.getElementById('productsGrid');
    const productsToShow = filteredProducts || products;
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No se encontraron productos que coincidan con los filtros.</div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const emoji = getProductEmoji(product.category);
    const tags = product.tags.map(tag => 
        `<span style="background: #e9ecef; padding: 0.2rem 0.5rem; border-radius: 12px; font-size: 0.8rem; margin-right: 0.3rem;">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="product-image">${emoji}</div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">S/ ${product.price.toFixed(2)}/${product.unit}</div>
            <div class="product-location">📍 ${product.location}</div>
            <div style="margin-bottom: 1rem;">${tags}</div>
            <div style="margin-bottom: 0.5rem; color: #666; font-size: 0.9rem;">
                Stock: ${product.stock} ${product.unit}${product.stock > 1 ? 's' : ''}
            </div>
            <button class="btn btn-primary" onclick="showProductDetail(${product.id})">Ver producto</button>
        </div>
    `;
    
    return card;
}

function getProductEmoji(category) {
    const emojis = {
        'agro': '🥔',
        'artesania': '🧵',
        'gastronomia': '🧀',
        'servicios': '🏔️'
    };
    return emojis[category] || '📦';
}

// ==========================================
// FUNCIONES DE DETALLE DE PRODUCTO
// ==========================================

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const container = document.getElementById('productDetailContent');
    if (!container) return;
    
    const emoji = getProductEmoji(product.category);
    const tags = product.tags.map(tag => 
        `<span style="background: #e9ecef; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.9rem; margin-right: 0.5rem;">${tag}</span>`
    ).join('');
    
    container.innerHTML = `
        <button onclick="showPage('catalog')" style="margin-bottom: 1rem; background: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">← Volver al catálogo</button>
        
        <div class="product-gallery">
            <div class="gallery-image">${emoji}</div>
            <div class="gallery-image">${emoji}</div>
            <div class="gallery-image">${emoji}</div>
        </div>
        
        <h2>${product.name}</h2>
        <div class="product-price" style="font-size: 2rem; margin: 1rem 0;">S/ ${product.price.toFixed(2)}/${product.unit}</div>
        
        <div style="margin-bottom: 1.5rem;">${tags}</div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h4>Descripción</h4>
                <p style="margin-bottom: 1rem;">${product.description}</p>
            </div>
            <div>
                <h4>Información del vendedor</h4>
                <p><strong>Vendedor:</strong> ${product.seller}</p>
                <p><strong>Ubicación:</strong> ${product.location}</p>
                <p><strong>Stock disponible:</strong> ${product.stock} ${product.unit}${product.stock > 1 ? 's' : ''}</p>
                <p><strong>WhatsApp:</strong> ${product.whatsapp}</p>
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="orderViaWhatsApp(${product.id})">
                📱 Pedir por WhatsApp
            </button>
            <button class="btn btn-secondary" onclick="showSimulatedOrder(${product.id})">
                📝 Pedido simulado
            </button>
        </div>
        
        <div id="simulatedOrderForm" style="display: none; background: #f8f9fa; padding: 2rem; border-radius: 10px; margin-top: 2rem;">
            <h4>Realizar pedido simulado</h4>
            <form onsubmit="submitSimulatedOrder(event, ${product.id})">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label>Nombre completo *</label>
                        <input type="text" id="orderName" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; margin-top: 0.3rem;">
                    </div>
                    <div>
                        <label>Teléfono *</label>
                        <input type="tel" id="orderPhone" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; margin-top: 0.3rem;">
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>Cantidad (${product.unit}) *</label>
                    <input type="number" id="orderQuantity" min="1" max="${product.stock}" required style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; margin-top: 0.3rem;" onchange="updateOrderTotal(${product.price})">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>Total estimado</label>
                    <div id="orderTotal" style="font-size: 1.2rem; font-weight: bold; color: #4CAF50;">S/ 0.00</div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>Comentarios adicionales</label>
                    <textarea id="orderComments" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; margin-top: 0.3rem; height: 80px;" placeholder="Ej: Necesito entrega urgente, preferencia de horario, etc."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar pedido</button>
                <button type="button" onclick="hideSimulatedOrder()" class="btn btn-secondary" style="margin-left: 0.5rem;">Cancelar</button>
            </form>
        </div>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-top: 2rem;">
            <h4>Reseñas de clientes</h4>
            <div style="margin-top: 1rem;">
                <div style="margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong>Ana M.</strong>
                        <div>⭐⭐⭐⭐⭐</div>
                    </div>
                    <p style="margin: 0; color: #666;">Excelente calidad, muy fresco y el vendedor muy atento. Recomiendo 100%.</p>
                </div>
                <div style="padding: 1rem; background: white; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong>Carlos R.</strong>
                        <div>⭐⭐⭐⭐⭐</div>
                    </div>
                    <p style="margin: 0; color: #666;">Producto tal como se describe, entrega puntual. Muy satisfecho con la compra.</p>
                </div>
            </div>
        </div>
    `;
    
    showPage('product-detail');
}

function updateOrderTotal(price) {
    const quantity = document.getElementById('orderQuantity').value;
    const total = quantity ? (quantity * price).toFixed(2) : '0.00';
    const totalElement = document.getElementById('orderTotal');
    if (totalElement) {
        totalElement.textContent = `S/ ${total}`;
    }
}

function orderViaWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Hola, vengo de EduMarket IA y me interesa el producto '${product.name}' (S/ ${product.price}/${product.unit}). ¿Está disponible?`;
    const whatsappUrl = `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Registrar interacción en los pedidos
    const newOrder = {
        id: orders.length + 1,
        productId: product.id,
        productName: product.name,
        buyerName: 'Cliente WhatsApp',
        buyerPhone: 'No registrado',
        quantity: 1,
        unitPrice: product.price,
        subtotal: product.price,
        method: 'WhatsApp',
        status: 'consultado',
        date: new Date().toISOString().split('T')[0],
        comments: 'Contacto directo por WhatsApp',
        whatsappLink: whatsappUrl
    };
    
    orders.push(newOrder);
    
    window.open(whatsappUrl, '_blank');
}

function showSimulatedOrder(productId) {
    const form = document.getElementById('simulatedOrderForm');
    if (form) {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideSimulatedOrder() {
    const form = document.getElementById('simulatedOrderForm');
    if (form) {
        form.style.display = 'none';
    }
}

function submitSimulatedOrder(event, productId) {
    event.preventDefault();
    
    const product = products.find(p => p.id === productId);
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const quantity = parseInt(document.getElementById('orderQuantity').value);
    const comments = document.getElementById('orderComments').value;
    
    if (!product || !name || !phone || !quantity) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    const order = {
        id: orders.length + 1,
        productId: productId,
        productName: product.name,
        buyerName: name,
        buyerPhone: phone,
        quantity: quantity,
        unitPrice: product.price,
        subtotal: quantity * product.price,
        method: 'Formulario',
        status: 'simulado',
        date: new Date().toISOString().split('T')[0],
        comments: comments,
        whatsappLink: `https://wa.me/${product.whatsapp}`
    };
    
    orders.push(order);
    
    // Actualizar stock (simulado)
    product.stock = Math.max(0, product.stock - quantity);
    
    alert('¡Pedido registrado exitosamente! El vendedor se pondrá en contacto contigo pronto.');
    hideSimulatedOrder();
    
    // Limpiar formulario
    document.getElementById('orderName').value = '';
    document.getElementById('orderPhone').value = '';
    document.getElementById('orderQuantity').value = '';
    document.getElementById('orderComments').value = '';
}

// ==========================================
// FUNCIONES DE FILTROS
// ==========================================

function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value;
    const priceRange = document.getElementById('priceFilter')?.value;
    const availability = document.getElementById('availabilityFilter')?.value;
    
    let filtered = products;
    
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }
    
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p.replace('+', '')));
        filtered = filtered.filter(p => {
            if (max === undefined) return p.price >= min;
            return p.price >= min && p.price <= max;
        });
    }
    
    if (availability === 'today') {
        filtered = filtered.filter(p => p.stock > 0);
    } else if (availability === 'week') {
        filtered = filtered.filter(p => p.stock > 0);
    }
    
    loadProducts(filtered);
}

// ==========================================
// FUNCIONES DEL FORMULARIO DE VENDEDOR
// ==========================================

function initializeSellerForm() {
    const form = document.getElementById('sellerForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('sellerName').value,
            whatsapp: document.getElementById('sellerWhatsApp').value,
            email: document.getElementById('sellerEmail').value,
            district: document.getElementById('sellerDistrict').value,
            category: document.getElementById('productCategory').value,
            productName: document.getElementById('productName').value,
            description: document.getElementById('productDescription').value,
            price: parseFloat(document.getElementById('productPrice').value),
            unit: document.getElementById('productUnit').value,
            stock: parseInt(document.getElementById('productStock').value) || 0
        };
        
        // Validar datos
        if (!formData.name || !formData.whatsapp || !formData.district || 
            !formData.category || !formData.productName || !formData.description || 
            !formData.price || !formData.unit) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        // Crear nuevo vendedor
        const newSeller = {
            id: sellers.length + 1,
            name: formData.name,
            type: getCategoryType(formData.category),
            whatsapp: formData.whatsapp,
            email: formData.email,
            district: formData.district,
            community: formData.district,
            description: `Productor de ${formData.productName}`,
            registrationDate: new Date().toISOString().split('T')[0],
            status: 'pendiente',
            verified: false,
            averageRating: 0,
            productCount: 1
        };
        
        // Crear nuevo producto
        const newProduct = {
            id: products.length + 1,
            name: formData.productName,
            category: formData.category,
            price: formData.price,
            unit: formData.unit,
            location: formData.district,
            seller: formData.name,
            whatsapp: formData.whatsapp,
            description: formData.description,
            tags: getDefaultTags(formData.category),
            stock: formData.stock,
            featured: false,
            sellerId: newSeller.id
        };
        
        sellers.push(newSeller);
        products.push(newProduct);
        
        // Mostrar mensaje de éxito
        const successMsg = document.getElementById('sellSuccess');
        if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Limpiar formulario
        form.reset();
        
        setTimeout(() => {
            if (successMsg) {
                successMsg.style.display = 'none';
            }
        }, 5000);
    });
}

function getCategoryType(category) {
    const types = {
        'agro': 'Agricultor',
        'artesania': 'Artesano',
        'gastronomia': 'Comerciante',
        'servicios': 'Comerciante'
    };
    return types[category] || 'Comerciante';
}

function getDefaultTags(category) {
    const tags = {
        'agro': ['local', 'fresco', 'natural'],
        'artesania': ['artesanal', 'tradicional', 'único'],
        'gastronomia': ['casero', 'tradicional', 'nutritivo'],
        'servicios': ['local', 'experiencia', 'auténtico']
    };
    return tags[category] || ['local', 'calidad'];
}

// ==========================================
// FUNCIONES DEL CHAT IA
// ==========================================

function initializeChat() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Agregar mensaje del usuario
    addChatMessage('user', message);
    input.value = '';
    
    // Simular respuesta de IA con delay
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage('ai', response);
    }, 1000 + Math.random() * 1000); // Delay aleatorio entre 1-2 segundos
}

function addChatMessage(sender, message) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const senderName = sender === 'user' ? 'Tú' : 'Asesor IA';
    messageDiv.innerHTML = `<strong>${senderName}:</strong> ${message}`;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    chatHistory.push({ sender, message, timestamp: new Date() });
}

function sendQuickPrompt(type) {
    const prompts = {
        'precio': '¿Puedes ayudarme a definir el precio de mi producto? Vendo papas nativas y mi costo de producción es S/ 3 por kg.',
        'descripcion': 'Necesito escribir una descripción atractiva para mis tejidos de alpaca artesanales.',
        'posts': 'Dame 3 ideas de posts para promocionar mi quinua orgánica en redes sociales.',
        'competencia': 'Quiero saber cómo analizar a mi competencia en el mercado local.',
        'estrategia': 'Ayúdame a crear una estrategia de ventas para mi negocio de productos agrícolas.'
    };
    
    const input = document.getElementById('chatInput');
    if (input && prompts[type]) {
        input.value = prompts[type];
        sendMessage();
    }
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('precio') || message.includes('costo')) {
        return `Basándome en tu costo de S/ 3 por kg, te sugiero un precio de venta entre S/ 7-9 por kg. Esto te da un margen de 130-200%. Considera: 1) La calidad del producto (nativo = valor agregado), 2) Los precios del mercado local, 3) Tu ubicación y costos de transporte. Para papas nativas, el valor diferencial justifica un precio premium. ¿Quieres que analicemos algún aspecto específico?`;
    }
    
    if (message.includes('descripción') || message.includes('tejidos')) {
        return `Aquí tienes una descripción atractiva: "Tejidos artesanales de alpaca 100% natural, elaborados con técnicas ancestrales transmitidas por generaciones. Cada pieza es única, suave al tacto y de gran durabilidad. Perfectos para abrigarte con estilo mientras apoyas el arte tradicional de los Andes peruanos. Disponible en colores naturales y diseños exclusivos." ¿Te gustaría que ajuste el tono o enfoque?`;
    }
    
    if (message.includes('posts') || message.includes('quinua') || message.includes('redes')) {
        return `Te doy 3 ideas de posts para quinua:\n\n1. **"Superalimento andino"** - "🌾 Quinua real directo del altiplano. Rica en proteínas y libre de químicos. ¡El desayuno perfecto para empezar el día con energía! #QuinuaReal #Superfood #Saludable #ProductoLocal #Altiplano"\n\n2. **"De la chacra a tu mesa"** - "👩‍🌾 Desde hace generaciones cultivamos quinua a 3800 msnm. Cada grano guarda la sabiduría ancestral de nuestros abuelos. #TradiciónAndina #CultivoBiológico #QuinuaArtesanal #ComidaSaludable #Ancestral"\n\n3. **"Receta fácil"** - "🍲 Tip: Lava bien la quinua antes de cocinar para quitar el amargor. 1 taza de quinua + 2 tazas de agua = base perfecta para ensaladas, guisos y más. ¿Cuál es tu preparación favorita? #RecetasSaludables #QuinuaReal #CocinaPeruana #Nutritivo #Fácil"`;
    }
    
    if (message.includes('competencia') || message.includes('analizar')) {
        return `Para analizar tu competencia local: 1) **Identifica competidores** en tu zona y productos similares, 2) **Compara precios** - anota sus precios y presentación, 3) **Evalúa su propuesta de valor** - ¿qué ofrecen que tú no?, 4) **Observa sus canales** - ¿dónde venden? ¿cómo promocionan?, 5) **Encuentra tu diferencial** - calidad, precio, servicio, historia personal. Tu ventaja puede ser la tradición familiar, métodos orgánicos, o atención personalizada. ¿En qué aspecto te gustaría diferenciarte?`;
    }
    
    if (message.includes('estrategia') || message.includes('ventas')) {
        return `Estrategia de ventas para productos agrícolas:\n\n🎯 **Segmentación**: Familias locales, restaurantes, mercados orgánicos, turistas\n📱 **Canales**: WhatsApp Business + redes sociales + mercado local + ferias\n🏷️ **Diferenciación**: Resalta origen, calidad, método de cultivo, historia familiar\n📅 **Planificación**: Anuncia cosechas con anticipación, crea expectativa\n🤝 **Fidelización**: Calidad consistente, trato personalizado, descuentos por volumen\n📊 **Seguimiento**: Registra ventas, feedback de clientes, ajusta precios\n💡 **Innovación**: Empaques atractivos, combos, valor agregado\n\n¿En qué aspecto te gustaría profundizar más?`;
    }
    
    if (message.includes('whatsapp') || message.includes('contacto')) {
        return `Para optimizar WhatsApp Business: 1) **Perfil profesional**: foto clara, descripción del negocio, horarios, 2) **Mensajes automáticos**: saludo, ausencia, respuestas frecuentes, 3) **Catálogo**: añade productos con fotos y precios, 4) **Etiquetas**: organiza clientes (nuevo, frecuente, mayorista), 5) **Estados**: comparte productos, ofertas, testimonios. Tip: responde rápido (máximo 30 min en horarios laborales) y usa un tono amigable pero profesional. ¿Necesitas ayuda con algún aspecto específico?`;
    }
    
    if (message.includes('marketing') || message.includes('promoción')) {
        return `Ideas de marketing local económico: 1) **Muestras gratuitas** en mercados y ferias, 2) **Referidos**: descuento por cada cliente nuevo que traigan, 3) **Redes sociales**: historia personal, proceso productivo, testimonios, 4) **Alianzas**: restaurantes locales, tiendas saludables, 5) **Eventos comunitarios**: participa en festivales, fiestas patronales, 6) **Packaging atractivo**: bolsas/etiquetas con tu logo y contacto. Recuerda: la mejor publicidad es la calidad constante y el boca a boca. ¿Qué canal te interesa más?`;
    }
    
    // Respuesta genérica
    return `Entiendo tu consulta sobre "${userMessage}". Como asesor comercial especializado en productos locales de Lampa, puedo ayudarte con:

• **Precios justos**: análisis de costos y márgenes
• **Descripciones atractivas**: textos que vendan tu producto
• **Estrategias de marketing**: promoción económica y efectiva
• **Análisis de mercado**: competencia y oportunidades
• **WhatsApp Business**: optimización para ventas
• **Redes sociales**: contenido que genere ventas

¿Podrías darme más detalles sobre tu producto o negocio para brindarte una respuesta más específica y personalizada?`;
}

// ==========================================
// FUNCIONES DEL FORMULARIO DE PUBLICIDAD
// ==========================================

function initializeAdvertisingForm() {
    const form = document.getElementById('advertisingForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const adData = {
            id: ads.length + 1,
            productId: null, // Se podría vincular si existiera el producto
            productName: document.getElementById('adProduct').value,
            format: document.getElementById('adFormat').value,
            title: document.getElementById('adTitle').value || 'Producto destacado',
            copy: 'Publicidad generada automáticamente',
            callToAction: 'Contacta por WhatsApp',
            colors: document.getElementById('adColors').value || 'Colores naturales',
            channel: document.getElementById('adChannel').value,
            status: 'En proceso',
            requestDate: new Date().toISOString().split('T')[0],
            deliveryDate: null,
            fileUrl: null
        };
        
        if (!adData.productName || !adData.format || !adData.channel) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        ads.push(adData);
        
        const successMsg = document.getElementById('adSuccess');
        if (successMsg) {
            successMsg.style.display = 'block';
        }
        
        form.reset();
        
        setTimeout(() => {
            if (successMsg) {
                successMsg.style.display = 'none';
            }
        }, 5000);
    });
}

// ==========================================
// FUNCIONES DEL PANEL ADMIN
// ==========================================

function loadAdminData() {
    loadAdminSellers();
    loadAdminProducts();
    loadAdminOrders();
    loadAdminAds();
}

function showAdminSection(section) {
    const sections = ['sellers', 'products', 'orders', 'ads'];
    sections.forEach(s => {
        const element = document.getElementById(`admin-${s}`);
        if (element) {
            element.style.display = s === section ? 'block' : 'none';
        }
    });
}

function loadAdminSellers() {
    const tbody = document.getElementById('sellersTable');
    if (!tbody) return;
    
    // Mantener los ejemplos estáticos y agregar datos dinámicos
    const dynamicSellers = sellers.slice(2); // Omitir los primeros 2 que ya están en el HTML
    
    dynamicSellers.forEach(seller => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${seller.id.toString().padStart(3, '0')}</td>
            <td>${seller.name}</td>
            <td>${seller.type}</td>
            <td>${seller.whatsapp}</td>
            <td>${seller.district}</td>
            <td><span class="status ${seller.status === 'activo' ? 'active' : 'pending'}">${seller.status}</span></td>
            <td>${seller.registrationDate}</td>
            <td>
                ${seller.status === 'pendiente' ? 
                    '<button class="btn btn-primary" style="padding: 0.3rem 0.8rem;" onclick="approveSeller(' + seller.id + ')">Aprobar</button>' :
                    '<button class="btn btn-secondary" style="padding: 0.3rem 0.8rem;">Ver</button>'
                }
                <button class="btn btn-primary" style="padding: 0.3rem 0.8rem;">Editar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function loadAdminProducts() {
    // Los productos base ya están en el HTML, agregar dinámicos si es necesario
}

function loadAdminOrders() {
    const tbody = document.getElementById('ordersTable');
    if (!tbody) return;
    
    // Agregar pedidos recientes
    const recentOrders = orders.slice(-5); // Últimos 5 pedidos
    
    recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id.toString().padStart(3, '0')}</td>
            <td>${order.productName}</td>
            <td>${order.buyerName}</td>
            <td>${order.buyerPhone}</td>
            <td>${order.quantity}</td>
            <td>S/ ${order.subtotal.toFixed(2)}</td>
            <td><span class="status ${order.status === 'interesado' ? 'active' : 'pending'}">${order.status}</span></td>
            <td>${order.date}</td>
            <td>
                <button class="btn btn-primary" style="padding: 0.3rem 0.8rem;" onclick="contactBuyer('${order.buyerPhone}')">Contactar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function loadAdminAds() {
    // Los anuncios base ya están en el HTML
}

function approveSeller(sellerId) {
    const seller = sellers.find(s => s.id === sellerId);
    if (seller) {
        seller.status = 'activo';
        seller.verified = true;
        alert(`Vendedor ${seller.name} aprobado exitosamente.`);
        loadAdminData();
    }
}

function contactBuyer(phone) {
    const message = "Hola, te contacto desde EduMarket IA para hacer seguimiento a tu pedido.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    loadProducts();
    initializeSellerForm();
    initializeAdvertisingForm();
    initializeChat();
    
    // Configurar filtros
    const filters = ['categoryFilter', 'priceFilter', 'availabilityFilter'];
    filters.forEach(filterId => {
        const element = document.getElementById(filterId);
        if (element) {
            element.addEventListener('change', filterProducts);
        }
    });
    
    // Configurar navegación
    showPage('home');
    
    console.log('EduMarket IA inicializado correctamente');
    console.log(`Productos cargados: ${products.length}`);
    console.log(`Vendedores registrados: ${sellers.length}`);
    console.log(`Pedidos en sistema: ${orders.length}`);
    console.log(`Anuncios publicitarios: ${ads.length}`);
});

// ==========================================
// UTILIDADES Y FUNCIONES HELPER
// ==========================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-PE');
}

function formatPrice(price) {
    return `S/ ${price.toFixed(2)}`;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function validatePhone(phone) {
    const phoneRegex = /^51[0-9]{9}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para exportar datos (útil para debugging)
function exportData() {
    const data = {
        products,
        sellers,
        orders,
        ads,
        chatHistory,
        timestamp: new Date().toISOString()
    };
    
    console.log('Datos de EduMarket IA:', data);
    return data;
}

// Función para limpiar datos (útil para testing)
function resetData() {
    chatHistory = [];
    // No reseteamos products, sellers, orders, ads para mantener datos base
    console.log('Historial de chat limpiado');
}
  