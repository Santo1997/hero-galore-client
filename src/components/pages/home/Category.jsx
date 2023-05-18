import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CtgData from "./CtgData";

const Category = () => {
  return (
    <div>
      <h1 className="text-black font-bold text-4xl text-center mb-10">
        Shop by category
      </h1>
      <Tabs className="mb-3">
        <TabList className="grid grid-cols-3 justify-items-center w-1/3 mx-auto">
          <Tab className="btn btn-outline me-2">Title 1</Tab>
          <Tab className="btn btn-outline me-2">Title 2</Tab>
          <Tab className="btn btn-outline">Title 3</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-3 gap-3 mt-5">
          <CtgData />
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3">
          <CtgData />
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-3">
          <CtgData />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
