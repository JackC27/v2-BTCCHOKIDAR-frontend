import React, {useEffect, useState} from "react";
import { callAirtable } from "./main"; //functions -> Airtable -> functions -> UI
import { Card } from "./Card"


export const FirebaseComponent = () => {
  let [results, setResults] = useState([]);

  useEffect( () => {
    callAirtable()
    .then( (data) => {
      let {records} = data;
      records ? setResults(records) : [];
    })
    .catch( e => {
      console.error( " ERR ", e);
    })    
  }, [])

  return (
    <div className={"cardContainer"}>      
      <h1> BTC Chokidar</h1>
      {
        results
        .sort( (a, b) => a.fields.Order - b.fields.Order)
        .map( ( i, idx ) => <Card props={i} key={idx} /> )
      }
    </div> 
  )
}

