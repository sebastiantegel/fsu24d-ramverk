import styled from "styled-components";

type ButtonProps = {
  bgColor: string;
  textColor: string;
  hoverColor?: string;
};

export const Button = styled.button`
  background-color: white;
  color: black;
  padding: 1rem;
  margin: 1rem;
`;

export const DangerButton = styled(Button)`
  background-color: red;
`;

export const MagicButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  &:hover {
    /* transform: scale(1.1); */
    color: ${(props) => props.hoverColor || "black"};
  }
`;
