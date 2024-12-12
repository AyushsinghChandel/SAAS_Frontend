import { Navbar} from "./components/navbar";
import { Hero} from "./components/Hero";
import { Analytics} from "./components/Analytics";
import { Newsletter } from "./components/Newsletter";
import { Cards } from "./components/cards";
import { Footer } from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}