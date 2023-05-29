import Sidebar from '../components/Sidebar/Sidebar';
import Introduction from '../components/Introduction/Introduction';
import Container from 'react-bootstrap/Container';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Cms from '../components/Cms/Cms';
import './App.css';
import Contact from '../components/Contact/Contact';



function App() {
  return (
    <div >
      <Sidebar/>
      <Container fluid="xxl" className="custom-main-container">
        <Introduction/>
        <About title="About me"/>
        <Skills title="Skills"/>
        <Projects title="Coding Projects"/>
        <Cms title="CMS Websites"/>
        <Contact title="Contact me"/>
      </Container>
    </div>
  );
}

export default App;
