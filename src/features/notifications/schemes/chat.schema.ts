import { object, ObjectSchema, string } from 'yup';
import { ISendMessagePayload, IUpdateMessagePayload, IDeleteMessagePayload } from '../interfaces/chat.interface';

const sendMessageSchema: ObjectSchema<ISendMessagePayload> = object({
  content: string().required('Content is a required field').min(1, 'Content must be at least 1 character'),
  recipientId: string().required('Recipient ID is a required field')
});

const updateMessageSchema: ObjectSchema<IUpdateMessagePayload> = object({
  messageId: string().required('Message ID is a required field'),
  content: string().required('Content is a required field').min(1, 'Content must be at least 1 character')
});

const deleteMessageSchema: ObjectSchema<IDeleteMessagePayload> = object({
  messageId: string().required('Message ID is a required field')
});

export { sendMessageSchema, updateMessageSchema, deleteMessageSchema };
