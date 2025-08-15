import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductList from './ProductList';
import Modal from './Modal';
import ProductForm from './ProductForm';

function AdminPage() {
  const { products, loading, addProduct, deleteProduct, updateProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowFormModal(true);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowFormModal(true);
  };

  if (loading) {
    return <div className='text-center text-red-700 mt-10'>Đang tải dữ liệu ...</div>
  }

  return (
    <div className='p-4 text-center'>
      <h1 className='uppercase font-bold text-gray-800 text-center text-3xl'>Quản Lý Sản Phẩm</h1>
      <button
        className='bg-blue-800 mt-5 text-white px-5 py-2 rounded-lg hover:bg-blue-900 shadow-lg transition-colors'
        onClick={handleAddProduct}
      >
        Thêm mới
      </button>
      <ProductList
        products={products}
        onDelete={deleteProduct}
        onEdit={handleEditProduct}
      />
      {showFormModal && (
        <Modal onClose={() => setShowFormModal(false)}>
          <ProductForm
            onAdd={addProduct}
            onUpdate={updateProduct}
            editingProduct={editingProduct}
            onClose={() => setShowFormModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default AdminPage;
