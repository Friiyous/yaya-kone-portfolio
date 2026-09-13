import { technologies } from "../data/portfolio";
import Reveal from "./Reveal";

export default function SectionTechnologies() {
    return (
        <section id="technologies" className="py-24 bg-encre relative overflow-hidden">
            <div className="halo w-[350px] h-[350px] bg-accent/10 top-0 -right-32" />
            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                <Reveal>
                    <span className="text-neon font-semibold text-xs uppercase tracking-[0.2em]">Technologies</span>
                    <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-3">
                        Des outils, <span className="texte-gradient">pas une identité</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-2.5 mt-10">
                        {technologies.liste.map((t) => (
                            <span key={t} className="font-display font-medium text-sm bg-nuit/70 border border-white/10 text-white/85 px-5 py-2.5 rounded-full hover:border-neon/40 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}