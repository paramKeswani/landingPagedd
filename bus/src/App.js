import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Map from './components/Map';
import Contact2 from './components/Contact2';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <main id="main" >
        <About/>
        <Service/>
        <Team/>
        
        <Subscribe/>
        {/* <Reviews/> */}
        <Contact/>
        <div>
        <Map/><Contact2/>

        </div>
      </main>
      <Footer/>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>


  <script src="assets/js/main.js"></script>
    
      </div>
    
     
   
  );
}

export default App;
