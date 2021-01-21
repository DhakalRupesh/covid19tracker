import axios from "axios";

const url = "https://corona.lmao.ninja/v3/covid-19/all";

export const getData = async () => {
  const {
    data: { cases, recovered, deaths },
  } = await axios.get(url);
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(url);

//     const newData = data.map((dailyData) => ({
//       cases: dailyData.cases,
//       recovered: dailyData.recovered,
//       deaths: dailyData.deaths,
//     }));

//     return newData;
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    // looping the array data
    const modifiedData = data.map((dailyData) => ({
      cases: dailyData.cases,
      recovered: dailyData.recovered,
      deaths: dailyData.deaths,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
