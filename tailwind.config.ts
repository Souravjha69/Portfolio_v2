import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        bg: '#080808',
        bg2: '#0F0F0F',
        bg3: '#161616',
        g1: '#1A1A1A',
        g2: '#242424',
        g3: '#404040',
        g4: '#6A6A6A',
        g5: '#9A9A9A',
        g6: '#C8C8C4',
        blue: '#4F8EF7',
        cyan: '#22D3EE',
        green: '#34D399',
        violet: '#A78BFA',
        amber: '#FBBF24',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'ring-pulse': 'ring-pulse 2.5s ease-out infinite',
        'scan-line': 'scan-line 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(0.8)' },
        },
        'scroll-line': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ring-pulse': {
          '0%': { width: '14px', height: '14px', opacity: '0.9' },
          '100%': { width: '70px', height: '70px', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
