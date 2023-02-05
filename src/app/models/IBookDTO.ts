import {IComment} from "./IComment";

export interface IBookDTO {
  nickName: string,
  title: string,
  description: string,
  img: string,
  content?: FileReader,
  comments?: IComment []
}
