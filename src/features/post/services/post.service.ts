import { IResponse } from '../../../shared';
import { api } from '../../../store/api';
import { IPost, ICreatePostPayload, IUpdatePostPayload, IDeletePostPayload, IPostResponse } from '../interfaces/post.interface';

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<IResponse<IPostResponse>, void>({
      query: () => '/posts',
    }),
    createPost: build.mutation<IResponse<IPost>, ICreatePostPayload>({
      query(body: ICreatePostPayload) {
        return {
          url: '/posts',
          method: 'POST',
          body,
        };
      },
    }),
    updatePost: build.mutation<IResponse<IPost>, IUpdatePostPayload>({
      query(body: IUpdatePostPayload) {
        return {
          url: `/posts/${body.id}`,
          method: 'PUT',
          body,
        };
      },
    }),
    deletePost: build.mutation<IResponse<IPost>, IDeletePostPayload>({
      query({ id }) {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
