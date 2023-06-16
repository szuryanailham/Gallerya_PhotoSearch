import axios from "axios";

const client_id = process.env.REACT_APP_UNPLASH_KEY;
//  show random Image......
export const getRandomPhoto = async () => {
  const randomPhotos = await axios.get(`https://api.unsplash.com/photos?client_id=${client_id}&per_page=14`);

  return randomPhotos;
};
//  Search image .........
export const getSearchPhoto = async (query) => {
  const searchPhoto = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      lang: "id",
    },
    headers: {
      Authorization: `Client-ID ${client_id}`,
    },
  });
  return searchPhoto.data;
};
//  donwloand image system .......
export const DownloadImage = (url, nama) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${nama}`;
      document.body.appendChild(a);
      alert("image berhasil diunduh ....");
      a.click();
      a.remove();
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
};
