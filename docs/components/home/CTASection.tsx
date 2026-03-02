import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

// Define base button styles reusable via cn()
const baseButtonStyles = 
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const primaryButtonStyles = 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 shadow-md hover:shadow-lg';
const outlineButtonStyles = 'border border-input bg-background backdrop-blur-sm hover:bg-accent hover:text-accent-foreground';
const largeButtonStyles = 'h-11 px-8 py-2';

export default function CTASection() {
  return (
    <div className="w-full py-16 bg-gradient-to-tr from-blue-600/10 to-teal-500/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center staggered-fade-in">
        <h2 className="text-3xl font-bold mb-6 gradient-text inline-block">Ready to upgrade your AI with web data?</h2>
        <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8">
          Start crawling immediately with our Python API. <br className="hidden md:inline" />
          <span className="text-blue-600 dark:text-blue-400">Powered by uvx/uv for maximum performance.</span>
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs/getting-started"
            className={cn(
              baseButtonStyles,
              primaryButtonStyles, 
              largeButtonStyles,
              "transition-all duration-300 hover:translate-y-[-2px]"
            )}
          >
            Get Started
          </Link>
          <Link
            href="/docs/api"
            className={cn(
              baseButtonStyles,
              outlineButtonStyles,
              largeButtonStyles,
              "transition-all duration-300 hover:translate-y-[-2px]"
            )}
          >
            API Reference
          </Link>
        </div>
        
        <div className="mt-10 flex items-center justify-center text-sm text-slate-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2 text-slate-400"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          High-performance Python crawler with uvx optimizations
        </div>
      </div>
    </div>
  );
} 