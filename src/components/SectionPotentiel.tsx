import { potentiels } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionPotentiel() {
    return (
        <section id="potentiel" className="py-24 relative overflow-hidden">
            <div className="halo w-[400px] h-[400px] bg-neon/10 top-20 -right-32" />
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-5">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Mes capacités</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Ce que je peux <span className="texte-gradient">construire</span>
                    </h2>
                    <p className="text-slate-400 mt-5 max-w-3xl leading-relaxed">
                        Concrètement, voici ce qui sort de mon atelier de solution : un livrable, et ce qu'il change dans votre quotidien.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {potentiels.map((p, i) => (
                        <Reveal key={p.titre} delay={(i % 3) * 0.08}>
                            <article className="h-full flex flex-col bg-encre/70 border border-white/10 rounded-3xl p-6 hover:border-neon/40 transition-colors duration-300">
                                <div className="flex items-center gap-3">
                                    <span className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-2xl" aria-hidden="true">
                                        {p.icone}
                                    </span>
                                    <h3 className="font-display font-bold text-white text-base flex-1">{p.titre}</h3>
                                </div>
                                <p className="text-slate-300/90 text-sm mt-4 leading-relaxed flex-1">{p.livrable}</p>
                                <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                                    <span className="text-neon font-semibold uppercase tracking-wider mr-1">Ex.</span> {p.exemple}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}