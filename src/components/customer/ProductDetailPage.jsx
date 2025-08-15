import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import BookingConfirmationPopup from './BookingConfirmationPopup';

const ProductDetailPage = ({ allProducts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [popupProductName, setPopupProductName] = useState('');

    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return <div className="text-center text-red-600 text-lg font-semibold mt-8">Không tìm thấy sản phẩm!</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setPopupProductName(product.name);
        setShowConfirmationPopup(true);
    };

    return (
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-12 font-inter">
            <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left mr-2"><path d="m15 18-6-6 6-6" /></svg>
                Quay lại
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                    <img src={product.image || 'https://placehold.co/800x800/CCCCCC/333333?text=No+Image'} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <p className="text-gray-500 font-medium mb-4">{product.category}</p>
                    <p className="text-blue-700 font-extrabold text-4xl mb-6">{product.price.toLocaleString('vi-VN')} VNĐ</p>

                    <p className="text-gray-700 text-lg mb-6">
                        Mô tả chi tiết sản phẩm. Đây là nơi bạn có thể thêm thông tin về chất liệu, thông số kỹ thuật, bảo hành, v.v.
                    </p>

                    <div className="flex items-center mb-6">
                        <label htmlFor="quantity" className="text-gray-700 font-medium block mr-4">Số lượng:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className="w-24 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800"
                        />
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl w-full"
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            {showConfirmationPopup && (
                <BookingConfirmationPopup
                    tripName={popupProductName}
                    onClose={() => setShowConfirmationPopup(false)}
                />
            )}
        </div>
    );
};

export default ProductDetailPage;