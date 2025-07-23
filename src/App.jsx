import React from "react";
import "./index.css";

import AlertGroup from "./components/ui/alerts/AlertGroup";

const App = () => {

  // customStyles={"bg-green-100 border-l-4 border-green-500 text-green-700"}
  return (
    <>
      <h1 className="text-2xl font-bold text-center p-2">Alert Components</h1>
      <AlertGroup />
      <hr />
    </>
  );
};

export default App;
