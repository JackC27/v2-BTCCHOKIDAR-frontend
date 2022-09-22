import React, {useEffect, useState} from "react";
import { queryFirebase, addDocumentToFirebase } from "./main";

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
    <div>
      <div>
        {results.map( ({host, link, guest, title, text}, idx) => { 
          return (
            <div key={idx}>
              <p>{host}</p>
              <p>{link} </p>
              <p>{guest}</p>
              <p>{title}</p>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div> 
  )
}

