import React, { useState, useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductFilters from './ProductFilters';
import CustomerProductList from './CustomerProductList';

const AllProductsPage = () => {
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', priceRange: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    let tempProducts = products;
    const priceRanges = {
      "Dưới 500k": { min: 0, max: 500000 },
      "500k - 2 triệu": { min: 500000, max: 2000000 },
      "Trên 2 triệu": { min: 2000000, max: Infinity },
    };

    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      tempProducts = tempProducts.filter(prod =>
        prod.name.toLowerCase().includes(lowercasedSearchTerm) ||
        (prod.category && prod.category.toLowerCase().includes(lowercasedSearchTerm))
      );
    }
    if (filters.category) tempProducts = tempProducts.filter(prod => prod.category === filters.category);
    if (filters.priceRange && priceRanges[filters.priceRange]) {
      const range = priceRanges[filters.priceRange];
      tempProducts = tempProducts.filter(
        prod => prod.price >= range.min && prod.price <= range.max
      );
    }

    setFilteredProducts(tempProducts);
    setCurrentPage(1);
  }, [searchTerm, filters, products]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleClearFilters = () => {
    setFilters({ category: '', priceRange: '' });
    setSearchTerm('');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className='text-center mt-10'>Đang tải sản phẩm...</div>
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center my-6 justify-between">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-6">Khám phá các Sản phẩm</h2>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="p-2 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-96 font-inter text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ProductFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        allProducts={products}
      />
      <CustomerProductList
        products={filteredProducts}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default AllProductsPage;
