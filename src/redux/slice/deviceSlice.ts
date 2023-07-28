import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Device } from "../../interface";
import { firestore } from '../../firebase/config';

interface DeviceState {
    devices: Device[];
}

const initialState: DeviceState = {
    devices: []
}

export const fetchData = createAsyncThunk('device/fetch', async () => {
    const snapshot = await firestore.collection('devices').get();
    const devices = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Device))
    return devices;
})

export const addDevice = createAsyncThunk('device/add', async (device: Device) => {
    try {
        const collection = await firestore.collection('devices').add(device);
        device.id = collection.id;
        return device;
    } catch(err) {
        throw new Error('failed to add device to firestore !')
    }
})

const deviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Device[]>) => {
            state.devices = action.payload
        })
            .addCase(addDevice.fulfilled, (state, action: PayloadAction<Device>) => {
                state.devices.push(action.payload)
            })
    }
})

export default deviceSlice.reducer