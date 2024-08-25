import LinkButton from './components/LinkButton';
import StartChatButton from './components/StartChatButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <h1 className="text-6xl font-bold text-center text-sky-300 lg:mt-20">
        ReflexAI
      </h1>

      <div className="flex flex-col items-center gap-10 mt-16 md:mt-20 lg:flex-row">
        <StartChatButton />
        <LinkButton
          href="/admin"
          title="Admin dashboard"
          subtitle="Review and administrate old chats"
        />
      </div>
    </main>
  );
}
