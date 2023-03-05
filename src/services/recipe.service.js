import axios from "axios";
import useSWR from 'swr';
import config from "../utils/config.js";

const fetcher = url => 
  axios.get(`${config.API}${url}`).then(res => res.data)

function publicRecipes(page) {
  const { data, error, isLoading } = useSWR(`/recipes?page=${page}`, fetcher)
 
  return {
    data,
    isLoading,
    error
  }
}

export default {
    publicRecipes
}

