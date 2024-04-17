import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { groupsApi } from './groupsApi';

const getGroupByIdApi = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    getGroupById: build.query<IGroupInfo, number>({
      query: (id) => ({
        url: `/houses/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGroupByIdQuery } = getGroupByIdApi;
