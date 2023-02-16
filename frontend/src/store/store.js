import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../redux/formSlice/formSlice'

export default configureStore({
  reducer: {
    form: formReducer
  }
})