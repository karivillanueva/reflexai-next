import { BubbleMessageType, SenderEnum } from '../types/MessageType';

const BubbleChat = ({ text, sender }: BubbleMessageType) => {
  const isUser = sender === SenderEnum.USER;

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
