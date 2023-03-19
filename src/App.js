import logo from './logo.svg';
import './App.css';
import Ufo from './components/Ufo';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'; 

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParallaxBanner style={{aspectRatio: '2 / 1'}} className="!h-[100vh] max-w-[100vw]">
          <ParallaxBannerLayer image="spacebg.jpg" speed={10} />
          <ParallaxBannerLayer speed={2}>
          <div className="!h-[20vh]"></div>
            <Ufo />
          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div className="!h-[100vh]"></div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
