import styled from "styled-components";
import { MenuItemsColor, SecondaryColor } from "../../Config";

export const Wrapper = styled.div`
  .ant-layout-sider {
    background-color: white;
    min-width: 289px !important;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow-y: hidden;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: sider;
}
   @keyframes  sider {
   0%{
    transform: translateX(-100%);
    opacity:0;
   }
   100%{
   opacity:1;
   }
  }
  .demo-logo-vertical {
    margin-top: 50px;
    padding: 0 1.25rem;
  }
  .ant-layout {
    background-color: #e0e4e9;
  }

  .ant-layout-header {
    font-family: Poppins, "sans-serif";
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: linear-gradient(45deg, rgb(221, 209, 221), white);
    padding: 0 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    backdrop-filter: blur(12px);
    position: sticky !important;
    top: 0px !important;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: header;
}
   @keyframes  header {
   0%{
    transform: translateY(-25%);
    opacity:0;
   }
   100%{
   opacity:1;
   }
  }

  .ant-space-align-center {
    align-items: baseline;
  }
  .ant-breadcrumb {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  .ant-breadcrumb .anticon {
    font-size: 16px;
  }

  .ant-layout-content {
    min-height: 280px;
   
    border-radius: 8px;
    margin: 24px;
    transition: transform 0.2s ease;
    animation-name: content; 
    animation-duration: 1s;
    animation-fill-mode: both;
}

  @keyframes content {
    0%{
      opacity: 0;
      transform: translateY(25%);
    }
    100%{
    opacity: 1;
    }
   
  }
  }

  .ant-btn-primary {
    transition: transform 0.2s ease;
  }

  .ant-menu-item {
    font-weight: 600;
    border-radius: 0;
  }

  .ant-menu-light .ant-menu-item-selected {
    border-right: 3px solid ${MenuItemsColor};
    color: ${MenuItemsColor};
    border-radius: 0;
  }

  .ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end: 0 !important;
  }

  .back-admin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .backadminbtn {
    background: rgb(205, 107, 91);
    color: white;
    padding: 0.35em 3.3em 0.35em 1.2em;
    font-size: 12px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: rgb(99, 29, 73) 0px 0px 1.6em -0.6em inset;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    cursor: pointer;
    overflow: hidden;
    positions: relative;

    &:hover {
      .back-btn-icon {
        width: 100%;
      }
    }

    .back-btn-icon {
      background-color: #9f4545;
      width: 27px;
      height: 34px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      right: 0;
      transition: all 0.4s ease-in-out;
    }
  }

 .ant-menu-light.ant-menu-root.ant-menu-inline{
 border-inline-end: none;
 font-size:16px;
 }




    @keyframes
    fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .logoutbtn {
    padding: 0.35em 3.3em 0.35em 1.2em;
    font-size: 14px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: rgb(99, 29, 73) 0px 0px 1.6em -0.6em inset;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    cursor: pointer;
    overflow: hidden;
    positions: relative;

    &:hover {
      .logout-btn-icon {
        width: 100%;
      }
    }

    .logout-btn-icon {
      background-color: #9f4545;
      width: 32px;
      height: 42px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      right: 0;
      transition: all 0.4s ease-in-out;
    }
  }

  .ant-space-gap-row-small {
    row-gap: 0px;
}

.ant-menu .ant-menu-item .ant-menu-item-icon{
font-size:16px;
}

 .logo-animation{
      mask: linear-gradient(-60deg, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.333), rgb(0, 0, 0) 70%) right center / 300% 100%;
    background-repeat: no-repeat;
    animation: 2.5s ease 0s infinite normal none running shimmer;
}
  @keyframes shimmer {
 100% {
    mask-position: left center;
}

.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline{
background: ${SecondaryColor};
}

`;
