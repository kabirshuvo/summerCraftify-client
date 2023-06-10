import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        setCardError('');
        console.log('[PaymentMethod]', paymentMethod);
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
        //   disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-400 text-center mt-4">{cardError}</p>}
      {transactionId && (
        <p className="text-green-400">
          Transaction complete with TransactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
