'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Bounce, toast } from 'react-toastify';

import BaseButtonContent from './BaseButtonContent';
import { startNewChat } from '../../api/chats';
import { CHAT_PATH } from '../../utils/constants';

const StartChatButton = () => {
  const router = useRouter();

  const handleStartChat = async () => {
    try {
      const chatId = await startNewChat();
      router.push(`${CHAT_PATH}/${chatId}`);
    } catch (error) {
      toast.error('Error creating new chat', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <button name="chat" onClick={handleStartChat}>
      <BaseButtonContent
        title="Start to chat"
        subtitle="Start to chat today to find support"
      />
    </button>
  );
};

export default StartChatButton;
