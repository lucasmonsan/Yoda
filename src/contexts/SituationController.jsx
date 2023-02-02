import { createContext, useState } from "react";

export const SituationContext = createContext({});

export const SituationProvider = ({children}) => {
  const [situation, setSituation] = useState("home");
  
  return (
    <SituationContext.Provider value={{ situation, setSituation }}>
      {children}
    </SituationContext.Provider>
  )
}