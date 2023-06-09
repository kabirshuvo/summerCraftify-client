import { FaPlaystation } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useEnrole from '../../hooks/useEnrole';
const Navbar = () => {
  const { user, logOut } = useAuth();

  const [enroled] = useEnrole();
  console.log(enroled)

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const userImage = user?.photoURL;
  const navOptions = (
    <>
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
        <Link to="/secret">Secret</Link>
      </li>

      <div className=" ms-40 mb-4">
        <button className="btn">
          <FaPlaystation></FaPlaystation>
          <div className="badge badge-info">{enroled.length || 0}</div>
        </button>
      </div>

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

     
    </>
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
          <Link to="/">...S.C... </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm btn-ghost">pay</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
