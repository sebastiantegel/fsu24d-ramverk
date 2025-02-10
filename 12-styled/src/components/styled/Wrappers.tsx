import styled from "styled-components";

interface IMovieWrapperProps {
  selected: boolean;
}

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 50px);
  justify-content: center;
  gap: 0.5rem;
`;

export const MovieWrapper = styled(Wrapper)<IMovieWrapperProps>`
  flex-direction: column;
  border: 2px solid grey;
  width: 30%;

  background-color: ${(props) => (props.selected ? "green" : "transparent")};
`;
