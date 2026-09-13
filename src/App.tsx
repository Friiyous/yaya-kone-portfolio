import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionCapacites from "./components/SectionCapacites";
import SectionProjets from "./components/SectionProjets";
import SectionVideoFactory from "./components/SectionVideoFactory";
import SectionFactories from "./components/SectionFactories";
import SectionMethode from "./components/SectionMethode";
import SectionTechnologies from "./components/SectionTechnologies";
import SectionParcours from "./components/SectionParcours";
import SectionPourVous from "./components/SectionPourVous";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-nuit">
            <Navbar />
            <main>
                <Hero />
                <SectionCapacites />
                <SectionProjets />
                <SectionVideoFactory />
                <SectionFactories />
                <SectionMethode />
                <SectionTechnologies />
                <SectionParcours />
                <SectionPourVous />
                <SectionContact />
            </main>
            <Footer />
        </div>
    );
}