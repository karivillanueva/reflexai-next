export enum SenderEnum {
  USER = 'user',
  BOT = 'bot',
}

export type BubbleMessageType = {
  sender: string;
  text: string;
};

export type MessageType = {
  id: string;
} & BubbleMessageType;

export type MessageRequestType = {
  chatId: string;
} & BubbleMessageType;
