'use client';

import { useRouter } from 'next/navigation';

const AdditionalMenuPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/menu');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">Настройки</h1>
      <div className="flex flex-col space-y-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/formulas')}>Формулы</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/units')}>Единицы измерения</button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" onClick={() => router.push('/output-settings')}>Параметры вывода и печати</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleBack}>Назад</button>
      </div>
    </div>
  );
};

export default AdditionalMenuPage;
