"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  fileName?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  showLineNumbers = false,
  fileName,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('group relative my-4 rounded-lg overflow-hidden', className)}>
      {fileName && (
        <div className="bg-gray-800 text-gray-300 text-xs px-4 py-2 border-b border-gray-700">
          {fileName}
        </div>
      )}
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      {language && (
        <div className="absolute left-4 top-2 z-10">
          <span className="text-xs font-mono text-gray-500 bg-gray-800/50 rounded px-2 py-1">
            {language}
          </span>
        </div>
      )}
      <pre
        className={cn(
          'relative overflow-auto bg-gray-900 p-4 text-sm text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800',
          fileName ? 'pt-4' : 'pt-8',
          showLineNumbers && 'pl-12',
        )}
      >
        {showLineNumbers && (
          <div className="absolute left-0 top-0 w-8 h-full flex flex-col items-end pt-8 pr-2 text-gray-500 border-r border-gray-700 select-none">
            {code.split('\n').map((_, index) => (
              <div key={index} className="leading-5">
                {index + 1}
              </div>
            ))}
          </div>
        )}
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}; 