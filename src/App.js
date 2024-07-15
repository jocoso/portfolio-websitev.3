import HeaderSection from './assets/components/Pages/HeaderSection';
import HeroSection from './assets/components/Pages/HeroSection';

import React, {Component} from 'react';

import './reset.css';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: <HeroSection />
    }
  }

  changeActivePage = async (page) => {
    this.setState({ activePage: page });
  };

  render() {
    return (
      <div className="App">
  
        {/* ================================================
        <h1>PAGES</h1>
        ================================================ */}
        <HeaderSection func={this.changeActivePage} />
        <hr/>
  
  
        {/* ================================================
        <h1>FUNCTIONS</h1>
        ================================================
        <Section />
        <Card />
        <FramedImage /> */}
  
      </div>
    );
  }
  
}

export default App;
