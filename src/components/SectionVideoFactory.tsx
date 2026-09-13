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

                        {/* Trois familles claires au lieu de 12 chips */}
                        <div className="grid md:grid-cols-3 gap-4 mt-8 relative z-10">
                            {videoFactory.familles.map((famille) => (
                                <div key={famille.titre} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <p className="text-sm font-bold text-white flex items-center gap-2">
                                        <span aria-hidden="true">{famille.icone}</span> {famille.titre}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                                        {famille.termes.map((t) => (
                                            <span key={t} className="text-[11px] font-medium text-white/75 bg-encre/70 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* PIPELINE : grille propre, stable sur mobile */}
                        <Reveal delay={0.15} className="mt-10 relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">La chaîne de production</p>
                            <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                                {videoFactory.pipeline.map((etape, i) => (
                                    <li
                                        key={etape}
                                        className={`flex flex-col justify-center rounded-xl border px-3 py-3 text-center ${
                                            i === videoFactory.pipeline.length - 1
                                                ? "bg-gradient-to-br from-accent to-neon border-transparent shadow-carte"
                                                : "bg-encre/80 border-white/15"
                                        }`}
                                    >
                                        <span className={`text-[10px] uppercase tracking-wider ${i === videoFactory.pipeline.length - 1 ? "text-nuit/70" : "text-slate-500"}`}>
                                            Étape {i + 1}
                                        </span>
                                        <span className={`font-display font-semibold text-xs sm:text-sm ${i === videoFactory.pipeline.length - 1 ? "text-nuit" : "text-white"}`}>
                                            {etape}
                                        </span>
                                    </li>
                                ))}
                            </ol>
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