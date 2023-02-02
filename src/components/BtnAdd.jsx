import { useEffect } from "react"
import { useState, useContext } from "react"
import { RiAddFill } from "react-icons/ri"
import { SituationContext } from "../contexts/SituationController"
import { ThemeContext } from "../contexts/ThemeController"
import { FixedContainer } from "../styles/Containers"
import { Button } from "../styles/Elements"
import { BtnAddOptions } from "./BtnAddOptions"

export const BtnAdd = () => {
  const { colorBgPage, colorBgComponent, colorText } = useContext(ThemeContext);
  const { situation, setSituation} = useContext(SituationContext);
  const [triggerBAO, setTriggerBAO] = useState(false);

  const controlBtnAdd = () => {
    const auxRiAddFill = document.getElementById("RiAddFill");
    
    if (situation === "home") {
      setSituation("home_btnAddOptions");
      setTriggerBAO(true);      
      auxRiAddFill.style.transform = "rotate(-45deg)";
    } else if (situation === "home_btnAddOptions") {
      setSituation("home");
      auxRiAddFill.style.transform = "rotate(0deg)";
      setTimeout(() => {setTriggerBAO(false)}, 400);
    }
  }
  
  return (
    <FixedContainer padding="0 0 0.75em 0" opacity="1" bg={"linear-gradient(0,"+colorBgPage+", transparent)"}>
      {triggerBAO && <BtnAddOptions/>}
      
      <Button zIndex="1" width="5em" height="5em" shadow="var(--shadow)" bg={colorBgComponent} onClick={controlBtnAdd}>
        <RiAddFill id="RiAddFill" className="transition" size={24} color={colorText}/>
      </Button>
    </FixedContainer>
  );
};