/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/news.html"],
    theme: {
        extend: {
            colors: {
                sanMarino: "rgb(86, 119, 172)",
                mariner: "rgb(66,102,158)",
                nightRider: "rgb(51, 51, 51)",
                dimGray: "rgba(97, 97, 97, 1)",
                wildBlueYonder: "rgb(116, 148, 203)",
            },
        },
    },
    plugins: [],
};
