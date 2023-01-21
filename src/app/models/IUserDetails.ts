import {IUserAttributes} from "./IUserAttributes";

export interface IUserDetails {
  username: string;
  userSurname: string;
  email: string;
  nickName: string;
  birthday: string;
  gender: string;
  img: string;
  desc: string;
  attributes: IUserAttributes;
}
