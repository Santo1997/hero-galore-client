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

  const marvelItm = marvelCate.slice(0, 3);
  const dcItm = dcCate.slice(0, 3);
  const transfronItm = transformCate.slice(0, 3);

  return (
    <div>
      <h1 className="text-green-500 font-bold text-3xl lg:text-4xl text-center mb-10">
        Shop by category
      </h1>
      <Tabs className="mb-3">
        <TabList className="grid grid-cols-3 lg:justify-items-center w-full lg:w-1/3 lg:mx-auto">
          <Tab className="btn btn-outline btn-info me-2">Marvels Comics</Tab>
          <Tab className="btn btn-outline btn-info me-2">Dc Comics</Tab>
          <Tab className="btn btn-outline btn-info">Transformers</Tab>
        </TabList>

        <TabPanel className="grid lg:grid-cols-3 gap-3 mt-5">
          {marvelItm.map((marvel) => (
            <CtgData data={marvel} key={marvel._id} />
          ))}
        </TabPanel>
        <TabPanel className="grid lg:grid-cols-3 gap-3">
          {dcItm.map((dc) => (
            <CtgData data={dc} key={dc._id} />
          ))}
        </TabPanel>
        <TabPanel className="grid lg:grid-cols-3 gap-3">
          {transfronItm.map((transform) => (
            <CtgData data={transform} key={transform._id} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
