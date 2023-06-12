import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useEnrole from "../../hooks/useEnrole";

const ClassCard = ({ cls }) => {
  const { _id, className, image, fees, instructorName, description } = cls;
  const { user } = useAuth();
  const [, refetch] = useEnrole()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddtoEnrole = (cls) => {
    if (user && user.email) {
      const orderItem = { classId: _id, className, instructorName, image, fees, email: user.email  };
      fetch("https://summer-craftify-server.vercel.app/enroles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added to the Wish List",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enrole the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            style={{ width: "100%", height: "17rem" }}
            src={image}
            alt={className}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>{description}</p>
          <p>{fees}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddtoEnrole(cls)}
              className="btn btn-ghost border-b-4 border-gray-950"
            >
              Enroll Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
