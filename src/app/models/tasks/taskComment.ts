import {User} from '../user/user';

export class TaskComment {
  private _id: string;
  private _orgId: string;
  private _type: string;
  private _typeId: string;
  private _user: User;
  private _timestamp: string;
  private _comment: string;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get orgId(): string {
    return this._orgId;
  }

  set orgId(value: string) {
    this._orgId = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get typeId(): string {
    return this._typeId;
  }

  set typeId(value: string) {
    this._typeId = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(value: string) {
    this._timestamp = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }
}
