import { useDispatch } from "react-redux";
import authServices from "../../appwrite/config";
import { logout } from "../../appwrite/auth";

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogOutBtn;
