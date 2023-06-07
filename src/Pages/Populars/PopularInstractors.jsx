import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import DisplayInstractors from "../../shared/DisplayInstractors/DisplayInstractors";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        // Sorted the instructors based on the number of students enrolled
        const popularInstructors = data.sort(
          (a, b) => b.studentEnrolled - a.studentEnrolled
        );
        setInstructors(popularInstructors);
      });
  }, []);

  return (
    <section>
      <SectionTitle title={"Our Popular Instructors"} heading={"Instructors"} />
      <h3>Popular instructors: Based on the number of students enrolled in their classes</h3>
      <div className="p-8">
        {instructors.map((instructor) => (
          <DisplayInstractors key={instructor.id} instructor={instructor}>
            
          </DisplayInstractors>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
