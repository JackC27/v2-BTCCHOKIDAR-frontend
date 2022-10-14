import React from "react";

const Watch = (props) => {
  let { link, order } = props; 
  return(
   <div className="watchNow">
      <a href={link} target="_blank">
        <p>Watch me now</p>
      </a>
      {/* <p style={{margin: "2px"}}>{order}</p>       */}
    </div>
  )
}

const DataRow = (props) => {
  let {title, host, guest, text} = props;
  return (
    <div className={"dataRow"}>
      <div>
        <p className={"title"}>{title}</p>
        <p>{host}</p>
        <p>{guest}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div> 
  )
}

export const Card = (props) => {
    const {host, link, guest, title, text, Order} = props.props.fields;
    return (
      <div className={"card"} >
        <DataRow title={title} host={host} guest={guest} text={text} />
        <Watch link={link} order={Order} />
      </div>
    )
}