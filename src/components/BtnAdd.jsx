import { useContext } from "react"
import { RiAddFill } from "react-icons/ri"
import { ThemeContext } from "../contexts/ThemeController"
import { FixedContainer } from "../styles/Containers"
import { Button } from "../styles/Elements"

export const BtnAdd = ({show, setShow}) => {
  const { colorBgPage, colorBgComponent } = useContext(ThemeContext);
  return (
    <FixedContainer padding="0 0 0.75em 0" opacity="1" bg={"linear-gradient(0,"+colorBgPage+", transparent)"}>
      <Button width="5em" height="5em" shadow="var(--shadow)" transform="scale(1)" bg={colorBgComponent} onClick={() => setShow(!show)}>
        <RiAddFill size={24}/>
      </Button>
    </FixedContainer>
  )
}