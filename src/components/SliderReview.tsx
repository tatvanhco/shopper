import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { ProductItems } from 'data/ProductItems';

function SliderReview() {
    return (
       <div className='sliderReview bg-red-300'>
         <Slider>
          {ProductItems.map((item) => (
              <div className="card">
                  <div className="card-top">
                    <h1 className='font-semibold'>{item.name}</h1>
                  </div>
                  <div className="card-bottom">
                    <h3>{item.price}</h3>
                    <p>{item.category}</p>
                  </div>
              </div>
          ))}
         </Slider>   
       </div>
    );
}

export default SliderReview;
