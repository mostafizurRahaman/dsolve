module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#2A9ED5",
               secondary: "#29BFCE",
               accent: "#0F112F",
               neutral: "#fff",
               info: "#3ABFF8",
               success: "#36D399",
               warning: "#FBBD23",
               error: "#F87272",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
