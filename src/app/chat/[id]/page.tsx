'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import BubbleChat from '@/app/components/BubbleChat';
import ChatInput from '@/app/components/ChatInput';
import { ChatType, SenderEnum } from '../../types/ChatType';
import { addMessageToChat, getMessagesByChatId } from '@/app/api/chats/route';

const ChatPage = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const chatId = params.id as string;
  const [messages, setMessages] = useState<ChatType[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const loadedMessages = await getMessagesByChatId(chatId);
        setMessages(loadedMessages);
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    };

    loadMessages();

    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    await addMessageToChat({
      chatId,
      sender: SenderEnum.USER,
      text,
    });
    const updatedMessages = await getMessagesByChatId(chatId);
    setMessages(updatedMessages);
  };

  return (
    <div className="max-h-screen flex bg-white justify-center">
      <div className="bg-sky-200 w-full lg:w-[30%] min-h-screen p-2 flex flex-col rounded-md">
        <div
          className="flex h-[100%] overflow-scroll hide-scrollbar flex-col mb-1"
          ref={chatContainerRef}
        >
          {messages.map((item) => (
            <BubbleChat sender={item.sender} text={item.text} key={item.id} />
          ))}
        </div>
        <div className="mb-0">
          <ChatInput onSend={(text) => handleSendMessage(text)} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
