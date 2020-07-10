<<<<<<< HEAD
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
import Member from './components/Member/Member';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
=======
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home";
import Club from "./components/Club/Club";
import Fixture from "./components/Fixture/Fixture";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
>>>>>>> 855dc31f91820564e4d685b5399a6bf7b91fa920


class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
<<<<<<< HEAD
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
          <main className="main-content"> <Route exact path='/' component={Home} />
          <Route path='/club' component={Club} />
          <Route path='/fixture' component={Fixture} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/member' component={Member} />
            <Route path='/login' component={Login} />
          </main>
        <footer> <Footer /> </footer>
        
=======
        <div className="App">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <main className="main-content">
            {" "}
            <Route exact path="/" component={Home} />
            <Route path="/club" component={Club} />
            <Route path="/fixture" component={Fixture} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={ContactUs} />
          </main>
          <footer>
            {" "}
            <Footer />{" "}
          </footer>
>>>>>>> 855dc31f91820564e4d685b5399a6bf7b91fa920
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
