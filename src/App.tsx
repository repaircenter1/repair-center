import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Shipping from './components/Shipping'
import Terms from './components/Terms'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Services />
        <About />
        <Contact />
        <Shipping />
        <Terms />
        <FAQ />
      </div>
      <Footer />
    </>
  )
}

export default App
