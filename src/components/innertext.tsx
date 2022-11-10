import { Outlet } from 'react-router-dom';

export const InnerText = () => {
    return (
        <div className="InnerText">
            <Outlet />
        </div>
    );
};
