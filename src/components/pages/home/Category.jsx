import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CtgData from "./CtgData";

const Category = ({ toysData }) => {
  const marvelCate = toysData.filter(
    (categor) => categor.category === "Marvel"
  );
  const dcCate = toysData.filter((categor) => categor.category === "DC");
  const transformCate = toysData.filter(
    (categor) => categor.category === "Transformers"
  );

  return (
    <div>
      <h1 className="text-black font-bold text-4xl text-center mb-10">
        Shop by category
      </h1>
      <Tabs className="mb-3">
        <TabList className="grid grid-cols-3 justify-items-center w-1/3 mx-auto">
          <Tab className="btn btn-outline me-2">Marvels Comics</Tab>
          <Tab className="btn btn-outline me-2">Dc Comics</Tab>
          <Tab className="btn btn-outline">Transformers</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-3 gap-3 mt-5">
          {marvelCate.map((marvel) => (
            <CtgData data={marvel} key={marvel._id} />
          ))}
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3">
          {dcCate.map((dc) => (
            <CtgData data={dc} key={dc._id} />
          ))}
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3">
          {transformCate.map((transform) => (
            <CtgData data={transform} key={transform._id} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
