import { IBaseResponse } from '../../../shared';
import { api } from '../../../store/api';
import { IRoom, ICreateRoomPayload, IUpdateRoomPayload, IDeleteRoomPayload } from '../interfaces/room.interface';

export const roomApi = api.injectEndpoints({
  endpoints: (build) => ({
    createRoom: build.mutation<IBaseResponse, ICreateRoomPayload>({
      query(body: ICreateRoomPayload) {
        return {
          url: '/rooms',
          method: 'POST',
          body
        };
      },
    }),
    updateRoom: build.mutation<IBaseResponse, IUpdateRoomPayload>({
      query(body: IUpdateRoomPayload) {
        return {
          url: `/rooms/${body.id}`,
          method: 'PUT',
          body
        };
      },
    }),
    deleteRoom: build.mutation<IBaseResponse, IDeleteRoomPayload>({
      query(body: IDeleteRoomPayload) {
        return {
          url: `/rooms/${body.id}`,
          method: 'DELETE'
        };
      },
    }),
    getRooms: build.query<IRoom[], void>({
      query: () => '/rooms',
    }),
  })
});

export const {
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useGetRoomsQuery,
} = roomApi;
