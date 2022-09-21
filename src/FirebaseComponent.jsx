import React, {useEffect, useState} from "react";
import { fuckAwait } from "./main";

export const FirebaseComponent = () => {
  const [results, setResults] = useState([]);
  useEffect( () => {
    fuckAwait()
    .then( i => {
      setResults(i)
    })
    .catch( e => {
      console.error( " ERR ", e);
    })
    
  }, [])

  return (
    <div>
      <p> Attempt to call firebase </p>
      <div>
        {results.map( ({host, link, guest, title, text}, idx) => { 
          return (
            <div key={idx}>
             {host} {link} {guest} {title} {text}
            </div>
          )
        })}
      </div>
    </div> 
  )
}

