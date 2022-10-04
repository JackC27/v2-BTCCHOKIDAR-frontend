import React from "react";

export const Watch = () => {
  <div className="watch-button-containter">
    <p>W</p>
  </div>
}

export const Card = (props) => {
    const {host, link, guest, title, text} = props.props;
    return (
      <div className={"card"} key={Math.random().toString()} >
        <div style={{margin: "5px"}}>
          <div style={{display: "flex"}}>
            <p className={"title"}>{title}</p>
          </div>
          <div style={{display: "flex"}}>
            <p>{host}</p>
            <p>{guest}</p>
          </div>
          <div style={{display: "flex"}}>                
            <a href={link} ><p className="actionWatch">{Watch} </p></a>
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
}