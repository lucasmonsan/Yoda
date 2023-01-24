import { ComponentContainer, IconContainer } from "../styles/Containers";
import { Input } from "../styles/Elements";
import { RiEditLine } from "react-icons/ri"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeController";

export const Dropdown = () => {
  const { colorBgComponent } = useContext(ThemeContext);
  
  return (
    <ComponentContainer flexDir="row" alignItems="center" justCont="space-between" bgColor={colorBgComponent}>
      <Input size="1rem" weight="600" color="inherit"/>
      
      <IconContainer>
        <RiEditLine size={20}/>
      </IconContainer>
    </ComponentContainer>
  );
}