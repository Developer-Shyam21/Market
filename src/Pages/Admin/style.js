import styled from "styled-components";
import { PrimaryColor, SecondaryColor, thiredColor } from "../../Config";

export const Wrapper = styled.div`
  .User-Section {
    display: flex;
    justify-content: end;
    min-height: 54px;
    align-items: center;
   padding: 10px 20px 10px 20px;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    display: none;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    border-radius: 0;
  }

  .ant-input-group > .ant-input:first-child {
    border-radius: 8px;.ant-select-arrow {
    top: 62%;
    font-size: 9px !important;
  }
  }
  .anticon > .anticon-down > .ant-select-suffix{
 top: 62%;
    font-size: 9px
  }

  
  .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    border-color: rgb(95, 26, 70);
      background: ${thiredColor};
    padding: 19px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color: black;
  }

  .ant-input {
    border-color: rgb(95, 26, 70) !important;
    background-color: rgb(253, 243, 241) !important;
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-table-wrapper {
    padding: 0 30px;
  }

  .ant-divider-horizontal {
    margin: 10px 0 24px 0;
  }

  .action-btn {
    display: flex;
    gap: 12px;
  }

  

.anticon {
    font-size: 14px;
    font-weight: bold;
  }
  .ant-btn {
    padding: 18px 14px;
  }

  .ant-table-wrapper{
  padding: 0 !important;
  }
  .ant-table {
    overflow: hidden;
    padding: 0 20px;
  }






`;


export const ModalAdmin = styled("div")`

.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
  border-color:  ${thiredColor};
   
  padding: 19px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
  color: black;
}
 .ant-input,
  .ant-input-password {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
  .ant-input-outlined {
   border-color:  ${thiredColor};

    padding: 7px 11px;
  }
`;