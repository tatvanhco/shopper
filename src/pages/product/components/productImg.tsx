import { SubProductImg } from './subProductImg';

export const ProductImg = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-yellow-200 ">
                    <div className="mb-4">
                        <img
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                            alt=""
                        />
                    </div>
                    <div> slider img</div>
                </div>
                <SubProductImg />
            </div>
        </>
    );
};
