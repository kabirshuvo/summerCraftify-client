import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUnity, FaUsersSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    title: `Now ${user.name} is an Admin`,
                    text: 'May be we got a new brain',
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Lets check it out',
                  })
            }
        })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                title: `Now ${user.name} is an instructor`,
                text: 'May be we got a new brain',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Lets check it out',
              })
        }
    })

  }

  const handledeleteUser = user => {
// todo: have to handle user 
  }

  return (
    <div>
      {users.length}

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
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="text-info text-">{index + 1}</td>
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
                <td className="text-info text-">{user.name}</td>
                <td className="text-info text-">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                  <>  <button onClick={() => handleMakeAdmin(user)} className="text-warning text-left me-2">
                  <FaUsersSlash></FaUsersSlash>Admin
                </button>
                <button onClick={() => handleMakeInstructor(user)} className="text-success text-left me-2"><FaUnity></FaUnity> Instructor</button></>
                  )}
                </td>
                <td>
                  <button onClick={()=> handledeleteUser(user)} className="text-red-500 ">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
