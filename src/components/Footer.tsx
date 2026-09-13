import { identite, technologies } from "../data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-neon grid place-items-center font-display font-bold text-nuit text-sm">YK</span>
                    <div className="text-center md:text-left">
                        <span className="font-display font-bold text-white block">{identite.nom}</span>
                        <span className="text-neon text-xs">{identite.signature}</span>
                    </div>
                </div>

                <p className="text-slate-400 text-sm text-center italic">« {technologies.citation} »</p>

                <p className="text-slate-500 text-xs">© {new Date().getFullYear()} {identite.nom}</p>
            </div>
        </footer>
    );
}