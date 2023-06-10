import {
  FaAddressBook,
  FaArrowLeft,
  FaBook,
  FaDemocrat,
  FaEnvelope,
  FaGift,
  FaHatCowboy,
  FaHome,
  FaUserAltSlash,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useEnrole from "../hooks/useEnrole";

const DashBoard = () => {
    const [enroled] = useEnrole()
    const [isAdmin] = useAdmin()
    
    // todo:have to load data
    // const isAdmin = true;
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center items-center ">
          <Outlet></Outlet>
          <label htmlFor="my-drawer" className="btn btn-success btn-outline drawer-button">
            <FaArrowLeft className="text-success text-3xl"></FaArrowLeft> Navigate me to
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay border-2 border-opacity-50  border-success"></label>
          <ul className="flex flex-col border-2  border-success border-opacity-40 justify-center menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}



            {
              isAdmin ? 
              <>
               <li>
              <Link to='/dashboard/adminhome'>
                <FaHatCowboy></FaHatCowboy> Admin Home
              </Link>
            </li>
            <li>
              <Link to='/dashboard/addnewcls'>
                <FaDemocrat></FaDemocrat> Add A New Class
              </Link>
            </li>
            <li>
              <Link to='/dashboard/manageclasses'>
                <FaDemocrat></FaDemocrat> Manage Classes
              </Link>
            </li>
            <li>
              <Link to='/dashboard/manageusers'>
                <FaDemocrat></FaDemocrat> Manage Users
              </Link>
            </li>
           
            <div className="divider"></div>
              
              </>
              :
              <>
                <li>
              <Link>
                <FaHatCowboy></FaHatCowboy> My Home
              </Link>
            </li>
            <li>
              <Link to='/dashboard/sellectedclasses'>
                <FaDemocrat></FaDemocrat> My Sellected Class
              </Link>
            </li>
            <li >
            
              <Link to='/dashboard/enroled'>
                <FaEnvelope></FaEnvelope> Enrolled Classes <span className="text-success text-xl bg-cyan-700 p-1 px-2 rounded-full">{enroled.length || 0}</span>
              </Link>
             
            </li>
            <div className="divider"></div>
              
              </>
            }



          

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
