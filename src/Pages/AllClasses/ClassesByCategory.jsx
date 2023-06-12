import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Cover from "../../shared/Cover/cover";
import DisplaySummerClasses from "../../shared/DisplaySummerClasses/DisplaySummerClasses";

const ClassesByCategory = ({ cls, image, title }) => {

  useTitle('Category || summerCraftify');

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

     <Link to={`/enrole/${title}`}>
     
     <button className="btn btn-outline border-0 border-b-4 "> Enrole Now</button>     
     
     </Link>


    </div>
  );
};

export default ClassesByCategory;
