'use client'

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export const WhatsappIcon: React.FC = () => {
  return (
    <Link
      href="https://wa.me/9893356890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  );
};

