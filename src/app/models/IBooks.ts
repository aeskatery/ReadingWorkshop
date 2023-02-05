import {IComment} from "./IComment";

export interface IBooks {
  id: number,
  nickName: string,
  title: string,
  description: string,
  img: string,
  content?: string,
  comments?: IComment []
}
