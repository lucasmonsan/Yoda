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
  background-color: transparent;
  border: none;
  outline: none;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding};
  border: none;
  background-color: transparent;
`