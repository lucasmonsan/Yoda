import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  padding: 0.5em;
`
export const ComponentContainer = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
`