import React from 'react';
import { ChatType, SenderEnum } from '../types/ChatType';

const BubbleChat = ({ text, sender }: ChatType) => {
  const isUser = sender === SenderEnum.BOT;

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
