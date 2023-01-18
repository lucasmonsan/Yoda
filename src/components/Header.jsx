import { ComponentContainer, ImageContainer, GenericContainer, IconContainer } from "../styles/Containers"
import { Title } from "../styles/Texts"
import { RiSettings4Line } from "react-icons/ri"

export const Header = () => {
  return (
    <ComponentContainer flexDir="row" alignItens="center" justCont="space-between">
      <ImageContainer width="2.5em" height="2.5em" radius="100%">
        <img src="https://avatars.githubusercontent.com/u/75125049?v=4" alt="profile image" />
      </ImageContainer>

      <GenericContainer flexDir="column" width="100%">
        <Title size="1rem" color="#FFFFFF">Lucas Monsan</Title>
        <Title size="0.7rem" color="#a0a0a0" weight="500">lucasmonsan@gmail.com</Title>
      </GenericContainer>

      <IconContainer>
        <RiSettings4Line color="white" size={24}/>
      </IconContainer>
    </ComponentContainer>
  )
}