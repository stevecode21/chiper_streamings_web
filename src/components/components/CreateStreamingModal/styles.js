import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #000; */
  width: 100%;
  height: 100%;
  /* padding: 1rem 0 1rem 0; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  /* background-color: blue; */
  width: 100%;
  /* background-color: #000; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;
export const Input = styled.input`
  width: 40%;
  margin: 2rem 0 2rem 0;
  padding: 1rem;
  border: none;
  border-bottom: 4px solid #e8e8e8;
  /* text-align: center; */
  font-size: 2.5rem;
  ::-webkit-input-placeholder {
    color: #c4c4c4;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: #c4c4c4;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #c4c4c4;
  }

  :-ms-input-placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
  }
`;
