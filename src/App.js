import './App.css';

import { Footer } from './Components/Footer/Footer';
import { FreeToWatch } from './Components/FreetoWatch/FreeToWatch';
import { Header } from './Components/Header/Header';
import { JoinUs } from './Components/JoinUs/JoinUs';
import { LeaderBoard } from './Components/LeaderBoard/LeaderBoard';
import { MostPopular } from './Components/MostPopular/MostPopular';
import { Trailer } from './Components/Trailer/Trailer';
import { Trending } from './Components/Trending/Trending';
import { Welcome } from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="page_wrap">
      <Header className="header"/>
      <Welcome className="welcome"/>
      <MostPopular className="most-popular"/>
      <FreeToWatch className="free-to-watch"/>
      <Trailer className="trailer"/>
      <Trending className="trending"/>
      <JoinUs className="join-us"/>
      <LeaderBoard className="leader-board"/>
      <Footer className="footer"/>
    </div>
    
  );
}

export default App;
