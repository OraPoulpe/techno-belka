import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { userApi } from '../user/userApi';
import { IUser } from '@/shared/interfaces/user.interfaces';
import { groupsApi } from './groupsApi';

const getHomelessApi = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    getHomeless: build.query<IUser[], void>({
      query: () => ({
        url: '/users',
        method: 'GET',
        params: { houseId: null },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Groups' as const, id })),
              { type: 'Groups', id: 'LIST' },
            ]
          : [{ type: 'Groups', id: 'LIST' }],
    }),
  }),
});

export const { useGetHomelessQuery } = getHomelessApi;
