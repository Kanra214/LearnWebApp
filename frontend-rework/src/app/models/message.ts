export interface Message{
    from: string,
    to: string,
    isRequest: boolean,
    // date: Date,
    isApproved: boolean,
    content: string,
}