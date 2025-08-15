import React from 'react'

function PaymentStatusDisplay ({ status, onClose, onRetry }) {
  if (status === 'success') {
    return (
      <div className="text-green-600 font-semibold text-xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>Thanh toán thành công!</p>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
        >
          Quay lại cửa hàng
        </button>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-red-600 font-semibold text-xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>Thanh toán thất bại. Vui lòng thử lại.</p>
        <button
          onClick={onRetry}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
        >
          Thử lại
        </button>
        <button
          onClick={onClose}
          className="mt-4 block mx-auto bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
        >
          Hủy
        </button>
      </div>
    );
  }

  return null;
};


export default PaymentStatusDisplay
