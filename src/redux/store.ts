import { configureStore } from '@reduxjs/toolkit'
import deviceSlice from './slice/deviceSlice'
import serviceSlice from './slice/serviceSlice'
import numberSlice from './slice/numberSlice'

export const store = configureStore({
    reducer: {
        devices: deviceSlice,
        services: serviceSlice,
        numbers: numberSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch