import React, { useState, useEffect } from 'react';
import './OrdersDashboard.css';

const OrdersDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://trial-for-backend.onrender.com/api/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="orders-dashboard">
      <h1>Order Dashboard</h1>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <h2>Order #{order.id}</h2>
              <p>User ID: {order.userId}</p>
              <p>Name: {order.name}</p>
              <p>Address: {order.address}</p>
              <p>Phone: {order.phone}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Total: ${order.total}</p>
              <h3>Items:</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.product.name} - Qty: {item.quantity} - ${item.product.price * item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersDashboard;
