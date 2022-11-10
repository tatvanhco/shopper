import React from 'react';
import { ProductImages } from 'data/Productdb';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const SlideShow = () => {
    return (
        <div className="slide-container relative w-full mx-auto my-0">
            <Slide indicators={true} duration={1500}>
                {ProductImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div
                            className="w-full min-h-[400px] bg-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${slideImage.url})` }}
                        ></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};
