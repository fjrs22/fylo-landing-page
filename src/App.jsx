import EarlyAccess from "./components/EarlyAccess";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </>
  );
}
