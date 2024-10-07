// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axiosInstance from "@src/@core/auth/jwt/interceptor";

export const getAccessGroup = createAsyncThunk(
  "permission/getAccessGroup",
  async () => {
    const response = await axiosInstance.get("AccessGroups");
    return response.data;
  }
);

export const getComponentsFullName = createAsyncThunk(
  "permission/getComponentsFullName",
  async (cIds) => {
    const response = await axiosInstance.post(
      `Components/GetComponentsFullNames`,
      cIds
    );
    return response.data;
  }
);

export const getPermissionGroupById = createAsyncThunk(
  "permission/getPermissionGroupById",
  async ({ id, teamId }) => {
    const response = await axiosInstance.get(`GroupPermission/Group/${id}?teamId=${teamId}`);
    return response.data;
  }
);

export const savePermissionGroup = createAsyncThunk(
  "permission/savePermissionGroup",
  async (payload) => {
    const response = await axiosInstance.post(
      `GroupPermission/BulkUpdate`,
      payload
    );
    return response.data;
  }
);

export const getGroupUsers = createAsyncThunk(
  "permission/getGroupUsers",
  async ({ id, teamId }) => {
    const response = await axiosInstance.get(`GroupUsers/GroupUser/${id}?teamId=${teamId}`);
    return response.data;
  }
);

export const getTeamsInfo = createAsyncThunk(
  "permission/getTeamsInfo",
  async (id) => {
    return id;
  }
);

export const appUsersSlice = createSlice({
  name: "permission",
  initialState: {
    teamsInfo: null,
    data: [],
    components: [],
    // accessGroup: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccessGroup.fulfilled, (state, action) => {
        state.data = action.payload.Data;
      })
      .addCase(getComponentsFullName.fulfilled, (state, action) => {
        state.components = action.payload.Data;
      })
      .addCase(getTeamsInfo.fulfilled, (state, action) => {
        state.teamsInfo = action.payload;
      });
  },
});

export default appUsersSlice.reducer;
