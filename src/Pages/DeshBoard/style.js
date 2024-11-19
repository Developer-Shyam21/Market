
import styled from "styled-components";
import { MenuItemsColor, SecondaryColor } from "../../Config";

export const Wrapper = styled.div`
.ant-layout-sider {
    background-color: white;
    min-width: 289px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-y: hidden;
}
.demo-logo-vertical{
   margin-top: 50px;
   padding: 0 1.25rem;
   
}
    .ant-layout{
  background-color: #e0e4e9 ;
  }

.ant-layout-header{
    font-family: Poppins, "sans-serif";
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: linear-gradient(45deg, rgb(221, 209, 221), white);
    padding: 0 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    backdrop-filter: blur(8px);
    position: sticky !important;
    top: 0px !important;
}

  .ant-space-align-center{
  align-items: baseline;
  }
.ant-breadcrumb{
    color: black;
    font-size: 16px;
    font-weight: bold;
    
}
.ant-breadcrumb .anticon{
    font-size: 16px;  
}


.ant-layout-content{
    min-height: 280px;
    background: #fff;
    border-radius: 8px;
    margin: 24px;
    transition: transform 0.2s ease;
}


.ant-btn-primary {
    transition: transform 0.2s ease;
  }


  .ant-menu-item {
    font-weight: 600;
    border-radius:0;
  }

  .ant-menu-light .ant-menu-item-selected{
  border-right: 3px solid ${MenuItemsColor};
  color: ${MenuItemsColor} ;
  background-color: transparent ;
  border-radius:0;
  }
  

  .ant-menu-light.ant-menu-root.ant-menu-vertical{
  border-inline-end:0 !important;
  }
  
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  `;