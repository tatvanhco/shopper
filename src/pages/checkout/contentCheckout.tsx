import { BillDetails } from './BillDetails';
import { Payment } from './Payment';
import { ShippDetail } from './ShippDetail';

export const ContentCheckOut = () => {
    return (
        <div className="col-span-2 md:px-0 px-8 md:mr-16">
            <BillDetails />
            <ShippDetail />
            <Payment />
        </div>
    );
};
