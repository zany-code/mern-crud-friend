import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getMahasiswa = createAsyncThunk('mahasiswa/getMahasiswa', async() => {
    const resposnse = await axios.get("https://crud-myfriend.herokuapp.com/mahasiswa/ti/");
    return resposnse.data
});

export const createMahasiswa = createAsyncThunk('mahasiswa/createMahasiswa', async({namaMhs, kelas, asal, zodiak}) => {
    const resposnse = await axios.post('https://crud-myfriend.herokuapp.com/mahasiswa/ti/', {
        namaMhs, kelas, asal, zodiak
    });
    return resposnse.data
});

export const deleteMahasiswa = createAsyncThunk('mahasiswa/deleteMahasiswa', async(_id) => {
    await axios.delete('https://crud-myfriend.herokuapp.com/mahasiswa/ti/' + _id);
    return _id
});

export const updateMahasiswa = createAsyncThunk('mahasiswa/updateMahasiswa', async({namaMhs, kelas, asal, zodiak, id}) => {
    const resposnse = await axios.put(`https://crud-myfriend.herokuapp.com/mahasiswa/ti/${id}`, {
        namaMhs, kelas, asal, zodiak
    });
    return resposnse.data
});

const mahasiswaEntity = createEntityAdapter({
    selectId : (mahasiswa) => mahasiswa._id
})

const mahasiswaSlice = createSlice({
    name : 'mahasiswa',
    initialState : mahasiswaEntity.getInitialState(),
    extraReducers : {
        [getMahasiswa.fulfilled] : (state, action) => {
            mahasiswaEntity.setAll(state, action.payload);
        },
        [createMahasiswa.fulfilled] : (state, action) => {
            mahasiswaEntity.addOne(state, action.payload);
        },
        [deleteMahasiswa.fulfilled] : (state, action) => {
            mahasiswaEntity.removeOne(state, action.payload);
        },
        [updateMahasiswa.fulfilled] : (state, action) => {
            mahasiswaEntity.updateOne(state, {id : action.payload.id, update: action.update});
        }
    }

})

export const mahasiswaSelector = mahasiswaEntity.getSelectors(state => state.mahasiswa);
export default mahasiswaSlice.reducer