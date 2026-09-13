import { parcours, identite } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionParcours() {
    return (
        <section id="parcours" className="py-24 relative overflow-hidden">
            <div className="halo w-[400px] h-[400px] bg-neon/10 bottom-10 -left-32" />
            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal>
                    <div className="bg-encre/70 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="halo w-64 h-64 bg-accent/15 -top-16 -right-16" />
                        <div className="relative z-10">
                            <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Mon parcours</span>
                            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mt-3">{parcours.titre}</h2>

                            {parcours.texte.map((p, i) => (
                                <p key={i} className="text-slate-300/90 mt-5 leading-relaxed">{p}</p>
                            ))}

                            <p className="mt-7 pt-6 border-t border-white/10 font-display font-semibold text-white/95 leading-relaxed">
                                💡 {parcours.conclusion}
                            </p>

                            <p className="text-xs text-slate-500 mt-6">
                                {identite.nom} — {identite.signature}
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}