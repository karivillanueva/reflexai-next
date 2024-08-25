export enum SenderEnum {
  USER = 'user',
  BOT = 'bot',
}

export type ChatType = {
  sender: string;
  text: string;
};
