import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  /* display: flex;
  justify-content: space-between;

  flex-flow: wrap;
  height: 100vh; */
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
