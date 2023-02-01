import { useEffect } from "react"
import { useState, useContext } from "react"
import { RiAddFill } from "react-icons/ri"
import { AnimationsContext } from "../contexts/AnimationsController"
import { ThemeContext } from "../contexts/ThemeController"
import { FixedContainer } from "../styles/Containers"
import { Button } from "../styles/Elements"
import { BtnAddOptions } from "./BtnAddOptions"

export const BtnAdd = () => {
  const { colorBgPage, colorBgComponent, colorText } = useContext(ThemeContext);
  const { triggerHomeAdd, setTriggerHomeAdd } = useContext(AnimationsContext);

  const [triggerBtnAddOptions, setTriggerBtnAddOptions] = useState(false);
  
  useEffect(() => {
    const auxRiAddFill = document.getElementById("RiAddFill");
    
    if (triggerHomeAdd) {
      setTriggerBtnAddOptions(true);
      auxRiAddFill.style.transform = "rotate(-45deg)";
    } else {
      auxRiAddFill.style.transform = "rotate(0deg)";
      setTimeout(() => {setTriggerBtnAddOptions(false)}, 400);
    }
  },[triggerHomeAdd]);
  
  return (
    <FixedContainer padding="0 0 0.75em 0" opacity="1" bg={"linear-gradient(0,"+colorBgPage+", transparent)"}>
      {triggerBtnAddOptions && <BtnAddOptions/>}
      
      <Button width="5em" height="5em" shadow="var(--shadow)" bg={colorBgComponent} onClick={() => setTriggerHomeAdd(!triggerHomeAdd)}>
        <RiAddFill id="RiAddFill" className="transition" size={24} color={colorText}/>
      </Button>
    </FixedContainer>
  );
};