import { ComponentContainer, ImageContainer, GenericContainer, IconContainer } from "../styles/Containers"
import { Title } from "../styles/Elements"
import { RiSettings4Line } from "react-icons/ri"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeController"

export const Header = () => {
  const { colorBgComponent, colorText } = useContext(ThemeContext);
  
  return (
    <ComponentContainer flexDir="row" alignItens="center" justCont="space-between" bgColor={colorBgComponent}>
      <ImageContainer width="2.5em" height="2.5em" radius="100%">
        <img src="https://avatars.githubusercontent.com/u/75125049?v=4" alt="profile image" />
      </ImageContainer>

      <GenericContainer flexDir="column" width="100%">
        <Title size="1rem">Lucas Monsan</Title>
        <Title size="0.7rem" opacity="0.5" weight="500">lucasmonsan@gmail.com</Title>
      </GenericContainer>

      <IconContainer>
        <RiSettings4Line color="white" size={24}/>
      </IconContainer>
    </ComponentContainer>
  )
}