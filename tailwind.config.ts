import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#3B755F',
        blue: '#2E3A8C',
        beige: '#F2EBDB',
        white: '#FFFFFF',
        black: '#212121',
        borderGray: '#B0B0B0',
        lightGray: '#E3E1D9',
        backgroundGray: '#F9F9F9',
      },
      fontFamily: {
        'cabin': ["Cabin", "sans-serif"]
      },
      keyframes: {
        'tooltip': {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        },
        'spinner': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        }
      },
      animation: {
        'tooltip': 'tooltip 300ms ease-in-out',
        'spinner': 'spinner 1s linear infinite',
      },
      spacing: {
        "10P": '10%',
        "15P": '15%',
        "20P": '20%',
        "25P": '25%',
        "30P": '30%',
        "33P": '33%',
        "35P": '35%',
        "40P": '40%',
        "45P": '45%',
        "50P": '50%',
        "55P": '55%',
        "60P": '60%',
        "65P": '65%',
        "70P": '70%',
        "75P": '75%',
        "80P": '80%',
        "85P": '85%',
        "90P": '90%',
        "95P": '95%',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22PX',
        24: '24px',
        28: '28px',
        30: '30px',
        36: '36px',
        40: '40px',
        48: '48px',
        57: '57px',
        67: '67px',
        221: '221px',
        300: '300px',
        500: '500px',
        700: '700px',
        750: '750px',
        800: '800px',
      },
      borderWidth: {
        '5': '5px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
