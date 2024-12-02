import styled from "styled-components";
import { InputColor } from "../../../../Config";

export const Wrapper = styled.div`
.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector{
   border-color: rgb(95, 26, 70);
    background-color: ${InputColor};
     padding: 19px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color:black;
  }
.ant-picker-outlined{
 border-color: rgb(95, 26, 70);
    background-color:  ${InputColor};
     padding: 9px 10px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
    color:black;
}

 .card {
    border-radius: 12px;
    background: linear-gradient(145deg, #ffffff, #f2f2f2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin:25px 0;
    display:flex;
  justify-content: space-between;
    padding:15px 25px;
  }
.ant-space-gap-row-small{
row-gap:3px;
}
  
.card-body{
 display:flex;
 
  align-items: center;
  gap:15px;
}
 

  .card-title {
   
    margin:0;
  }

  .card-value {
    font-size: 18px;
    font-weight: 600;
    margin:0;
  }
    

  .card-info {
    font-size: 14px;
    color: #888;
    background: rgb(232, 242, 229);
    padding: 6px 10px;
    border-radius: 10px;
}
  }

  .card-percentage {
    font-size: 16px;
    color: #4caf50;
    text-align:end;
    gap: 5px;
  }


  .apexcharts-toolbar{
  display:none !important;
  }
`;
