import React, { Component, useState } from "react"
import "sanitize.css"
import "../styles/App.scss"
import Time from "./components/Time"
import getServerTime from "./api/getServerTime"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {serverTime: new Date("1980-01-01T00:00:00")}
  }

  componentDidMount = () => {
    this.timerID = setInterval( () => this.tick(), 1000 )
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  tick = async () => {
    const datetime = await getServerTime()
    this.setState({
      serverTime: datetime
    })
  }

  render = () => {
    const serverTimeStr = this.state.serverTime.toTimeString()
    const split = serverTimeStr.split(" ")
    const time = split[0]
    const timezone = split.slice(1).join(" ")

    const formatedTime = {
      time,
      timezone
    }

    return (
      <div className="container">
        <div className="block">
          <h1>API Server Time</h1>
          <Time formatedTime={formatedTime} />
          <p>This is a two docker image Kubernetes demo. It comprises of a parcel, react, nginx, frontend. And a node, express backend json api which supplies the time.</p>
        </div>
      </div>
    )
  }
}

export default App
