import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";

// todo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaYments = () => {
  return (
    <div className="w-full my-16">
      <SectionTitle
        heading="PaYments PaYrasia"
        title="Pay more enjoy more"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaYments;
