import { FiX } from 'react-icons/fi';
import * as productServices from 'services/productServices';
interface WishlistCardProps {
    data: productServices.Product;
}

export const WishlistCard = ({ data }: WishlistCardProps) => {
    return (
        <div className="flex flex-col relative" key={data.id}>
            {/* Image product */}
            <div className="">
                <div className="top-5 right-5 absolute w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-secondColor">
                    <FiX />
                </div>
                <img src={data.avt} alt="" />
            </div>
            {/* Info product*/}
            <div className="p-6 px-0 flex flex-col items-center">
                <div className="font-semibold">
                    <a href="">{data.name}</a>
                </div>
                <div className="text-[#767676] font-semibold"> {data.price} </div>
            </div>
        </div>
    );
};
