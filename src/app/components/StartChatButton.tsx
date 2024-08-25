'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Bounce, toast } from 'react-toastify';

import { startNewChat } from '../api/chats';
import { CHAT_PATH } from '../utils/constants';

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
    <button
      name="chat"
      onClick={handleStartChat}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        Start to chat
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Start to chat today to find support
      </p>
    </button>
  );
};

export default StartChatButton;
