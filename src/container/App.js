import Sidebar from '../components/Sidebar/Sidebar';
import Introduction from '../components/Introduction/Introduction';
import Container from 'react-bootstrap/Container';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Work from '../components/Work/Work';

import './App.css';


function App() {
  return (
    <div >
      <Sidebar/>
      <Container fluid="xxl" className="custom-main-container">
        <Introduction/>
        <About/>
        <Skills/>
        <Work/>
      </Container>
    </div>
  );
}

export default App;
