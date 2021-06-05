export enum MessageTypes {
    Info,
    Warning,
    Error
}

export interface Message {
    type: MessageTypes;
    value: string;
    time: Date
}
