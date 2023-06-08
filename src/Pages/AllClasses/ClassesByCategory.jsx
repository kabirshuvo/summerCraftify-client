import Cover from "../../shared/Cover/cover";
import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const ClassesByCategory = ({ cls, image, title }) => {

  return (
    <div>
      {title && <Cover image={image} title={title}></Cover>}
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
