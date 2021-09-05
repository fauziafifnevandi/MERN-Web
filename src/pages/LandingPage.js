import React, { Component } from "react";

import landingPage from "json/landingPage";

import Header from "parts/Header";

import Hero from "parts/Hero";

export default class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero}></Hero>
      </>
    );
  }
}
