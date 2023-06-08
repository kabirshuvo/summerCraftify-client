

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

  const availableSeats = totalSeats - enrolledCount;
  const isEnrollmentDisabled = availableSeats === 0;

  const cardStyle = {
    backgroundColor: isEnrollmentDisabled ? '#e63c3c' : '#282828',
  };

  const handleAddtoEnrole = classes => {
    console.log(classes)
  }
  return (
    <div className="border-accent m-2 relative card card-side bg-base-100 shadow-xl" style={cardStyle}>
      <figure className="card-image">
        <img
          className="rounded-lg -p-2 m-4"
          style={{ width: '7rem', height: '7rem' }}
          src={image}
          alt={className}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-warning text-opacity-70">{className}</h2>
        <p className="text-info text-opacity-90">
          <span className="text-info text-opacity-40">Instructor:</span> {instructorName}
        </p>
        <p>
          <span className="text-info text-opacity-40">Class Duration:</span> {classDuration} <br />{' '}
          <span className="text-info text-opacity-40">Course Duration:</span> {courseDuration}{' '}
          <br /> <span className="text-info text-opacity-40">Fees: $</span>
          {fees}
        </p>
        <p>
          <small>
            <span className="text-info text-opacity-40">Description:</span> {description}
          </small>
        </p>
        <p className="text-success">
          <span className="text-info text-opacity-40">Total Seats:</span> {totalSeats} :{' '}
          <span className="text-info text-opacity-40">Enrolled:</span> {enrolledCount}
        </p>
        <p>
          <span className="text-info text-opacity-40">Available Seats:</span> {availableSeats}
        </p>
        <div className="absolute right-10 opacity-60 justify-end">
          <button onClick={()=>handleAddtoEnrole(classes)} className="btn-xs btn btn-info btn-outline" disabled={isEnrollmentDisabled}>
            Enroll Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplaySummerClasses;
