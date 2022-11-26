import React from 'react';
import { FiLock, FiRepeat, FiTag, FiTruck } from 'react-icons/fi';
import Feature, { FeatureProps } from './Feature';

const Features = () => {
    const featureData: FeatureProps[] = [
        {
            icon: <FiTruck className="text-secondColor" size={'19'} />,
            title: 'MIỄN PHÍ VẬN CHUYỂN',
            descript: 'Cho tất cả đơn hàng từ 100k',
        },
        {
            icon: <FiRepeat className="text-secondColor" size={'19'} />,
            title: 'MIỄN PHÍ ĐỔI TRẢ',
            descript: 'Hoàn trả trong vòng 30 ngày',
        },
        {
            icon: <FiLock className="text-secondColor" size={'19'} />,
            title: 'AN TOÀN GIAO NHẬN',
            descript: 'Trao tận tay khách hàng',
        },
        {
            icon: <FiTag className="text-secondColor" size={'19'} />,
            title: 'HƠN 500 MẪU',
            descript: 'Đa dạng phong cách',
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
