import { useContext, useEffect } from "react"
import { RiFolderAddLine, RiArrowUpCircleLine, RiArrowDownCircleLine, RiArrowUpDownFill } from "react-icons/ri"
import { ThemeContext } from "../contexts/ThemeController"
import { FixedContainer } from "../styles/Containers"
import { Button, Title } from "../styles/Elements";

export const BtnAddOptions = ({show}) => {
  const { colorBgPage, colorBgComponent, colors } = useContext(ThemeContext);
  
  useEffect(() => {
    const auxBtn0 = document.getElementById("BtnContainer");
    const auxBtn1 = document.getElementById("BtnAddOptions1");
    const auxBtn2 = document.getElementById("BtnAddOptions2");
    const auxBtn3 = document.getElementById("BtnAddOptions3");
    const auxBtn4 = document.getElementById("BtnAddOptions4");
    
    setTimeout(() => {auxBtn0.style.opacity = 1}, 50);
    setTimeout(() => {auxBtn1.style.transform = "scale(1)"}, 100);
    setTimeout(() => {auxBtn2.style.transform = "scale(1)"}, 150);
    setTimeout(() => {auxBtn3.style.transform = "scale(1)"}, 200);
    setTimeout(() => {auxBtn4.style.transform = "scale(1)"}, 250);
  },[]);
  return (
    <FixedContainer id="BtnContainer" alignItems="flex-end" height="100%" padding="0 0 5.5em 0" bg={colorBgPage+"dd"}>
      <Button id="BtnAddOptions1" width="5em" shadow="var(--shadow)" bg={colorBgComponent} color={colors.blue}>
        <RiFolderAddLine size={20}/>
        <Title>Pasta</Title>
      </Button>
      
      <Button id="BtnAddOptions2" width="5em" shadow="var(--shadow)" bg={colorBgComponent} color={colors.red}>
        <RiArrowDownCircleLine size={20}/>
        <Title>Paguei</Title>
      </Button>
      
      <Button id="BtnAddOptions3" width="5em" shadow="var(--shadow)" bg={colorBgComponent} color={colors.green}>
        <RiArrowUpCircleLine size={20}/>
        <Title>Recebi</Title>
      </Button>
      
      <Button id="BtnAddOptions4" width="5em" shadow="var(--shadow)" bg={colorBgComponent} color={colors.yellow}>
        <RiArrowUpDownFill size={20}/>
        <Title>Transferi</Title>
      </Button>
    </FixedContainer>
  )
}