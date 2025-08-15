import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 font-inter p-4">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;