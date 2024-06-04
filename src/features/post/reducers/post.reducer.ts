import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../interfaces/post.interface';

interface PostState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action: PayloadAction<IPost[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    updatePost(state, action: PayloadAction<IPost>) {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
  updatePost,
  deletePost,
} = postSlice.actions;

export default postSlice.reducer;
