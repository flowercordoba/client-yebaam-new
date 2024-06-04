import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStory } from '../interfaces/story.interface';

interface StoryState {
  stories: IStory[];
}

const initialState: StoryState = {
  stories: []
};

const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<IStory[]>) => {
      state.stories = action.payload;
    },
    addStory: (state, action: PayloadAction<IStory>) => {
      state.stories.push(action.payload);
    },
    updateStory: (state, action: PayloadAction<IStory>) => {
      const index = state.stories.findIndex(story => story.id === action.payload.id);
      if (index !== -1) {
        state.stories[index] = action.payload;
      }
    },
    deleteStory: (state, action: PayloadAction<string>) => {
      state.stories = state.stories.filter(story => story.id !== action.payload);
    },
  }
});

export const { setStories, addStory, updateStory, deleteStory } = storySlice.actions;
export default storySlice.reducer;
