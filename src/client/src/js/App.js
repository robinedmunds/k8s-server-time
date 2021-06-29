import React, { Component } from "react"
import "sanitize.css"
import "../styles/App.scss"
import Time from "./components/Time"

class App extends Component {
  render() {
    const formatedTime = "77:77:77"

    return (
      <div class="container">
        <div class="block">
          <h1>API Server Time</h1>
          <Time formatedTime={formatedTime} />
          <p>This is a two docker image Kubernetes demo. It comprises of a parcel, react, nginx, frontend. And a node, express backend json api which supplies the time.</p>
        </div>
      </div>
    )
  }
}

export default App