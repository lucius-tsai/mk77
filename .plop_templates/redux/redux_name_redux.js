import { createSlice } from "@reduxjs/toolkit";
import { {{camelCase reduxName}}Api } from "./{{snakeCase reduxName}}_api";

export const { useGet{{properCase reduxName}}Query } = {{camelCase reduxName}}Api;

const {{camelCase reduxName}}Slice = createSlice({
  name: "{{camelCase reduxName}}",
  initialState: {},
  reducers: {
    set{{properCase reduxName}}: (state, action) => {
      // expample
      // state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      {{camelCase reduxName}}Api.endpoints.get{{properCase reduxName}}.matchFulfilled,
      (state, action) => {
        // 範例 (可不用set{{properCase reduxName}})
        // state.articles = action.payload.articles;
        // state.total = action.payload.total;
      })
  },
});

export const { actions, reducer } = {{camelCase reduxName}}Slice;

export const { set{{properCase reduxName}} } = actions;

export default reducer;
