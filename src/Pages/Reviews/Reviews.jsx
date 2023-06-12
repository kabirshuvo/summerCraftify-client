import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://summer-craftify-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mb-16">
      <SectionTitle title={"Parents Say"} heading={"Testimonials"}></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="m-40 flex flex-col text-center items-center gap-7">
              <div>
                <img style={{ width: "7rem", height: "7rem", borderRadius: "50%" }} src={review.image} alt="" />
              </div>
              <h3 className="text-2xl text-amber-200">{review.username}</h3>
              <p className="py-4">{review.comment}</p>
              <Rating
                initialRating={review.rating}
                emptySymbol={<span className="text-yellow-300">&#9734;</span>}
                fullSymbol={<span className="text-yellow-300">&#9733;</span>}
                readonly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
