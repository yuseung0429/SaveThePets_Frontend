import { Slice } from ".";

export interface CommentSlice {
  isEdit: boolean;
  id: number;
  value: string;
  enableEditMode: ({ id, value }: { id: number; value: string }) => void;
  disableEditMode: () => void;
}

const initialState = {
  isEdit: false,
  id: 0,
  value: "",
};

export const createCommentSlice: Slice<CommentSlice> = (set, get) => ({
  ...initialState,
  enableEditMode({ id, value }) {
    return set({ isEdit: true, id, value });
  },
  disableEditMode() {
    return set({ isEdit: false, id: 0, value: "" });
  },
});
