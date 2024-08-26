import { MessageInterface } from '@/models/Chat';
import { MessageType } from '../types/MessageType';

export const transformToMessages = (
  messages: MessageInterface[]
): MessageType[] => {
  return messages.map((message) => ({
    sender: message.sender,
    text: message.text,
    timestamp: message.timestamp,
    id: message._id.toString(),
  }));
};
