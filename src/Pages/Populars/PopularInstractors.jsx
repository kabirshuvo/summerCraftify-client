import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import DisplayInstructors from "../../shared/DisplayInstractors/DisplayInstractors";


const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [displayedInstructors, setDisplayedInstructors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.sort(
          (a, b) => b.studentEnrolled - a.studentEnrolled
        );
        setInstructors(popularInstructors);
        setDisplayedInstructors(popularInstructors.slice(0, 3));
      });
  }, []);

  const handleShowMore = () => {
    if (showAll) {
      setDisplayedInstructors(instructors.slice(0, 3));
    } else {
      setDisplayedInstructors(instructors);
    }
    setShowAll(!showAll);
  };

  return (
    <section>
      <SectionTitle title={"Our Popular Instructors"} heading={"Instructors"} />
      <h3>Popular instructors: Based on the number of students enrolled in their classes</h3>
      <div className="p-8">
        {displayedInstructors.map((instructor) => (
          <DisplayInstructors key={instructor.id} instructor={instructor} />
        ))}
        <button className="btn" onClick={handleShowMore}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default PopularInstructors;
