import React, { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'

function ProductList({ products, onDelete, onEdit }) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const handleDeleteClick = (product) => {
        setProductToDelete(product);
        setShowConfirmModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete(productToDelete.id);
        setShowConfirmModal(false);
        setProductToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
        setProductToDelete(null);
    };

    return (
        <div className="flex justify-center items-center p-4">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full table-auto border-2 border-gray-400 rounded-lg overflow-hidden" cellPadding="8">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2 text-center w-12">STT</th>
                            <th className="border px-4 py-2 text-center">Tên</th>
                            <th className="border px-4 py-2 text-center">Giá</th>
                            <th className="border px-4 py-2 text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr key={p.id} className="hover:bg-gray-100 transition-colors">
                                <td className="border px-4 py-2 text-left">{index + 1}</td>
                                <td className="border px-4 py-2">{p.name}</td>
                                <td className="border px-4 py-2">{p.price.toLocaleString('vi-VN')} VNĐ</td>
                                <td className="flex justify-center gap-2 border px-4 py-2">
                                    <button
                                        className="text-white py-1 px-5 rounded-lg bg-orange-600 hover:bg-orange-700 transition-colors"
                                        onClick={() => onEdit(p)}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className="text-white py-1 px-5 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
                                        onClick={() => handleDeleteClick(p)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showConfirmModal && (
                <ConfirmationModal
                    message={`Bạn có chắc chắn muốn xóa sản phẩm "${productToDelete.name}" không?`}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    )
}

export default ProductList
