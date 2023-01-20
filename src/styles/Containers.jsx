import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  padding: var(--padding);
  display: flex;
  gap: 0.75em;
  flex-direction: ${props => props.flexDir || "column"};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--padding);
  display: flex;
  gap: 0.75em;
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
  border-radius: 1em;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
/********************************************/
export const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border: solid 2px white;
  border-radius: ${props => props.radius};
`
export const GenericContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
`