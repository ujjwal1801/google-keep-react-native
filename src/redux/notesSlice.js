import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        deleteNote: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export const { addNote, deleteNote} = notesSlice.actions;

export default notesSlice.reducer;