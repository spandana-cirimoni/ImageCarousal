import React, { useState } from 'react';
import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpeg";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png"; 
import './ImageSlider.css';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = imageData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <div className='slider'>
      <button className='left-arrow' onClick={prevSlide} >&lt;</button>
      <button className='right-arrow' onClick={nextSlide} >&gt;</button>
      {imageData.map((data, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={data.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

const imageData = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
  { id: 4, image: Image4 }
];


export default ImageSlider;