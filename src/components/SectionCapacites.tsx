import { categories } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionCapacites() {
    return (
        <section id="capacites" className="py-24 relative overflow-hidden">
            <div className="halo w-[400px] h-[400px] bg-accent/10 top-20 -left-32" />
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Ce que je conçois</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Des réponses à des <span className="texte-gradient">problèmes réels</span>
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 gap-6">
                    {categories.map((c, i) => (
                        <Reveal key={c.titre} delay={i * 0.08}>
                            <article className="h-full bg-encre/70 border border-white/10 rounded-3xl p-7 hover:border-neon/40 transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-2xl">{c.icone}</span>
                                    <h3 className="font-display font-bold text-white text-lg">{c.titre}</h3>
                                </div>
                                <p className="text-slate-300/90 text-sm leading-relaxed">{c.description}</p>
                                <p className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                                    <span className="text-neon font-semibold uppercase tracking-wider mr-1.5">Problème métier :</span>
                                    {c.probleme}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}