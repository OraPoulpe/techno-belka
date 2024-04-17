import { loginApi } from '@/shared/api/auth/loginApi';
import { groupsApi } from '@/shared/api/groups/groupsApi';
import { userApi } from '@/shared/api/user/userApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [groupsApi.reducerPath]: groupsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(groupsApi.middleware)
      .concat(userApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
