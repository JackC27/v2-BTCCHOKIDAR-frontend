import React, {useState} from "react";
import {FirebaseComponent} from "./FirebaseComponent";

export const App = () => {
  const [ name, setName ] = useState("Jack")
  return (
    <>
      <h1> BTC Chokidar </h1>
      <FirebaseComponent />
    </>
  );
}
