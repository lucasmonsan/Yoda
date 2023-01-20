import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const [colorBgPage, setColorBgPage] = useState("");
  const [colorBgComponent, setColorBgComponent] = useState("");
  const [colorText, setColorText] = useState("");
  const [switchTheme, setSwitchTheme] = useState(true);
  
  useEffect(() => {
    if (switchTheme) {
      setColorBgPage("#161A28");
      setColorBgComponent("#283149");
      setColorText("#FAFAFA");
    } else {
      setColorBgPage("#FFFFFF");
      setColorText("#161A28");
    }
  }, [switchTheme]);
  
  return (
    <ThemeContext.Provider value={{colorBgPage, colorBgComponent, colorText }}>
      {children}
    </ThemeContext.Provider>
  )
}