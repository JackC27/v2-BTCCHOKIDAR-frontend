import React from "react";

export const Watch = () => {
  <div className="watch-button-containter">
    <p>Watch me now</p>
  </div>
}

export const Card = (props) => {
  console.log(" PROPS ", props);
    const {host, link, guest, title, text} = props.props.fields;
    return (
      <div className={"card"} >
        <div style={{margin: "5px"}}>
          <div style={{display: "flex"}}>
            <p className={"title"}>{title}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>{host}</p>
            <p>{guest}</p>
          </div>
          <div style={{display: "flex"}}>                
            <a href={link} ><p className="actionWatch"></p></a>
            <Watch />
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
}