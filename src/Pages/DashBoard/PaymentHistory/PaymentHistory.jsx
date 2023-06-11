import { useEffect, useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch payments");
        }
        return res.json();
      })
      .then((data) => {
        setPayments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Payment History</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border">Email</th>
              <th className="px-4 py-2 bg-gray-200 border">Transaction ID</th>
              <th className="px-4 py-2 bg-gray-200 border">Fees</th>
              <th className="px-4 py-2 bg-gray-200 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id} className="text-center">
                <td className="px-4 py-2 border">{payment.email}</td>
                <td className="px-4 py-2 border">{payment.transactionId}</td>
                <td className="px-4 py-2 border">{payment.fees}</td>
                <td className="px-4 py-2 border">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
