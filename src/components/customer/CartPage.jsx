import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import PaymentGatewayModal from './payment/PaymentGatewayModal';

const CartPage = ({ allProducts }) => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const navigate = useNavigate();

    const handleCheckoutSuccess = () => {
        clearCart();
        navigate('/');
    };
    
    const handleCheckoutFailure = () => {
        console.log("Thanh toán thất bại!");
    };

    const totalPrice = cart.reduce((total, item) => {
        const product = allProducts.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    if (cart.length === 0) {
        return (
            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-700">Giỏ hàng trống.</h2>
                <p className="text-gray-500 mt-4">
                    Hãy quay lại <Link to="/products" className="text-cyan-600 hover:underline">trang sản phẩm</Link> để mua sắm!
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Giỏ hàng của bạn</h2>
            <div className="space-y-4 mb-6">
                {cart.map((item) => {
                    const product = allProducts.find(p => p.id === item.id);
                    if (!product) return null;
                    return (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                            <div className="flex items-center flex-grow">
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm">Giá: {product.price.toLocaleString('vi-VN')} VNĐ</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    className="w-16 p-1 border border-gray-300 rounded-md text-center mr-4"
                                />
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors duration-300 shadow-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-right text-2xl font-bold text-gray-900 pt-4 border-t">
                Tổng tiền: <span className="text-blue-700">{totalPrice.toLocaleString('vi-VN')} VNĐ</span>
            </div>
            <div className="mt-6 flex justify-end">
                <button
                    onClick={() => setShowCheckoutModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    Tiến hành thanh toán
                </button>
            </div>
            {showCheckoutModal && (
                <PaymentGatewayModal
                    totalPrice={totalPrice}
                    onClose={() => setShowCheckoutModal(false)}
                    onPaymentSuccess={handleCheckoutSuccess}
                    onPaymentFailure={handleCheckoutFailure}
                />
            )}
        </div>
    );
};

export default CartPage;