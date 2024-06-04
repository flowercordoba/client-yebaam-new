import { object, ObjectSchema, string } from 'yup';
import { ICreateStoryPayload, IUpdateStoryPayload, IDeleteStoryPayload } from '../interfaces/story.interface';

const createStorySchema: ObjectSchema<ICreateStoryPayload> = object({
  content: string().required('Content is a required field').min(1, 'Content must be at least 1 character'),
  userId: string().required('User ID is a required field')
});

const updateStorySchema: ObjectSchema<IUpdateStoryPayload> = object({
  id: string().required('ID is a required field'),
  content: string().required('Content is a required field').min(1, 'Content must be at least 1 character')
});

const deleteStorySchema: ObjectSchema<IDeleteStoryPayload> = object({
  id: string().required('ID is a required field')
});

export { createStorySchema, updateStorySchema, deleteStorySchema };
