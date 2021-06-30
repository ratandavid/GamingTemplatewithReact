import AllCards from "./Component/Cards/Allcard";
import Heading from "./Component/Heading/Heading";
import Imageslider from "./Component/Image Slider/Imgslide";
import Navigation from "./Component/Navigation/Nav";
import Banner from "./Component/Inner_Banner/Banner";
import Footer from "./Component/Footer/Footer";

function App() {
  const style = {
    marginTop:'20px',
  }
  return (
    <div className="App">
      <>
        <Navigation/>
        <Imageslider/>
        <Heading heading='RELEASED' headspan='GAMES' showBody headpara='Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'/>
        <AllCards/>
        <Heading heading='UPCOMING' headspan='GAMES'/>
        <Banner/>
        <AllCards style={style}/>
        <Footer/>
        
      </>
    </div>
  );
}

export default App;
