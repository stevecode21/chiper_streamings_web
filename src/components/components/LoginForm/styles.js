import styled from "styled-components";

export const ContainerForm = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  /* background-color: blue; */
  background-color: #ffffff;
  padding: 3rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-box-shadow: -5px -1px 53px 1px rgba(102, 102, 102, 0.07);
  -moz-box-shadow: -5px -1px 53px 1px rgba(102, 102, 102, 0.07);
  box-shadow: -5px -1px 53px 1px rgba(102, 102, 102, 0.07);
  border-radius: 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 2rem 0 2rem 0;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
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
    ::-webkit-input-placeholder {
      color: transparent;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: transparent;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: transparent;
    }

    :-ms-input-placeholder {
      color: transparent;
    }
  }
  caret-color: #c4c4c4;
`;
