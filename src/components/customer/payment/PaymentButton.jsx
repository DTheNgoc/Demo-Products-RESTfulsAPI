import React from 'react'

function PaymentButton({ onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            disabled={disabled}
        >
            Thanh Toán Ngay
        </button>
    );
}

export default PaymentButton
