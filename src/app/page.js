import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main
            id="main"
            className="mx-auto max-w-measure px-6 pb-4 pt-16"
        >
            <Hero />
            {/* <SelectedWork />
            <About /> */}
            <Footer />
        </main>
    );
}
