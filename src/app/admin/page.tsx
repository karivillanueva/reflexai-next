'use client';
import React, { useEffect, useState } from 'react';
import { getAllChats } from '../api/chats';
import { ChatType } from '../types/ChatType';
import ChatSummary from '../components/ChatSummary';

const AdminDashboard = () => {
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const allChats = await getAllChats();
        setChats(allChats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Administration Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chats.map((chat) => (
          <ChatSummary chat={chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
