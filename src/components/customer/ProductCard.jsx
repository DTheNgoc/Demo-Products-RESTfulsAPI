import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import BookingConfirmationPopup from './BookingConfirmationPopup'

function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [popupProductName, setPopupProductName] = useState('');

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
        setPopupProductName(product.name);
        setShowConfirmationPopup(true);
    };

    return (
        <div>
            <div
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
            flex flex-col overflow-hidden font-inter cursor-pointer transform hover:-translate-y-2"
                onClick={() => navigate(`/products/${product.id}`)}
            >
                {/* image */}
                <div className='relative h-48 overflow-hidden'>
                    <img
                        src={product.image || 'https://placehold.co/400x250/CCCCCC/333333?text=No+Image'}
                        alt={product.name}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/333333?text=No+Image'; }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-4 left-4'>
                        <span className='bg-cyan-500 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2'>
                            {product.category}
                        </span>
                    </div>
                </div>
                {/* info */}
                <div className='p-5 flex flex-col flex-grow'>
                    <h3 className='text-xl font-bold mb-1 text-gray-900 line-clamp-2'>
                        {product.name}
                    </h3>

                    <p className='text-gray-700 text-sm mb-3 line-clamp-3 flex-grow'>
                        {product.description || 'Không có mô tả ...'}
                    </p>

                    <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
                        <span className='text-blue-700 font-extrabold text-xl'>
                            {product.price.toLocaleString('vi-VN')} VND
                        </span>

                        <button
                            className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300'
                            onClick={handleAddToCart}
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>


            </div>
            {showConfirmationPopup && (
                <BookingConfirmationPopup
                    productName={popupProductName}
                    onClose={() => setShowConfirmationPopup(false)}
                />
            )}
        </div>
    )
}

export default ProductCard
