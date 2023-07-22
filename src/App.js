import './App.css';
import { Brand, Navbar } from './components';
import { Features, Footer, Header, WhatCamVid} from './containers'

function App() {
  return (
    <div className="App">
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
      <Brand />
      <WhatCamVid />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
