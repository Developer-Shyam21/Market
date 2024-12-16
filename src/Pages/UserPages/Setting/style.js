import styled from "styled-components";
// import { thiredColor} from "../../../Config"
 
export const Wrapper = styled.div`
.Pofile-left{
background-color:white;
padding:30px 40px;
border-radius:8px;
box-shadow: rgb(112 143 174 / 28%) 0px 8px 24px;
border:1px solid #2152ff21;
}
 
.userName{
display:flex;
flex-direction:column;
gap:5px;
justify-content:center;
align-items:center;
 font-weight:600;
 font-size:16px;
}
 
.Pofile-right{
background-color:white;
padding:10px 30px 30px 30px;
border-radius:8px;
box-shadow: rgb(112 143 174 / 28%) 0px 8px 24px;
border:1px solid #2152ff21;
 
    h3{
        font-size:16px;
        font-weight:600;
    }
}
 
.avtar{
  padding: 10px 20px;
  width: 100%;
    display: flex;
    justify-content: center;
 
}
    .ant-form{
    margin: 50px  0;
    }
 
 .ant-form-item-label{
 text-align: justify;
 }
 
 .userName1{
 font-weight:600;
 font-size:16px;
 }
 
 .ant-avatar-lg.ant-avatar-icon{
  font-size:28px;
  width:70px;
  height:70px;
 }
 
 .ant-form-item-label>label{
 font-weight:500;
 font-size:14px;
 }
 
.ant-input-lg{
font-weight: 700;
}
 
.sub-btn{
display: flex;
justify-content: flex-end;
gap:20px;
}
 
.reser-password{
padding: 20px 0;

 
    .password p{
     font-weight:600;
     font-size:16px;
     margin:5px 0;
     letter-spacing: 0.5px;
    }
    .password1{
     font-weight:600;
     font-size:16px;
     color:grey;
     }
}
`;