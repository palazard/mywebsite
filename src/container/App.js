import Sidebar from '../components/Sidebar/Sidebar';
import Introduction from '../components/Introduction/Introduction';
import Container from 'react-bootstrap/Container';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Cms from '../components/Cms/Cms';
import './App.css';
import Contact from '../components/Contact/Contact';
import data from "../contentList.json";
import { Element } from 'react-scroll';



function App() {
  return (
    <div >
      <Sidebar name={data.introduction[0].name}/>
      <Container fluid="xxl" className="custom-main-container">
        <Element name="home" >
          <Introduction data={data.introduction}/>
        </Element>
        <Element name="about" >
          <About title="About me" dataAbout={data.about} data={data.education}/>
        </Element>
        <Element name="skills" >
          <Skills title="Skills" dataTechnologies={data.technologies} dataHumanSkills={data.human} dataLanguages={data.languages}/>
        </Element>
        <Element name="coding" >
          <Projects title="Coding Projects" data={data.projects}/>
        </Element>
        <Element name="cms" >
          <Cms title="CMS Websites" data={data.cms}/>
        </Element>
        <Element name="contact" >
          <Contact title="Contact me" data={data.contact}/>
        </Element>
      </Container>
    </div>
  );
}

export default App;
