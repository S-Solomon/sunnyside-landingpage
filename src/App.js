import Header from './components/Header' ;
import Showcase from './components/Showcase' ;
import Transform from './components/Transform' ;
import StandOut from './components/StandOut' ;
import GraphicMobile from './components/GraphicMobile';
import GraphicDesktop from './components/GraphicDesktop';

const App = () => {
  return (
    <>
        <Header />
        <Showcase />
        <Transform />
        <StandOut />
        <div className="block md:hidden">
          <GraphicMobile />
        </div>
        <div className="hidden md:block">
          <GraphicDesktop />
        </div>
    </>
  )
}

export default App
