import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://summer-craftify-server.vercel.app/payments", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch payments");
        }
        return res.json();
      })
      .then((data) => {
        // Sort the payments by date in descending order (recent first)
        const sortedPayments = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPayments(sortedPayments);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const deletePayment = (paymentId) => {
    Swal.fire({
        title: 'Are you sure, You Want to delete this?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'delete',
        denyButtonText: `Don't delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    // Delete the payment with the given paymentId
    // todo: have to Implement delete logic here
    // After successful deletion, you can update the payments state or make a new API request to refresh the data
    console.log(`Delete payment with ID: ${paymentId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Payment History</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-green-200 border">Email</th>
              <th className="px-4 py-2 bg-green-200 border">Transaction ID</th>
              <th className="px-4 py-2 bg-green-200 border">Fees</th>
              <th className="px-4 py-2 bg-green-200 border">Date</th>
              <th className="px-4 py-2 bg-green-200 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id} className="text-center">
                <td className="px-4 py-2 border">{payment.email}</td>
                <td className="px-4 py-2 border">{payment.transactionId}</td>
                <td className="px-4 py-2 border">{payment.fees}</td>
                <td className="px-4 py-2 border">{payment.date}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => deletePayment(payment._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
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

export default Payments;
