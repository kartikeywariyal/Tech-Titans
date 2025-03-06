import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const ChefDashboard = () => {
    const [orders, setOrders] = useState([
        { id: 123, name: 'Pizza' },
        { id: 124, name: 'Pasta' },
        { id: 125, name: 'Salad' },
    ]);

    const handleAddDish = () => {
        console.log('Add new dish clicked');
    };

    return (
        <div className="chef-dashboard">
            
            <header>
                <h1>Welcome to the Chef Dashboard</h1>
            </header>
            <main>
                <section>
                    <h2>Your Orders</h2>
                    <ul className="order-list">
                        {orders.map(order => (
                            <li key={order.id}>Order #{order.id} - {order.name}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>Manage Menu</h2>
                    <button onClick={handleAddDish}>Add New Dish</button>
                </section>
            </main>
        </div>
    );
};

export default ChefDashboard;
