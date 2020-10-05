import React from "react";

import GlobalStyle from "./globalStyles";
import { Header } from "./components/blocks/Header";
import { MainImageBlock } from "./components/blocks/MainImageBlock";
import { DescriptionSection } from "./components/blocks/DescriptionSection";
import { NavigationSection } from "./components/blocks/NavigationSection";
import { Footer } from "./components/blocks/Footer";
import { SitesOfTheDay } from './components/blocks/SitesOfTheDay/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainImageBlock />
      <DescriptionSection />
      <NavigationSection />
      <SitesOfTheDay />
      <Footer />
    </>
  );
}

export default App;
