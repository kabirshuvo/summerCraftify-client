import Category from "../../Category/Category";
import HeroSec from "../HeroSec/HeroSec";


const Home = () => {
    return (
        <div className="py-16">
            <section>
            <HeroSec></HeroSec>
            </section>
            <section>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;