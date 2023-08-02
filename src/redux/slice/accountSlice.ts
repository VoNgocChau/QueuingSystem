import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountType } from "../../interface";
import { firestore } from "../../firebase/config";


interface AccountState {
    accounts: AccountType[]
}

const initialState:AccountState = {
    accounts: []
}

export const fetchDataAccount = createAsyncThunk('account/fetch', async() => {
    const snapshot = await firestore.collection('accounts').get();
    const account = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} ) as AccountType);
    return account;
})

const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDataAccount.fulfilled, (state, action: PayloadAction<AccountType[]>) => {
            state.accounts = action.payload
        })
    }
})

export default accountSlice.reducer