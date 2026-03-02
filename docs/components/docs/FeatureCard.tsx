import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  className?: string;
  gradient?: boolean;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  href,
  className,
  gradient = false,
}) => {
  const CardComponent = href ? Link : 'div';
  
  const cardContent = (
    <>
      <div className={cn(
        "p-3 rounded-lg mb-4 inline-flex items-center justify-center",
        gradient 
          ? "bg-gradient-to-br from-primary-500/20 to-secondary-500/20" 
          : "bg-primary-100 dark:bg-primary-900/20"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {href && (
        <div className="mt-auto flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </>
  );

  return (
    <CardComponent
      href={href as string}
      className={cn(
        "group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-md transition-all duration-200",
        href && "hover:border-primary-300 dark:hover:border-primary-700",
        className
      )}
    >
      {cardContent}
    </CardComponent>
  );
}; 