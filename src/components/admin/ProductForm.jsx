import React, { useEffect, useState } from 'react'

function ProductForm({ onAdd, onUpdate, editingProduct, onClose }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price);
        } else {
            setName('');
            setPrice('');
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            setErr('Vui lòng nhập đủ thông tin!!!');
            return;
        }

        const priceNumber = Number(price);
        if (isNaN(priceNumber) || priceNumber <= 0) {
            setErr('Vui lòng nhập giá tiền hợp lệ.');
            return;
        }

        if (editingProduct) {
            onUpdate({ ...editingProduct, name, price: priceNumber });
        } else {
            onAdd({ name, price: priceNumber });
        }

        setName('');
        setPrice('');
        setErr('');
        onClose();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-5 px-4 flex flex-col items-center gap-4 w-full max-w-md mx-auto sm:px-6 md:px-8"
        >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">
                {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
            </h2>

            <input
                className="px-4 py-2 border border-gray-300 rounded-lg font-inter w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="px-4 py-2 border border-gray-300 rounded-lg font-inter w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Giá"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            {err && <p className="text-red-700 font-bold text-sm sm:text-base">{err}</p>}

            <div className="flex flex-col sm:flex-row justify-end gap-2 w-full">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors shadow-lg text-sm sm:text-base"
                >
                    Hủy
                </button>
                <button
                    className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 shadow-lg transition-colors text-sm sm:text-base"
                    type="submit"
                >
                    {editingProduct ? "Cập nhật" : "Thêm"}
                </button>
            </div>
        </form>
    )
}

export default ProductForm
