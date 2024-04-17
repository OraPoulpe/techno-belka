import { groupsApi } from './groupsApi';


const removeUserFromGroupApi = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    removeUser: build.mutation<void, number>({
      query: (id) => ({
        url: '/users/removeHouse',
        method: 'PATCH',
        params: { id: id },
      }),

      invalidatesTags: [{ type: 'Groups', id: 'LIST' }],
    }),
  }),

});

export const { useRemoveUserMutation } = removeUserFromGroupApi;
