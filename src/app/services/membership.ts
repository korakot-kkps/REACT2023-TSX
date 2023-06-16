import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface User {
  first_name: string;
  last_name: string;
}

export interface MemberResponse {
  login: string;
  id: number;
} 
// export interface LoginRequest {
//   username: string;
//   password: string;
// }
export interface MemberResponseArray {
  users: MemberResponse[];
}

export const membershipApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMember: builder.query<MemberResponseArray, string>({
      query: (loginName) => "member",
    }),
  }),
});

export const { useGetMemberQuery } = membershipApi;
