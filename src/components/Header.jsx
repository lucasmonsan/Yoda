import { ComponentContainer } from "../styles/Containers"
import { ImageBox, GenericBox } from "../styles/Boxes"
import { Text, Title } from "../styles/Texts"

export const Header = () => {
  return (
    <ComponentContainer flexDir="row" alignItens="center" justCont="center">
      <ImageBox width="4em" height="4em" radius="100%">
        <img src="https://avatars.githubusercontent.com/u/75125049?v=4" alt="profile image" />
      </ImageBox>

      <GenericBox flexDir="column">
        <Title size="1rem">Lucas Monsan</Title>
        <Text size="0.75rem">lucasmonsan@gmail.com</Text>
      </GenericBox>
    </ComponentContainer>
  )
}