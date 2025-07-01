import {
  openWeather_BASE_URL,
  openWeather_BASE_URL_GEO,
  openWeather_API_KEY,
  newsAPI_BASE_URL,
  newsAPI_API_KEY,
  pixabay_BASE_URL,
  pixabay_API_KEY,
} from "./axiosData";
import axios from "axios";

export const fetchCoords = async (city = "Kyiv", type = "direct") => {
  const response = await axios.get(
    `${openWeather_BASE_URL_GEO}/${type}?q=${city}&appid=${openWeather_API_KEY}`
  );

  return response.data;
};

export const fetchWeather = async (lattitude, longitude, type = "weather") => {
  const response = await axios.get(
    `${openWeather_BASE_URL}/${type}?lat=${lattitude}&lon=${longitude}&units=metric&appid=${openWeather_API_KEY}`
  );
  return response.data;
};

export const fetchNews = async (keyword, type = "everything", perPage = 10) => {
  try {
    const response = await axios.get(
      `${newsAPI_BASE_URL}/${type}?q=${keyword}&pageSize=${perPage}&apiKey=${newsAPI_API_KEY}`
    );
    return {
      articles: response.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage
      }))
    };
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.data.message || 'Failed to fetch news'}`);
    }
    throw new Error('Network error: Please try again later');
  }
};

export const fetchImages = async (query, page=1, perPage=5) => {
  const response = await axios.get(
    `${pixabay_BASE_URL}/?q=${query}&page=${page}&per_page=${perPage}&key=${pixabay_API_KEY}`
  );
  return response.data;
};
