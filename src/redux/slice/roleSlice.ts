import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleType } from "../../interface";
import { firestore } from "../../firebase/config";


interface RoleState {
    roles: RoleType[]
}

const initialState: RoleState = {
    roles: []
}

export const fetchDataRole = createAsyncThunk('role/fetch', async() => {
    const snapshot = await firestore.collection('roles').get();
    const roles = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) as RoleType);
    return roles;
});

const roleSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDataRole.fulfilled, (state, action: PayloadAction<RoleType[]>) => {
            state.roles = action.payload
        })
    }

})

export default roleSlice.reducer;