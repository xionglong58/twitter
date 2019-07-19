import styled from "styled-components";

export const TweetPostWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-50%);
  height: 300px;
  width: 500px;
  border-radius: 10px;
  background-color: #eee;
  border: 1px solid rgb(230, 236, 240);
  .postHeader {
    position: relative;
    border-bottom: 1px solid red;
    overflow: hidden;
    height: 40px;
    .post {
      display: inline-block;
      position: absolute;
      right:0px;
      width: 80px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      border: 1px solid rgb(230, 236, 240);
      text-align: center;
      background-color:red;
    }
    .close {
      float: left;
      line-height: 30px;
      height: 30px;
      width:30px;
      margin-left: 10px;
      text-align: center;
      margin-top: 5px;
      span {
        font-size: 25px;
      }
    }
    .close:hover {
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 15px;
    }
  }
  .input{
        float:left;
        width:400px;
        height:150px;
        border-radius: 15px;
        padding:10px 30px 15px 15px;
        /* margin-left:50px; */
        margin-top:15px;
        resize: none;
        border:none;
    }
  .input:focus{
    outline: none;
    }
  .profile{
    float:left;
    width:40px;
    height:40px;    
    margin:15px 10px;
    border-radius:20px;
    background-color:red;
    }
   .tewwt-types{
        span{
            font-size: 25px;
            padding:0px 15px;
            cursor:pointer;
        }
    margin-left: 45px;
    line-height: 53px;
    color: #1da1f2;
    }
`;
