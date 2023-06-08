import { useState } from "react";
import Swal from "sweetalert2";

const DisplayInstructors = ({ instructor }) => {
  const { name, bio, image, specialization, email, phone, studentEnrolled } =
    instructor;

  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleAppointment = (instructor) => {
    if (instructor) {
      Swal.fire(
        "You are in our waiting List Que. Very soon you will be contacted."
      );
      setAppointmentConfirmed(true);
    }
  };

  return (
    <div className="border-accent m-2 p-4 card bg-base-100 shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            className="rounded-lg mb-4"
            style={{ width: "200px" }}
            src={image}
            alt={name}
          />
        </div>
        <div className="md:w-2/3 md:pl-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600 mb-4">{specialization}</p>
          <p className="mb-4">{bio}</p>
          <table className="w-full mb-4 py-8">
            <tbody>
              <tr>
                <td className="text-gray-600 pr-2">Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td className="text-gray-600 pr-2">Phone:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td className="text-gray-600 pr-2">Students Enrolled:</td>
                <td>{studentEnrolled}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end">
            <button
              onClick={() => handleAppointment(instructor)}
              className={`btn btn-outline btn-sm ${
                appointmentConfirmed ? "btn-success" : "btn-info"
              }`}
              disabled={appointmentConfirmed}
            >
              {appointmentConfirmed ? "Appointment Confirmed" : "Get Appointment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayInstructors;
