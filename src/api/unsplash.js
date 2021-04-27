import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vo9yz1dBjqFddDQ0mwMjsHfveVv5872AKZEb82RoMm4",
  },
});
