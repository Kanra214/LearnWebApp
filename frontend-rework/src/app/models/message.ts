import { UserInfo } from '@models/userInfo';
export interface Message{
    from?: UserInfo | string
    to: UserInfo | string,
    message_type: Number,
    // date: Date,
    isApproved?: boolean,
    content: string,
    groupId?: string,
    _id?:string,
    last_message? : string,
}