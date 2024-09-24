import Hero from "./components/Sections/Hero";
import PracticeSection from "./components/Sections/PracticeSection";
import WelcomeSection from "./components/Sections/WelcomeSection";


export default function App() {
    return (
        <main className="overscroll-x-hidden">
            <Hero />

            <WelcomeSection />

            <PracticeSection />
        </main>
    )
}
