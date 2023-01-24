import { useContext, useState } from "react";
import { BtnAdd } from "../components/BtnAdd";
import { BtnAddOptions } from "../components/BtnAddOptions";
import { Dropdown } from "../components/Dropdown";
import { Header } from "../components/Header";
import { ThemeContext } from "../contexts/ThemeController";
import { PageContainer } from "../styles/Containers";

export const Home = () => {
  const { colorBgPage, colorText } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  
  return (
    <PageContainer bg={colorBgPage} color={colorText}>
      <Header/>
      <Dropdown/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro quam eveniet temporibus placeat autem perspiciatis possimus et, vitae veritatis voluptatum harum nulla nobis dolores, accusantium, corporis ut. Incidunt, consequatur?lo
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cupiditate eveniet nam perferendis deleniti culpa tempora velit, enim similique sint suscipit at. Reiciendis corporis cumque minus facilis modi! Exercitationem, labore.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ab iusto blanditiis, dicta minima rem, ad amet, culpa accusamus corrupti dolor id optio nam. Suscipit sapiente quis magni illo architecto.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, vel error exercitationem dolorem distinctio tempora accusamu rerum recusandae maxime eveniet? Nulla, recusandae deleniti ipsam voluptatem harum quis quisquam ullam commodi.
      
      {show && <BtnAddOptions/>}
      <BtnAdd show={show} setShow={setShow}/>
    </PageContainer>
  );
}