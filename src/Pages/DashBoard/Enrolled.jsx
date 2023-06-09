import Swal from "sweetalert2";
import useEnrole from "../../hooks/useEnrole";

const Enrolled = () => {
  const [enroled, refetch] = useEnrole();
  console.log(enroled);

  const totalFees = enroled.reduce((sum, cls) => cls.fees + sum, 0);

  const handleDelete = (classId) => {
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
        fetch(`http://localhost:5000/enroles/${classId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePay = (classId) => {
    // Implement your payment logic here
    console.log(`Paying for class with ID: ${classId}`);
  };

  return (
    <div className="flex justify-center items-center flex-col mb-40">
      <h3>Enrolled Class Count = {enroled.length}</h3>
      <p>Total Fees: ${totalFees}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {enroled.map((cls) => (
          <div key={cls._id} className="p-4 shadow-md rounded-md">
            <img
              style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
              src={cls.image}
              alt=""
            />
            <div className="mt-2">
              <h4 className="text-lg text-gray-700 font-bold">{cls.className}</h4>
              <p className="text-gray-700">Fees: ${cls.fees}</p>
              <p className="text-gray-700">Instructor: {cls.instructorName}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="btn btn-outline btn-xs btn-warning px-4 rounded-md"
                  onClick={() => handleDelete(cls._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info btn-xs btn-outline px-4 rounded-md"
                  onClick={() => handlePay(cls._id)}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrolled;
