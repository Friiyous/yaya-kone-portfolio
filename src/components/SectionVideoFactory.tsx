import { videoFactory } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionVideoFactory() {
    return (
        <section id="video-factory" className="py-24 relative overflow-hidden">
            <div className="halo w-[500px] h-[500px] bg-accent/15 top-1/3 -left-40" />
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Projet majeur</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Une infrastructure <span className="texte-gradient">intelligente</span>
                    </h2>
                </Reveal>

                {/* GRANDE CARTE PROJET MAJEUR */}
                <Reveal>
                    <article className="bg-gradient-to-b from-encre to-nuit border border-accent/30 rounded-3xl p-7 md:p-12 relative overflow-hidden shadow-carte">
                        <div className="halo w-80 h-80 bg-accent/20 -top-20 -right-20" />

                        <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full">
                                ⚙️ {videoFactory.badge}
                            </span>
                        </div>

                        <h3 className="font-display font-bold text-white text-3xl sm:text-5xl tracking-tight relative z-10">
                            {videoFactory.titre}
                        </h3>
                        <p className="text-neon font-display font-semibold text-lg sm:text-xl mt-3 relative z-10">{videoFactory.sousTitre}</p>

                        <p className="text-slate-300/90 mt-6 max-w-3xl leading-relaxed relative z-10">{videoFactory.description}</p>

                        {/* Concepts clés */}
                        <div className="flex flex-wrap gap-2 mt-8 relative z-10">
                            {videoFactory.concepts.map((c) => (
                                <span key={c} className="text-xs font-medium text-white/75 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                                    {c}
                                </span>
                            ))}
                        </div>

                        {/* PIPELINE VISUEL : Brief → ... → Vidéo finale */}
                        <Reveal delay={0.15} className="mt-10 relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">La chaîne de production</p>
                            <div className="flex flex-wrap items-center gap-y-4 gap-x-2 sm:gap-x-3">
                                {videoFactory.pipeline.map((etape, i) => (
                                    <div key={etape} className="flex items-center gap-2 sm:gap-3">
                                        <span
                                            className={`font-display font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl border ${
                                                i === 0
                                                    ? "bg-white/10 text-white border-white/20"
                                                    : i === videoFactory.pipeline.length - 1
                                                        ? "bg-gradient-to-r from-accent to-neon text-nuit border-transparent shadow-carte"
                                                        : "bg-encre text-white/85 border-white/15"
                                            }`}
                                        >
                                            {etape}
                                        </span>
                                        {i < videoFactory.pipeline.length - 1 && <span className="pipeline-ligne w-4 sm:w-8 h-px" aria-hidden="true" />}
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <div className="mt-10 relative z-10">
                            <a href="#architecture-video-factory"
                                className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-neon/50 transition">
                                Découvrir l'architecture →
                            </a>
                        </div>
                    </article>
                </Reveal>

                {/* DÉTAIL DE L'ARCHITECTURE (destination du bouton) */}
                <Reveal delay={0.1} className="mt-8">
                    <div id="architecture-video-factory" className="bg-encre/70 border border-white/10 rounded-3xl p-7 md:p-10 scroll-mt-24">
                        <h3 className="font-display font-bold text-white text-xl mb-4">L'architecture, en clair</h3>
                        <p className="text-slate-300/90 text-sm md:text-base leading-relaxed max-w-4xl">{videoFactory.architecture}</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}