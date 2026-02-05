import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      
      {/* LOGO IMAGE */}
      <div className="relative">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <img
            src="/assets/tb-logo.png"
            alt="Tiwari Brothers Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pulse dot (same as before) */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center border border-blue-500/50">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* TEXT — SAME AS BEFORE */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tighter text-gradient leading-none">TIWARI</span>
        <span className="text-[0.65rem] font-light tracking-[0.4em] text-blue-400">BROTHERS</span>
      </div>

    </div>
  );
};

export default Logo;
