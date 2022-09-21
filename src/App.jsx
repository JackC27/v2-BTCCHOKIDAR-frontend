import React, {useState} from "react";
import {FirebaseComponent} from "./FirebaseComponent";

export const App = () => {
  const [ name, setName ] = useState("Jack")
  return (
    <>
      <h1>
        Hello {name}
      </h1>
      <FirebaseComponent />
    </>
  );
}
