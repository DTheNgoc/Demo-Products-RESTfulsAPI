import React, { useEffect, useState } from 'react'
import ButtonAction from './ButtonAction'
import Slide from './Slide.'
import SlideIndicators from './SlideIndicators'
import slides from '../../../data/slides'
import '../../../assets/slide/style.css'

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % slides.length
    );
  };

  return (
    <section id='home' className='relative w-full overflow-hidden rounded-lg shadow-lg mt-6'>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
          />
        ))}
      </div>
      <SlideIndicators
        currentIndex={currentIndex}
        count={slides.length}
        onClick={setCurrentIndex}
      />
      <ButtonAction
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}

export default HeroSlider
