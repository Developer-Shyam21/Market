import styled from "styled-components";

export const Wrapper = styled.div`
  .flex-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 90vh;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
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
      font-weight: 100;
      font-size: 22px;
      letter-spacing: 0.7px;

      @media (max-width: 768px) {
        font-size: 20px;
        text-align: center;
      }
    }

    .create-link {
      color: #b5b5c3;
      font-size: 18px;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
      }
    }
  }

  .ant-form {
    width: 100%;
  }

  .ant-form-item .ant-form-item-label > label {
    font-weight: 500;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .ant-input,
  .ant-input-password {
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
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .ant-btn {
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;

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
  }

  .login-right {
    background: linear-gradient(45deg, rgb(119, 90, 144), rgb(195, 109, 93));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .main-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 165px;

    @media (max-width: 768px) {
      gap: 30px;
    }

    img {
      margin: 30px 0 10px 0;

      @media (max-width: 768px) {
        max-width: 100%;
        height: auto;
      }
    }
  }

  .main-logo-body {
    text-align: center;
    margin: 30px;

    h1 {
      color: white;

      @media (max-width: 768px) {
        font-size: 22px;
      }
    }
  }

  .ant-typography {
    color: white !important;
    font-weight: 100 !important;
    letter-spacing: 1px;
    padding: 20px 0 0 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

 

    @media (max-width: 768px) {
      margin-top: 20px;
       .grafic-img {
    width: 100%;
    height: auto; 
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
`;
