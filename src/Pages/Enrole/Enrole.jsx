import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImage from "../../assets/heroImages/07.jpg";
import useClases from "../../hooks/useClases";
import Cover from "../../shared/Cover/cover";
import EnroleTab from "./EnroleTab";

const Enrole = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [classes] = useClases();

  const { categoory } = useParams();
  console.log(categoory)

  const ecoArtAdventure = classes.filter((cls) => cls.categoryId === 1);
  const tropicalArtistry = classes.filter((cls) => cls.categoryId === 2);
  const craftyCritters = classes.filter((cls) => cls.categoryId === 3);
  const sunnyCreations = classes.filter((cls) => cls.categoryId === 4);
  const sunShineStudio = classes.filter((cls) => cls.categoryId === 5);
  const imaginativeExplorations = classes.filter((cls) => cls.categoryId === 6);
  const paperParadise = classes.filter((cls) => cls.categoryId === 7);

  return (
    <div>
      <Cover image={coverImage} title="Find Your Dream Class At Summer"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Eco Art Adventure</Tab>
          <Tab>Tropical Artistry</Tab>
          <Tab>Crafty Critters</Tab>
          <Tab>Sunny Creations</Tab>
          <Tab>Sunshine Studio</Tab>
          <Tab>Imaginative Explorations</Tab>
          <Tab>Paper Paradise</Tab>
        </TabList>

        <TabPanel>
          <EnroleTab classes={ecoArtAdventure}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={tropicalArtistry}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={craftyCritters}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={sunnyCreations}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={sunShineStudio}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={imaginativeExplorations}></EnroleTab>
        </TabPanel>
        <TabPanel>
          <EnroleTab classes={paperParadise}></EnroleTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Enrole;
