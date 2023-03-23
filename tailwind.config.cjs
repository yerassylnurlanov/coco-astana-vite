/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
        colors:{
            'secondary' : "#dbd1c7",
            'regal-blue': '#243c5a',
            'regal-green':'#F8ECD4',
            'regal-yellow':'#BFD2BF',
            'regal-orange':'#F5C05B',
            'regal-red':'#F19C88'
        },
        flex: {
            '2': '0 0 45%',
            '3': '0 0 30%',
            '4': '0 0 25%',
            '5': '0 0 20%'
          }
    },
  },
  plugins: [],
}
