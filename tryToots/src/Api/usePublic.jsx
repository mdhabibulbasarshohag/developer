import axios from "axios";

const gatVideo = () => {
  const url = "https://api.freeapi.app/api/v1/public/";
  const data = axios.create({
    baseURL: url,
  });
  return data;
};

export const usePublic = () => {
  return gatVideo();
};
