import { factories } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionFactories() {
    return (
        <section id="factories" className="py-24 relative overflow-hidden">
            <div className="halo w-[400px] h-[400px] bg-neon/10 bottom-0 -right-32" />
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Vision future</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">{factories.titre}</h2>
                    <p className="text-slate-300/90 mt-5 max-w-3xl leading-relaxed">{factories.intro}</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="bg-gradient-to-b from-encre to-nuit border border-accent/30 rounded-3xl p-7 md:p-10 shadow-carte">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl">
                            <span className="texte-gradient">{factories.concept}</span>
                        </h3>
                        <p className="text-slate-300/90 mt-4 max-w-3xl leading-relaxed">{factories.definition}</p>

                        {/* Formule visuelle */}
                        <div className="flex flex-wrap items-center gap-2.5 mt-8" aria-label="Composants d'une factory">
                            {["Données", "IA", "Automatisation", "Production", "Contrôle", "Reporting"].map((brique, i) => (
                                <div key={brique} className="flex items-center gap-2.5">
                                    <span className="font-display font-semibold text-xs sm:text-sm bg-white/5 border border-white/15 text-white/85 px-4 py-2 rounded-xl">
                                        {brique}
                                    </span>
                                    {i < 5 && <span className="text-accent font-bold" aria-hidden="true">+</span>}
                                </div>
                            ))}
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-10 mb-4">Exemples d'architectures possibles</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {factories.exemples.map((f) => (
                                <div key={f} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center font-display font-semibold text-white/90 text-sm hover:border-neon/40 transition-colors">
                                    {f}
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-500 text-xs mt-6">ℹ️ {factories.note}</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}