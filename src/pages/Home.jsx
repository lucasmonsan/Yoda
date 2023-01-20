import { useContext } from "react";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../components/Header";
import { ThemeContext } from "../contexts/ThemeController";
import { PageContainer } from "../styles/Containers";

export const Home = () => {
  const { colorBgPage, colorText } = useContext(ThemeContext);
  
  return (
    <PageContainer bgColor={colorBgPage} color={colorText}>
      <Header/>
      <Dropdown/>
      Home
    </PageContainer>
  );
}