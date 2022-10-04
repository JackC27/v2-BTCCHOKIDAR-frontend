import React, {useState} from "react";
import {FirebaseComponent} from "./FirebaseComponent";

export const App = () => {
  const [ name, setName ] = useState("Jack")
  return (
    <>
      <FirebaseComponent />
    </>
  );
}
