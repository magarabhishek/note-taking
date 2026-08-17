import { createSlice } from '@reduxjs/toolkit';

const initialNotes = [
  { id: 1, text: 'Master React Components & Props', date: '2026-08-15' },
  { id: 2, text: 'Learn Redux Toolkit & React Router', date: '2026-08-16' }
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotes,
  reducers: {
    addNote: (state, action) => {
      state.unshift(action.payload);
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    }
  }
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;