'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function BackButton({ fallbackHref }: { fallbackHref: string }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => {
        if (window.history.length > 2) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }} 
      className="inline-flex items-center gap-2 text-alabaster/50 hover:text-champagne transition-colors mb-12 text-sm uppercase tracking-widest font-mono"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Equipment
    </button>
  );
}
