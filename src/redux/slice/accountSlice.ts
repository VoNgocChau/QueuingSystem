import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountType } from "../../interface";
import { firestore } from "../../firebase/config";


interface AccountState {
    accounts: AccountType[],
    userAccount: AccountType | null
}

const initialState:AccountState = {
    accounts: [],
    userAccount: null
}

export const fetchDataAccount = createAsyncThunk('account/fetch', async() => {
    const snapshot = await firestore.collection('accounts').get();
    const account = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} ) as AccountType);
    return account;
});

export const addAccount = createAsyncThunk('account/add', async(account: AccountType) => {
    const collection = await firestore.collection('accounts').add(account);
    account.id = collection.id;
    return account;
})

const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        setUserAccount: (state, action:PayloadAction<AccountType | null> ) => {
            state.userAccount = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchDataAccount.fulfilled, (state, action: PayloadAction<AccountType[]>) => {
            state.accounts = action.payload
        }).addCase(addAccount.fulfilled, (state, action: PayloadAction<AccountType>) => {
            state.accounts.push(action.payload);
        })
    }
})
export const {setUserAccount} = accountSlice.actions
export default accountSlice.reducer