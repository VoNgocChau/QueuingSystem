import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Service } from "../../interface";
import { firestore } from "../../firebase/config";


interface ServiceState {
    services: Service[]
}

const initialState: ServiceState = {
    services: []
}

export const fetchData = createAsyncThunk('service/fetch', async() => {
    const snapshot = await firestore.collection('services').get();
    const services = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) as Service)
    return services;
})

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action:PayloadAction<Service[]>) => {
            state.services = action.payload
        })
    }
})

export default serviceSlice.reducer