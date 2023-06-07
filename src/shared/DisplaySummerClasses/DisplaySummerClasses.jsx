const DisplaySummerClasses = ({ classes }) => {
    const {
      className,
      instructorName,
      image,
      totalSeats,
      enrolledCount,
      fees,
      description,
      classDuration,
      courseDuration,
    } = classes;
  
    return (
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="card-image">
          <img src={image} alt={className} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-warning text-opacity-70">{className}</h2>
          <p className="text-info text-opacity-70 ">Instructor: {instructorName}</p>
          <p>Class Duration: {classDuration} : Duration: {courseDuration} : Fees: {fees}</p>
          <p>Description: {description}</p>
          <p>Total Seats: {totalSeats} : Enrolled Count: {enrolledCount}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-outline">Enroll Me</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DisplaySummerClasses;
  