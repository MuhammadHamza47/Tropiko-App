// import logo from './logo.svg';
import './App.css';
import Client from './Components/Client';
import Contact from './Components/Contact';
import FreshFruitsSection from './Components/FreshFruitsSection';
// import FruitItem from './Components/FruitItem';
import FruitsSection from './Components/FruitsSection';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Service from './Components/Service';
import ServicesSection from './Components/ServicesSection';
import SocialMedia from './Components/SocialMedia';
import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Header/>
        <HeroSection/>
        <Service/>
        <ServicesSection/>
        <FreshFruitsSection/>
        <FruitsSection/>
        <Client/>
        <Contact/>
        <SocialMedia/>
        <Footer/>
    </>
  );
}

export default App;
