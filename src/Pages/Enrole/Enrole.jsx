import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImage from "../../assets/heroImages/07.jpg";
import useClases from "../../hooks/useClases";
import Cover from "../../shared/Cover/cover";
import EnroleTab from "./EnroleTab";

const Enrole = () => {
  const categories = [
    "adventure",
    "artistry",
    "crafting",
    "creations",
    "sunshine",
    "explorations",
    "paperparadise",
  ];
  const { categoryName } = useParams();

  const initialIndex = categories.indexOf(categoryName);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [classes] = useClases();

  // console.log(categoryName)

  const ecoArtAdventure = classes.filter(
    (cls) => cls.categoryName === "adventure"
  );
  const tropicalArtistry = classes.filter(
    (cls) => cls.categoryName === "artistry"
  );
  const craftyCritters = classes.filter(
    (cls) => cls.categoryName === "crafting"
  );
  const sunnyCreations = classes.filter(
    (cls) => cls.categoryName === "creations"
  );
  const sunShineStudio = classes.filter(
    (cls) => cls.categoryName === "sunshine"
  );
  const imaginativeExplorations = classes.filter(
    (cls) => cls.categoryName === "explorations"
  );
  const paperParadise = classes.filter(
    (cls) => cls.categoryName === "paperparadise"
  );

  return (
    <div>
      <Cover image={coverImage} title="Find Your Dream Class At Summer"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Adventure</Tab>
          <Tab>Artistry</Tab>
          <Tab>Crafting</Tab>
          <Tab>creations</Tab>
          <Tab>Sunshine-Studio</Tab>
          <Tab>Explorations</Tab>
          <Tab>Paper-Paradise</Tab>
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
