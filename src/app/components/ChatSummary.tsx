'use client';

import { useRouter } from 'next/navigation';
import { ChatType } from '../types/ChatType';
import { CHAT_PATH } from '../utils/constants';

const ChatSummary = ({ chat }: { chat: ChatType }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${CHAT_PATH}/${chat.id}`);
  };

  return (
    <div
      key={chat.id}
      onClick={handleClick}
      className="bg-white p-4 rounded shadow cursor-pointer"
    >
      <h2 className="text-lg font-semibold">Chat ID: {chat.id}</h2>
      <p className="text-sm text-gray-600">User: {chat.user}</p>
      <p className="text-sm text-gray-500">
        Last Message: {chat.lastTimestamp.toLocaleString()}
      </p>
    </div>
  );
};

export default ChatSummary;
