import React, {useEffect, useState} from "react";
import { queryFirebase } from "./main"; //firestore(google)
import { callAirtable, testCall } from "./main"; //functions -> Airtable -> functions -> UI
import { Card } from "./Card"


export const FirebaseComponent = () => {
  let [results, setResults] = useState([]);

  useEffect( () => {
    callAirtable()
    .then( (data) => {
      console.log(" Got em! ", data);
      let {records} = data;
      records ? setResults(records) : [];
    })
    .catch( e => {
      console.error( " ERR ", e);
    })    
  }, [])

  useEffect( () => {
    console.log(" THINGY ")
    testCall()
    .then( i => {
      console.log(" I ", i)
      return i;
    })
    .catch( e => {
      console.error(" ERR TESTCALL: ", e)
    })
  }, [])

  return (
    <div className={"cardContainer"}>      
      <h1> BTC Chokidar 1</h1>
      {results.map( (i, idx) => {
        return ( <Card props={i} key={idx} /> )
      })}
    </div> 
  )
}

