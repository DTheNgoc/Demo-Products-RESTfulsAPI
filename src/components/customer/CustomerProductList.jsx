import React from 'react'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

function CustomerProductList({ products, currentPage, productsPerPage, totalProducts, onPageChange }) {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFisrtProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFisrtProduct, indexOfLastProduct)

    return (
        <section id="products" className="py-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sản phẩm của chúng tôi</h2>
            {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
            )}
            <Pagination
                destinationsPerPage={productsPerPage}
                totalDestinations={totalProducts}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </section>
    );
}

export default CustomerProductList
