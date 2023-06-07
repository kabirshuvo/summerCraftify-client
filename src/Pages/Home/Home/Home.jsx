import Category from "../../Category/Category";
import PopularClasses from "../../Populars/PopularClasses";
import PopularInstructors from "../../Populars/PopularInstractors";
import HeroSec from "../HeroSec/HeroSec";


const Home = () => {
    return (
        <div className="py-16">
            <section>
            <HeroSec></HeroSec>
            </section>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
            <section>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;