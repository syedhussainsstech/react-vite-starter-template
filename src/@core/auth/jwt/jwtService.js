// ** Axios
import axios from "axios";

// ** config
import jwtDefaultConfig from "./jwtDefaultConfig";

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // ** For Refreshing Token
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const accessToken = this.getToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // ** const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;

        if (response && response.status === 40) {
          return Promise.reject(error);
        }
        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false;

              // ** Update accessToken in localStorage
              this.setToken(r.data.AuthToken);
              this.setRefreshToken(r.data.RefreshToken);

              this.onAccessTokenFetched(r.data.AuthToken);
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    );
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(jwtDefaultConfig.storageTokenKeyName);
  }

  getUserData() {
    return localStorage.getItem(jwtDefaultConfig.storageUserData);
  }

  getRefreshToken() {
    return localStorage.getItem(jwtDefaultConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(jwtDefaultConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(jwtDefaultConfig.storageRefreshTokenKeyName, value);
  }

  login(args) {
    return axios.post(
      `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.loginEndpoint}`,
      args
    );
  }

  register(args) {
    return axios.post(
      `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.registerEndpoint}`,
      args
    );
  }

  refreshToken() {
    return axios.post(
      `${jwtDefaultConfig.authBaseURL}${jwtDefaultConfig.refreshEndpoint}`,
      {
        refreshToken: this.getRefreshToken(),
        UserName: this.getUserData()
          ? JSON.parse(this.getUserData()).email
          : "",
      }
    );
  }

  activate(payload) {
    return axios.post(
      `${jwtDefaultConfig.authBaseURL}/Users/Activate`,
      payload
    );
  }

  deactivate(payload) {
    return axios.post(
      `${jwtDefaultConfig.authBaseURL}/Users/Deactivate`,
      payload
    );
  }
}
