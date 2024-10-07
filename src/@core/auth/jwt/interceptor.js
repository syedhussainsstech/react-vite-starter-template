// ** Axios
import axios from "axios";
import { toast } from "react-hot-toast";

// ** jwt services
import jwtService from "./jwtService";

// ** config
import jwtDefaultConfig from "./jwtDefaultConfig";
import { ErrorToast } from "@utils";

const { getToken, setToken, setRefreshToken } = new jwtService();

// create an axios instance
const axiosInstance = axios.create({
  baseURL: jwtDefaultConfig.apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// create another axios instance without the interceptor for refreshToken call
const axiosInstanceNoInterceptor = axios.create({
  baseURL: jwtDefaultConfig.apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ToastErrorHandler = (data) => {
  toast(() => <ErrorToast text={data} />, {
    duration: 5000,
    position: "top-center",
    style: {
      backgroundColor: "#fa4858",
    },
  });
};

// Refresh Token functionality
const refreshToken = async () => {
  const { getRefreshToken, getUserData } = new jwtService();

  const refreshToken = getRefreshToken();
  const userData = JSON.parse(getUserData());

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  try {
    const response = await axiosInstanceNoInterceptor.post(
      `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.refreshEndpoint}`,
      {
        Token: refreshToken,
        UserName: userData.email,
      }
    );
    return response.data;
  } catch (err) {
    throw new Error("Failed to refresh the token");
  }
};

// add a request interceptor to attach the token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// add a response interceptor to handle error responses and refresh the token
axiosInstance.interceptors.response.use(
  async (response) => {
    // if (typeof response.data.Data)
    //   if (response.data.Data === "invalid user credentials") {
    //     ToastErrorHandler(`Error: ${response.data.Data}`);
    //     return Promise.reject(`Error: ${response.data.Data}`);
    //     // return "Error";
    //   }
    // if (response.data.Data === "DUPLICATEENTRY") {
    //   ToastErrorHandler(`Error: ${response.data.Data}`);
    //   return Promise.reject(`Error: ${response.data.Data}`);
    //   // return "Error";
    // }
    // if (response.data.Data === "DOESNOTEXIST") {
    //   ToastErrorHandler(`Error: ${response.data.Data}`);
    //   return Promise.reject(`Error: ${response.data.Data}`);
    //   // return "Error";
    // }
    // if (response.data.Data === "DATABASEEXCEPTON") {
    //   ToastErrorHandler(`Error: ${response.data.Data}`);
    //   return Promise.reject(`Error: ${response.data.Data}`);
    //   // return "Error";
    // }
    // if (response.data.Data === "INVALIDINPUT") {
    //   ToastErrorHandler(`Error: ${response.data.Data}`);
    //   return Promise.reject(`Error: ${response.data.Data}`);
    //   // return "Error";
    // } else {
    //   Promise.resolve(response);
    //   return response;
    // }
    // Promise.resolve(response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // if the error is 401 and the request is not a retry
    if (error.response.status === 401 && !originalRequest._retry) {
      // mark the request as a retry
      originalRequest._retry = true;
      try {
        // Remove the Authorization header to exclude the token from the refreshToken API call
        delete originalRequest.headers.Authorization;

        // call the refresh token endpoint
        const data = await refreshToken();

        // update the token in local storage
        setToken(data.AuthToken);
        setRefreshToken(data.RefreshToken);

        // update the authorization header of the original request
        originalRequest.headers.Authorization = `Bearer ${data.AuthToken}`;

        // retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (err) {
        // if refreshing the token fails, handle it accordingly
        console.error(err);

        // you can redirect to login page or show an error message here
      }
    } else if (error.response.data.StatusCode === 400) {
      ToastErrorHandler(error.response.data.Message);
      return Promise.reject(error);
    } else if (error.response.data.StatusCode === 404) {
      ToastErrorHandler(error.response.data.Message);
      return Promise.reject(error);
    } else {
      // Handle other error cases as needed
      console.log(error);

      // You can add additional error handling logic here

      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
