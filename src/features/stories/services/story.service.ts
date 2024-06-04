import { IBaseResponse } from '../../../shared';
import { api } from '../../../store/api';
import { IStory, ICreateStoryPayload, IUpdateStoryPayload, IDeleteStoryPayload } from '../interfaces/story.interface';

export const storyApi = api.injectEndpoints({
  endpoints: (build) => ({
    createStory: build.mutation<IBaseResponse, ICreateStoryPayload>({
      query(body: ICreateStoryPayload) {
        return {
          url: '/stories',
          method: 'POST',
          body
        };
      },
    }),
    updateStory: build.mutation<IBaseResponse, IUpdateStoryPayload>({
      query(body: IUpdateStoryPayload) {
        return {
          url: `/stories/${body.id}`,
          method: 'PUT',
          body
        };
      },
    }),
    deleteStory: build.mutation<IBaseResponse, IDeleteStoryPayload>({
      query(body: IDeleteStoryPayload) {
        return {
          url: `/stories/${body.id}`,
          method: 'DELETE'
        };
      },
    }),
    getStories: build.query<IStory[], void>({
      query: () => '/stories',
    }),
  })
});

export const {
  useCreateStoryMutation,
  useUpdateStoryMutation,
  useDeleteStoryMutation,
  useGetStoriesQuery,
} = storyApi;
