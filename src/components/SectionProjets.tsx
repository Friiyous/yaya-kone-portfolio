import { projets, type Projet } from "../data/portfolio";
import Reveal from "./Reveal";

function CarteProjet({ p, grande = false }: { p: Projet; grande?: boolean }) {
    return (
        <Reveal className={grande ? "lg:col-span-12" : ""}>
            <article className={`bg-encre/70 border border-white/10 rounded-3xl p-7 md:p-10 hover:border-accent/40 transition-colors duration-300 ${grande ? "" : ""}`}>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="font-display font-bold text-4xl text-white/10 select-none">{p.numero}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neon bg-neon/10 border border-neon/20 px-3 py-1.5 rounded-full">
                        {p.categorie}
                    </span>
                    {p.statut && (
                        <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                            ● {p.statut}
                        </span>
                    )}
                </div>

                <h3 className={`font-display font-bold text-white leading-snug ${grande ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                    {p.titre}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Le problème</p>
                        <p className="text-slate-300/90 text-sm leading-relaxed">{p.probleme}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">La solution construite</p>
                        <p className="text-slate-300/90 text-sm leading-relaxed">{p.solution}</p>
                    </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
                    {p.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-300/90">
                            <span className="text-neon mt-0.5" aria-hidden="true">✓</span> {point}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-7 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                            <span key={t} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{t}</span>
                        ))}
                    </div>
                    <a href={p.lien} target="_blank" rel="noreferrer"
                        className="bg-gradient-to-r from-accent to-neon text-nuit font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition whitespace-nowrap">
                        {p.lienLabel} →
                    </a>
                </div>

                <p className="text-xs text-slate-500 mt-4">{p.resultat}</p>
            </article>
        </Reveal>
    );
}

export default function SectionProjets() {
    return (
        <section id="projets" className="py-24 relative overflow-hidden">
            <div className="halo w-[450px] h-[450px] bg-neon/10 top-40 -right-40" />
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <Reveal className="mb-14">
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Projets réels</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Des études de cas, <span className="texte-gradient">pas des démos</span>
                    </h2>
                </Reveal>

                <div className="grid lg:grid-cols-12 gap-6">
                    {projets.map((p) => (
                        <CarteProjet key={p.numero} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}