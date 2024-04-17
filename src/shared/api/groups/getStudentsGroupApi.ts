import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { groupsApi } from './groupsApi';
import { IUser } from '@/shared/interfaces/user.interfaces';

const getStudentsGroup = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    getStudentsGroupById: build.query<IUser[], number>({
      query: (id) => ({
        url: `/users`,
        method: 'GET',
        params: { houseId: id },
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

export const { useGetStudentsGroupByIdQuery } = getStudentsGroup;
