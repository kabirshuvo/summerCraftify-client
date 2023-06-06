import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

import categorySlideImage1 from "../../assets/category_slider_image/silder-image-1.jpg";
import categorySlideImage2 from "../../assets/category_slider_image/silder-image-2.jpg";
import categorySlideImage3 from "../../assets/category_slider_image/silder-image-3.jpg";
import categorySlideImage4 from "../../assets/category_slider_image/silder-image-4.jpg";
import categorySlideImage5 from "../../assets/category_slider_image/silder-image-5.jpg";
import categorySlideImage6 from "../../assets/category_slider_image/silder-image-6.jpg";
import categorySlideImage7 from "../../assets/category_slider_image/silder-image-7.jpg";

const Category = () => {
  return (
    <>
      <div className="md:flex ">
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper my-40"
          >
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage1} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Eco-Art Adventures</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage2} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Sunshine Studio</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage3} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Tropical Artistry</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage4} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Imaginative Explorations</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage5} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Crafty Critters</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage6} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Paper Paradise</h3>
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-lg" src={categorySlideImage7} alt="" />
              <h3 className="text-3xl absolute z-10 uppercase ms-4 p-4 rounded bg-slate-700 bg-opacity-60 text-white">Sunny Creations</h3>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl">
            {" "}
            Welcome to <br /> Categorised Arts and Crafts Classes
          </h3>
          <div className="py-7 grid grid-cols-2 gap-4">
            <a className="p-4 btn btn-outline btn-info" href="">Eco-Art Adventures</a>
            <a className="p-4 btn btn-outline btn-info" href="">Sunshine Studio</a>
            <a className="p-4 btn btn-outline btn-info" href="">Tropical Artistry</a>
            <a className="p-4 btn btn-outline btn-info" href="">Imaginative Explorations</a>
            <a className="p-4 btn btn-outline btn-info" href="">Crafty Critters</a>
            <a className="p-4 btn btn-outline btn-info" href="">Paper Paradise</a>
            <a className="p-4 btn btn-outline btn-info" href="">Sunny Creations</a>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
