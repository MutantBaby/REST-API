import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: "",
  from: "",
  email: "",
  username: "",
  password: "",
  description: "",
  coverPicture: "",
  profilePicture: "",
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, actions) => {
      state.city = actions.payload.city;
      state.from = actions.payload.from;
      state.email = actions.payload.email;
      state.username = actions.payload.username;
      state.password = actions.payload.password;
      state.description = actions.payload.description;
      state.coverPicture = actions.payload.coverPicture;
      state.coverPicture = actions.payload.coverPicture;
    },
  }
})

export const selectAllFormValues = (state) => state.form;

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;