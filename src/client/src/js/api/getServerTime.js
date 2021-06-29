import axios from "axios"

export default () => {
  axios.get("http://localhost:3000/").then( res => console.log(res) )

  return "11:11:11"
}
