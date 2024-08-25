'use client';
import React, { useEffect, useRef } from 'react';
import BubbleChat from '../components/BubbleChat';
import ChatInput from '../components/ChatInput';
import { SenderEnum } from '../types/ChatType';

const ChatPage = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="max-h-screen flex bg-white justify-center">
      <div className="bg-sky-200 w-full lg:w-[30%] min-h-screen p-2 flex flex-col rounded-md">
        <div
          className="flex overflow-scroll hide-scrollbar flex-col mb-1"
          ref={chatContainerRef}
        >
          <BubbleChat sender={SenderEnum.USER} text="Hi" />
          <BubbleChat
            sender={SenderEnum.BOT}
            text="Hi this is a loooooooong message used for testing, and this continue a bit more"
          />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.USER} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.USER} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
          <BubbleChat sender={SenderEnum.BOT} text="Hi" />
        </div>
        <div className="mb-0">
          <ChatInput onSend={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
