import React from "react"

const Time = (props) => (
  <>
    <div className="time">{props.formatedTime.time}</div>
    <div className="timezone">{props.formatedTime.timezone}</div>
  </>
)

export default Time
