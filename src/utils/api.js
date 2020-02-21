import Axios from "axios";
import { toast } from "react-toastify";
import { resetUser } from "../store/user/actions";

const baseURL = process.env.REACT_APP_API_URL;

// if process.env.CONTEXT = "production" {
//   Point to heroku API
// }
// if process.env.BRANCH = "develop" {
  // point to Heroku staging API
// }
// if process.env.CONTEXT = "deploy-preview" {
//   point to deploy-preview HEROKU API (the separate one)
// }



export const axiosWithAuth = token =>
  Axios.create({
    baseURL,
    headers: {
      Authorization: token
    }
  });

export const axios = Axios.create({ baseURL });

export const selectToken = state => state.currentUser.token;

export const showError = message => {
  toast.error(message);
};

export const showSuccess = message => {
  toast.success(message);
};

export function* handleError({ response }, put, history) {
  const { message, statusCode } = response.data;
  if (statusCode === 404) {
    history.push("/not-found");
  }
  if (message === "jwt expired") {
    yield put(resetUser());
  } else showError(`⚠️ ${message}`);
}
