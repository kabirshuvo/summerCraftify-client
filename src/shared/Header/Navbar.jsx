import { FaCanadianMapleLeaf, FaPaypal, FaPlaystation } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import useAdmin from '../../hooks/useAdmin';
import useAuth from "../../hooks/useAuth";
import useEnrole from '../../hooks/useEnrole';
import useInstructor from '../../hooks/useInstructor';
const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()
const [isInstructor] = useInstructor()
  const [enroled] = useEnrole()
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const userImage = user?.photoURL;
  const navOptions = (
    <div className='text-success flex'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutus">aboutUs</Link>
      </li>
      <li>
        <Link to="/instructors">instructors</Link>
      </li>

      <li>
        <Link to="/summerclasses">summerClasses</Link>
      </li>
      <li>
        <Link to="/enrole/adventure">Enrole</Link>
      </li>
      <li>
  <Link
    to={
      isAdmin
        ? "/dashboard/adminhome"
        : isInstructor
        ? "/dashboard/instructornhome"
        : "/dashboard/usershome"
    }
    onClick={() =>
      !isAdmin && !isInstructor && navigate("/dashboard/usershome")
    }
  >
    Dashboard
  </Link>

{/* 



to={isadmin ? <></> : <><>}

usershome


 */}


</li>

      <Link to='/dashboard/enroled' className=" mx-8 ">
        <button className="btn btn-xs mt-2 bg-opacity-20">
          <FaPlaystation className='text-xl text-amber-700'></FaPlaystation>
          <div className="badge badge-info">{enroled.length || 0}</div>
        </button>
      </Link>

      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-outline btn-xs mt-2">
            LogOut
          </button>

          <div className="mt-2 ps-2">
          <img
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              marginLeft: "4px",
            }}
            src={userImage}
            alt=""
          />
          </div>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

     
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="navbar fixed z-10 max-w-7xl bg-base-100 bg-opacity-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/"><FaCanadianMapleLeaf className='text-2xl text-success'></FaCanadianMapleLeaf></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/dashboard/payments' className="btn btn-sm btn-ghost text-success"> <FaPaypal></FaPaypal> PaY </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
