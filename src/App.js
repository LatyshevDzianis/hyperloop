import React from "react";

import GlobalStyle from "./globalStyles";
import { Header } from "./components/blocks/Header";
import { MainImageBlock } from "./components/blocks/MainImageBlock";
import { DescriptionSection } from "./components/blocks/DescriptionSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainImageBlock />
      <DescriptionSection />
    </>
  );
}

export default App;
