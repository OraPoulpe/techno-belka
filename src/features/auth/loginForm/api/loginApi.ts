import { BASE_API } from '@/shared/constants';
import { ILoginData, IResponse } from '@/shared/interfaces/login.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
    endpoints: (build) => ({
        loginUser: build.mutation<IResponse, ILoginData>({
            query: (userData) => ({
                url: `auth/login/`,
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = loginApi;
