import Card from './assets/components/Cards';
import FramedImage from './assets/components/FramedImage'; 
import AboutMeSection from './assets/components/Pages/AboutMeSection';
import ContactMeSection from './assets/components/Pages/ContactMeSection';
import FooterSection from './assets/components/Pages/FooterSection';
import HeaderSection from './assets/components/Pages/HeaderSection';
import HeroSection from './assets/components/Pages/HeroSection';
import OtherProjectsSection from './assets/components/Pages/OtherProjectsSection';
import Section from './assets/components/Pages/Section';
import StarProjectsSection from './assets/components/Pages/StarProjectsSection';

function App() {
  return (
    <div className="App">
      <h1>PAGES</h1>
      ================================================
      
      <HeaderSection />
      <HeroSection />
      <StarProjectsSection/> 
      <AboutMeSection />
      <OtherProjectsSection />
      <ContactMeSection />
      <FooterSection />

      ================================================
      <h1>FUNCTIONS</h1>
      ================================================
      <Section />
      <Card />
      <FramedImage />
    </div>
  );
}

export default App;
