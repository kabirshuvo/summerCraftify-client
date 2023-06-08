import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
import Cover from "../../shared/Cover/cover";
import ClassesByCategory from "./ClassesByCategory";

import heroImage1 from "../../assets/heroImages/01.jpg";
import heroImage2 from "../../assets/heroImages/02.jpg";
import heroImage3 from "../../assets/heroImages/03.jpg";
import heroImage4 from "../../assets/heroImages/04.jpg";
import heroImage5 from "../../assets/heroImages/05.jpg";
import heroImage6 from "../../assets/heroImages/06.jpg";
import heroImage7 from "../../assets/heroImages/07.jpg";

const AllClasses = () => {
  const [classes] = useClases();

  const ecoArtAdventure = classes.filter((cls) => cls.categoryId === 1);
  const tropicalArtistry = classes.filter((cls) => cls.categoryId === 2);
  const craftyCritters = classes.filter((cls) => cls.categoryId === 3);
  const sunnyCreations = classes.filter((cls) => cls.categoryId === 4);
  const sunShineStudio = classes.filter((cls) => cls.categoryId === 5);
  const imaginativeExplorations = classes.filter((cls) => cls.categoryId === 6);
  const paperParadise = classes.filter((cls) => cls.categoryId === 7);

  return (
    <div>
      <section className="py-16">
        <div className="p-8">
          <SectionTitle
            heading="summer Classes"
            title="Summer classes are good"
          ></SectionTitle>
        </div>
        <Cover image={heroImage1} title="ecoadventure"></Cover>
      </section>
      {/* Category ecoArtAdventure */}
      <ClassesByCategory cls={ecoArtAdventure} image={heroImage1}></ClassesByCategory>

      {/* Category tropicalArtistry */}
     
      <ClassesByCategory cls={tropicalArtistry} image={heroImage2} title="TropicalArtistry"></ClassesByCategory>

      {/*category craftyCritters */}
     
      <ClassesByCategory cls={craftyCritters} image={heroImage3} title="craftycritters"></ClassesByCategory>

      {/*category sunnyCreations */}
      
      <ClassesByCategory cls={sunnyCreations} image={heroImage4} title="sunnycreations"></ClassesByCategory>

      {/*category sunShineStudio */}
      
      <ClassesByCategory cls={sunShineStudio} image={heroImage5} title="sunshinestudio"></ClassesByCategory>

      {/*category imaginativeExplorations */}
     
      <ClassesByCategory cls={imaginativeExplorations} image={heroImage6} title="imaginativeexploration"></ClassesByCategory>

      {/*category paperParadise */}
     
      <ClassesByCategory cls={paperParadise} image={heroImage7} title="paperparadise"></ClassesByCategory>
    </div>
  );
};

export default AllClasses;
