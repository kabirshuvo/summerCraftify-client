import { FaTrashAlt, FaUpload } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClases from "../../../hooks/useClases";

const ManageClasses = () => {
  const [classes, , refetch] = useClases();
  const [axiosSecure] = useAxiosSecure();

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

  return (
    <div className="py-16 w-full">
      <SectionTitle
        heading={"Manage All Classes"}
        title={"Managing Classes Should be wise"}
      ></SectionTitle>

      <div>
        {classes.length}

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-base text-teal-700 ">#</th>
                <th className="text-base text-teal-700 ">Class</th>
                <th className="text-base text-teal-700 text-center">Name</th>
                <th className="text-base text-teal-700 ">Short Description</th>
                <th className="text-base text-teal-700 ">Approve</th>
                <th className="text-base text-red-500 ">Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
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
                      <FaUpload></FaUpload>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(cls)}
                      className="text-red-500 ms-4 "
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
