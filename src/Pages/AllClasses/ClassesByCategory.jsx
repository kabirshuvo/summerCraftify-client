import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const ClassesByCategory = ({ cls }) => {
   
  return (
    <div>
      <div className="grid md:grid-cols-2">
        {cls.map((classes) => (
          <DisplaySummerClasses
            key={classes.id}
            classes={classes}
          ></DisplaySummerClasses>
        ))}
      </div>
    </div>
  );
};

export default ClassesByCategory;
