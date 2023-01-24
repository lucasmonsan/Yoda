import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const [colorBgPage, setColorBgPage] = useState("");
  const [colorBgComponent, setColorBgComponent] = useState("");
  const [colorText, setColorText] = useState("");
  const [switchTheme, setSwitchTheme] = useState(false);
  const colors = {red:"#ff595e",orange:"#ff924c",yellow:"#ffca3a",green:"#8ac926",blue:"#1982c4",purple:"#6a4c93"}
  
  useEffect(() => {
    if (switchTheme) {
      setColorBgPage("#161A28");
      setColorBgComponent("#283149");
      setColorText("#FAFAFA");
    } else {
      setColorBgPage("#FAFAFA");
      setColorBgComponent("#FFFFFF");
      setColorText("#161A28");
    }
  }, [switchTheme]);
  
  return (
    <ThemeContext.Provider value={{colorBgPage, colorBgComponent, colorText, colors, switchTheme, setSwitchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}