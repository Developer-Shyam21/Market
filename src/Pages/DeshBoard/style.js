import styled from "styled-components";
import {
  MenuItemsColor,
  SecondaryColor,
  PrimaryColor,
  thiredColor,
} from "../../Config";

export const Wrapper = styled.div`
  .ant-layout-sider {
    background-color: transparent;
    overflow-y: hidden;
    animation-duration: 1s;
    animation-fill-mode: both;
    // animation-name: sider;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
   padding: 0 10px;

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
    margin: 30px 0 50px;
    padding: 0 1.25rem;
    gap: 15px;

  }
  .ant-layout {
    background-color: rgb(248, 249, 250);
  }

  .ant-layout-header {
    font-family: Poppins, "sans-serif";
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: transparent;
    padding: 0 20px;
    backdrop-filter: blur(30px);
    position: sticky !important;
    top: 0 !important;
    margin: 0 15px 0 0;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: header;
    border-radius:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
            line-height: 20px;
      
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
    border-radius: 15px;
    margin: 24px;
    transition: transform 0.2s ease;
    animation-name: content; 
    animation-duration: 1s;
    animation-fill-mode: both;
         box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
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
    margin: 13px 0;
  
  }
    .ant-menu-title-content{
    font-size: 14px;
    font-weight: 500;
}
    
  .ant-menu-light .ant-menu-item-selected{
          box-shadow: rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem;
        transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
         margin: 13px 0;
          font-weight: 700;
    font-size: 14px;
         background: ${thiredColor};
  }
  .ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title{
         font-weight: 700;
    font-size: 14px;
    background: ${thiredColor};
}    

  .ant-menu .ant-menu-item .ant-menu-item-icon{
  padding:10px;
  background: ${PrimaryColor};
  border-radius: 10px;
  color:white;
  }
  
  .ant-menu .ant-menu-submenu-title .ant-menu-item-icon{
  padding:10px;
  background: ${PrimaryColor};
  border-radius: 10px;
  color:white;
  }

  .back-admin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .backadminbtn {
    background: ${PrimaryColor};
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
      background: ${PrimaryColor};
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
    position: absolute;
    bottom: 20px;
    left: 26%;

  }

  .logoutbtn {
  background: ${PrimaryColor};
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
      background: ${PrimaryColor};
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



 .logo-animation{
      mask: linear-gradient(-60deg, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.333), rgb(0, 0, 0) 70%) right center / 300% 100%;
    background-repeat: no-repeat;
    animation: 2.5s ease 0s infinite normal none running shimmer;
}
  @keyframes shimmer {
 100% {
    mask-position: left center;
}
}

.profile{
display:flex;
 align-items:center;
 gap:12px;
}

.ant-avatar-lg.ant-avatar-icon{
box-shadow: rgb(33, 82, 255) 0px 0px 10px;
}

.left-header{
display: flex;
justify-content: center;
align-items: center;
gap:30px;
}

  .ant-select-selector {
    width: 100% !important;
  }
     .ant-select-arrow {
    height: 22px;
  }
.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
  border-color: ${thiredColor};
  padding: 19px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 8px;
  color: black;
}


`;
