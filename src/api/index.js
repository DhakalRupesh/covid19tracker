import axios from "axios";

const url = "https://corona.lmao.ninja/v3/covid-19/all";

export const getData = async () => {
  const {
    data: { cases, recovered, deaths },
  } = await axios.get(url);
};
