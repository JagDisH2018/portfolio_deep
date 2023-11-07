
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import Skills from './component/skills/Skills';
import Work from './component/work/Work';
import Nav from './component/nav/Nav';

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Work/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
