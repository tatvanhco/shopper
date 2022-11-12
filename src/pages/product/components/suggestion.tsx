import clsx from 'clsx';
import { TopProduct } from 'data/Productdb';

export const Suggestion = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold my-10">Có thể bạn sẽ thích</h2>
            <div className="max-w-[100rem]">
                <div className={clsx('flex')}>
                    {TopProduct.map((item, index) => {
                        return (
                            <div key={index} className="mx-5">
                                <img
                                    className="max-w-[15rem] bg-clip-content bg-center bg-no-repeat bg-cover"
                                    src={item.img}
                                    alt=""
                                />
                                <div className="">
                                    <span>{item.category}</span>
                                    <div className="font-semibold">
                                        <a href="">{item.name}</a>
                                    </div>
                                    <div className="text-[#767676] font-semibold"> {item.price} </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
