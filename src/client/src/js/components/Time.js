import React from "react"

const Time = (props) => {
  return (
    <>
      <div className="time">{props.formatedTime.time}</div>
      <div className="locale">{props.formatedTime.locale}</div>
    </>
  )
}

export default Time
