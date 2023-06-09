import {
  FaAddressBook,
  FaBook,
  FaDemocrat,
  FaEnvelope,
  FaGift,
  FaHatCowboy,
  FaHome,
  FaUserAltSlash,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open Navigation
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="flex flex-col justify-center menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link>
                <FaHatCowboy></FaHatCowboy> My Home
              </Link>
            </li>
            <li>
              <Link>
                <FaDemocrat></FaDemocrat> My Sellected Class
              </Link>
            </li>
            <li>
              <Link>
                <FaEnvelope></FaEnvelope> My Enrolled Class
              </Link>
            </li>
            <div className="divider"></div>
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <FaAddressBook></FaAddressBook> about Us
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <FaUserAltSlash></FaUserAltSlash> Instructors
              </Link>
            </li>
            <li>
              <Link to="/summerclasses">
                <FaBook></FaBook> Summer Classes
              </Link>
            </li>
            <li>
              <Link to="/enrole/adventure">
                <FaGift></FaGift> Enrole
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
