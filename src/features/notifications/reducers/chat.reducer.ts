import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '../interfaces/chat.interface';

interface ChatState {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesStart(state) {
      state.loading = true;
    },
    fetchMessagesSuccess(state, action: PayloadAction<IMessage[]>) {
      state.loading = false;
      state.messages = action.payload;
    },
    fetchMessagesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addMessage(state, action: PayloadAction<IMessage>) {
      state.messages.push(action.payload);
    },
    updateMessage(state, action: PayloadAction<IMessage>) {
      const index = state.messages.findIndex(message => message.id === action.payload.id);
      if (index !== -1) {
        state.messages[index] = action.payload;
      }
    },
    deleteMessage(state, action: PayloadAction<string>) {
      state.messages = state.messages.filter(message => message.id !== action.payload);
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
  updateMessage,
  deleteMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
