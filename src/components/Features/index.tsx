import React from 'react';
import { FiRepeat, FiTruck } from 'react-icons/fi';
import Feature, { FeatureProps } from './Feature';

const Features = () => {
    const featureData: FeatureProps[] = [
        {
            icon: <FiTruck className="text-secondColor" size={'19'} />,
            title: 'FREE SHIPPING',
            descript: 'tất cả sản phẩm dưới 100.000 VND',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'FREE RETURNS',
            descript: 'Hoàn trả tiền trong 30 days',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'SECURE SHOPPING',
            descript: 'Đưa đến tận tay khách hàng',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'FREE RETURNS',
            descript: 'Chúng tôi có tất cả những gì bạn cần',
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
