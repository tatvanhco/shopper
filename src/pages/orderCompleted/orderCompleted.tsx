import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { BodyContainer } from 'components/container';
import { Link } from 'react-router-dom';
export const OrderCompleted = () => {
    return (
        <BodyContainer>
            <div className="px-[13rem] py-[10rem]">
                <div className="mx-[20rem] mb-5 text-5xl">❤️</div>
                <h1 className="text-4xl font-semibold tracking-wider my-4 text-center">Đặt hàng thành công</h1>
                <p className="text-center text-xl mb-10">
                    Đơn hàng 673290789 của bạn đã được hoàn thành. Chi tiết đơn đặt hàng của bạn được hiển thị cho tài
                    khoản cá nhân của bạn.
                </p>
                <Link to="/order/account-orders" className="bg-black text-white p-4 ml-[17rem] mr-[16rem]">
                    Xem hóa đơn của tôi
                </Link>
            </div>
        </BodyContainer>
    );
};
