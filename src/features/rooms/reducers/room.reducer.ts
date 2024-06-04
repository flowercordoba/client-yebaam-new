import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoom } from '../interfaces/room.interface';

interface RoomState {
  rooms: IRoom[];
}

const initialState: RoomState = {
  rooms: []
};

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<IRoom[]>) => {
      state.rooms = action.payload;
    },
    addRoom: (state, action: PayloadAction<IRoom>) => {
      state.rooms.push(action.payload);
    },
    updateRoom: (state, action: PayloadAction<IRoom>) => {
      const index = state.rooms.findIndex(room => room.id === action.payload.id);
      if (index !== -1) {
        state.rooms[index] = action.payload;
      }
    },
    deleteRoom: (state, action: PayloadAction<string>) => {
      state.rooms = state.rooms.filter(room => room.id !== action.payload);
    },
  }
});

export const { setRooms, addRoom, updateRoom, deleteRoom } = roomSlice.actions;
export default roomSlice.reducer;
