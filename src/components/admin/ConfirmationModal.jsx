import React from 'react';
import Modal from './Modal';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <Modal title="Xác nhận">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{message}</h2>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={onCancel} className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition-colors shadow-lg">
                        Hủy
                    </button>
                    <button onClick={onConfirm} className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg">
                        Xóa
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;