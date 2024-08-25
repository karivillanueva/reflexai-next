'use client';

import { useRouter } from 'next/navigation';
import { ROOT_PATH } from '../utils/constants';

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROOT_PATH);
  };

  return (
    <header className="bg-gray-800 text-white p-2 pl-8 pr-8 flex justify-between items-center">
      <h1
        className="text-lg font-bold cursor-pointer hover:text-gray-300 transition"
        onClick={handleClick}
      >
        ReflexAI
      </h1>
      <div className="flex flex-row gap-4">
        <p className="text-white text-sm font-sans">Karime</p>
        <p className="text-white text-sm font-sans">Log out</p>
      </div>
    </header>
  );
};

export default Header;
