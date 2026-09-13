import { contactSection, contact } from "../data/portfolio";
import Reveal from "./Reveal";

// Lien WhatsApp : construit à partir du numéro (remplace le TODO par ton vrai numéro dans data/portfolio.ts)
const whatsappHref = contact.whatsapp.startsWith("TODO")
    ? "#contact"
    : `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Bonjour Yaya, j'ai un projet à discuter avec vous.")}`;

const emailHref = contact.email.startsWith("TODO") ? "#contact" : `mailto:${contact.email}?subject=${encodeURIComponent("Projet à discuter")}`;

export default function SectionContact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="halo w-[500px] h-[500px] bg-accent/15 top-0 left-1/3" />
            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                <Reveal>
                    <h2 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight">{contactSection.titre}</h2>
                    <p className="text-slate-300/90 mt-5 text-lg">{contactSection.texte}</p>

                    <div className="mt-10">
                        <a href={whatsappHref} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-neon text-nuit font-bold px-9 py-4 rounded-full text-lg shadow-carte hover:opacity-90 hover:-translate-y-0.5 transition-all">
                            💬 {contactSection.ctaPrincipal}
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <a href={whatsappHref} target="_blank" rel="noreferrer"
                            className="border border-white/20 text-white/90 font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 hover:border-neon/50 transition">
                            WhatsApp
                        </a>
                        <a href={contact.telephoneHref}
                            className="border border-white/20 text-white/90 font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 hover:border-neon/50 transition">
                            📞 Téléphone
                        </a>
                        <a href={emailHref}
                            className="border border-white/20 text-white/90 font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 hover:border-neon/50 transition">
                            ✉️ Email
                        </a>
                        {contact.socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                                className="border border-white/20 text-white/90 font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 hover:border-neon/50 transition">
                                {s.label}
                            </a>
                        ))}
                    </div>

                    {contact.whatsapp.startsWith("TODO") && (
                        <p className="text-amber-300/70 text-xs mt-8 max-w-md mx-auto">
                            ⚠️ Emplacements de contact à compléter dans <code>src/data/portfolio.ts</code> (section <code>contact</code>).
                        </p>
                    )}
                </Reveal>
            </div>
        </section>
    );
}