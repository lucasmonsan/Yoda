import { useContext, useState } from "react";
import { BtnAdd } from "../components/BtnAdd";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../components/Header";
import { authGoogleContext } from "../contexts/AuthGoogleProvider";
import { FirebaseDataContext } from "../contexts/FirebaseDataProvider";
import { ThemeContext } from "../contexts/ThemeController";
import { PageContainer } from "../styles/Containers";

export const Home = () => {
  const { colorBgPage, colorText } = useContext(ThemeContext);
  const { user } = useContext(authGoogleContext);
  const { userData } = useContext(FirebaseDataContext);
  
  return (
    <PageContainer bg={colorBgPage} color={colorText}>
      <Header/>
      <Dropdown/>
      {console.log(userData[0])}
      {console.log(user)}
      <BtnAdd />
    </PageContainer>
  );
}