import React from 'react'

function Pagination({ destinationsPerPage, totalDestinations, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalDestinations / destinationsPerPage);
    const visiblePages = [];

    if (totalPages <= 7) {
        // Ít trang: hiển thị hết
        for (let i = 1; i <= totalPages; i++) {
            visiblePages.push(i);
        }
    } else {
        // Trang đầu
        visiblePages.push(1);

        if (currentPage > 4) {
            visiblePages.push('...');
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        if (currentPage < totalPages - 3) {
            visiblePages.push('...');
        }

        // Trang cuối
        visiblePages.push(totalPages);
    }

    return (
        <nav className="mt-6">
            <ul className="flex justify-center items-center space-x-2">
                <li>
                    <button
                        className="px-3 py-1 rounded-md bg-orange-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Trước
                    </button>
                </li>

                {visiblePages.map((page, index) => (
                    <li key={index}>
                        {page === '...' ? (
                            <span className="px-3 py-1 text-gray-500">...</span>
                        ) : (
                            <button
                                className={`px-3 py-1 rounded-md ${
                                    currentPage === page
                                        ? 'bg-orange-700 text-white'
                                        : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                }`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}

                <li>
                    <button
                        className="px-3 py-1 rounded-md bg-orange-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Sau
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination
