import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt, FaUnity, FaUsersSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const ManageUsers = () => {
  useTitle('ManageUsers || summerCraftify');
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
 
   // Pagination logic
 
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // 

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `Now ${user.name} is an Admin`,
            text: "May be we got a new brain",
            imageUrl:
              "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Lets check it out",
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `Now ${user.name} is an instructor`,
            text: "May be we got a new brain",
            imageUrl:
              "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Lets check it out",
          });
        }
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            console.log("deleted response", res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The user has been deleted.",
                "success"
              );
            }
            refetch();
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the user.",
              icon: "error",
            });
          });
      }
    });
};

return (
  <div className="py-16 w-3/4">

    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-base text-teal-700 text-center">#</th>
            <th className="text-base text-teal-700 text-center">Image</th>
            <th className="text-base text-teal-700 text-center">Name</th>
            <th className="text-base text-teal-700 text-center">Email</th>
            <th className="text-base text-teal-700 text-center">Role</th>
            <th className="text-base text-teal-700 text-center">Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user._id}>
              <td className="text-info text-center">{index + 1}</td>
              <td>
                <img
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                  }}
                  src={user?.photoURL}
                  alt=""
                />
              </td>
              <td className="text-info text-center">{user.name}</td>
              <td className="text-info text-center">{user.email}</td>
              <td className="text-info text-center">
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-warning text-left me-2"
                    >
                      <FaUsersSlash />
                      Admin
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="text-success text-left me-2"
                    >
                      <FaUnity />
                      Instructor
                    </button>
                  </>
                )}
              </td>
              <td className="text-center">
                <button
                  onClick={() => handleDeleteUser(user)}
                  className="text-red-500 "
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


{/* Pagination */}
<div className="pagination flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array(Math.ceil(users.length / usersPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${
                currentPage === index + 1 ? "bg-blue-700" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastUser >= users.length}
        >
          Next
        </button>
      </div>
    </div>
);
};

export default ManageUsers;