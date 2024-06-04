import { object, ObjectSchema, string, array } from 'yup';
import { ICreateRoomPayload, IUpdateRoomPayload, IDeleteRoomPayload } from '../interfaces/room.interface';

const createRoomSchema: ObjectSchema<ICreateRoomPayload> = object({
  name: string().required('Name is a required field').min(3, 'Name must be at least 3 characters'),
  members: array().of(string().required('Member ID is required')).required('Members are required')
});

const updateRoomSchema: ObjectSchema<IUpdateRoomPayload> = object({
  id: string().required('ID is a required field'),
  name: string().required('Name is a required field').min(3, 'Name must be at least 3 characters'),
  members: array().of(string().required('Member ID is required')).required('Members are required')
});

const deleteRoomSchema: ObjectSchema<IDeleteRoomPayload> = object({
  id: string().required('ID is a required field')
});

export { createRoomSchema, updateRoomSchema, deleteRoomSchema };
