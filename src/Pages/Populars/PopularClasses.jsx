import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const PopularClasses = () => {
  const [summerClasses] = useClases();
  const popularClasses = summerClasses.sort((a, b) => b.enrolledCount - a.enrolledCount).slice(0, 6);
  return (
    <section>
      <SectionTitle
        title={"Have a look on Popular classes"}
        heading={"Popular classes"}
      ></SectionTitle>
<div className="grid md:grid-cols-2">
{
    popularClasses.map(classes => <DisplaySummerClasses key={classes.id} classes={classes}></DisplaySummerClasses>)
}
</div>
    </section>
  );
};

export default PopularClasses;
