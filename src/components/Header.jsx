import { ComponentContainer } from "../styles/Containers"
import { ImageBox, GenericBox, IconBox } from "../styles/Boxes"
import { Text, Title } from "../styles/Texts"
import { RiSettings4Line } from "react-icons/ri"

export const Header = () => {
  return (
    <ComponentContainer flexDir="row" gap="0.75em" alignItens="center" justCont="space-between" radius="1em" bgColor="#27314A">
      <ImageBox width="2.5em" height="2.5em" radius="100%">
        <img src="https://avatars.githubusercontent.com/u/75125049?v=4" alt="profile image" />
      </ImageBox>

      <GenericBox flexDir="column" width="100%">
        <Title size="1rem" color="white">Lucas Monsan</Title>
        <Text size="0.75rem" color="white">lucasmonsan@gmail.com</Text>
      </GenericBox>

      <IconBox>
        <RiSettings4Line color="white" size={24}/>
      </IconBox>
    </ComponentContainer>
  )
}