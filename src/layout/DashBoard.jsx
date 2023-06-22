import { motion } from "framer-motion";
import {
  FaAddressBook,
  FaArrowLeft,
  FaBook,
  FaDemocrat,
  FaEnvelope,
  FaGift,
  FaHatCowboy,
  FaHome,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useEnrole from "../hooks/useEnrole";
import useInstructor from "../hooks/useInstructor";

const DashBoard = () => {
  const [enroled] = useEnrole();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  console.log("isAdmin", isAdmin);
  console.log("isInstructor", isInstructor);
  if (isAdminLoading || isInstructorLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center items-center ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="btn btn-success btn-outline drawer-button"
          >
            <motion.span
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaArrowLeft className="text-success text-xl" />
            </motion.span>
            Navigate me to
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay border-2 border-opacity-50  border-success"
          ></label>
          <ul className="flex flex-col border-2  border-success border-opacity-40 justify-center menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Routes for admin */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/adminhome">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaHatCowboy></FaHatCowboy>
                    </motion.span>{" "}
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageclasses">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaDemocrat></FaDemocrat>
                    </motion.span>
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers">
                    <FaDemocrat></FaDemocrat> Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymenthistory">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaDemocrat></FaDemocrat>
                    </motion.span>{" "}
                    Payment History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addnewcls">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaDemocrat></FaDemocrat>
                    </motion.span>{" "}
                    Add A New Class
                  </Link>
                </li>
                {/* Routes for instructor  isInstructor &&*/}

                <div className="divider"></div>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <Link to="/dashboard/instructornhome">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaHatCowboy></FaHatCowboy>
                    </motion.span>{" "}
                    Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addnewcls">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaDemocrat></FaDemocrat>
                    </motion.span>{" "}
                    Add A New Class
                  </Link>
                </li>
              </>
            )}
            <div className="divider"></div>
            {/* Routes for other users */}
            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <Link to="/dashboard/usershome">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaHatCowboy></FaHatCowboy>
                    </motion.span>
                    My Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/sellectedclasses">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaDemocrat></FaDemocrat>
                    </motion.span>
                    My Selected Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enroled">
                    <motion.span
                      initial={{ x: -10 }}
                      animate={{ x: 10 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FaEnvelope></FaEnvelope>
                    </motion.span>{" "}
                    Enrolled Classes{" "}
                    <span className="text-success text-xl bg-cyan-700 p-1 px-2 rounded-full">
                      {enroled.length || 0}
                    </span>
                  </Link>
                </li>
                <div className="divider"></div>
              </>
            )}

            {/* Common routes for all users */}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaHome></FaHome>
                </motion.span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaAddressBook></FaAddressBook>
                </motion.span>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaAddressBook></FaAddressBook>
                </motion.span>{" "}
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/summerclasses">
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaBook></FaBook>
                </motion.span>{" "}
                Summer Classes
              </Link>
            </li>
            <li>
              <Link to="/enrole/adventure">
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaGift></FaGift>
                </motion.span>
                Enroll
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
