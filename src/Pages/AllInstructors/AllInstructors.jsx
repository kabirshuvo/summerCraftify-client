import { useEffect, useState } from "react";
import DisplayInstructors from "../../shared/DisplayInstractors/DisplayInstractors";


const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);



    useEffect(() => {
        fetch("instructors.json")
          .then((res) => res.json())
          .then((data) => {
          //  console.log(data)
            setInstructors(data);
          });
      }, []);




    return (
        <div>
           
            <div className="p-8 mt-16">
        {instructors.map((instructor) => (
          <DisplayInstructors key={instructor.id} instructor={instructor} />
        ))}
       
      </div>
        </div>
    );
};

export default AllInstructors;