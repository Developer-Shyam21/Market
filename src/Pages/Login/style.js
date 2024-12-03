import styled from "styled-components";
import { PrimaryColor, SecondaryColor, thiredColor } from "../../Config";
export const Wrapper = styled.div`

  .flex-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
       width: 100%;
    box-sizing: border-box;
    animation-name: login;
        animation-duration: 1s;
    animation-fill-mode: both;
   
    
}

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  
    
  @keyframes login {
   0%{
    transform: translateY(-25%);
    opacity:0;
   }
   100%{
   opacity:1;
   }
  }


  .login-section {
    width: 100%;
    max-width: 500px;
    padding: 10px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .login-header {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 24px;
      margin: 10px 0;

      @media (max-width: 768px) {
        font-size: 20px;
        text-align: center;
      }
    }


    .create-link {
      color: #b5b5c3;
      font-size: 16px;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
      }
    }
  }

  .ant-form {
    width: 100%;
  }
     .ant-form-item{
  margin-bottom: 14px ;
  }

  .ant-form-item .ant-form-item-label > label {
    font-weight: 600;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .ant-input,
  .ant-input-password {
   border-color: rgb(95, 26, 70) !important;
    background: ${thiredColor};
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 6px 10px;
    }
  }

  .forgot-link {
    text-align: right;
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .ant-btn {
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
     background-color: ${SecondaryColor};

    @media (max-width: 768px) {
      padding: 15px;
      font-size: 18px;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
        position: relative;
    bottom: -208px;
}

    a {
      font-size: 16px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 10px;
      padding-bottom: 40px;
    }

     @media (max-width: 480px) {
        font-size: 12px;
      }
  }

  .login-right {
    background: ${PrimaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
    max-width: 100%;

    @media (max-width: 768px) {
      padding: 20px;
    }
       @media (max-width: 480px) {
      padding: 10px;
    }
  }

  .main-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 224px;

    @media (max-width: 768px) {
      gap: 30px;
    }

    img {
      margin: 30px 0 10px 0;
      max-width: 100%;
      height: auto;

      @media (max-width: 768px) {
        max-width: 80%;
        height: auto;
      }
    }
  }

  .main-logo-body {
    text-align: center;
    margin: 30px;

    h1 {
      color: white;
      font-size: 26px;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
  }

   .ant-typography {
    color: white !important;
    font-weight: 400;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
}

 @media (max-width: 768px) {
    .login-section {
      padding: 20px;
      max-width: 100%;
    }

    .login-header h1 {
      font-size: 20px;
    }

    .create-link {
      font-size: 14px;
    }

    .ant-btn {
      font-size: 16px;
    }

    .links {
      gap: 10px;
    }

    .login-right {
      padding: 20px;
    }

    .main-logo {
      gap: 20px;
    }

    .grafic-img {
      width: 100%;
      height: auto;
    }
  }

   @media (max-width: 480px) {
    .login-section {
      padding: 15px;
    }

    .login-header h1 {
      font-size: 18px;
    }

    .create-link {
      font-size: 12px;
    }

    .ant-btn {
      font-size: 14px;
    }

    .links {
      gap: 10px;
      padding-bottom: 20px;
    }

    .login-right {
      padding: 10px;
    }

    .main-logo-body {
      h1 {
        font-size: 20px;
      }
    }

    .ant-typography {
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
    .login-right {
      padding: 30px;
    }

    .main-logo {
      gap: 80px;
    }
  }

  .login-img{
    animation-name: login-img;
        animation-duration: 1s;
    animation-fill-mode: both;
   
  }
    @keyframes  login-img {
   0%{
    transform: translateY(25%);
    opacity:0;
   }
   100%{
   opacity:1;
   }
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
`;
