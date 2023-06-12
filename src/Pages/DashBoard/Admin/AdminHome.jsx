import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const AdminHome = () => {
  useTitle('AdminHome || summerCraftify');
  
  const [axiosSecure] = useAxiosSecure();
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const { data: status = {} } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-status");
      return res.data;
    },
  });

  const totalPayments = status.payments ? status.payments.length : 0;
  const totalPages = Math.ceil(totalPayments / pageSize);

  const handleClickPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paymentsToShow = status.payments ? status.payments.slice(start, end) : [];

 
  return (
    <div className="w-full py-16">
      <SectionTitle title="Welcome Home" heading="admin home" />
  
      <div className="flex justify-center py-16 text-3xl gap-7">
        <div>students: <span>{status.students}</span></div>
        <div>classes: <span>{status.classes}</span></div>
        <div>enrolled: <span>{status.enrolled}</span></div>
        <div>Revenue: <span>${status.revenue}</span></div>
      </div>
  
      {status.payments && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Payments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentsToShow.map((pay) => (
              <div key={pay._id} className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-2">Payment Details</h3>
                <p>
                  <span className="font-bold">Email:</span> {pay.email}
                </p>
                <p>
                  <span className="font-bold">Transaction ID:</span>{" "}
                  {pay.transactionId}
                </p>
                <p>
                  <span className="font-bold">Fees:</span> {pay.fees}
                </p>
                <p>
                  <span className="font-bold">Date:</span> {pay.date}
                </p>
                <p>
                  <span className="font-bold">Quantity:</span> {pay.quantity}
                </p>
                <p>
                  <span className="font-bold">Class Names:</span>{" "}
                  {pay.classesName.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Instructor:</span>{" "}
                  {pay.instructor.join(", ")}
                </p>
                <p>
                  <span className="font-bold">Status:</span> {pay.status}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md disabled:bg-gray-300"
              onClick={handleClickPrev}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-sm font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md disabled:bg-gray-300"
              onClick={handleClickNext}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
