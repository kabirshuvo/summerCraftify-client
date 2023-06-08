import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const PopularClasses = () => {
  const [summerClasses] = useClases();
  const popularClasses = summerClasses.sort((a, b) => b.enrolledCount - a.enrolledCount).slice(0, 6);
  return (
    <section>
     <div className="py-16">
     <SectionTitle
        title={"Have a look on Popular classes"}
        heading={"Popular classes"}
      ></SectionTitle>
     </div>
<div className="grid md:grid-cols-2 mb-16">
{
    popularClasses.map(classes => <DisplaySummerClasses key={classes.id} classes={classes}></DisplaySummerClasses>)
}
</div>
<Link to='/summerclasses'><button className="btn btn-square w-full ">View All Classes</button></Link>
    </section>
  );
};

export default PopularClasses;
