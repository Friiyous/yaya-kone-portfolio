import { projets, type Projet } from "../data/portfolio";
import Reveal from "./Reveal";

function CarteProjet({ p }: { p: Projet }) {
    return (
        <Reveal>
            <article className="bg-encre/70 border border-white/10 rounded-3xl overflow-hidden hover:border-accent/40 transition-colors duration-300">
                {/* Visuel réel du site déployé */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                        src={p.visuel}
                        alt={`Aperçu du site ${p.titre}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider text-neon bg-nuit/85 border border-neon/20 px-3 py-1.5 rounded-full">
                        {p.categorie}
                    </span>
                    {p.statut && (
                        <span className="absolute top-3 right-3 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                            ● {p.statut}
                        </span>
                    )}
                </div>

                <div className="p-7 md:p-10">
                    <h3 className="font-display font-bold text-white text-xl sm:text-2xl leading-snug">{p.titre}</h3>

                    <div className="grid md:grid-cols-3 gap-5 mt-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">01 · Contexte</p>
                            <p className="text-slate-300/90 text-sm mt-2 leading-relaxed">{p.probleme}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">02 · Solution</p>
                            <p className="text-slate-300/90 text-sm mt-2 leading-relaxed">{p.solution}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">03 · Résultat</p>
                            <p className="text-slate-300/90 text-sm mt-2 leading-relaxed">{p.resultat}</p>
                        </div>
                    </div>

                    <details className="mt-6 group">
                        <summary className="cursor-pointer text-sm text-slate-400 hover:text-white transition select-none">
                            <span className="mr-1.5" aria-hidden="true">▸</span> Ce qui a été livré en détail
                        </summary>
                        <ul className="mt-3 grid sm:grid-cols-2 gap-x-5 gap-y-2">
                            {p.points.map((point) => (
                                <li key={point} className="flex items-start gap-2 text-sm text-slate-300/90">
                                    <span className="text-neon mt-0.5" aria-hidden="true">✓</span> {point}
                                </li>
                            ))}
                        </ul>
                    </details>

                    <div className="flex flex-wrap items-center gap-3 mt-8">
                        <div className="flex flex-wrap gap-2">
                            {p.technologies.map((t) => (
                                <span key={t} className="text-[11px] font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{t}</span>
                            ))}
                        </div>
                        <span className="text-slate-600">·</span>
                        <a href={p.lien} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-neon text-nuit font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition whitespace-nowrap">
                            {p.lienLabel} →
                        </a>
                    </div>
                </div>
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

                <div className="grid gap-6">
                    {projets.map((p) => (
                        <CarteProjet key={p.numero} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}