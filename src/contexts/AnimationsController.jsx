import { createContext, useState } from "react";

export const AnimationsContext = createContext({});

export const AnimationsProvider = ({children}) => {
  const [triggerHomeAdd, setTriggerHomeAdd] = useState(false);
  
  return (
    <AnimationsContext.Provider value={{triggerHomeAdd, setTriggerHomeAdd}}>
      {children}
    </AnimationsContext.Provider>
  )
}