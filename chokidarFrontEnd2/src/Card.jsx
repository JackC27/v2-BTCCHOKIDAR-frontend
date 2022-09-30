import React from "react";

export const Card = (props) => {
    const {host, link, guest, title, text} = props.props;
    return (
      <div className={"card"} key={Math.random().toString()} >
        <div style={{margin: "5px"}}>
          <div style={{display: "flex"}}>
            <p className={"title"}>{title}</p>
          </div>
          <div style={{display: "flex"}}>
            <p>host: {host}</p>
            <p>guest: {guest}</p>
          </div>
          <div style={{display: "flex"}}>                
            <p>link: {link} </p>
            <p>text: {text}</p>
          </div>
        </div>
      </div>
    )
}