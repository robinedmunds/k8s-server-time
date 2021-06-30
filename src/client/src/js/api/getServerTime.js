import axios from "axios"

export default async () => {
  const response = await axios.get("http://localhost:3000/")
  const datetime = new Date(response.data.data.datetime)
  return datetime
}


// res.data.data.datetime