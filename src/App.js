import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import image1 from './images/image-1.jpg';
import image2 from './images/image-2.jpg';
import image3 from './images/image-3.jpg';
import image4 from './images/image-4.jpg';


function App() {

  const navLinks = [
    {index: 0, name: 'About', url: 'https://example.com/about'},
    {index: 1, name: 'Products', url: 'https://example.com/projects'},
    {index: 2, name: 'Contact', url: 'https://example.com/contact'},
  ];

  const products = [
    { index: 0, url: image1 },
    { index: 1, url: image2 },
    { index: 2, url: image3 },
    { index: 3, url: image4 }
  ];

  const footerLinks = [
    { index: 0, name: 'Privacy Policy', url: 'https://example.com/privacy' },
    { index: 1, name: 'Terms of Service', url: 'https://example.com/terms' },
    { index: 2, name: 'Support', url: 'https://example.com/support' },
  ];


  return (
    <>
      <Header navLinks={navLinks} title="True Lie Golf" />
      <main>
        <Banner
          title="Welcome to True Lie Golf"
          text="
            At True Lie Golf, we fuse cutting-edge tech with performance-driven 
            design to elevate every part of your game. From your first swing to 
            your final putt, our gear is built to help you play smarter, hit 
            farther, and stand out on the course.
          "
          button1Text="Learn More"
          button2Text="Book Now"
          Btn1StyleType="primary"
          Btn2StyleType="secondary"
        />
        <Gallery 
          title="What We Offer"
          text="Explore our range of products designed to enhance your game."
          images={products}
        />
      </main>
      <Footer copyright="2024 Samuel Reutcky" links={footerLinks} />
    </>
  );
}

export default App;
