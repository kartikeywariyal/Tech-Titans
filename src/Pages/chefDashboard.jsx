import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const ChefDashboard = () => {
    const [orders, setOrders] = useState([
        { id: 123, name: 'Margherita Pizza', status: 'pending', time: '10:30 AM', table: '5' },
        { id: 124, name: 'Fettuccine Alfredo', status: 'cooking', time: '10:15 AM', table: '3' },
        { id: 125, name: 'Caesar Salad', status: 'ready', time: '10:05 AM', table: '7' },
    ]);

    const [activeTab, setActiveTab] = useState('orders');

    const handleAddDish = () => {
        console.log('Add new dish clicked');
    };

    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order => 
            order.id === id ? {...order, status: newStatus} : order
        ));
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-6 border-b">
                    <div className="flex items-center">
                        <div className="mr-3 text-amber-600 text-xl font-bold"></div>
                        <h1 className="text-xl font-bold text-gray-800">Chef's Table</h1>
                    </div>
                </div>
                
                <nav className="mt-6">
                    <div className={`px-6 py-3 flex items-center cursor-pointer ${activeTab === 'orders' ? 'bg-amber-50 border-r-4 border-amber-500' : 'hover:bg-gray-50'}`}
                         onClick={() => setActiveTab('orders')}>
                        <span className="mr-3 text-gray-600">📋</span>
                        <span className="text-gray-800">Orders</span>
                    </div>
                    <div className={`px-6 py-3 flex items-center cursor-pointer ${activeTab === 'menu' ? 'bg-amber-50 border-r-4 border-amber-500' : 'hover:bg-gray-50'}`}
                         onClick={() => setActiveTab('menu')}>
                        <span className="mr-3 text-gray-600">🍽️</span>
                        <span className="text-gray-800">Menu</span>
                    </div>
                </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Top Navigation */}
                <div className="bg-white px-8 py-4 shadow-sm flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {activeTab === 'orders' && 'Kitchen Orders'}
                        {activeTab === 'menu' && 'Manage Menu'}
                        {activeTab === 'analytics' && 'Kitchen Analytics'}
                        {activeTab === 'settings' && 'Dashboard Settings'}
                    </h2>
                    <div className="flex items-center">
                        <button className="mr-4 p-2 rounded-full hover:bg-gray-100">
                            <span className="text-gray-600">🔔</span>
                        </button>
                        <div className="flex items-center">
                            <div className="h-9 w-9 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold mr-2">
                                EC
                            </div>
                            <span className="text-gray-700">Executive Chef</span>
                        </div>
                    </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-8">
                    {activeTab === 'orders' && (
                        <div>
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-amber-100 mr-4">
                                            <span className="text-xl text-amber-600">⏱️</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Pending Orders</p>
                                            <p className="text-2xl font-bold text-gray-800">
                                                {orders.filter(o => o.status === 'pending').length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-blue-100 mr-4">
                                            <span className="text-xl text-blue-600">👨‍🍳</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Cooking</p>
                                            <p className="text-2xl font-bold text-gray-800">
                                                {orders.filter(o => o.status === 'cooking').length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-green-100 mr-4">
                                            <span className="text-xl text-green-600"></span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Ready to Serve</p>
                                            <p className="text-2xl font-bold text-gray-800">
                                                {orders.filter(o => o.status === 'ready').length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow">
                                <div className="px-6 py-4 border-b">
                                    <h3 className="text-lg font-semibold text-gray-800">Current Orders</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order #</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dish</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {orders.map(order => (
                                                <tr key={order.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.table}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.time}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                                            order.status === 'pending' ? 'bg-amber-100 text-amber-800' : 
                                                            order.status === 'cooking' ? 'bg-blue-100 text-blue-800' : 
                                                            'bg-green-100 text-green-800'
                                                        }`}>
                                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {order.status === 'pending' && (
                                                            <button
                                                                onClick={() => handleStatusChange(order.id, 'cooking')}
                                                                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs"
                                                            >
                                                                Start Cooking
                                                            </button>
                                                        )}
                                                        {order.status === 'cooking' && (
                                                            <button
                                                                onClick={() => handleStatusChange(order.id, 'ready')}
                                                                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs"
                                                            >
                                                                Mark Ready
                                                            </button>
                                                        )}
                                                        {order.status === 'ready' && (
                                                            <span className="text-gray-600 text-xs">Ready to serve</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'menu' && (
                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">Menu Management</h3>
                                <button 
                                    onClick={handleAddDish}
                                    className="px-4 py-2 bg-amber-600 text-white rounded-md flex items-center hover:bg-amber-700"
                                >
                                    <span className="mr-2"></span>
                                    Add New Dish
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600">Click "Add New Dish" to manage your menu items.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChefDashboard;
