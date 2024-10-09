'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      router.push('/menu');
    } else {
      setError('Введены неверные данные');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img className="mb-4" src="/logo.png" alt="Теплотехник" /> 
      <h1 className="text-2xl text-black font-bold mb-4">Вход</h1>
      <form onSubmit={handleLogin} className="flex flex-col bg-white p-8 shadow-md rounded">
        <label className="mb-2 text-black">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border rounded text-black"
        />
        <label className="mb-2 text-black">Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 p-2 border rounded text-black"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
