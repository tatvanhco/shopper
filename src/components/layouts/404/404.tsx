import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { BodyContainer } from 'components/container';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <BodyContainer>
            <div className="px-[13rem] py-[10rem]">
                <div className="ml-[48%] mb-5">
                    <SentimentVeryDissatisfiedOutlinedIcon className="notFound_icon w-6 h-6" />
                </div>
                <h1 className="text-4xl font-semibold tracking-wider my-4 text-center">404. Page not found.</h1>
                <p className="text-center text-xl mb-10">
                    Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.
                </p>
                <Link to="/home" className="bg-black text-white p-4 ml-[43%]">
                    Quay lại trang chủ
                </Link>
            </div>
        </BodyContainer>
    );
};
