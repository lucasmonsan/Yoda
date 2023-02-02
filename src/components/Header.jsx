import { ComponentContainer, ImageContainer, GenericContainer, IconContainer } from "../styles/Containers"
import { Title } from "../styles/Elements"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeController"
import { authGoogleContext } from "../contexts/AuthGoogleProvider"

export const Header = () => {
  const { colorBgComponent, switchTheme, setSwitchTheme } = useContext(ThemeContext);
  const { user } = useContext(authGoogleContext);
  
  return (
    <ComponentContainer flexDir="row" alignItems="center" justCont="space-between" bg={colorBgComponent}>
      <ImageContainer width="2.5em" height="2.5em" radius="100%">
        <img src={user.photoURL} alt="profile image"/>
      </ImageContainer>
      
      <GenericContainer flexDir="column" width="100%">
        <Title size="1rem">{user.displayName}</Title>
        <Title size="0.7rem" opacity="0.5" weight="500">{user.email}</Title>
      </GenericContainer>
      
      <input type="checkbox" onChange={() => setSwitchTheme(!switchTheme)}/>
    </ComponentContainer>
  )
}