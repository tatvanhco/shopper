import React from 'react';
import { FiLock, FiRepeat, FiTag, FiTruck } from 'react-icons/fi';
import Feature, { FeatureProps } from './Feature';

const Features = () => {
    const featureData: FeatureProps[] = [
        {
            icon: <FiTruck className="text-secondColor" size={'19'} />,
            title: 'FREE SHIPPING',
            descript: 'From all orders over $100',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'FREE RETURNS',
            descript: 'Return money within 30 days',
        },
        {
            icon: <FiLock className="text-secondColor" size={'19'} />,
            title: 'SECURE SHOPPING',
            descript: 'Youre in safe hands',
        },
        {
            icon: <FiTag className="text-secondColor" size={'19'} />,
            title: 'OVER 10,000 STYLES',
            descript: 'We have everything you need',
        },
    ];
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:mx-18 mx-12 pt-4 pb-4 border-b border-e5e5e5">
            {featureData.map((item: FeatureProps, index) => (
                <Feature {...item} key={index} />
            ))}
        </div>
    );
};

export default Features;
