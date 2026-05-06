"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";

export function ServerWarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the warning in this session
    const hasSeenWarning = sessionStorage.getItem("serverWarningSeen");
    if (!hasSeenWarning) {
      setIsOpen(true);
    }
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("serverWarningSeen", "true");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-md p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl text-center transform transition-all scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#E50000]/10 mb-4">
          <svg className="h-6 w-6 text-[#E50000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">
          Server Starting Up
        </h2>
        <p className="text-[#999999] mb-8 leading-relaxed">
          The backend server for this application is hosted on a free tier. If it has been inactive, it may take <strong>1-2 minutes</strong> to wake up and process your first request. Thank you for your patience!
        </p>
        <Button 
          onClick={handleClose}
          className="w-full bg-[#E50000] hover:bg-[#B30000] text-white py-6 text-lg font-semibold rounded-xl"
        >
          Okay, I understand
        </Button>
      </div>
    </div>
  );
}
