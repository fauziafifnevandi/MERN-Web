import React, { Component } from "react";

import landingPage from "json/landingPage";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        ></MostPicked>
        <Categories data={landingPage.categories}></Categories>
        <Testimony data={landingPage.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}
