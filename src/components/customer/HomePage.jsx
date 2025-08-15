import React, { useState } from 'react';
import HeroSlider from './HeroSlider/HeroSlider';
import CustomerProductList from './CustomerProductList';
import { useProducts } from '../../contexts/ProductContext';

const HomePage = () => {
    const { products, loading } = useProducts(); // Lấy dữ liệu từ context
    const featuredProducts = products.slice(0, 12);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }

    return (
        <>
            <HeroSlider />
            <CustomerProductList
                products={featuredProducts}
                currentPage={currentPage}
                productsPerPage={6}
                totalProducts={featuredProducts.length}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default HomePage;
