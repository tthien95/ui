import axios from "axios";

export const sendCategorizeRequest = async (keywords) => {
  const response = await axios
    .post("http://localhost:3000/keywords", {
      inputKeywords: keywords,
    })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });

  return response;
};
