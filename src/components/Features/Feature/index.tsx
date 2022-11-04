import React, { FC } from 'react';
import { FiTruck } from 'react-icons/fi';

export interface FeatureProps {
    icon: any;
    title: string;
    descript: string;
}
const Feature: FC<FeatureProps> = ({ icon, title, descript }) => {
    return (
        <div className="p-3">
            <div className="flex">
                {icon}
                <div className="ml-4">
                    <h6 className="text-sm mb-1 font-semibold uppercase tracking-wide">{title}</h6>
                    <p className="text-sm text-color767676">{descript}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
