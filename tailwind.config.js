/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nuit: "#0A0F1C",      // Fond principal
                encre: "#0F172A",     // Cartes / panneaux
                accent: "#6366F1",    // Indigo électrique
                neon: "#22D3EE",      // Cyan tech
                or: "#E8B84B",        // Accent doré discret
            },
            fontFamily: {
                display: ["Space Grotesk", "system-ui", "sans-serif"],
                body: ["Inter", "system-ui", "sans-serif"],
            },
            boxShadow: {
                carte: "0 20px 60px -15px rgba(99, 102, 241, 0.25)",
            },
        },
    },
    plugins: [],
}