import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          home: '#1c1c1c',
          project: '#141212',
          modal: '#141212'
        },
        text: {
          main: '#f1f5f1',
          secondary: '#a5a5a5',
          hover: '#efefef',
          focus: '#805ad5'
        },
        button: {
          bg: '#2d2d2daa',
          hover: '#3e3e3eaa'
        },
        card: {
          outline: '#c0c0c088'
        },
        component: {
          bg: '#211f1f',
          hover: '#3e3e3eaa',
          focus: '#805ad599',
          divider: '#353535'
        },
        calendar: {
          0: '#2d2d2dab',
          1: '#433853',
          2: '#58447c',
          3: '#6c4fa8',
          4: '#8b5cf6',
          border: 'rgba(255, 255, 255, 0.05)'
        },
        skill: {
          node: '#22c55e',
          react: '#22d3ee',
          html: '#f97316',
          css: '#3b82f6',
          js: '#facc15',
          ts: '#3b82f6',
          mysql: '#3b82f6',
          mongo: '#4ade80',
          graphql: '#ec4899',
          api: '#8b5cf6',
          bg: '#272727'
        }
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        body: '6.75rem'
      },
      maxWidth: {
        'page-container': '1500px',
        'nav-container': '1500px'
      },
      boxShadow: {
        btn: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'skill-box': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        card: '0px 16px 60px 4px rgba(128,90,213,0.3)'
      },
      keyframes: {
        'card-shadow-pulse': {
          '0%, 100%': { boxShadow: '0px 16px 60px 4px rgba(128,90,213,0.3)' },
          '50%': { boxShadow: '0px 16px 60px 20px rgba(128,90,213,0.7)' }
        },
        'card-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' }
        }
      },
      animation: {
        'card-shadow-pulse': 'card-shadow-pulse 300ms ease-in-out',
        'card-pulse': 'card-pulse 300ms ease-in-out'
      }
    }
  },
  plugins: []
}
export default config
