import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Override default components with custom styling
    h1: (props) => <h1 {...props} className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', props.className)} />,
    h2: (props) => <h2 {...props} className={cn('mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', props.className)} />,
    h3: (props) => <h3 {...props} className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', props.className)} />,
    p: (props) => <p {...props} className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)} />,
    a: (props) => (
      <a 
        {...props} 
        className={cn(
          'font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400', 
          props.className
        )} 
      />
    ),
    ul: (props) => <ul {...props} className={cn('my-6 ml-6 list-disc [&>li]:mt-2', props.className)} />,
    ol: (props) => <ol {...props} className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', props.className)} />,
    blockquote: (props) => (
      <blockquote
        {...props}
        className={cn(
          'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200',
          props.className
        )}
      />
    ),
    // Add any additional component overrides
    ...components,
  };
}
