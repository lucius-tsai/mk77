import { rtkApi } from "_redux/rtk_api";

export const {{camelCase reduxName}}Api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    get{{properCase reduxName}}: build.query({
      query: (id) => ({ url: `form_config/${id}` }),
      transformResponse: (response) => response,
    }),
  }),
  overrideExisting: false,
});
