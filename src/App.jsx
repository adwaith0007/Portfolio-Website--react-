
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';

import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';

import Contact from './components/contact/Contact'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <Header/>
     <Nav/>
     {/* <About/> */}
     <Experience/>
     
     <Portfolio/>
     
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
