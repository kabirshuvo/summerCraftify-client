import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClases from "../../hooks/useClases";
import ClassesByCategory from "./ClassesByCategory";

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
        <SectionTitle heading='summer Classes' title='Summer classes are good'></SectionTitle>
      </section>



<ClassesByCategory cls={ecoArtAdventure}></ClassesByCategory>






    </div>
  );
};

export default AllClasses;
