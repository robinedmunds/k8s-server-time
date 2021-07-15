import axios from "axios"

export default async () => {
  const apiURL = process.env.API_URL || "/"
  const apiPort = `:${process.env.apiPort}` || ""
  const response = await axios.get(`${apiURL}${apiPort}`)
  const datetime = new Date(response.data.data.datetime)
  return datetime
}
