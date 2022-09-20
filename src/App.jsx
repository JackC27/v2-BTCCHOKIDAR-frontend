import React, {useState} from "react";
export const App = () => {
  const [ name, setName ] = useState("Jack")
  return (
    <>
      <h1>
        Hello {name}
      </h1>
    </>
  );
}
