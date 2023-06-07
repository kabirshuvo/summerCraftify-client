import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
import Cover from "../../shared/Cover/cover";
import ClassesByCategory from "./ClassesByCategory";

import heroImage1 from '../../assets/heroImages/01.jpg';
import heroImage2 from '../../assets/heroImages/02.jpg';
import heroImage3 from '../../assets/heroImages/03.jpg';
import heroImage4 from '../../assets/heroImages/04.jpg';
import heroImage5 from '../../assets/heroImages/05.jpg';
import heroImage6 from '../../assets/heroImages/06.jpg';
import heroImage7 from '../../assets/heroImages/07.jpg';

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
      <h3>All Classes: data will be loaded here</h3>
      <section className="py-16">
      <Cover image={heroImage1} title='Eco Art Adventure'></Cover>
        <SectionTitle heading='summer Classes' title='Summer classes are good'></SectionTitle>
      </section>
{/* Category ecoArtAdventure */}
<ClassesByCategory cls={ecoArtAdventure}></ClassesByCategory>


{/* Category tropicalArtistry */}
<Cover image={heroImage2} title='Tropical Artistry'></Cover>
<ClassesByCategory cls={tropicalArtistry}></ClassesByCategory>


{/*category craftyCritters */}
<Cover image={heroImage3} title='Crafty Critters'></Cover>
<ClassesByCategory cls={craftyCritters}></ClassesByCategory>


{/*category sunnyCreations */}
<Cover image={heroImage4} title='Sunny Creations'></Cover>
<ClassesByCategory cls={sunnyCreations}></ClassesByCategory>


{/*category sunShineStudio */}
<Cover image={heroImage5} title='Sunshine Studio'></Cover>
<ClassesByCategory cls={sunShineStudio}></ClassesByCategory>


{/*category imaginativeExplorations */}
<Cover image={heroImage6} title='Imaginative Exploration'></Cover>
<ClassesByCategory cls={imaginativeExplorations}></ClassesByCategory>


{/*category paperParadise */}
<Cover image={heroImage7} title='Paper Paradise'></Cover>
<ClassesByCategory cls={paperParadise}></ClassesByCategory>








    </div>
  );
};

export default AllClasses;
