import React from 'react';
import { FeatureCard } from '@/components/docs/FeatureCard';
import { Globe, Cpu, Database, Code2, Search, Clock, Zap, Shield, BarChart3 } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Intelligent Crawling',
    description: 'Adaptive crawling that intelligently navigates websites based on content relevance.',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: 'Headless Browser',
    description: 'Full browser rendering capabilities for JavaScript-heavy sites with interactive elements.',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: 'Data Extraction',
    description: 'Powerful data extraction from any website with structured output formats.',
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: 'MCP Integration',
    description: 'Seamless integration with the Model Context Protocol for AI-powered workflows.',
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: 'Semantic Search',
    description: 'Find relevant information across crawled data with advanced semantic search.',
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: 'Rate Limiting',
    description: 'Respectful crawling with automatic rate limiting and politeness controls.',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency with parallel processing capabilities.',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Security & Privacy',
    description: 'Built-in security features with data handling that respects privacy standards.',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: 'Analytics',
    description: 'Comprehensive crawl analytics and insights for monitoring and optimization.',
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need for advanced web crawling and data extraction, built specifically for AI workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 