import styled from "styled-components";
import { Modal } from "antd";
import { thiredColor } from "../../Config";

export const Wrapper = styled.div`
  .User-Section {
    display: flex;
    justify-content: space-between;
    min-height: 54px;
    align-items: center;
    padding: 10px 20px 10px 20px;
  }

  

  .ant-select-selector {
    border-color:${thiredColor} !important;
  
    padding: 7px 11px !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
    border-radius: 8px !important;
    color: black !important;
  }



  .ant-table-wrapper{
  padding: 0 !important;
  }
  .ant-table {
   
    overflow: hidden;
    padding: 0 20px;
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
    background-color:  ${thiredColor};
     padding: 14px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color:black;
  }

  .ant-input-outlined{
  border-color:  ${thiredColor}; !important;
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-select-arrow{
  height:14px
  }

}
`;
