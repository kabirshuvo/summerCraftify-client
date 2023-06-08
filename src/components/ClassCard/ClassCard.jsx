const ClassCard = ({ cls }) => {
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
  } = cls;



  const handleAddtoEnrole = cls => {
    console.log(cls)
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img style={{width: '100%', height: '17rem'}}
            src={image}
            alt={className}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>{description}</p>
          <p>{fees}</p>
          <div className="card-actions justify-end">
            <button onClick={()=> handleAddtoEnrole(cls)}  className="btn btn-ghost border-b-4 border-gray-950 ">Enrole Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
