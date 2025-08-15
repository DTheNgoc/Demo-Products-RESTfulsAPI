import React from 'react'

function Slide({ slide }) {
    return (
        <div className='relative w-full flex-shrink-0'>
            <img
                src={slide.image}
                alt={slide.title}
                className='w-full h-96 object-cover'
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 animate-fade-in-up">
                    {slide.title}
                </h2>
                <p className="text-white text-lg md:text-xl max-w-2xl animate-fade-in-up delay-200">
                    {slide.description}
                </p>
            </div>
        </div>
    )
}

export default Slide;
