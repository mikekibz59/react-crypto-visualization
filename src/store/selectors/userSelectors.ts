import { RootState } from "../store";

export const selectUserCurrentPage = (state: RootState) => state.user.currentPage;
