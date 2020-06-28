import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import Club from './components/Club/Club';
import Fixture from './components/Fixture/Fixture';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => { 
    this.setState((prevState) => { 
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) { 
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
          <main className="main-content"> <Route exact path='/' component={Home} />
          <Route path='/club' component={Club} />
          <Route path='/fixture' component={Fixture} />
          <Route path='/contact' component={ContactUs} /></main>
        <footer> <Footer /> </footer>
        
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
