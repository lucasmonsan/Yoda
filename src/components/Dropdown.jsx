import { ComponentContainer, IconContainer } from "../styles/Containers";
import { Input } from "../styles/Elements";
import { RiFolderAddLine, RiEditLine, RiUser3Line } from "react-icons/ri"

export const Dropdown = () => {
  return (
    <ComponentContainer flexDir="row" alignItens="center" justCont="space-between">
      <IconContainer>
        <RiUser3Line color="white" size={20}/>
      </IconContainer>
      
      <Input size="1rem" weight="600" color="#FFFFFF"/>
      
      <IconContainer>
        <RiEditLine color="white" size={20}/>
      </IconContainer>
      
      <IconContainer>
        <RiFolderAddLine color="white" size={20}/>
      </IconContainer>
    </ComponentContainer>
  );
}