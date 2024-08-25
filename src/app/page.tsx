import LinkButton from './components/HomeButtons/LinkButton';
import StartChatButton from './components/HomeButtons/StartChatButton';
import { ADMIN_PATH } from './utils/constants';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-20">
      <h1 className="text-6xl font-bold text-center text-sky-300 lg:mt-20">
        ReflexAI
      </h1>

      <div className="flex flex-col items-center gap-10 mt-16 md:mt-20 lg:flex-row">
        <StartChatButton />
        <LinkButton
          href={ADMIN_PATH}
          title="Admin dashboard"
          subtitle="Review and administrate old chats"
        />
      </div>
    </div>
  );
}
