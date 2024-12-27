import React from "react";
import {  Wrapper } from "./style";

export const AddBTN = ({ children, ...rest }) => {
    return <Wrapper {...rest} children={children} />;
  };