import { Dropdown } from "../components/Dropdown"
import { Header } from "../components/Header"
import { PageContainer } from "../styles/Containers"

export const Home = () => {
  return (
    <PageContainer>
      <Header/>
      <Dropdown/>
      Home
    </PageContainer>
  )
}