import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
.fw-bold {
font-weight: 600 ;
font-family: Poppins, sans-serif !important;
}
.ant-col {
    font-family: Poppins, sans-serif !important;
  }
.ant-form-item
   .ant-form-item-label
   > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none;
    margin-inline-end: 4px;
    color: #ff4d4f;
     font-size: 14px;
    font-family: SimSun, sans-serif;
     line-height: 1;
     content: "*";
  }
  .ant-picker .ant-picker-input > input {
     font-size: 14px;
     font-weight: 500;
    font-family: Poppins, sans-serif !important;
   }
    .ant-input {
    font-size: 14px;
    font-weight: 500;
    font-family: Poppins, sans-serif !important;
  }
  .button{
  text-align: end;
  }

`;
