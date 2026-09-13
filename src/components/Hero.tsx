import { motion } from "framer-motion";
import { Suspense } from "react";
import { hero } from "../data/portfolio";
import Hero3D from "./Hero3D";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden transition-colors duration-500">
            <div className="halo w-[500px] h-[500px] bg-accent/15 -top-32 -right-32" />
            <div className="halo w-[400px] h-[400px] bg-neon/10 bottom-0 -left-24" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
                {/* TEXTE */}
                <motion.div
                    className="lg:col-span-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white/80 text-xs md:text-sm px-4 py-2 rounded-full mb-7 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                        {hero.badge}
                    </span>

                    <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] max-w-2xl">
                        Je transforme les <span className="texte-gradient">problèmes réels</span> en solutions digitales intelligentes.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-light">
                        {hero.sousTitre}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-500/90 flex items-center gap-2">
                        <span aria-hidden="true">🩺</span> {hero.contexte}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <a href="#projets"
                            className="bg-gradient-to-r from-accent to-neon text-nuit font-bold px-8 py-4 rounded-full text-base shadow-carte hover:opacity-90 hover:-translate-y-0.5 transition-all">
                            {hero.ctaPrincipal}
                        </a>
                        <a href="#contact"
                            className="border border-white/25 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 hover:border-neon/50 transition-all">
                            {hero.ctaSecondaire}
                        </a>
                    </div>

                    {/* Légende des 4 étapes (lisible partout, même sans 3D) */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-10 flex flex-wrap items-center gap-2"
                        aria-label="De la problématique à la solution"
                    >
                        {hero.flux.map((etape, i) => (
                            <div key={etape.nom} className="flex items-center gap-1.5 sm:gap-2.5">
                                <span
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] sm:text-xs font-semibold ${
                                        i === hero.flux.length - 1
                                            ? "bg-gradient-to-r from-accent to-neon border-transparent text-nuit"
                                            : "bg-encre/60 border-white/15 text-white/85"
                                    }`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: etape.couleur }} aria-hidden="true" />
                                    {etape.nom}
                                </span>
                                {i < hero.flux.length - 1 && <span className="text-slate-500 text-sm" aria-hidden="true">→</span>}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* SCÈNE 3D : le moteur de transformation */}
                <motion.div
                    className="lg:col-span-5 h-[380px] sm:h-[440px] lg:h-[540px] relative w-full"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <Suspense fallback={null}>
                        <Hero3D />
                    </Suspense>
                </motion.div>
            </div>

            {/* Bandeau défilant signature */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-neon to-accent py-2.5 overflow-hidden">
                <div className="marquee whitespace-nowrap font-display font-semibold text-nuit text-xs sm:text-sm tracking-wider uppercase flex gap-9 w-max" aria-hidden="true">
                    <span>
                        {hero.marquee.map((m) => `◆ ${m}`).join("  ")}◆&nbsp;
                    </span>
                    <span>
                        {hero.marquee.map((m) => `◆ ${m}`).join("  ")}◆&nbsp;
                    </span>
                </div>
            </div>
        </section>
    );
}