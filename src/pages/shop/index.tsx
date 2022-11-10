import { data } from 'pages/shop/SideBar/SideBarShop';
import { ShopContent } from './content';
import { SideBar } from './SideBar';

export const ShopPage = () => {
    return (
        <div className="">
            <div className="lg:px-[2rem] xl:px-[20%] px-10 py-[4rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                    <div className="">
                        <SideBar data={data} />
                    </div>
                    <div className="col-span-2">
                        <ShopContent />
                    </div>
                </div>
            </div>
        </div>
    );
};
