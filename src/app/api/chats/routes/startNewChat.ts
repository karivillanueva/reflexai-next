'use server';
import { Chat } from '../../../../models/Chat';
import { connectToMongoDB } from '../../../../lib/mongodb';

export async function startNewChat(): Promise<string> {
  try {
    await connectToMongoDB();

    const newChat = new Chat({
      user: 'karime',
      messages: [],
      lastTimestamp: new Date(),
    });

    await newChat.save();
    return newChat._id.toString();
  } catch (error) {
    console.log('Error creating new chat:', error);
    throw error;
  }
}
