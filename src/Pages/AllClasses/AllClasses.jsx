import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
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

  const ecoArtAdventure = classes.filter((cls) => cls.categoryName === 'adventure');
  const tropicalArtistry = classes.filter((cls) => cls.categoryName === 'artistry');
  const craftyCritters = classes.filter((cls) => cls.categoryName === 'crafting');
  const sunnyCreations = classes.filter((cls) => cls.categoryName === 'creations');
  const sunShineStudio = classes.filter((cls) => cls.categoryName === 'sunshine');
  const imaginativeExplorations = classes.filter((cls) => cls.categoryName === 'explorations');
  const paperParadise = classes.filter((cls) => cls.categoryName === 'paperparadise');

  return (
    <div>
      <section className="py-16">
        <div className="p-8">
          <SectionTitle
            heading="summer Classes"
            title="Summer classes are good"
          ></SectionTitle>
        </div>
        {/* <Cover image={heroImage1} title="ecoadventure"></Cover> */}
      </section>
      {/* Category ecoArtAdventure */}
      <ClassesByCategory cls={ecoArtAdventure} image={heroImage1} title={"adventure"}></ClassesByCategory>

      {/* Category tropicalArtistry */}
      <ClassesByCategory cls={tropicalArtistry} image={heroImage2} title="artistry"></ClassesByCategory>
      {/*category craftyCritters */}
      <ClassesByCategory cls={craftyCritters} image={heroImage3} title="crafting"></ClassesByCategory>
      {/*category sunnyCreations */}
      <ClassesByCategory cls={sunnyCreations} image={heroImage4} title="creations"></ClassesByCategory>
      {/*category sunShineStudio */}
      <ClassesByCategory cls={sunShineStudio} image={heroImage5} title="sunshine"></ClassesByCategory>
      {/*category imaginativeExplorations */}
      <ClassesByCategory cls={imaginativeExplorations} image={heroImage6} title="explorations"></ClassesByCategory>
      {/*category paperParadise */}
      <ClassesByCategory cls={paperParadise} image={heroImage7} title="paperparadise"></ClassesByCategory>
    </div>
  );
};

export default AllClasses;
