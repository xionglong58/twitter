import styled from "styled-components";

export const HomepageWrapper = styled.div`
  float: left;
  width: 990px;
  overflow: hidden;
`;
export const HomepageLeft = styled.div`
  float: left;
`;
export const HomepageHeader = styled.div`
  height: 53px;
  width: 523px;
  margin: 0 auto;
  line-height: 53px;
  font-size: 19px;
  font-weight: bold;
  border: 1px solid rgb(230, 236, 240);
  padding: 0 10px;
`;

export const WhatIsHappen = styled.div`
  height: 53px;
  width: 523px;
  margin: 0 auto;
  font-size: 15px;
  color: #657786;
  font-weight: bold;
  border-right: 1px solid #333;
  border: 1px solid rgb(230, 236, 240);
  position: relative;
  cursor: pointer;
  div {
    display: inline-block;
    line-height: 37px;
  }
  .profile {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: blue;
    margin: 8px 0 0 8px;
    height: 37px;
  }
  .tweets {
    width: 65%;
    border-radius: 19.5px;
    background-color: #e6ecf0;
    margin: 8px 0 0 5px;
    padding-left: 10px;
  }
  span {
    float: right;
    font-size: 25px;
    padding-right: 10px;
    line-height: 53px;
    color: #1da1f2;
  }
`;

export const TweetPost = styled.div`
  left: 20%;
  top: 100%;
  position: absolute;
  height: 300px;
  width: 100%;
  border-radius: 5%;
  background-color: #FFF;
  border: 1px solid rgb(230, 236, 240);
  .postHeader {
    width: 100%;
    border-bottom: 1px solid rgb(230, 236, 240);
    overflow: hidden;
    .post {
      display: inline-block;
      float: right;
      width: 80px;
      height: 40px;
      border-radius: 20px;
      border: 1px solid rgb(230, 236, 240);
      text-align: center;
    }
    .close {
      float: left;
      font-size: 20px;
      height: 30px;
      padding-left: 10px;
      margin-top: 5px;
      span {
        line-height: 30px;
        text-align: center;
      }
    }
    .close:hover {
      background-color: rgba(29, 161, 242, 0.1);
      border-radius: 15px;
    }
  }
`;

export const SearchBar = styled.div`
  position: relative;
  float: right;
  height: 53px;
  .SearchTwitter {
    height: 39px;
    width: 318px;
    border-radius: 18px;
    margin-top: 7px;
    padding-left: 40px;
  }
`;
