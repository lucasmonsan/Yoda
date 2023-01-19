import { IconContainer, PageContainer } from "../styles/Containers"
import { RiGoogleFill } from "react-icons/ri"
import { useContext } from "react"
import { authGoogleContext } from "../contexts/authGoogle"
import { Navigate } from "react-router-dom"

export const Login = () => {
  const {signInGoogle, signed} = useContext(authGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  };

  if (signed) {
    return <Navigate to="/login"/>
  } else {
    return (
      <PageContainer alignItens="center" justCont="center">
        <IconContainer onClick={loginGoogle}>
          <RiGoogleFill size={32}/>
        </IconContainer>
      </PageContainer>
    );
  };  
}