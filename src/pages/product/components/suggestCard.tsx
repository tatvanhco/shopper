import * as productServices from 'services/productServices';

interface SuggestCardProps {
    items: productServices.Product;
}

export const SuggestCard = ({ items }: SuggestCardProps) => {
    return (
        <>
            <div className="flex flex-col relative xl:w-[18rem] xl:m-auto">
                <div className="">
                    <img className=" bg-clip-content bg-center bg-no-repeat bg-cover" src={items?.avt} alt="" />
                </div>
                <div className="p-6 flex flex-col items-center">
                    <span>tên thể loại ở đây</span>
                    <div className="text-center font-semibold">
                        <a href="">{items?.name}</a>
                    </div>
                    <div className="text-[#767676] font-semibold"> {items?.price} </div>
                </div>
            </div>
        </>
    );
};
