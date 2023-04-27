import Sidebar from '../components/Sidebar/Sidebar';
import Introduction from '../components/Introduction/Introduction';
import Container from 'react-bootstrap/Container';
import About from '../components/About/About';

import './App.css';



function App() {
  return (
    <div >
      <Sidebar/>
      <Container className="container-xxl custom-main-container flex align-items-center">
        <Introduction/>
        <About/>
      </Container>
    </div>
  );
}

export default App;
