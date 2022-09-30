import React, {useEffect, useState} from "react";
import { queryFirebase } from "./main";
import { Card } from "./Card"


export const FirebaseComponent = () => {
  const [results, setResults] = useState([]);

  // useEffect( () => {
  //   addDocumentToFirebase();
  // }, [])

  useEffect( () => {
    queryFirebase()
    .then( i => {
      setResults(i)
    })
    .catch( e => {
      console.error( " ERR ", e);
    })
    
  }, [])

  return (
    <div className={"cardContainer"}>
        {results.map( (i, idx) => {
          return ( <Card props={i} /> )
        })}
    </div> 
  )
}

