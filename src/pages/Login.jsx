import { useContext } from "react";
import { IconContainer, PageContainer } from "../styles/Containers";
import { RiGoogleFill } from "react-icons/ri";
import { authGoogleContext } from "../contexts/AuthGoogleProvider";
import { Navigate } from "react-router-dom";
import { Button } from "../styles/Elements";
import { ThemeContext } from "../contexts/ThemeController";

export const Login = () => {
  const {signInGoogle, signed} = useContext(authGoogleContext);
  const { colorBgPage, colorText } = useContext(ThemeContext);
  
  async function loginGoogle() {
    await signInGoogle();
  };
  
  if (signed) {
    return <Navigate to="/home"/>
  } else {
    return (
      <PageContainer alignItens="center" justCont="center" bgColor={colorBgPage} color={colorText}>
        <IconContainer onClick={loginGoogle}>
          <RiGoogleFill size={32} />
        </IconContainer>
      </PageContainer>
    );
  };  
}