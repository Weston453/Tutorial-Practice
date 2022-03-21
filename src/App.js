import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
