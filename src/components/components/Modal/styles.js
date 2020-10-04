import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  /* top: 10rem; */
  background-color: #ffffff;
  padding: 1rem;
  width: 80%;
  height: 75%;
  border-radius: 30px;
`;
