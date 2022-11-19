import * as productServices from 'services/productServices';

interface SuggestCardProps {
    items: productServices.Product;
}

export const SuggestCard = ({ items }: SuggestCardProps) => {
    return (
        <>
            <div className="mx-5">
                <img
                    className="max-w-[15rem] bg-clip-content bg-center bg-no-repeat bg-cover"
                    src={items?.avt}
                    alt=""
                />
                <div className="">
                    <span>tên thể loại ở đây</span>
                    <div className="font-semibold">
                        <a href="">{items?.name}</a>
                    </div>
                    <div className="text-[#767676] font-semibold"> {items?.price} </div>
                </div>
            </div>
        </>
    );
};
