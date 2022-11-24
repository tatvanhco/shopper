import { BodyContent } from './bodyContent';
import { SlideShow } from './slideShow';

export const ShopContent = (props: any) => {
    const haha = props.data;
    console.log('sas', haha);

    return (
        <div className="w-full ">
            <div className=" mb-12">
                <SlideShow />
            </div>
            <div className="">
                <BodyContent choose={haha} />
            </div>
        </div>
    );
};
