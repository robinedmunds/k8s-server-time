import axios from "axios"

export default async () => {
  const apiURL = process.env.API_URL || ""
  let apiPort = ""
  if (process.env.PORT) {
    apiPort = `:${process.env.PORT}`
  } 
  const response = await axios.get(`${apiURL}${apiPort}`)
  const datetime = new Date(response.data.data.datetime)
  return datetime
}
