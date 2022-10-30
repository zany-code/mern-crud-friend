import { configureStore } from '@reduxjs/toolkit';
import mahasiswaReducer from './MahasiswaSlice'

export const store = configureStore({
    reducer : {
        mahasiswa : mahasiswaReducer
    }
})