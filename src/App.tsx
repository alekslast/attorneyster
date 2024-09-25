import AboutUs from "./components/Sections/AboutUs";
import Blog from "./components/Sections/Blog";
import Experts from "./components/Sections/Experts";
import FightingForYou from "./components/Sections/FightingForYou";
import Footer from "./components/Sections/Footer";
import FormSection from "./components/Sections/FormSection";
import GetConsultation from "./components/Sections/GetConsultation";
import Hero from "./components/Sections/Hero";
import Partners from "./components/Sections/Partners";
import PracticeSection from "./components/Sections/PracticeSection";
import Review from "./components/Sections/Review";
import WelcomeSection from "./components/Sections/WelcomeSection";





export default function App() {
    return (
        <main className="overscroll-x-hidden">
            <Hero />

            <WelcomeSection />

            <PracticeSection />

            <FightingForYou />

            <Partners />

            <AboutUs />

            <Review />

            <Experts />

            <GetConsultation />

            <FormSection />

            <Blog />

            <Footer />
        </main>
    )
}
