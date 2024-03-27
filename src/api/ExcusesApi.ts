import axios from "axios";
import { ApiExcuseType, NewExcuseType } from "../types/ApiExcuseType";
//const url = "https://data.latelier.co/training/tennis_stats/headtohead.json";

//debut de l'url
const api_url = "http://localhost:5000";
//import { config } from "../../config";

// Recup des excuses aleatoires
export async function getRandomExcuse() {
  const res: ApiExcuseType = await axios.get(`${api_url}/api/randomExcuse`);
  return res;
}

export async function getAllExcuses() {
  //console.log("je suis dans api");
  const res = await axios.get(`${api_url}/api/excuses`);
  //console.log("response from api", res);
  return res;
}

// fonction de creation d'une excuse
/* export async function createOneExcuse(excuse: string) {
  console.log("je suis dans excuseApi", excuse);
  return axios
    .post(`${api_url}/api/excuses/create`, [excuse])
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
} */

export async function createNewExcuse(element: NewExcuseType) {
  console.log("je suis dans excuseApi", element);
  try {
    console.log("je suis dans le try de la function createNewExcuse");
    const response = await axios.post(`${api_url}/api/addExcuse`, [element]);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la création de l'excuse :",
      error
    );
    throw error; // Vous pouvez choisir de relancer l'erreur ou de la gérer différemment ici
  }
}
