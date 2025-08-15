import React from 'react'

function SlideIndicators({ currentIndex, count, onClick }) {
    return (
        <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={onClick}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300`}
                ></button>
            ))}
        </div>
    )
}

export default SlideIndicators
