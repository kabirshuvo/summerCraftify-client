import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const CheckOutForm = ({ totalFees, sellectedclasses }) => {
  useTitle('CheckOut || summerCraftify');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (totalFees > 0) {
      axiosSecure.post("/create-payment-intent", { totalFees }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [totalFees, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment Intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        totalFees,
        date: new Date(),
        quantity: sellectedclasses.length,
        classId: sellectedclasses.map((cls) => cls.classId),
        interesedIn: sellectedclasses.map((cls) => cls._id),
        instructor: sellectedclasses.map((cls) => cls.instructorName),
        status: "service pending",
        classesName: sellectedclasses.map((cls) => cls.className),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data?.insertedResult?.insertedId) {
          
          Swal.fire({
            title: "PaYment Received",
            text: "Now Your Money is in my pocket",
            imageUrl:
              "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "24px",
                color: "#336699",
                "::placeholder": {
                  color: "#336699",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-info btn-sm "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 text-center mt-4">{cardError}</p>
      )}
      {transactionId && (
        <p className="text-green-400 text-center mt-4">
          Transaction complete with TransactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
