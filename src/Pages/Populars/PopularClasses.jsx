import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const PopularClasses = () => {
  const [summerClasses, setSummerClasses] = useState([]);

  useEffect(() => {
    fetch("summerClasses.json")
      .then((res) => res.json())
      .then((data) => {
        // Data sorted based on enrolledCount and first 6 are displayed
        const popularSummerClasses = data.sort((a, b) => b.enrolledCount - a.enrolledCount).slice(0, 6);
        setSummerClasses(popularSummerClasses);
        // console.log(popularSummerClasses);
    
      });
  }, []);
  return (
    <section>
      <SectionTitle
        title={"Have a look on Popular classes"}
        heading={"Popular classes"}
      ></SectionTitle>
<div className="grid md:grid-cols-2">
{
    summerClasses.map(classes => <DisplaySummerClasses key={classes.id} classes={classes}></DisplaySummerClasses>)
}
</div>
    </section>
  );
};

export default PopularClasses;
