import { methode } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionMethode() {
    return (
        <section id="methode" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14 text-center">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Ma méthode</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        De l'idée à la <span className="texte-gradient">solution</span>
                    </h2>
                </Reveal>

                {/* Timeline verticale */}
                <div className="relative">
                    <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-neon/40 to-transparent" aria-hidden="true" />

                    <ol className="space-y-8">
                        {methode.map((etape, i) => (
                            <li key={etape.numero}>
                                <Reveal delay={i * 0.08}>
                                    <div className="flex items-start gap-6">
                                        <span className="timeline-point relative z-10 w-12 h-12 shrink-0 rounded-full bg-encre border border-accent/40 grid place-items-center font-display font-bold text-neon text-sm">
                                            {etape.numero}
                                        </span>
                                        <div className="bg-encre/70 border border-white/10 rounded-2xl p-5 flex-1 hover:border-neon/30 transition-colors">
                                            <h3 className="font-display font-bold text-white">{etape.titre}</h3>
                                            <p className="text-slate-300/90 text-sm mt-1.5 leading-relaxed">{etape.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}