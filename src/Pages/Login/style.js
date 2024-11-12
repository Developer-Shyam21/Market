import styled from "styled-components";

export const Wrapper = styled.div`
  .flex-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height:90vh;
  }

  .login-section {
    width: 100%;
    max-width: 500px;
    padding: 10px;
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
    }

    .create-link {
      color: #b5b5c3;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .ant-form {
    width: 100%;
  }

  .ant-form-item .ant-form-item-label > label {
    font-weight: 600;
    font-size: 16px;
  }
  .ant-input {
    border-color: rgb(95, 26, 70);
    background-color: rgb(253, 243, 241);
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
  .ant-input-password {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
  .forgot-link {
    text-align: right;
    font-size: 16px;
    font-weight: 600;
  }

  .ant-btn {
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
  }

  .links {
     display: flex;
      justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;

  }

  .login-right {
    background: linear-gradient(45deg, rgb(119, 90, 144), rgb(195, 109, 93));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
  }

  .main-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 165px;

    img {
      margin: 30px 0 10px 0;
    }
  }

  .main-logo-body {
    text-align: center;
    margin: 30px;

    h1 {
      color: white;
    }
  }

  .ant-typography {
    color: white !important;
    font-weight: 100 !important;
    letter-spacing: 1px;
    padding: 20px 0 0 0;
  }

  @media (max-width: 768px) {
    .login-section,
    .main-logo {
      width: 100%;
      padding: 20px;
    }
    .grafic-img {
      width: 100%;
      height: 100%;
    }
      .links {
      padding-bottom:40px;
      }
  }
`;
