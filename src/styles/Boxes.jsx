import styled from "styled-components";

export const ImageBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border: solid 3px white;
  border-radius: ${props => props.radius};
`
export const GenericBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => props.flexDir};
  align-items: ${props => props.alignItens};
  justify-content: ${props => props.justCont};
`
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
`