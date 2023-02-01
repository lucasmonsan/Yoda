import styled from "styled-components";

export const Title = styled.strong`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
`
export const Text = styled.span`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`
export const Input = styled.input`
  width: 100%;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  background: transparent;
  border: none;
  outline: none;
`
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: var(--padding);
  border: none;
  border-radius: var(--radius);
  color: ${props => props.color};
  background: ${props => props.bg};
  box-shadow: ${props => props.shadow};
  transform: ${props => props.transform};
  transition: all 0.25s;
  
  :active {transform: scale(0.95)}
`