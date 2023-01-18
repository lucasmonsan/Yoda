import { Folders } from "../components/Folders"
import { Header } from "../components/Header"
import { PageContainer } from "../styles/Containers"

export const Home = () => {
  return (
    <PageContainer>
      <Header/>
      <Folders/>
      Home
    </PageContainer>
  )
}