import React, {useState} from 'react';
import {darkTheme, GlobalStyles, lightTheme, ThemeContext} from "./components/ThemeContext";
import * as client from "./components/Cookies"
import {ThemeProvider} from "styled-components";
import {Route, Routes} from "react-router-dom";
import RestrictVisitorToLandingPage from "./components/RestrictVisitorToLandingPage";
import Navbar from "./components/Navbar";
import SocialBar from "./components/LandingPage/SocialBar";


function App() {

  const [theme, setTheme] = useState(client.getCookie("theme") ? client.getCookie("theme") : "light")

  return (
    <>
      <ThemeContext.Provider value={ {theme, setTheme} }>
          <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme }>
              <GlobalStyles themeObject={ theme === "light" ? lightTheme : darkTheme } />
              <Routes>
                  <Route element={ <RestrictVisitorToLandingPage/> }>
                      <Route path={"/"} element={
                          <>
                              <SocialBar/>
                          </>
                      }
                      />
                  </Route>
              </Routes>
          </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
