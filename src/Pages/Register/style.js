import styled from "styled-components";
import { SecondaryColor } from "../../Config";

export const Wrapper = styled.div`
  .register-left {
    background: rgb(239, 243, 254);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
  }

  .main-register-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    img {
      margin: 30px 0 10px 0;
    }
  }

  .main-register-body {
    text-align: center;
    margin: 30px;

    h1 {
      color: white;
    }
  }

  .ant-typography {
    color: black !important;
    font-weight: 100 !important;
    letter-spacing: 1px;
    padding: 20px 0 0 0;
  }

  @media (max-width: 768px) {
    .register-section,
    .main-register-logo {
      width: 100%;
      padding: 20px;
    }
    .grafic-img {
      width: 100%;
      height: 100%;
    }
  }

  .flex-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .register-section {
    width: 100%;
    max-width: 500px;
    padding: 10px;
  }

  .register-header {
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

    .sign-link {
      color: #b5b5c3;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .ant-form {
    width: 100%;
  }

  .ant-input,
  .ant-input-password {
    padding: 7px 11px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 8px;
  }
  .ant-input-outlined {
    background-color: rgb(232, 240, 254);
    border-color: rgb(217, 217, 217);
    padding: 7px 11px;
  }

  .ant-checkbox-input {
    background-color: rgb(232, 240, 254) !important;
    border-color: rgb(217, 217, 217) !important;
  }

  .ant-checkbox-wrapper {
    gap: 10px;

    span {
      font-size: 16px;
      color: #5e6278;
      font-weight: 500;
    }
  }

  .ant-btn {
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: ${SecondaryColor};
  }

  .links {
     display: flex;
      justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;

  }
`;
