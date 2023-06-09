import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import heroImage1 from "../../../assets/heroImages/01.jpg";
import heroImage2 from "../../../assets/heroImages/02.jpg";
import heroImage3 from "../../../assets/heroImages/03.jpg";
import heroImage4 from "../../../assets/heroImages/04.jpg";
import heroImage5 from "../../../assets/heroImages/05.jpg";
import heroImage6 from "../../../assets/heroImages/06.jpg";
import heroImage7 from "../../../assets/heroImages/07.jpg";

const HeroSec = () => {
  return (
    <>
      <div className="mb-16">
        <Carousel>
          <div>
            <img src={heroImage3} />
          </div>
          <div>
            <img src={heroImage2} />
          </div>

          <div>
            <img src={heroImage1} />
          </div>
          <div>
            <img src={heroImage4} />
          </div>
          <div>
            <img src={heroImage5} />
          </div>
          <div>
            <img src={heroImage6} />
          </div>
          <div>
            <img src={heroImage7} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroSec;
