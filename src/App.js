import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import PortfolioTabs from './components/PortfolioTabs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <PortfolioTabs />
      </main>
      <Footer />
    </div>
  )
}
