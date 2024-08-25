import React from 'react';
import { BubbleChatType, SenderEnum } from '../types/ChatType';

const BubbleChat = ({ text, sender }: BubbleChatType) => {
  const isUser = sender === SenderEnum.USER;

  return (
    <div
      className={`max-w-[50%] p-4 rounded-lg ${
        isUser
          ? 'bg-green-500 text-white self-end'
          : 'bg-white text-black self-start'
      } my-2`}
    >
      {text}
    </div>
  );
};

export default BubbleChat;
