import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useEnrole from "../../hooks/useEnrole";
const DisplaySummerClasses = ({ classes }) => {
  const { user } = useAuth();
  const [, refetch] = useEnrole()
  
  const navigate = useNavigate();
  const location = useLocation();

  const {
    _id,
    className,
    instructorName,
    image,
    totalSeats,
    enrolledCount,
    fees,
    description,
    classDuration,
    courseDuration,
  } = classes;

  const availableSeats = totalSeats - enrolledCount;
  const isEnrollmentDisabled = availableSeats === 0;

  const cardStyle = {
    backgroundColor: isEnrollmentDisabled ? "#e63c3c" : "#282828",
  };

  // todo: bugs have to fixed: (twice click the button, mongodb is sending duplicating error)

  const handleAddtoEnrole = (cls) => {
    if (user && user.email) {
      const orderItem = { classId: _id, className, instructorName, image, fees, email: user.email  };
      fetch("http://localhost:5000/enroles", {
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
    <div
      className="border-accent m-2 relative card card-side bg-base-100 shadow-xl"
      style={cardStyle}
    >
      <figure className="card-image">
        <img
          className="rounded-lg -p-2 m-4"
          style={{ width: "7rem", height: "7rem" }}
          src={image}
          alt={className}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-warning text-opacity-70">{className}</h2>
        <p className="text-info text-opacity-90">
          <span className="text-info text-opacity-40">Instructor:</span>{" "}
          {instructorName}
        </p>
        <p>
          <span className="text-info text-opacity-40">Class Duration:</span>{" "}
          {classDuration} <br />{" "}
          <span className="text-info text-opacity-40">Course Duration:</span>{" "}
          {courseDuration} <br />{" "}
          <span className="text-info text-opacity-40">Fees: $</span>
          {fees}
        </p>
        <p>
          <small>
            <span className="text-info text-opacity-40">Description:</span>{" "}
            {description}
          </small>
        </p>
        <p className="text-success">
          <span className="text-info text-opacity-40">Total Seats:</span>{" "}
          {totalSeats} :{" "}
          <span className="text-info text-opacity-40">Enrolled:</span>{" "}
          {enrolledCount}
        </p>
        <p>
          <span className="text-info text-opacity-40">Available Seats:</span>{" "}
          {availableSeats}
        </p>
        <div className="absolute right-10 opacity-60 justify-end">
          <button
            onClick={() => handleAddtoEnrole(classes)}
            className="btn-xs btn btn-info btn-outline"
            disabled={isEnrollmentDisabled}
          >
            Enroll Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplaySummerClasses;
