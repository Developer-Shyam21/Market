import styled from "styled-components";
import { SecondaryColor } from "../../Config";

export const Wrapper = styled.div`
  .User-Section {
    display: flex;
    justify-content: space-between;
    min-height: 54px;
    align-items: center;
    padding: 15px 30px 3px 30px;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    display: none;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    border-radius: 0;
  }

  .ant-input-group >.ant-input:first-child,{
  border-radius: 8px;
  }

  .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector{
   border-color: rgb(95, 26, 70);
    background-color: rgb(253, 243, 241);
     padding: 19px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color:black;
  }

  .ant-input{
  border-color: rgb(95, 26, 70) !important;
    background-color: rgb(253, 243, 241)  !important;
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-table-wrapper{
  padding: 0 30px;
  }

  .ant-divider-horizontal{
  margin: 10px 0 24px 0;
  }

  .action-btn{
  display: flex;
  justify-content: space-evenly;
  }
   .anticon-down{
  font-size: 14px;
  }

  .ant-select-arrow{
  height:22px
  }

  .ant-btn{
padding:18px 14px;
}

 .ant-table {
    border-radius: 10px;
    overflow: hidden;
  }

  .ant-table-thead > tr > th {
    font-weight: 700;
    padding: 16px;
  }

  .ant-table-tbody > tr > td {
    padding: 16px;
    font-size: 15px;
    font-weight:500;
    letter-spacing:0.3px;
  }

`;

export const UserSection = styled("div")`

.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
  border-color: rgb(95, 26, 70);
  background-color: rgb(253, 243, 241);
  padding: 19px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
  color: black;
}
 .ant-input,
  .ant-input-password {
   
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
  .ant-input-outlined {
   border-color: rgb(95, 26, 70);
    background-color: rgb(253, 243, 241);
   
  }
`;
 
