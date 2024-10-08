import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto' onClick={logout}>
            {!loading ? (
                <div className="flex">
                    <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
                    Logout
                </div>
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    );
};
export default LogoutButton;