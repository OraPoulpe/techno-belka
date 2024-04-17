import { IUser, IUserPatch } from '@/shared/interfaces/user.interfaces';
import { groupsApi } from './groupsApi';

interface IPatchProps {
  idUser: number;
  newInfo: IUserPatch;
}

const patchUserApi = groupsApi.injectEndpoints({
  endpoints: (build) => ({
    patchUser: build.mutation<IUser, IPatchProps>({
      query: ({ idUser, newInfo }) => ({
        url: '/users',
        method: 'PATCH',
        params: { id: idUser },
        body: newInfo,
      }),
      invalidatesTags: [{ type: 'Groups', id: 'LIST' }],
    }),
  }),
  // overrideExisting: false,
});

export const { usePatchUserMutation } = patchUserApi;
