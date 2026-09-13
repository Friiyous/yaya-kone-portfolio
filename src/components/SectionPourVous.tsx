import { pourVous } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionPourVous() {
    return (
        <section id="pour-vous" className="py-24 bg-encre relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Ce que je peux construire pour vous</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Vous avez un problème. <span className="texte-gradient">Construisons la solution.</span>
                    </h2>
                </Reveal>

                <div className="space-y-4 max-w-3xl">
                    {pourVous.map((paire, i) => (
                        <Reveal key={paire.probleme} delay={i * 0.06}>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-encre/70 border border-white/10 rounded-2xl p-5 hover:border-neon/30 transition-colors">
                                <p className="font-display font-semibold text-white sm:w-1/2">❓ {paire.probleme}</p>
                                <p className="text-neon text-sm sm:w-1/2 sm:text-right">→ {paire.reponse}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2} className="mt-10">
                    <a href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-neon text-nuit font-bold px-8 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all">
                        Décrire mon projet →
                    </a>
                </Reveal>
            </div>
        </section>
    );
}