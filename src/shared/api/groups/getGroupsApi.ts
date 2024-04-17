import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { groupsApi } from './groupsApi';

const getGroupsApi = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroupInfo[], void>({
      query: () => ({
        url: '/houses',
        method: 'GET',
        // headers: {
        //   Authorization: `Token ${getAccessToken()}`,
        // },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetGroupsQuery } = getGroupsApi;
