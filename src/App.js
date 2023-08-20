
import About from './Components/About';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Services from './Components/Services';

function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
