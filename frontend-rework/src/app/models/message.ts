import { UserInfo } from '@models/userInfo';
export interface Message{
    from?: UserInfo | string
    to: UserInfo | string,
    isRequest: boolean,
    // date: Date,
    isApproved?: boolean,
    content: string,
    groupId?: string,
    _id?:string,
}