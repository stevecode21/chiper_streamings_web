import React from "react";
import { Button } from "./styles";

import PropTypes from "prop-types";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {/* {children} */}
      Ingresar
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  //   children: PropTypes.node.isRequired,
};
