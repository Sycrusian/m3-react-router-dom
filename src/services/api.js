import axios from "axios";

export const fakeNews = axios.create({
  baseURL: "https://blog-fake-api.onrender.com",
  timeout: 8000
});

export const fakeContact = axios.create ({
  baseURL: "https://contact-fake-api.onrender.com",
  timeout: 8000
});

export const fakeFashion = axios.create ({
  baseURL: "https://fashion-store-api.onrender.com",
  timeout: 8000
});