import { BodyContainer } from 'components/container';
import { useState } from 'react';
import { ShopContent } from './content';
import { SideBar } from './SideBar';

export const ShopPage = () => {
    const [chooseCategory, setCategory] = useState('');
    const handleChange = (huhu: any) => {
        setCategory(huhu);
    };
    console.log('cho index nha', chooseCategory);

    return (
        <BodyContainer>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                    <div className="">
                        <SideBar handleChange={handleChange} />
                    </div>
                    <div className="col-span-2">
                        <ShopContent data={chooseCategory} />
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
};
