import { useState } from "react";
import { identite } from "../data/portfolio";

const liens = [
    { href: "#capacites", label: "Capacités" },
    { href: "#projets", label: "Projets" },
    { href: "#methode", label: "Méthode" },
    { href: "#parcours", label: "Parcours" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-nuit/85 border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent to-neon grid place-items-center font-display font-bold text-nuit text-sm">YK</span>
                    <span className="font-display font-bold text-white leading-tight">
                        {identite.nom}
                        <span className="block text-[10px] font-body font-medium text-neon tracking-wide uppercase">{identite.role}</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
                    {liens.map((l) => (
                        <a key={l.href} href={l.href} className="hover:text-neon transition">{l.label}</a>
                    ))}
                    <a href="#contact" className="bg-gradient-to-r from-accent to-neon text-nuit font-bold px-4 py-2 rounded-full hover:opacity-90 transition">
                        Démarrer un projet
                    </a>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl px-2" aria-label="Ouvrir le menu">☰</button>
            </nav>

            {open && (
                <div className="md:hidden bg-encre px-4 pb-4 flex flex-col gap-3 text-white">
                    {liens.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5 border-b border-white/10">{l.label}</a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)} className="bg-gradient-to-r from-accent to-neon text-nuit text-center font-bold px-4 py-2.5 rounded-full">
                        Démarrer un projet
                    </a>
                </div>
            )}
        </header>
    );
}