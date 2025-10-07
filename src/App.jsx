import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certification from './components/Certification'
import Contact from './components/Contacts'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Certification />
      <Contacts />
    </div>
  )
}

export default App
