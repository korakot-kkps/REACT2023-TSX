import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  useGetMemberQuery,
  type MemberResponse,
} from "../../app/services/membership";
import type { RootState } from "../../app/store";

type MemberState = {
  members: MemberResponse[] | null;
};

const membershipSlice = createSlice({
  name: "member",
  initialState: { members: null } as MemberState,
  reducers: {
    getAllMembers: (state) => {
      //   const [memberList, { isLoading }] = useGetMemberQuery("");
      //   state.members = memberList;
    },
  },
});

// export const { getMembers }  = slice.actions;

// export default slice.Reducer;

// export const selectMembers = (state: RootState) => state.member.members;
