export interface IGroupInfo {
  id: number;
  name: string;
  description: string;
  usersCount: number;
  totalPoints: number;
  ourValues: string;
  image: IAvatarGroup;
}

export interface IAvatarGroup {
  id: number;
  name: string;
  mimetype: string;
  url: string;
  updatedAt: Date;
  createAt: Date;
}
