import React from 'react'

function PaymentMethodList({ list, selectedMethod, onSelect }) {
    return (
        <div className="grid grid-cols-3 gap-2 mb-6">
            {list.map((method) => (
                <button
                    key={method.id}
                    onClick={() => onSelect(method.id)}
                    className={`border rounded-md py-2 px-3 text-sm font-medium ${selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-100 text-blue-700'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                >
                    {method.label}
                </button>
            ))}
        </div>
    );
};


export default PaymentMethodList
