import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { RiAddFill } from "react-icons/ri"
import { ThemeContext } from "../contexts/ThemeController"
import { FixedContainer } from "../styles/Containers"
import { Button } from "../styles/Elements"

export const BtnAdd = ({btnOptionsTrigger, setBtnOptionsTrigger}) => {
  const { colorBgPage, colorBgComponent } = useContext(ThemeContext);

  const goToAddOptions = () => {
    setBtnOptionsTrigger(!btnOptionsTrigger);
    const auxIconAdd = document.getElementById("IconAdd");
    
    if (btnOptionsTrigger) {
      auxIconAdd.style.transform = "rotate(0deg)";
    } else {
      auxIconAdd.style.transform = "rotate(-45deg)";
    }
  }
  return (
    <FixedContainer padding="0 0 0.75em 0" opacity="1" bg={"linear-gradient(0,"+colorBgPage+", transparent)"}>
      <Button width="5em" height="5em" shadow="var(--shadow)" transform="scale(1)" bg={colorBgComponent} onClick={goToAddOptions}>
        <RiAddFill size={32} id="IconAdd" style={{transition:"all 0.25s ease-in-out"}}/>
      </Button>
    </FixedContainer>
  )
}