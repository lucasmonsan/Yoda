import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75em;
`
export const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75em;
  display: flex;
  gap: ${props => props.gap};
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
`