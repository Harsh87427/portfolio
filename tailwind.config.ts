import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'pfp': "url('/pfp.jpeg')"
      },
      colors:{
        nav: '#fff',
        hero: '#f9f9f9',
        textcolor: '#2d2e32',
        pcolor: '#555'
      },
      boxShadow:{
        'stack' : '0 0 10px rgba(0,0,0,.1)',
      },      
    },
  },
  plugins: [],
}

export default config
