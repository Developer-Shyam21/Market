import styled from "styled-components";
import { Modal } from "antd";
import { thiredColor } from "../../Config";

export const Wrapper = styled.div`
  .User-Section {
    display: flex;
    justify-content: space-between;
    min-height: 54px;
    align-items: center;
    padding: 15px 30px 3px 30px;
  }

  .ant-input {
    border-color: rgb(95, 26, 70) !important;
      background: ${thiredColor};
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-select-selector {
    border-color: ${thiredColor} !important;
    padding: 7px 11px !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
    border-radius: 8px !important;
    color: black !important;
  }

  .ant-select-single{
  width: 150px !important;
  }

  .action-btn {
    display: flex;
    gap: 20px;
  }
    .ant-table-wrapper {
    padding: 0 30px;
  }

  .ant-table-wrapper{
  padding: 0 !important;
  }
  .ant-table {
    border-radius: 10px;
    overflow: hidden;
     padding: 0 20px;
  }

  .ant-table-wrapper .ant-table-thead > tr > th {
    font-weight: 700;
    padding: 16px;
    background-color: rgb(202 202 202 / 45%);
  }

  .ant-table-tbody > tr > td {
    padding: 16px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    background-color: rgb(202 202 202 / 10%);
  }

`;

export const ModalView = styled("div")`

  .criteria-form {
      background: ${thiredColor};
    padding: 20px 10px 10px;
    border-radius: 8px;
    border: 1px dashed rgb(96, 25, 71);
    height: 300px;
    max-height: 300px;
    overflow-y: auto;
    align-items: start;
    margin-top: 20px;
    
  }

  .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector{
   border-color: ${thiredColor};
     padding: 19px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color:black;
  }

  .ant-input-outlined{
  border-color: ${thiredColor};!important;

    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-select-arrow{
  height:22px
  }


  .ant-row-middle{
  align-items: baseline;
  }

}
`;
