import { motion } from "framer-motion";
import { hero } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Halos discrets */}
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

                {/* Flux de transformation : Problème → Idée → Technologie → Solution */}
                <Reveal delay={0.3} className="mt-16">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4" aria-label="De la problématique à la solution">
                        {hero.flux.map((etape, i) => (
                            <div key={etape} className="flex items-center gap-3 sm:gap-4">
                                <motion.span
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.25, duration: 0.5 }}
                                    className={`font-display font-semibold px-5 py-2.5 rounded-2xl border text-sm sm:text-base ${
                                        i === hero.flux.length - 1
                                            ? "bg-gradient-to-r from-accent to-neon text-nuit border-transparent shadow-carte"
                                            : "bg-white/5 text-white/85 border-white/15"
                                    }`}
                                >
                                    {etape}
                                </motion.span>
                                {i < hero.flux.length - 1 && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.75 + i * 0.25 }}
                                        className="text-neon text-xl"
                                        aria-hidden="true"
                                    >
                                        →
                                    </motion.span>
                                )}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}