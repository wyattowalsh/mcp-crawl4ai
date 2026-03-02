/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './node_modules/fumadocs-ui/dist/**/*.js',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.mdx',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        // Primary brand colors
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Secondary brand colors
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Background and text colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'card-background': 'hsl(var(--card-background))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundColor: {
        card: 'hsl(var(--card-background))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
      },
      textColor: {
        card: 'hsl(var(--card-foreground))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
      },
      borderColor: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
        'mesh-gradient': 'linear-gradient(to bottom right, #f8fafc, #f1f5f9, #e0f2fe, #f0fdfa)',
        'mesh-gradient-dark': 'linear-gradient(to bottom right, #0f172a, #1e293b, #164e63, #042f2e)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              fontWeight: '400',
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.2rem',
              border: `1px solid ${theme('colors.gray.200')}`,
            },
          },
        },
        dark: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.800'),
              border: `1px solid ${theme('colors.gray.700')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [],
}; 