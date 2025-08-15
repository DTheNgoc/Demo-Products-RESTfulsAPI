import React, { useState } from 'react';
import HeroSlider from './HeroSlider/HeroSlider';
import CustomerProductList from './CustomerProductList';

const HomePage = ({ allProducts }) => {
    const featuredProducts = allProducts.slice(0, 12);
    const [currentPage, setCurrentPage] = useState(1);
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    return (
        <>
            <HeroSlider />
            <CustomerProductList
                products={featuredProducts}
                currentPage={currentPage}
                productsPerPage={6}
                totalProducts={12}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default HomePage;