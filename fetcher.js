import axios from "axios";

export const fetcher = (URL)=>{
    axios
      .get(URL, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        return {joke : res.data}
      })
}