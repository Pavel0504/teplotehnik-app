'use client';

import { useRouter } from 'next/navigation';

const MenuPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">Меню</h1>
      <div className="flex flex-col space-y-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/calculator')}>Калькулятор</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/settings')}>Настройки</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/documentation')}>Документация</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleLogout}>Выйти</button>
      </div>
    </div>
  );
};

export default MenuPage;
