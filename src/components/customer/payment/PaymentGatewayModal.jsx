import React, { useState } from 'react'
import PaymentMethodList from "./PaymentMethodList";
import QRCodeSection from "./QRCodeSection";
import PaymentStatusDisplay from "./PaymentStatusDisplay";
import PaymentButton from "./PaymentButton";
import paymentMethods from '../../../data/paymentMethods';

function PaymentGatewayModal({ totalPrice, onClose, onPaymentSuccess, onPaymentFailure }) {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = () => {
    setPaymentStatus('pending');
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        setPaymentStatus('success');
        onPaymentSuccess();
      } else {
        setPaymentStatus('failed');
        onPaymentFailure();
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 font-inter p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-md relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-3">Cổng Thanh Toán Điện Tử</h2>

        <div className="mb-4">
          <p className="text-gray-700 text-lg">Tổng tiền cần thanh toán:</p>
          <p className="text-green-700 font-bold text-3xl">
            {totalPrice.toLocaleString('vi-VN')} VNĐ
          </p>
        </div>

        <PaymentMethodList
          list={paymentMethods}
          selectedMethod={selectedMethod}
          onSelect={setSelectedMethod}
        />

        {selectedMethod === 'qr' && <QRCodeSection />}

        {paymentStatus === 'pending' && (
          <PaymentButton disabled={!selectedMethod} onClick={handlePayment} />
        )}

        {(paymentStatus === 'success' || paymentStatus === 'failed') && (
          <PaymentStatusDisplay
            status={paymentStatus}
            onRetry={handlePayment}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};


export default PaymentGatewayModal
