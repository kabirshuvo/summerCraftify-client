import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useEnrole from "../../../hooks/useEnrole";
import CheckOutForm from "./CheckOutForm";

// todo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaYments = () => {


const [enroled] = useEnrole();
const total = enroled.reduce((sum, item) => sum + item.fees, 0) 

const fees = parseFloat(total.toFixed(2))


  return (
    <div className="w-full my-16">
      <SectionTitle
        heading="PaYments PaYrasia"
        title="Pay more enjoy more"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOutForm fees={fees} enroled={enroled}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaYments;
