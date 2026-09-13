// ============================================================
// CONTENU DU PORTFOLIO — TOUT SE MODIFIE ICI
// Ajouter un nouveau projet = ajouter un objet dans `projets`.
// ============================================================

export const identite = {
    nom: "Yaya Koné",
    role: "Solution Builder",
    signature: "Solution Builder · Digital · AI · Automation",
    accroche: "Conception & développement de solutions digitales.",
};

// ⚠️ COORDONNÉES À REMPLACER par les vraies valeurs avant diffusion.
// Tant que la valeur contient "TODO", les boutons restent des emplacements neutres.
export const contact = {
    whatsapp: "TODO_NUMERO_WHATSAPP", // ex. : 22507XXXXXXXX
    telephoneAffiche: "TODO +225 XX XX XX XX XX",
    telephoneHref: "tel:+225XXXXXXXXXX",
    email: "TODO@email.com",
    socials: [
        // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
        // { label: "GitHub", href: "https://github.com/Friiyous" },
    ] as { label: string; href: string }[],
};

export const hero = {
    badge: "Solution Builder · Digital · AI · Automation",
    titre: "Je transforme les problèmes réels en solutions digitales intelligentes.",
    sousTitre:
        "Je conçois des sites web, applications, automatisations et systèmes assistés par IA adaptés aux besoins réels des entreprises et des professionnels.",
    ctaPrincipal: "Découvrir mes projets",
    ctaSecondaire: "Parlons de votre projet",
    flux: ["Problème", "Idée", "Technologie", "Solution"],
};

export type Categorie = {
    icone: string;
    titre: string;
    description: string;
    probleme: string;
};

export const categories: Categorie[] = [
    {
        icone: "🌐",
        titre: "Sites & expériences digitales",
        description: "Sites vitrines, plateformes web et interfaces adaptées aux activités professionnelles.",
        probleme: "Une activité sans présence digitale reste invisible pour ses clients potentiels.",
    },
    {
        icone: "⚙️",
        titre: "Automatisation",
        description: "Transformation des tâches répétitives en workflows automatisés.",
        probleme: "Des heures perdues chaque semaine sur des tâches qu'une machine pourrait faire.",
    },
    {
        icone: "🤖",
        titre: "Solutions IA",
        description: "Intégration de l'intelligence artificielle dans des processus réellement utiles.",
        probleme: "L'IA est partout dans les discours, mais rarement connectée aux vrais besoins.",
    },
    {
        icone: "🧠",
        titre: "Systèmes métier",
        description: "Conception d'outils adaptés à des besoins spécifiques : gestion, données, production, suivi et opérations.",
        probleme: "Les logiciels génériques ne collent jamais à la manière réelle de travailler d'une organisation.",
    },
];

export type Projet = {
    numero: string;
    titre: string;
    categorie: string;
    probleme: string;
    solution: string;
    points: string[];
    technologies: string[];
    resultat: string;
    lien: string;
    lienLabel: string;
    statut?: string;
};

export const projets: Projet[] = [
    {
        numero: "01",
        titre: "Korhogo Print — Expérience digitale pour une entreprise d'impression",
        categorie: "Site web · Expérience client",
        probleme:
            "Une imprimerie locale avait besoin d'une présence digitale professionnelle pour présenter ses services et faciliter les demandes de commande.",
        solution:
            "Conception et développement d'un site web professionnel complet : présentation des services, configurateur 3D interactif, parcours de commande via WhatsApp et déploiement web.",
        points: [
            "Interface responsive, pensée mobile d'abord",
            "Expérience mobile optimisée",
            "Présentation claire des services",
            "Parcours de commande direct via WhatsApp",
            "Appel direct et contact",
            "Déploiement web en production",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Three.js"],
        resultat: "Site en production et accessible en ligne.",
        lien: "https://friiyous.github.io/korhogo-print-3d/",
        lienLabel: "Voir le projet",
        statut: "En production",
    },
];

// ✅ Pour ajouter un futur projet : dupliquer l'objet ci-dessus avec un numero "02", etc.

export const videoFactory = {
    titre: "VIDEO_FACTORY",
    sousTitre: "Une infrastructure intelligente de production vidéo",
    badge: "Projet en développement",
    description:
        "Conception d'une architecture logicielle permettant d'orchestrer et d'automatiser différentes étapes d'une chaîne de production vidéo assistée par intelligence artificielle.",
    concepts: [
        "Orchestration",
        "Génération",
        "Gestion des assets",
        "B-roll",
        "Timeline",
        "Sous-titres",
        "Assemblage",
        "FFmpeg",
        "Contrôle qualité",
        "Traçabilité",
        "Gestion des runs",
        "Automatisation",
    ],
    pipeline: ["Brief", "IA", "Script", "Assets", "Production", "Montage", "QC", "Vidéo finale"],
    architecture:
        "Chaque étape de la chaîne est conçue comme un maillon traçable : le brief entre, chaque transformation est enregistrée (runs), et la vidéo finale ressort après contrôle qualité. L'objectif : rendre une production vidéo complexe répétable, vérifiable et automatisable.",
};

export const factories = {
    titre: "Des systèmes conçus pour votre activité",
    intro:
        "Une entreprise n'a pas toujours besoin d'un logiciel générique. Elle a parfois besoin d'un système conçu autour de sa manière réelle de travailler.",
    concept: "Custom AI Factory",
    definition:
        "Une infrastructure adaptée à une entreprise ou une organisation, combinant données, IA, automatisation, production, contrôle et reporting.",
    exemples: [
        "Video Factory",
        "Content Factory",
        "Marketing Factory",
        "Data Factory",
        "Document Factory",
        "Social Media Factory",
        "Reporting Factory",
        "Workflow Factory",
    ],
    note: "Ces architectures sont conçues et adaptées sur mesure, à partir de votre activité réelle. Ce ne sont pas des produits clé en main.",
};

export const methode = [
    {
        numero: "01",
        titre: "Comprendre",
        description: "Comprendre le problème et le fonctionnement réel de l'activité.",
    },
    {
        numero: "02",
        titre: "Concevoir",
        description: "Transformer le besoin en architecture et expérience utilisateur.",
    },
    {
        numero: "03",
        titre: "Construire",
        description: "Développer la solution.",
    },
    {
        numero: "04",
        titre: "Automatiser",
        description: "Identifier les tâches pouvant être automatisées avec l'IA et les workflows.",
    },
    {
        numero: "05",
        titre: "Améliorer",
        description: "Tester, mesurer et faire évoluer la solution.",
    },
];

export const technologies = {
    liste: ["HTML", "CSS", "JavaScript", "Python", "PHP", "SQL", "Git / GitHub", "FFmpeg", "IA / LLM", "Automatisation"],
    citation: "La technologie est un moyen. La solution est l'objectif.",
};

export const parcours = {
    titre: "Un parcours différent",
    texte: [
        "Mon parcours a commencé dans le domaine de la santé. C'est en cherchant des solutions aux problèmes rencontrés dans mon environnement professionnel que je me suis progressivement intéressé au développement, à l'intelligence artificielle et à l'automatisation.",
        "Aujourd'hui, je combine compréhension métier, technologie et IA pour concevoir des solutions concrètes.",
    ],
    conclusion: "Ce parcours est l'origine de ma manière de penser les problèmes : partir du besoin réel, jamais de la technologie.",
};

export const pourVous = [
    { probleme: "Vous avez une tâche répétitive ?", reponse: "Nous pouvons chercher comment l'automatiser." },
    { probleme: "Vous avez besoin d'une présence digitale ?", reponse: "Nous pouvons concevoir votre plateforme." },
    { probleme: "Votre entreprise produit beaucoup de contenu ?", reponse: "Nous pouvons concevoir une Content Factory." },
    { probleme: "Vous avez des données difficiles à gérer ?", reponse: "Nous pouvons construire un système adapté." },
    { probleme: "Vous avez une idée particulière ?", reponse: "Parlons-en." },
];

export const contactSection = {
    titre: "Construisons quelque chose d'utile.",
    texte: "Une idée, un problème métier ou un projet que vous aimeriez automatiser ?",
    ctaPrincipal: "Parler de mon projet",
};