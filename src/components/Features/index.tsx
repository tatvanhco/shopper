import React from 'react';
import { FiLock, FiRepeat, FiTag, FiTruck } from 'react-icons/fi';
import Feature, { FeatureProps } from './Feature';

const Features = () => {
    const featureData: FeatureProps[] = [
        {
            icon: <FiTruck className="text-secondColor" size={'19'} />,
            title: 'Nhin cai quan dui ne',
            descript: 'Kkha cute',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'FREE RETURNS',
            descript: 'Hoàn trả tiền trong 30 days',
        },
        {
            icon: <FiLock className="text-secondColor" size={'19'} />,
            title: 'SECURE SHOPPING',
            descript: 'Đưa đến tận tay khách hàng',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'FREE RETURNS',
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
