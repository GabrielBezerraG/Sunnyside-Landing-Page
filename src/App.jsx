import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Cards />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}