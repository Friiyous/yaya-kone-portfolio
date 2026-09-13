import { motion } from "framer-motion";
import { hero } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
            <div className="halo w-[500px] h-[500px] bg-accent/15 -top-32 -right-32" />
            <div className="halo w-[400px] h-[400px] bg-neon/10 bottom-0 -left-24" />

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white/80 text-xs md:text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                        {hero.badge}
                    </span>

                    <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.12] max-w-4xl">
                        Je transforme les <span className="texte-gradient">problèmes réels</span> en solutions digitales intelligentes.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300/90 max-w-2xl leading-relaxed font-light">
                        {hero.sousTitre}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-500/90 flex items-center gap-2">
                        <span aria-hidden="true">🩺</span> {hero.contexte}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-9">
                        <a href="#projets"
                            className="bg-gradient-to-r from-accent to-neon text-nuit font-bold px-8 py-4 rounded-full text-base shadow-carte hover:opacity-90 hover:-translate-y-0.5 transition-all">
                            {hero.ctaPrincipal}
                        </a>
                        <a href="#contact"
                            className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 hover:border-neon/50 transition-all">
                            {hero.ctaSecondaire}
                        </a>
                    </div>
                </motion.div>

                {/* Diagramme : Problème → Idée → Technologie → Solution (avec le sens de chaque étape) */}
                <Reveal delay={0.3} className="mt-14">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" aria-label="De la problématique à la solution">
                        {hero.flux.map((etape, i) => (
                            <motion.div
                                key={etape.titre}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                                className={`rounded-2xl p-4 text-left border ${
                                    i === hero.flux.length - 1
                                        ? "bg-gradient-to-br from-accent to-neon border-transparent shadow-carte"
                                        : "bg-encre/60 border-white/10"
                                }`}
                            >
                                <p className={`text-[11px] uppercase tracking-wider ${i === hero.flux.length - 1 ? "text-nuit/80" : "text-slate-500"}`}>
                                    Étape {i + 1} {i < hero.flux.length - 1 && <span aria-hidden="true">→</span>}
                                </p>
                                <p className={`font-display font-semibold text-sm sm:text-base ${i === hero.flux.length - 1 ? "text-nuit" : "text-white"}`}>
                                    {etape.titre}
                                </p>
                                <p className={`text-[11px] mt-1 leading-snug ${i === hero.flux.length - 1 ? "text-nuit/70" : "text-slate-400"}`}>
                                    {etape.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}