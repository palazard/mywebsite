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



function App() {
  return (
    <div >
      <Sidebar name={data.introduction.name}/>
      <Container fluid="xxl" className="custom-main-container">
        <Introduction data={data.introduction}/>
        <About title="About me" dataAbout={data.about} data={data.education}/>
        <Skills title="Skills" dataTechnologies={data.technologies} dataHumanSkills={data.human} dataLanguages={data.languages}/>
        <Projects title="Coding Projects" data={data.projects}/>
        <Cms title="CMS Websites" data={data.cms}/>
        <Contact title="Contact me" data={data.contact}/>
      </Container>
    </div>
  );
}

export default App;
