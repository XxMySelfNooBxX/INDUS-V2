'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ContactForm from './ContactForm';

export default function InquiryModal({
  buttonText = "Submit Inquiry Form",
  buttonClassName = "inline-block border border-champagne/60 px-8 py-4 text-[13px] font-semibold tracking-[0.3em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500 text-champagne"
}: {
  buttonText?: string;
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className={`fixed inset-0 z-[15000] flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-xl ${isClosing ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : 'animate-[fadeIn_0.3s_ease-out]'}`}>
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={handleClose}
        aria-label="Close modal background"
      />
      <div className={`relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-obsidian border border-alabaster/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${isClosing ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : 'animate-[fadeInUp_0.4s_ease-out]'} scrollbar-hide rounded-sm`}>
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-alabaster/50 hover:text-champagne transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className="p-6 md:p-10 pb-0">
          <h2 className="font-serif text-[clamp(2rem,4vw,2.5rem)] font-medium leading-[1.1] mb-2">
            Send an <span className="text-champagne italic">Inquiry.</span>
          </h2>
          <p className="text-alabaster/70 font-sans text-sm">
            Fill out the form below and our specialists will be in touch shortly.
          </p>
        </div>
        
        <div className="mt-[-1rem]">
            <ContactForm />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={buttonClassName}
      >
        {buttonText}
      </button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
