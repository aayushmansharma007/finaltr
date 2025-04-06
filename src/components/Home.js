import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [editCartItem, setEditCartItem] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: null,
    description: '',
    stock: true,
    category: 'ACHAAR', // Default category
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'COD',
  });
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const userId = 1; // Hardcoded for demo

  useEffect(() => {
    fetch('https://trial-for-backend.onrender.com/api/products')
      .then((response) => response.json())
      .then((data) => {
        // Transform the data to ensure imageUrl is complete
        const productsWithFullUrls = data.map(product => ({
          ...product,
          imageUrl: product.imageUrl ? 
            `https://trial-for-backend.onrender.com/${product.imageUrl.replace(/^\//, '')}` : 
            null
        }));
        setProducts(productsWithFullUrls);
        setFilteredProducts(productsWithFullUrls);
      })
      .catch((error) => console.error('Error fetching products:', error));

    fetch(`https://trial-for-backend.onrender.com/api/cart/${userId}`)
      .then((response) => response.json())
      .then((data) => setCart(data.items || []))
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'stock' ? value === 'true' : value;
    if (editProduct) {
      setEditProduct((prev) => ({ ...prev, [name]: updatedValue }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: updatedValue }));
    }
  };

  const handleImageUrlSubmit = (e) => {
    e.preventDefault();
    if (editProduct) {
      setEditProduct(prev => ({ ...prev, imageUrl, image: null }));
    } else {
      setNewProduct(prev => ({ ...prev, imageUrl, image: null }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.add('drag-active');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.remove('drag-active');
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.remove('drag-active');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      if (editProduct) {
        setEditProduct(prev => ({ ...prev, image: file }));
      } else {
        setNewProduct(prev => ({ ...prev, image: file }));
      }
    } else {
      alert('Please drop an image file');
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (editProduct) {
        setEditProduct(prev => ({ ...prev, image: file }));
      } else {
        setNewProduct(prev => ({ ...prev, image: file }));
      }
    } else {
      alert('Please select an image file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const product = editProduct || newProduct;

    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('stock', product.stock);
    formData.append('category', product.category);
    
    try {
      let imageUrl = product.imageUrl;
      
      // Only upload image if there's a file selected
      if (product.image) {
        const imageFormData = new FormData();
        imageFormData.append('file', product.image);
        
        const imageResponse = await fetch('https://trial-for-backend.onrender.com/api/images/upload', {
          method: 'POST',
          body: imageFormData,
        });
        
        if (!imageResponse.ok) {
          throw new Error('Failed to upload image');
        }
        
        imageUrl = await imageResponse.text();
      }

      const url = editProduct
        ? `https://trial-for-backend.onrender.com/api/products/${editProduct.id}`
        : 'https://trial-for-backend.onrender.com/api/products';
      
      const productData = {
        ...product,
        imageUrl: imageUrl
      };

      const response = await fetch(url, {
        method: editProduct ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const savedProduct = await response.json();
      
      if (editProduct) {
        setProducts(prev =>
          prev.map(p => (p.id === savedProduct.id ? savedProduct : p))
        );
        setEditProduct(null);
      } else {
        setProducts(prev => [...prev, savedProduct]);
      }
      
      setNewProduct({
        name: '',
        price: '',
        image: null,
        description: '',
        stock: true,
        category: 'ACHAAR'
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product. Please try again.');
    }
  };

  const startEditProduct = (product) => {
    setEditProduct({ ...product, image: null });
    setShowForm(true);
  };

  const addToCart = async (product) => {
    if (product.stock) {
      try {
        const response = await fetch('https://trial-for-backend.onrender.com/api/cart/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ userId, productId: product.id, quantity: 1 }),
        });
        const updatedCart = await response.json();
        setCart(updatedCart.items);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    } else {
      alert('Product is out of stock!');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch('https://trial-for-backend.onrender.com/api/cart/remove', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ userId, productId }),
      });
      const updatedCart = await response.json();
      setCart(updatedCart.items);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItem = async (item) => {
    try {
      const response = await fetch('https://trial-for-backend.onrender.com/api/cart/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          userId,
          productId: item.product.id,
          quantity: item.quantity,
        }),
      });
      const updatedCart = await response.json();
      setCart(updatedCart.items);
      setEditCartItem(null);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckoutChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        userId,
        items: cart.map(item => ({
          product: { id: item.product.id },
          quantity: item.quantity,
        })),
        total: calculateTotal(),
        ...checkoutInfo,
      };
      const response = await fetch('https://trial-for-backend.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      if (response.ok) {
        setCart([]);
        setShowCheckout(false);
        setOrderCompleted(true);
        setTimeout(() => setOrderCompleted(false), 3000);
      }
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  const categories = ['ACHAAR', 'SWEETS', 'NAMKEEN', 'SNACKS'];

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home-container">
      <div className="header-section">
        <h1>Products</h1>
        <div className="search-and-add">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => {
                  setSearchTerm('');
                  setFilteredProducts(products);
                }}
              >
                ×
              </button>
            )}
          </div>
          <button 
            className="add-product-btn"
            onClick={() => { 
              setEditProduct(null); 
              setShowForm(true); 
            }}
          >
            Add Product
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="product-form">
          <input type="text" name="name" value={editProduct ? editProduct.name : newProduct.name} onChange={handleInputChange} placeholder="Product Name" required />
          <input type="number" name="price" value={editProduct ? editProduct.price : newProduct.price} onChange={handleInputChange} placeholder="Price" required />
          <div
            className="drop-zone"
            onDrop={handleImageDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {(editProduct?.image || newProduct.image) ? (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(editProduct?.image || newProduct.image)}
                  alt="Preview"
                />
                <button
                  type="button"
                  className="remove-image"
                  onClick={() => {
                    if (editProduct) {
                      setEditProduct(prev => ({ ...prev, image: null }));
                    } else {
                      setNewProduct(prev => ({ ...prev, image: null }));
                    }
                  }}
                >
                  ×
                </button>
              </div>
            ) : editProduct?.imageUrl || newProduct.imageUrl ? (
              <div className="image-preview">
                <img src={editProduct?.imageUrl || newProduct.imageUrl} alt="Current" />
                <button
                  type="button"
                  className="remove-image"
                  onClick={() => {
                    if (editProduct) {
                      setEditProduct(prev => ({ ...prev, imageUrl: '' }));
                    } else {
                      setNewProduct(prev => ({ ...prev, imageUrl: '' }));
                    }
                  }}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="upload-prompt">
                <p>Upload image using one of these methods:</p>
                <div className="upload-methods">
                  <div className="url-upload">
                    <form onSubmit={handleImageUrlSubmit}>
                      <input
                        type="url"
                        placeholder="Enter image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                      />
                      <button type="submit">Add Image URL</button>
                    </form>
                  </div>
                  <div className="separator">OR</div>
                  <div className="file-upload">
                    <p>Drag and drop image here</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <textarea name="description" value={editProduct ? editProduct.description : newProduct.description} onChange={handleInputChange} placeholder="Description" required />
          <select name="stock" value={editProduct ? editProduct.stock : newProduct.stock} onChange={handleInputChange}>
            <option value={true}>In Stock</option>
            <option value={false}>Out of Stock</option>
          </select>
          <select name="category" value={editProduct ? editProduct.category : newProduct.category} onChange={handleInputChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit">{editProduct ? 'Update Product' : 'Save Product'}</button>
          <button type="button" onClick={() => { setShowForm(false); setEditProduct(null); }}>Cancel</button>
        </form>
      )}

      {searchTerm ? (
        // Show search results
        <div className="search-results">
          <h2>Search Results</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <span className="category-tag">{product.category}</span>
                <span className={`stock-status ${product.stock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.stock ? 'In Stock' : 'Out of Stock'}
                </span>
                <div className="button-group">
                  <button 
                    onClick={() => addToCart(product)} 
                    disabled={!product.stock}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => startEditProduct(product)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No products found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      ) : (
        // Show regular category-based layout
        categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="product-card">
                    {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <span>{product.stock ? 'In Stock' : 'Out of Stock'}</span>
                    <div className="button-group">
                      <button onClick={() => addToCart(product)} disabled={!product.stock} className="add-to-cart-btn">Add to Cart</button>
                      <button onClick={() => startEditProduct(product)} className="edit-btn">Edit</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      )}

      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.product.imageUrl} alt={item.product.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h3>{item.product.name}</h3>
                    <p>Price: ${item.product.price}</p>
                    {editCartItem && editCartItem.id === item.id ? (
                      <>
                        <input
                          type="number"
                          min="1"
                          value={editCartItem.quantity}
                          onChange={(e) => setEditCartItem({ ...editCartItem, quantity: parseInt(e.target.value) })}
                        />
                        <button onClick={() => updateCartItem(editCartItem)}>Save</button>
                        <button onClick={() => setEditCartItem(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <p>Quantity: {item.quantity}</p>
                        <p>Subtotal: ${(item.product.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => setEditCartItem(item)}>Edit Quantity</button>
                        <button onClick={() => removeFromCart(item.product.id)} className="remove-btn">Remove</button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ${calculateTotal()}</h3>
              <button onClick={() => setShowCheckout(true)} className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>

      {showCheckout && (
        <div className="checkout-form-container">
          <form onSubmit={handleCheckoutSubmit} className="checkout-form">
            <h2>Checkout</h2>
            <input type="text" name="name" value={checkoutInfo.name} onChange={handleCheckoutChange} placeholder="Full Name" required />
            <textarea name="address" value={checkoutInfo.address} onChange={handleCheckoutChange} placeholder="Delivery Address" required />
            <input type="tel" name="phone" value={checkoutInfo.phone} onChange={handleCheckoutChange} placeholder="Phone Number" required />
            <select name="paymentMethod" value={checkoutInfo.paymentMethod} onChange={handleCheckoutChange}>
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
            </select>
            <button type="submit">Place Order</button>
            <button type="button" onClick={() => setShowCheckout(false)}>Cancel</button>
          </form>
        </div>
      )}

      {orderCompleted && (
        <div className="order-completed">Order Completed Successfully!</div>
      )}
    </div>
  );
};

export default Home;








