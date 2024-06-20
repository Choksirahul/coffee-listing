import styled from "styled-components";

const Button = styled.a`
  font-size: 1rem;
  padding: 0.45rem 0.825rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-lg);
  background-color: transparent;
  color: var(--color-grey-0);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-grey-500);
  }
`;

export default Button;
