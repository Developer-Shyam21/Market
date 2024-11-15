import styled from "styled-components";


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
    background-color: rgb(253, 243, 241) !important;
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }

  .ant-select-selector {
    border-color: rgb(95, 26, 70) !important;
    background-color: rgb(253, 243, 241) !important;
    padding: 7px 11px !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
    border-radius: 8px !important;
    color: black !important;
  }



      .ant-table-wrapper {
    padding: 0 30px;
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
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
`;
