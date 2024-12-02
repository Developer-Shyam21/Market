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

    /* Responsive adjustments */
    @media (max-width: 992px) {
      padding: 20px;
    }
  }

  .main-register-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    img {
      margin: 30px 0 10px 0;
      max-width: 100%; /* Ensures images scale on smaller screens */
      height: auto;
    }
  }

  .main-register-body {
    text-align: center;
    margin: 30px;

    h1 {
      color: white;
      font-size: 32px;
    }
  }

  .ant-typography {
    color: black !important;
    font-weight: 400 !important;
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
      height: auto; /* Maintain aspect ratio */
    }
  }

  /* General flex-section adjustments for centering */
  .flex-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    animation-name: register;
        animation-duration: 1s;
    animation-fill-mode: both;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  @keyframes register {
   0%{
    transform: translateY(25%);
    opacity:0;
   }
   100%{
   opacity:1;
   }
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
      font-weight: 400;
      font-size: 2.25rem ;
     margin:10px 0;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    .sign-link {
      color: #b5b5c3;
      font-size: 17px;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  /* Form input adjustments */
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

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 16px;
      color: #5e6278;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      span {
        font-size: 14px;
      }
    }
  }

  /* Buttons */
  .ant-btn {
    padding: 16px 20px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    background-color: ${SecondaryColor};
    width: 100%; /* Full-width for better responsiveness */
  }

  /* Footer links */
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
    position: relative;
    bottom: -100px;
}

    a {
      font-size: 16px;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  /* Additional adjustments for extra-small screens */
  @media (max-width: 576px) {
    .register-header h1 {
      font-size: 18px;
    }

    .links {
      flex-direction: column;
      gap: 10px;
    }

    .ant-btn {
      font-size: 16px;
      padding: 12px 16px;
    }
  }

  .register-img{
    animation-name: register-img;
        animation-duration: 1s;
    animation-fill-mode: both;
   
  }
    @keyframes  register-img {
   0%{
    transform: translateY(-25%);
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


`;
