import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  padding: var(--padding);
  display: flex;
  gap: var(--gap);
  flex-direction: ${props => props.flexDir || "column"};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justCont};
  background: ${props => props.bg};
  color: ${props => props.color};
`
export const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--padding);
  display: flex;
  gap: var(--gap);
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justCont};
  border-radius: var(--radius);
  background: ${props => props.bg};
  color: ${props => props.color};
  box-shadow: var(--shadow);
`
export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 0.5em;
  align-items: ${props => props.alignItems};
  justify-content: center;
  width: 100%;
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.bg};
  opacity: ${props => props.opacity};
  transition: all 0.25s;
`
/********************************************/
export const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border: solid 2px;
  border-radius: ${props => props.radius};
`
export const GenericContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justCont};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: var(--radius);
  background: ${props => props.bg};
`