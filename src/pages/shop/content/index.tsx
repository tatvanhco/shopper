import { BodyContent } from './bodyContent';
import { SlideShow } from './slideShow';

export const ShopContent = () => {
    return (
        <div className="w-full ">
            <div className=" mb-12">
                <SlideShow />
            </div>
            <div className="">
                <BodyContent />
            </div>
        </div>
    );
};
