import React from 'react';
import { Radio } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-3">
        <Radio className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-bold text-gray-900">Online Radio</h1>
      </div>
    </header>
  );
}