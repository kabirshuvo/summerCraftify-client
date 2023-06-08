import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ cls }) => {
  const { className, image, fees, description } = cls;

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddtoEnrole = (cls) => {
    if (user) {
      fetch("http://localhost:5000/enroles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cls), 
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("You are enrolled! Confirm it before it ends.");
          } else {
            Swal.fire({
              title: "Please Log In first",
              text: "Only geniuses enroll in the class",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Log In Now",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login");
              }
            });
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
