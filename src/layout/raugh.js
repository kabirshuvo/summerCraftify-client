import useAppionments from "../hooks/useAppionments";


const { name, bio, image, specialization, email, phone, studentEnrolled } =
        instructor;
 


const handleAppointment = (instructor) => {
    if (user && user.email) {
        const newAppionment = { classId: _id, className, instructorName, image, fees, email: user.email  };
      fetch("https://summer-craftify-server.vercel.app/appionments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppionment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Appionment Added for Confirmation",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Get an appionment",
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