'use server';
import { Chat } from '../../../../models/Chat';
import { connectToMongoDB } from '../../../../lib/mongodb';
import { getRandomResponse } from '@/app/utils/randomMessage';
import { MessageRequestType, SenderEnum } from '@/app/types/MessageType';

async function sendOneMessage({
  chatId,
  sender,
  text,
}: MessageRequestType): Promise<void> {
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
}: MessageRequestType): Promise<string> {
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
