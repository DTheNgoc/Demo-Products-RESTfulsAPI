import React from 'react';

const ButtonAction = ({ onPrev, onNext, disabledPrev = false, disabledNext = false }) => {
    return (
        <div className="hidden md:block">
            <button
                onClick={onPrev}
                disabled={disabledPrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-400 opacity-50 hover:opacity-75 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed z-20"
                aria-label="Previous Slide"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={onNext}
                disabled={disabledNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-400 opacity-50 hover:opacity-75 text-white p-2 rounded-full shadow hover:bg-gray-700 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed z-20"
                aria-label="Next Slide"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default ButtonAction;
