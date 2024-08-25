export enum SenderEnum {
  USER = 'user',
  BOT = 'bot',
}

export type BubbleChatType = {
  sender: string;
  text: string;
};

export type ChatType = {
  id: string;
} & BubbleChatType;

export type ChatRequestType = {
  chatId: string;
} & BubbleChatType;
