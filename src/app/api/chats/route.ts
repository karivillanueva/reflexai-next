'use server';
import { Chat, MessageInterface } from '../../../models/Chat';
import { connectToMongoDB } from '../../../lib/mongodb';
import { getRandomResponse } from '@/app/utils/randomMessage';
import { ChatRequestType, ChatType, SenderEnum } from '@/app/types/ChatType';

export async function startNewChat(): Promise<string> {
  await connectToMongoDB();

  const newChat = new Chat({
    user: 'karime',
    messages: [],
    lastTimestamp: new Date(),
  });

  await newChat.save();
  return newChat._id.toString();
}

async function sendOneMessage({
  chatId,
  sender,
  text,
}: ChatRequestType): Promise<void> {
  try {
    const timestamp = new Date();

    await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: {
          messages: {
            sender,
            text,
            timestamp,
          },
        },
        lastTimestamp: timestamp,
      },
      { new: true }
    );
  } catch (error) {
    console.log('Error:', error);
  }
}

export async function addMessageToChat({
  chatId,
  sender,
  text,
}: ChatRequestType): Promise<string> {
  try {
    await connectToMongoDB();
    await sendOneMessage({ chatId, sender, text });

    const response = getRandomResponse();
    await sendOneMessage({ chatId, sender: SenderEnum.BOT, text: response });

    return response;
  } catch (error) {
    console.error('Error adding message to chat:', error);
    throw error;
  }
}

export async function getMessagesByChatId(chatId: string): Promise<ChatType[]> {
  try {
    await connectToMongoDB();
    const chat = await Chat.findById(chatId);

    if (!chat) {
      throw new Error(`No chat found with id: ${chatId}`);
    }

    const response = chat.messages.map((message: MessageInterface) => ({
      sender: message.sender,
      text: message.text,
      id: message._id.toString(),
    }));

    return response;
  } catch (error) {
    console.error('Error retrieving messages for chat:', error);
    throw error;
  }
}
