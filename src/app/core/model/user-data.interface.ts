export interface IUserDataRoot {
  message: string;
  user: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  photo: string;
  createdAt: string;
}
