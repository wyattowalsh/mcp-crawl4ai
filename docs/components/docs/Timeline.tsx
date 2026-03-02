import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

type TimelineItemStatus = 'completed' | 'in-progress' | 'planned';

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  status: TimelineItemStatus;
  link?: string;
  features?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const statusIcons: Record<TimelineItemStatus, React.ReactNode> = {
    'completed': <CheckCircle2 className="h-6 w-6 text-green-500" />,
    'in-progress': <Clock className="h-6 w-6 text-yellow-500 animate-pulse-slow" />,
    'planned': <AlertCircle className="h-6 w-6 text-blue-500" />
  };

  const statusColors: Record<TimelineItemStatus, { bg: string, border: string }> = {
    'completed': { 
      bg: 'bg-green-100 dark:bg-green-900/20', 
      border: 'border-green-200 dark:border-green-700' 
    },
    'in-progress': { 
      bg: 'bg-yellow-100 dark:bg-yellow-900/20', 
      border: 'border-yellow-200 dark:border-yellow-700' 
    },
    'planned': { 
      bg: 'bg-blue-100 dark:bg-blue-900/20', 
      border: 'border-blue-200 dark:border-blue-700' 
    }
  };

  return (
    <div className={cn('relative my-8', className)}>
      {/* The vertical line */}
      <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-100 dark:from-primary-800 dark:via-primary-600 dark:to-primary-900"></div>
      
      {items.map((item, index) => (
        <div key={index} className="mb-8 relative">
          <div className="flex">
            {/* Icon indicator with color coding */}
            <div className="flex-shrink-0 z-10">
              <div className={cn(
                'h-8 w-8 rounded-full border-2 flex items-center justify-center', 
                statusColors[item.status].border,
                statusColors[item.status].bg
              )}>
                {statusIcons[item.status]}
              </div>
            </div>
            
            {/* Content */}
            <div className="ml-6 flex-1">
              {/* Header with date and status */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="mt-1 sm:mt-0 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {item.date}
                </div>
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.description}
              </div>
              
              {/* Features list */}
              {item.features && item.features.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Link to more info */}
              {item.link && (
                <a 
                  href={item.link} 
                  className="inline-block mt-3 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Learn more →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 