import React from 'react'

function ProductFilters({ filters, onFilterChange, onClearFilters, allProducts }) {
    const categories = [...new Set(allProducts.map(prod => prod.category))];
    const prices = [
        { label: "Dưới 500k", min: 0, max: 500000 },
        { label: "500k Đến 2 triệu", min: 500000, max: 2000000 },
        { label: "Trên 2 triệu", min: 2000000, max: Infinity }
    ]

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Lọc sản phẩm:</h3>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <select
                    value={filters.category}
                    onChange={(e) => onFilterChange('category', e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 w-full sm:w-auto"
                >
                    <option value="">Tất cả danh mục</option>
                    {categories.map(category => (<option key={category} value={category}>{category}</option>))}
                </select>
                <select
                    value={filters.priceRange}
                    onChange={(e) => onFilterChange('priceRange', e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 w-full sm:w-auto"
                >
                    <option value="">Tất cả giá</option>
                    {prices.map(price => (<option key={price.label} value={price.label}>{price.label}</option>))}
                </select>
            </div>
            <button
                onClick={onClearFilters}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md w-full md:w-auto"
            >
                Xóa bộ lọc
            </button>
        </div>
    );
};

export default ProductFilters
