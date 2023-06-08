import { useEffect, useState } from "react";
import DisplayInstructors from "../../shared/DisplayInstractors/DisplayInstractors";


const AllInstructors = () => {
    const [instructors, setInstructors] = useState([]);



    useEffect(() => {
        fetch("instructors.json")
          .then((res) => res.json())
          .then((data) => {
           console.log(data)
            setInstructors(data);
          });
      }, []);




    return (
        <div>
            <h3>All Intructor page</h3>
            <div className="p-8">
        {instructors.map((instructor) => (
          <DisplayInstructors key={instructor.id} instructor={instructor} />
        ))}
       
      </div>
        </div>
    );
};

export default AllInstructors;