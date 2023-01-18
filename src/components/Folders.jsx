import { useContext } from "react";
import { FirebaseContext } from "../contexts/Context";
import { ComponentContainer, GenericContainer, IconContainer } from "../styles/Containers";
import { Title } from "../styles/Texts";
import { RiSettings4Line } from "react-icons/ri"

export const Folders = () => {
  const {myFolders, users} = useContext(FirebaseContext);
  return (
    <ComponentContainer flexDir="column" alignItens="center">
      {myFolders ? <Title color="#FFFFFF">Você tem umas pasta aí, lek</Title> : <Title color="#a0a0a0">Você ainda não criou uma pasta</Title>}
      <GenericContainer width="100%">
        <IconContainer>
          <RiSettings4Line color="white" size={24}/>
        </IconContainer>

        <Title size="1rem" color="#FFFFFF">Lucas Monsan</Title>

        <Title size="1rem" color="#a0a0a0">45</Title>
      </GenericContainer>
    </ComponentContainer>
  );
}