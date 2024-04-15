import { loginApi } from '@/features/auth/loginForm/api/loginApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    [loginApi.reducerPath]: loginApi.reducer,

});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(loginApi.middleware)
     
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
