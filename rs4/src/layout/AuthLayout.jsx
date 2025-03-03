import { Outlet } from 'react-router';
import LeftSideBar from '../shared/LeftSideBar/LeftSideBar';

const AuthLayout = () => {

    return (
        <div className="flex justify-start items-start">
            <div>
                <LeftSideBar />
            </div>
            <div className="bg-secondary w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;