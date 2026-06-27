'use client';
import { useState, useRef, useEffect } from 'react';
import { countryCodes } from '@/lib/countryCodes';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find currently selected country
  const selectedCountry = countryCodes.find(c => c.code === value) || countryCodes[0];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = countryCodes.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  return (
    <div className="relative shrink-0 w-[110px] sm:w-[130px]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-obsidian-2 border border-alabaster/20 text-alabaster px-3 py-3 font-sans focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all duration-200 ${isOpen ? 'border-champagne ring-1 ring-champagne' : ''}`}
      >
        <span className="truncate flex items-center gap-2 text-base">
          <span>{selectedCountry?.flag || '🌐'}</span>
          <span className="text-sm">{selectedCountry?.code || '+1'}</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-alabaster/50 ${isOpen ? 'rotate-180 text-champagne' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 top-[calc(100%+4px)] left-0 w-[280px] max-w-[85vw] bg-obsidian border border-alabaster/20 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
          {/* Search */}
          <div className="p-3 border-b border-alabaster/10 bg-obsidian-2">
            <input
              type="text"
              autoFocus
              className="w-full bg-obsidian border border-alabaster/10 text-alabaster px-3 py-2 text-sm font-sans focus:outline-none focus:border-champagne placeholder:text-alabaster/30 transition-colors"
              placeholder="Search country or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {/* List */}
          <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-champagne/30 scrollbar-track-transparent py-2">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c, i) => (
                <button
                  key={`${c.iso}-${c.code}-${i}`}
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-obsidian-2 transition-colors ${value === c.code ? 'text-champagne bg-obsidian-2/30' : 'text-alabaster'}`}
                >
                  <span className="text-xl shrink-0">{c.flag}</span>
                  <span className="flex-1 truncate text-sm">{c.name}</span>
                  <span className="text-alabaster/50 font-mono text-xs shrink-0">{c.code}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-sm text-alabaster/50 text-center font-sans">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
