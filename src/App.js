import React from "react";
import Routess from "./router/Routes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Provider } from "./contexts/Context";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Provider>
          <Routess />
        </Provider>
      </LanguageProvider>
    </>
  );
};

export default App;
