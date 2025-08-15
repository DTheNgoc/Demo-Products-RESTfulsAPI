import React, { useEffect } from 'react'

function BookingConfirmationPopup({ productName, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in-down font-inter">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                <span className='px-3'>Đã thêm "{productName}" vào giỏ hàng!</span>
            </div>
            <button onClick={onClose} className="absolute top-1 right-2 text-white text-xl font-bold">&times;</button>
        </div>
    )
}

export default BookingConfirmationPopup
