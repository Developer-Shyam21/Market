import styled from "styled-components";
// import { thiredColor} from "../../../Config"

export const Wrapper = styled.div`
  .userdata-Table {
    background-color: white;
    padding: 20px;
    border-radius: 10px 10px 0 10px;
  }
  .ant-table {
    border-radius: 10px;
    overflow: hidden;
  }

  .ant-table-wrapper .ant-table-thead > tr > th {
    font-weight: 700;
    padding: 16px;
    background-color: rgb(202 202 202 / 45%);
    font-size: 15px;
    
  }

  .ant-table-tbody > tr > td {
    padding: 16px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    background-color: rgb(202 202 202 / 10%);
  }
  

  
  .action-btn {
    display: flex;
    justify-content: space-evenly;
  }
`;
