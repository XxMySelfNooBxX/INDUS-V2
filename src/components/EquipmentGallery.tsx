"use client";

import { useState } from 'react';
import Image from 'next/image';

interface EquipmentGalleryProps {
  id: string;
  title: string;
}

export function EquipmentGallery({ id, title }: EquipmentGalleryProps) {
  const [mainImage, setMainImage] = useState(`/images/equipments/${id}-main.jpeg`);

  const images = [
    `/images/equipments/${id}-main.jpeg`,
    `/images/equipments/${id}-thumb.jpeg`
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[4/3] bg-obsidian-2/50 border border-alabaster/10 flex items-center justify-center rounded-sm relative overflow-hidden group">
        {images.map((img, idx) => (
          <Image 
            key={idx}
            src={img} 
            alt={`${title} Image ${idx + 1}`} 
            fill 
            className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
              mainImage === img ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx}
            onClick={() => setMainImage(img)}
            className={`w-24 h-24 bg-obsidian-2/50 border flex items-center justify-center rounded-sm cursor-pointer transition-colors relative overflow-hidden group ${
              mainImage === img ? 'border-champagne' : 'border-alabaster/20 hover:border-champagne/60'
            }`}
          >
            <Image 
              src={img} 
              alt={`${title} Thumbnail ${idx + 1}`} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
