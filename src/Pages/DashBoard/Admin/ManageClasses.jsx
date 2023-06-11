import { useState } from "react";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClases from "../../../hooks/useClases";

const ManageClasses = () => {
  const [classes, , refetch] = useClases();
  const [axiosSecure] = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(7);

  const handleAproved = (cls) => {
    console.log(cls._id);
  };

  const handleDelete = (cls) => {
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
        axiosSecure.delete(`/summerclasses/${cls._id}`).then((res) => {
          console.log("deleted response", res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }

          refetch();
        });
      }
    });
  };

  // Pagination
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = classes.slice(indexOfFirstClass, indexOfLastClass);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="py-16 w-3/4">
      <SectionTitle
        heading={"Manage All Classes"}
        title={"Managing Classes Should be wise"}
      />
  
      <div>
        {currentClasses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-base text-teal-700">#</th>
                  <th className="text-base text-teal-700">Class</th>
                  <th className="text-base text-teal-700 text-center">Name</th>
                  <th className="text-base text-teal-700">Short Description</th>
                  <th className="text-base text-teal-700">Approve</th>
                  <th className="text-base text-red-500">Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentClasses.map((cls, index) => (
                  <tr key={cls._id}>
                    <td className="text-info text-">{index + 1}</td>
                    <td>
                      <img
                        style={{
                          width: "7rem",
                          height: "4rem",
                          borderRadius: "5%",
                        }}
                        src={cls?.image}
                        alt=""
                      />
                    </td>
                    <td className="text-info text-">{cls.className}</td>
                    <td className="text-info text-">{cls.description}</td>
                    <td>
                      <button
                        onClick={() => handleAproved(cls)}
                        className="text-warning ms-4"
                      >
                        <FaUpload />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(cls)}
                        className="text-red-500 ms-4"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastClass >= classes.length}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>No classes found.</div>
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
