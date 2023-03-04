import axios from "axios";
import config from "../utils/config";
import useSWR from 'swr';

const fetcher = url => axios.get(`${config.API}${url}`).then(res => res.data)

function publicRecipes (page) {
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

