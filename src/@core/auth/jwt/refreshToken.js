import axios from "axios";
import jwtService from "./jwtService";
import jwtDefaultConfig from "./jwtDefaultConfig";

export const refreshToken = async () => {
  const { getRefreshToken, getUserData } = new jwtService();

  const refreshToken = getRefreshToken();
  const userData = JSON.parse(getUserData());

  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  try {
    const response = await axios.post(
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
