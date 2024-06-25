import { sendRequest } from "../api";

export const getCartApi = () => {
  return sendRequest("GET", "https://veryfast.io/t/front_test_api.php")
  .then(data => {
    return JSON.parse(data)
  })
  .catch(error => error);
}